import React from 'react'

const phases = [
  {title:'Phase 1', desc:'Learning products (Live)', outcome:'10,000+ learners onboarded'},
  {title:'Phase 2', desc:'AI agents & automation', outcome:'Autonomous workflows for teams'},
  {title:'Phase 3', desc:'Platforms & APIs', outcome:'Developers build on Aeviris'},
  {title:'Phase 4', desc:'Industry AI systems', outcome:'Healthcare, Education, Productivity'}
]

export default function Roadmap(){
  return (
    <section className="py-12" aria-labelledby="roadmap-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="roadmap-heading" className="text-2xl font-bold">Roadmap</h2>

        <div className="mt-6 phase-row">
          {phases.map(p=> (
            <div key={p.title} className="phase-card glass p-6">
              <h4 className="font-semibold text-lg">{p.title}</h4>
              <p className="text-slate-300 text-sm mt-3">{p.desc}</p>
              <div className="mt-4 text-sky-300 text-sm font-medium">{p.outcome}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
