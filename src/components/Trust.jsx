import React from 'react'

export default function Trust(){
  return (
    <section className="py-12" aria-labelledby="trust-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="trust-heading" className="text-2xl font-bold">Trusted by builders <span className="text-sm text-slate-400">(Coming soon)</span></h2>
        <p className="mt-2 text-slate-300">Early adopters joining soon — sign up to be the first.</p>
        <div className="mt-6 flex justify-center">
          <button className="btn-primary-lg">Join Beta</button>
        </div>
      </div>
    </section>
  )
}
