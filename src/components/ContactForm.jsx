import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon } from './Header'

const COOLDOWN_MS = 30_000
const COOLDOWN_KEY = 'aeviris-contact-last-submission'
const MAX_MESSAGE_LENGTH = 2000

const inquiryOptions = [
  'General Inquiry',
  'Business Partnership',
  'Research Collaboration',
  'Enterprise',
  'Careers',
  'Media',
  'Other',
]

const emptyValues = {
  name: '',
  email: '',
  company: '',
  inquiry: '',
  message: '',
  botcheck: '',
}

function sanitize(value, multiline = false) {
  const cleaned = String(value || '')
    .replace(/[<>]/g, '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
  return multiline ? cleaned.replace(/[ \t]+\n/g, '\n').trim() : cleaned.replace(/\s+/g, ' ').trim()
}

function validate(values) {
  const errors = {}
  const name = sanitize(values.name)
  const email = sanitize(values.email).toLowerCase()
  const company = sanitize(values.company)
  const message = sanitize(values.message, true)

  if (!name) errors.name = 'Please enter your full name.'
  else if (name.length < 2) errors.name = 'Your name must be at least 2 characters.'
  else if (name.length > 80) errors.name = 'Your name must be 80 characters or fewer.'

  if (!email) errors.email = 'Please enter your work email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) errors.email = 'Enter a valid email address.'

  if (company.length > 100) errors.company = 'Company name must be 100 characters or fewer.'
  if (!inquiryOptions.includes(values.inquiry)) errors.inquiry = 'Please choose an inquiry type.'
  if (!message) errors.message = 'Please tell us how we can help.'
  else if (message.length < 20) errors.message = 'Your message must be at least 20 characters.'
  else if (message.length > MAX_MESSAGE_LENGTH) errors.message = `Please keep your message under ${MAX_MESSAGE_LENGTH} characters.`

  return errors
}

function getRemainingCooldown() {
  try {
    const lastSubmitted = Number(window.localStorage.getItem(COOLDOWN_KEY) || 0)
    return Math.max(0, COOLDOWN_MS - (Date.now() - lastSubmitted))
  } catch {
    return 0
  }
}

function rememberSubmission() {
  try {
    window.localStorage.setItem(COOLDOWN_KEY, String(Date.now()))
  } catch {
    // Storage can be disabled; the in-flight guard still prevents duplicates.
  }
}

function Field({ id, label, error, children }) {
  return (
    <div className={`contact-field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <p id={`${id}-error`} className="field-error" role="alert">{error}</p>}
    </div>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState(emptyValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [hCaptchaReady, setHCaptchaReady] = useState(false)
  const formRef = useRef(null)
  const messageRef = useRef(null)
  const fieldRefs = useRef({})
  const hCaptchaSiteKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  useEffect(() => {
    if (!hCaptchaSiteKey) return undefined
    const existing = document.querySelector('script[src="https://js.hcaptcha.com/1/api.js"]')
    if (existing) {
      setHCaptchaReady(true)
      return undefined
    }
    const script = document.createElement('script')
    script.src = 'https://js.hcaptcha.com/1/api.js'
    script.async = true
    script.defer = true
    script.onload = () => setHCaptchaReady(true)
    document.head.appendChild(script)
    return () => script.remove()
  }, [hCaptchaSiteKey])

  useEffect(() => {
    if (!messageRef.current) return
    messageRef.current.style.height = 'auto'
    messageRef.current.style.height = `${Math.min(messageRef.current.scrollHeight, 260)}px`
  }, [values.message])

  useEffect(() => {
    if (status !== 'success') return undefined
    const timer = window.setTimeout(() => setStatus('idle'), 6500)
    return () => window.clearTimeout(timer)
  }, [status])

  const updateValue = (event) => {
    const { name, value } = event.target
    const nextValue = name === 'message' ? sanitize(value, true) : sanitize(value)
    setValues((current) => ({ ...current, [name]: nextValue }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: '' }))
    if (status === 'error') setStatus('idle')
  }

  const focusFirstError = (nextErrors) => {
    const firstInvalid = Object.keys(nextErrors).find((key) => nextErrors[key])
    if (firstInvalid) window.requestAnimationFrame(() => fieldRefs.current[firstInvalid]?.focus())
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    if (status === 'sending') return

    const form = event.currentTarget
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      focusFirstError(nextErrors)
      return
    }

    if (!accessKey) {
      setStatus('error')
      setStatusMessage('The contact form is not configured yet. Please try again later.')
      return
    }

    const remaining = getRemainingCooldown()
    if (remaining > 0) {
      setStatus('error')
      setStatusMessage(`Please wait ${Math.ceil(remaining / 1000)} seconds before sending another message.`)
      return
    }

    // Bots fill the off-screen honeypot. Silently discard their submission.
    if (values.botcheck) {
      setValues(emptyValues)
      form.reset()
      setStatus('success')
      return
    }

    setStatus('sending')
    setStatusMessage('')

    const formData = new FormData()
    formData.append('access_key', accessKey)
    formData.append('to', 'aeviris.ai@gmail.com')
    formData.append('subject', '[AEVIRIS AI] New Contact Form Submission')
    formData.append('from_name', 'AEVIRIS Website Contact Form')
    formData.append('replyto', sanitize(values.email).toLowerCase())
    formData.append('name', sanitize(values.name))
    formData.append('email', sanitize(values.email).toLowerCase())
    formData.append('company', sanitize(values.company))
    formData.append('inquiry', sanitize(values.inquiry))
    formData.append('message', sanitize(values.message, true))
    formData.append('submission_time', new Date().toISOString())

    const captchaResponse = form.querySelector('[name="h-captcha-response"]')?.value
    if (captchaResponse) formData.append('h-captcha-response', captchaResponse)

    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 15_000)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        signal: controller.signal,
      })
      const data = await response.json()
      if (!response.ok || !data.success) throw new Error(data.message || 'Submission failed')

      rememberSubmission()
      setValues(emptyValues)
      setErrors({})
      form.reset()
      if (window.hcaptcha && hCaptchaReady) window.hcaptcha.reset()
      setStatus('success')
    } catch (error) {
      setStatus('error')
      setStatusMessage(error.name === 'AbortError'
        ? 'The request timed out. Please check your connection and retry.'
        : 'We could not send your message right now. Please retry in a moment.')
    } finally {
      window.clearTimeout(timeout)
    }
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === 'success' ? (
        <motion.div className="contact-status-card success" role="status" aria-live="polite" initial={{ opacity: 0, scale: .96, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
          <span className="status-icon" aria-hidden="true">✓</span>
          <h3>Message Sent Successfully</h3>
          <p>Thank you for contacting AEVIRIS. We&apos;ve received your message and will respond within 24–48 business hours.</p>
          <button type="button" className="status-retry" onClick={() => setStatus('idle')}>Send another message <Icon name="arrow" size={15} /></button>
        </motion.div>
      ) : (
        <motion.form ref={formRef} className="contact-form" onSubmit={onSubmit} noValidate initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="contact-form-grid">
            <Field id="contact-name" label="Full Name *" error={errors.name}>
              <input ref={(node) => { fieldRefs.current.name = node }} id="contact-name" name="name" value={values.name} onChange={updateValue} maxLength={80} autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} placeholder=" " />
            </Field>
            <Field id="contact-email" label="Work Email *" error={errors.email}>
              <input ref={(node) => { fieldRefs.current.email = node }} id="contact-email" name="email" type="email" value={values.email} onChange={updateValue} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} placeholder=" " />
            </Field>
          </div>
          <div className="contact-form-grid">
            <Field id="contact-company" label="Company" error={errors.company}>
              <input ref={(node) => { fieldRefs.current.company = node }} id="contact-company" name="company" value={values.company} onChange={updateValue} maxLength={100} autoComplete="organization" aria-invalid={Boolean(errors.company)} aria-describedby={errors.company ? 'contact-company-error' : undefined} placeholder=" " />
            </Field>
            <Field id="contact-inquiry" label="Inquiry Type *" error={errors.inquiry}>
              <select ref={(node) => { fieldRefs.current.inquiry = node }} id="contact-inquiry" name="inquiry" value={values.inquiry} onChange={updateValue} aria-invalid={Boolean(errors.inquiry)} aria-describedby={errors.inquiry ? 'contact-inquiry-error' : undefined}>
                <option value="">Select an inquiry</option>
                {inquiryOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </Field>
          </div>
          <Field id="contact-message" label="Message *" error={errors.message}>
            <textarea ref={(node) => { fieldRefs.current.message = node; messageRef.current = node }} id="contact-message" name="message" value={values.message} onChange={updateValue} maxLength={MAX_MESSAGE_LENGTH} rows="4" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : 'contact-message-count'} placeholder=" " />
            <span id="contact-message-count" className="character-count">{values.message.length}/{MAX_MESSAGE_LENGTH}</span>
          </Field>
          <div className="contact-honeypot" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="botcheck" tabIndex="-1" autoComplete="off" value={values.botcheck} onChange={updateValue} /></div>
          {hCaptchaSiteKey && <div className="h-captcha" data-sitekey={hCaptchaSiteKey} data-theme="dark" data-size="invisible" aria-label="Spam protection" />}
          <div className="contact-submit-row">
            <button className="pill-button" type="submit" disabled={status === 'sending'} aria-busy={status === 'sending'}>
              {status === 'sending' ? <><span className="loading-spinner" aria-hidden="true" />Sending...</> : <>Send Message <Icon name="arrow" size={17} /></>}
            </button>
            <AnimatePresence>
              {status === 'error' && <motion.div className="form-error" role="alert" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}><span>{statusMessage}</span><button type="button" onClick={() => setStatus('idle')}>Retry</button></motion.div>}
            </AnimatePresence>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
