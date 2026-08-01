import React, { useEffect, useState } from 'react'

const links = [
  ['Home', '#top'],
  ['Products', '/products'],
  ['Research', '#research'],
  ['Company', '/company'],
]
const companyLinks = [['About', '/company/about'], ['Team', '/company#team'], ['Partners', '/company#partners'], ['Careers', '/careers'], ['Contact', '/company#contact'], ['Blog', '/company#blog']]

function Icon({ name, size = 19 }) {
  const paths = {
    github: <><path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22"/><path d="M9 18c-4.51 2-5-2-7-2"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect width="4" height="12" x="2" y="9" rx="1"/><path d="M4 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></>,
    arrow: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

export { Icon }

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(window.location.pathname === '/company' ? 'Company' : 'Home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18)
      if (window.location.pathname === '/company') return
      const candidates = links.filter(([, href]) => href.startsWith('#')).map(([label, href]) => [label, document.querySelector(href)])
      const current = candidates.filter(([, section]) => section && section.getBoundingClientRect().top <= 150).pop()
      setActive(current ? current[0] : 'Home')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-shell">
        <a href="/" className="brand" aria-label="Aeviris home"><span>AEVIRIS</span><i className="brand-glyph" aria-hidden="true">✦</i><sup>™</sup></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => label === 'Company' ? <div className="nav-dropdown-wrap" key={label}><a className={active === label ? 'active' : ''} href={href} aria-current={active === label ? 'page' : undefined}>{label}<span className="dropdown-caret">⌄</span></a><div className="nav-dropdown">{companyLinks.map(([child, childHref]) => <a key={child} href={childHref}>{child}</a>)}</div></div> : <a className={active === label ? 'active' : ''} key={label} href={href} aria-current={active === label ? 'page' : undefined}>{label}</a>)}
        </nav>
        <button className="menu-button" type="button" aria-label="Open navigation menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /> <span /> <span /></button>
      </div>
      {open && <nav className="mobile-drawer" aria-label="Mobile navigation">{links.map(([label, href]) => label === 'Company' ? <div className="mobile-company-links" key={label}><a className={active === label ? 'active' : ''} href={href} onClick={() => setOpen(false)}>{label}</a><div>{companyLinks.map(([child, childHref]) => <a key={child} href={childHref} onClick={() => setOpen(false)}>{child}</a>)}</div></div> : <a className={active === label ? 'active' : ''} key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>}
    </header>
  )
}
