import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from './Header'

const jobs = [
  { title: 'AI Engineer', department: 'Research & Engineering', location: 'Remote / India', type: 'Full-time' },
  { title: 'ML Research Engineer', department: 'Applied Research', location: 'Remote / Worldwide', type: 'Full-time' },
  { title: 'Frontend Engineer', department: 'Product Engineering', location: 'Remote / India', type: 'Full-time' },
  { title: 'Product Designer', department: 'Product & Design', location: 'Remote', type: 'Full-time' },
  { title: 'Developer Relations', department: 'Community & Ecosystem', location: 'Remote / Worldwide', type: 'Full-time' },
  { title: 'Research Intern', department: 'AI Research', location: 'Bengaluru / Remote', type: 'Internship' },
]

const initialValues = { name: '', email: '', phone: '', location: '', role: '', education: '', skills: '', linkedin: '', portfolio: '', about: '', resume: null, consent: false }

export default function CareersPage() {
  const selectedFromUrl = new URLSearchParams(window.location.search).get('role') || ''
  const [values, setValues] = useState(() => ({ ...initialValues, role: selectedFromUrl }))
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  const fileLabel = useMemo(() => values.resume?.name || 'Upload your resume (PDF, DOC, DOCX)', [values.resume])

  const update = (event) => {
    const { name, value, type, checked, files } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : type === 'file' ? files?.[0] || null : value }))
    setError('')
  }

  const submit = async (event) => {
    event.preventDefault()
    if (!accessKey) return setError('The application form is not configured yet. Please try again later.')
    if (!values.name.trim() || !values.email.trim() || !values.phone.trim() || !values.role || !values.about.trim() || !values.resume || !values.consent) return setError('Please complete every required field and attach your resume.')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) return setError('Please enter a valid email address.')
    if (values.about.trim().length < 80) return setError('Tell us a little more about yourself (at least 80 characters).')
    if (values.resume.size > 5 * 1024 * 1024) return setError('Your resume must be smaller than 5 MB.')
    if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(values.resume.type)) return setError('Please upload a PDF, DOC, or DOCX resume.')

    setStatus('sending')
    const formData = new FormData()
    formData.append('access_key', accessKey)
    formData.append('to', 'aeviris.ai@gmail.com')
    formData.append('subject', '[AEVIRIS] New Careers Application')
    formData.append('from_name', 'AEVIRIS Careers')
    formData.append('replyto', values.email.trim())
    Object.entries(values).forEach(([key, value]) => {
      if (key !== 'consent' && key !== 'resume') formData.append(key, typeof value === 'string' ? value.trim() : value || '')
    })
    formData.append('resume', values.resume)
    formData.append('submission_time', new Date().toISOString())

    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      const data = await response.json()
      if (!response.ok || !data.success) throw new Error()
      setStatus('success')
      setValues(initialValues)
    } catch {
      setStatus('error')
      setError('We could not submit your application right now. Please retry in a moment.')
    }
  }

  if (status === 'success') return <main className="careers-page"><div className="careers-page-glow" /><motion.section className="career-success" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}><span className="career-success-icon">✓</span><p className="eyebrow">Application received</p><h1>Thank you for<br /><em>building with us.</em></h1><p>We&apos;ve received your application and resume. Our team will review your profile and reach out if there is a strong match.</p><a className="text-button" href="/">Return home <Icon name="arrow" size={17} /></a></motion.section></main>

  if (!values.role) return <main className="careers-page"><div className="careers-page-glow" /><div className="jobs-page-inner"><motion.section className="jobs-page-intro" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}><p className="eyebrow">Careers at AEVIRIS</p><h1>Build what comes<br /><em>next.</em></h1><p>We&apos;re looking for curious builders who care about the details, ask better questions, and want their work to matter in the real world.</p></motion.section><motion.section className="open-roles" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}><div className="open-roles-header"><div><p className="eyebrow">Open opportunities</p><h2>Find your place here.</h2></div><span>{jobs.length} positions</span></div><div className="jobs-page-list">{jobs.map((job, index) => <article className="jobs-page-card" key={job.title}><span className="job-index">0{index + 1}</span><div><h3>{job.title}</h3><p>{job.department}</p><small>{job.location} <i /> {job.type}</small></div><a className="job-apply" href={`/careers?role=${encodeURIComponent(job.title)}`}>Apply <Icon name="arrow" size={16} /></a></article>)}</div><div className="open-application"><div><strong>Don&apos;t see the right role?</strong><span>Send us your story anyway. We&apos;re always open to exceptional people.</span></div><a href="/careers?role=Open%20Application" className="text-button">Open application <Icon name="arrow" size={16} /></a></div></motion.section></div></main>

  return <main className="careers-page"><div className="careers-page-glow" /><div className="careers-page-inner"><motion.div className="careers-intro" initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}><a className="career-back" href="/careers">← All open roles</a><p className="eyebrow">Apply to AEVIRIS</p><h1>Bring your<br /><em>perspective.</em></h1><p>There is no perfect background. Tell us what you&apos;ve learned, what you&apos;re building, and the problems you want to solve next.</p><div className="career-promise"><span>01</span><div><strong>Show us your craft.</strong><small>Share your work, your thinking, and the details that make you different.</small></div></div><div className="career-promise"><span>02</span><div><strong>Build for real impact.</strong><small>We value curiosity, ownership, and meaningful outcomes over a perfectly linear resume.</small></div></div></motion.div><motion.form className="career-form" onSubmit={submit} noValidate initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}><div className="career-form-header"><p className="eyebrow">Candidate application</p><h2>{values.role}</h2><p>Required fields are marked with an asterisk.</p></div><div className="career-form-grid"><label><span>Full name *</span><input name="name" value={values.name} onChange={update} placeholder="Your full name" /></label><label><span>Email address *</span><input name="email" type="email" value={values.email} onChange={update} placeholder="you@example.com" /></label><label><span>Phone number *</span><input name="phone" type="tel" value={values.phone} onChange={update} placeholder="+91 00000 00000" /></label><label><span>Current location</span><input name="location" value={values.location} onChange={update} placeholder="City, Country" /></label><label><span>Role</span><select name="role" value={values.role} onChange={update}><option value="">Choose a role</option>{jobs.map((job) => <option key={job.title}>{job.title}</option>)}<option>Open Application</option></select></label><label><span>Education</span><input name="education" value={values.education} onChange={update} placeholder="Degree, institution, or equivalent experience" /></label><label><span>Key skills</span><input name="skills" value={values.skills} onChange={update} placeholder="Python, React, ML, product design..." /></label></div><div className="career-form-links"><label><span>LinkedIn profile</span><input name="linkedin" type="url" value={values.linkedin} onChange={update} placeholder="https://linkedin.com/in/you" /></label><label><span>Portfolio / GitHub</span><input name="portfolio" type="url" value={values.portfolio} onChange={update} placeholder="https://" /></label></div><label className="career-textarea"><span>Tell us about yourself and what you want to build at AEVIRIS *</span><textarea name="about" value={values.about} onChange={update} maxLength="1500" rows="6" placeholder="Your story, your craft, and the problems you want to solve..." /><small>{values.about.length}/1500</small></label><label className="resume-upload"><span>Resume / CV *</span><input name="resume" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={update} /><strong>{fileLabel}</strong><small>Maximum file size: 5 MB</small></label><label className="career-consent"><input name="consent" type="checkbox" checked={values.consent} onChange={update} /><span>I confirm that the information provided is accurate and I consent to AEVIRIS reviewing my application.</span></label>{error && <p className="career-form-error" role="alert">{error}</p>}<button className="pill-button career-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Submitting application...' : 'Submit application'} {status !== 'sending' && <Icon name="arrow" size={17} />}</button></motion.form></div></main>
}
