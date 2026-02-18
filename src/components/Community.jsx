import React from 'react'

export default function Community(){
  return (
    <section className="py-12" aria-labelledby="community-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="community-heading" className="text-2xl font-bold">Join the Aeviris community</h2>
        <p className="mt-2 text-slate-300">Follow our journey as we build in public.</p>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <form className="flex gap-2 w-full sm:w-auto" onSubmit={(e)=>e.preventDefault()}>
            <input placeholder="Your email" className="px-4 py-2 rounded-l-lg bg-slate-900 border border-slate-800 text-white" />
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-r-lg">Subscribe</button>
          </form>
          <div className="text-sm text-slate-400">Or follow: <a href="#" className="underline">X</a> · <a href="#" className="underline">Discord</a></div>
        </div>
      </div>
    </section>
  )
}
