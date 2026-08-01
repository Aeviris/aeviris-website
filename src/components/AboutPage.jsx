import React from 'react'

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-page-glow" aria-hidden="true" />
      <div className="about-page-inner">
        <div className="about-layout"><div className="about-quote"><blockquote className="full-quote"><span className="quote-mark" aria-hidden="true">“</span><div><h1>Find what&apos;s missing.<br /><em>Build what matters.</em></h1><p className="quote-body">Respect every opportunity. Learn from every experience. Stay patient, but never stop building. The goal isn&apos;t to be remembered—the goal is to create something so meaningful that the world remembers your work.<span className="quote-close" aria-hidden="true">”</span></p></div></blockquote><p className="about-attribution"><strong>Ankit Kashyap</strong><span>Founder &amp; CEO · Aeviris</span></p></div><div className="about-process" aria-label="Aeviris building process">{['Curiosity', 'Research', 'Engineering', 'Products', 'Impact'].map((item, index) => <div className="about-process-step" key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>{index < 4 && <b>↓</b>}</div>)}</div></div>
      </div>
    </main>
  )
}
