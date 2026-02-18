import React from 'react'

export default function CTA(){
  return (
    <section className="py-12 text-center">
      <div className="glass inline-block p-8 rounded-2xl">
        <h3 className="text-xl font-bold">Join the AI revolution with Aeviris.</h3>
        <div className="mt-6 flex flex-col items-center gap-2">
          <button className="px-6 py-3 btn-primary-lg" aria-disabled="true">Download App</button>
          <div className="coming-soon-small">Coming soon</div>
        </div>
      </div>
    </section>
  )
}
