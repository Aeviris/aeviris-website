import React from 'react'

const labs = [
  'Research on LLMs',
  'AI agents',
  'Human-AI interfaces',
  'Responsible AI & safety'
]

export default function Labs(){
  return (
    <section className="py-12" aria-labelledby="labs-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="labs-heading" className="text-2xl font-bold">Aeviris Labs</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">We don’t just ship products — we research the future of intelligence.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {labs.map(l=> (
            <div key={l} className="glass p-4 rounded-lg">
              <div className="font-semibold">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
