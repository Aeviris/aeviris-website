import React from 'react'
import { motion } from 'framer-motion'

const principles = [
  {
    number: '01',
    title: 'Research with purpose',
    description: 'We turn deep AI research into practical systems that help people learn, create, and think better.',
  },
  {
    number: '02',
    title: 'Build for real life',
    description: 'Every product starts with a human problem and ends with an experience that feels simple, useful, and thoughtful.',
  },
  {
    number: '03',
    title: 'Think beyond today',
    description: 'We are building the foundations for a more capable, accessible, and responsible intelligence layer.',
  },
]

export default function Company() {
  return (
    <section id="company" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }}>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">The company behind the work</p>
            <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Intelligence should move humanity <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">forward.</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55, delay: .1 }} className="max-w-xl text-lg leading-8 text-slate-300">
            Aeviris is an AI innovation company and research startup from India, building the systems, products, and platforms that will shape how people work with intelligence.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {principles.map((principle, index) => (
            <motion.article key={principle.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45, delay: index * .1 }} className="group glass-card neon-edge min-h-64 p-7">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-sm font-semibold text-cyan-300">{principle.number}</span>
                <span className="h-px w-16 bg-gradient-to-r from-violet-400 to-cyan-300 opacity-40 transition-all group-hover:w-24 group-hover:opacity-100" />
              </div>
              <h3 className="text-xl font-bold text-white">{principle.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{principle.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:grid-cols-3 sm:p-8">
          <div className="sm:border-r sm:border-white/10 sm:pr-8">
            <p className="text-3xl font-extrabold text-white">India → World</p>
            <p className="mt-2 text-sm text-slate-400">Building foundational AI for everyone.</p>
          </div>
          <div className="sm:border-r sm:border-white/10 sm:px-8">
            <p className="text-3xl font-extrabold text-white">Human-first</p>
            <p className="mt-2 text-sm text-slate-400">Technology designed around human potential.</p>
          </div>
          <div className="sm:pl-8">
            <p className="text-3xl font-extrabold text-white">Long-term</p>
            <p className="mt-2 text-sm text-slate-400">A patient pursuit of meaningful progress.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
