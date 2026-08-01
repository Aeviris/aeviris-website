import React from 'react'
import { motion } from 'framer-motion'

const companyNav = [
  ['about', 'About'],
  ['team', 'Team'],
  ['partners', 'Partners'],
  ['careers', 'Careers'],
  ['contact', 'Contact'],
  ['blog', 'Blog'],
]

const focusAreas = ['Artificial Intelligence', 'Agentic AI', 'Machine Learning', 'Computer Vision', 'Edge AI', 'AI Research']
const partnerTypes = ['Research institutions', 'Technology companies', 'Universities', 'Startups', 'Enterprise teams', 'Open-source communities']
const roles = ['AI Engineers', 'Machine Learning Engineers', 'Software Engineers', 'AI Researchers', 'Product Designers', 'Developer Relations']

function Arrow() {
  return <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
}

function SectionLabel({ children }) {
  return <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">{children}</p>
}

export default function CompanyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-neutral-950 text-slate-100">
      <section className="relative border-b border-white/10 px-6 pb-20 pt-14 sm:pb-28 sm:pt-20 lg:px-8">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-violet-600/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <a href="/" className="mb-14 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">← Back to Aeviris</a>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
              <SectionLabel>Company / Aeviris AI</SectionLabel>
              <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
                Building AI that <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">truly matters.</span>
              </h1>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .12 }} className="max-w-lg text-lg leading-8 text-slate-300">
              Aeviris AI is an artificial intelligence research and product company building practical, accessible, and trustworthy technology for the people shaping tomorrow.
            </motion.p>
          </div>
          <nav className="mt-16 flex gap-5 overflow-x-auto border-t border-white/10 pt-5 text-sm text-slate-400" aria-label="Company sections">
            {companyNav.map(([id, label]) => <a key={id} href={`#${id}`} className="shrink-0 transition hover:text-cyan-300">{label}</a>)}
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <section id="about" className="scroll-mt-10 border-b border-white/10 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div><SectionLabel>About Aeviris</SectionLabel><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">The long-term<br /><span className="text-slate-500">intelligence company.</span></h2></div>
            <div className="max-w-3xl space-y-6 text-lg leading-8 text-slate-300">
              <p>We combine deep research with careful product engineering to transform complex AI into experiences that feel simple, useful, and human.</p>
              <p>From large language models and computer vision to edge AI and autonomous agents, we build technology for education, productivity, healthcare, business, and everyday life.</p>
              <p className="font-semibold text-white">We do not chase trends. We build technology that lasts.</p>
              <div className="grid gap-4 pt-6 sm:grid-cols-3">
                {['Research-led', 'Human-first', 'Built to last'].map((item) => <div key={item} className="border-l border-cyan-400/50 pl-4 text-sm font-semibold text-slate-200">{item}</div>)}
              </div>
            </div>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {[['01', 'Our Mission', 'Make advanced AI accessible and useful to everyone.'], ['02', 'Our Vision', 'Build one of the world’s most trusted AI companies.'], ['03', 'Our Origin', 'India-born ambition with a global point of view.']].map(([number, title, text]) => <div key={number} className="bg-neutral-950 p-7"><span className="text-sm text-cyan-300">{number}</span><h3 className="mt-10 text-xl font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></div>)}
          </div>
        </section>

        <section id="team" className="scroll-mt-10 border-b border-white/10 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div><SectionLabel>Team</SectionLabel><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Small team.<br /><span className="text-slate-500">Big vision.</span></h2></div>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">Aeviris AI is driven by curious builders, researchers, engineers, designers, and innovators who enjoy solving difficult problems.</p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-cyan-500/[0.04] p-7 sm:p-9"><p className="text-sm uppercase tracking-[0.2em] text-slate-400">Founder & CEO</p><h3 className="mt-3 text-3xl font-bold">Ankit Kashyap</h3><p className="mt-3 max-w-xl leading-7 text-slate-300">Building AI products where research, engineering, and real-world impact meet.</p><div className="mt-6 flex flex-wrap gap-2">{focusAreas.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">{item}</span>)}</div></div>
            </div>
          </div>
        </section>

        <section id="partners" className="scroll-mt-10 border-b border-white/10 py-20 sm:py-28">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><SectionLabel>Partners</SectionLabel><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Building the future<br /><span className="text-slate-500">together.</span></h2></div><p className="max-w-md leading-7 text-slate-400">Innovation compounds when ambitious people and organisations work together.</p></div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{partnerTypes.map((item, index) => <div key={item} className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-5 text-slate-300 transition hover:border-cyan-300/40 hover:bg-white/[0.06]"><span>{item}</span><span className="text-cyan-300 opacity-60 transition group-hover:opacity-100">0{index + 1}</span></div>)}</div>
          <a href="#contact" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">Explore a partnership <Arrow /></a>
        </section>

        <section id="careers" className="scroll-mt-10 border-b border-white/10 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start"><div><SectionLabel>Careers</SectionLabel><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Come build what’s<br /><span className="text-slate-500">next.</span></h2><p className="mt-6 max-w-lg leading-7 text-slate-400">Work on ambitious AI products, learn through research-driven development, and own meaningful problems from day one.</p><a href="#contact" className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 font-semibold text-white">Start a conversation <Arrow /></a></div><div className="grid gap-3 sm:grid-cols-2">{roles.map((role) => <div key={role} className="rounded-xl border border-white/10 p-5 text-slate-300 transition hover:border-violet-400/50 hover:text-white">{role}</div>)}</div></div>
        </section>

        <section id="contact" className="scroll-mt-10 border-b border-white/10 py-20 sm:py-28">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/20 via-white/[0.04] to-cyan-500/10 p-8 sm:p-12 lg:p-16"><SectionLabel>Contact</SectionLabel><div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Let’s build something<br /><span className="text-cyan-300">meaningful.</span></h2><p className="mt-5 max-w-xl leading-7 text-slate-300">Partnerships, enterprise solutions, research collaborations, careers, or simply a great idea—we’d love to hear from you.</p></div><a href="mailto:hello@aeviris.ai" className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-cyan-300">hello@aeviris.ai <Arrow /></a></div></div>
        </section>

        <section id="blog" className="scroll-mt-10 py-20 sm:py-28"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><SectionLabel>Blog / Insights</SectionLabel><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Ideas for the<br /><span className="text-slate-500">intelligence age.</span></h2></div><p className="max-w-md leading-7 text-slate-400">Research notes, engineering stories, product thinking, and lessons from the journey.</p></div><div className="mt-12 grid gap-4 md:grid-cols-3">{[['Research', 'What we are learning at the frontier of AI'], ['Engineering', 'Behind the systems we are building'], ['Perspective', 'Thoughts on technology and people']].map(([tag, title]) => <article key={tag} className="glass-card neon-edge group p-6"><p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{tag}</p><h3 className="mt-12 text-xl font-bold leading-7 text-white">{title}</h3><a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm text-slate-400 transition group-hover:text-white">Coming soon <Arrow /></a></article>)}</div></section>
      </div>
    </main>
  )
}
