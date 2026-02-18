import React from 'react'

export default function FounderNote(){
  return (
    <section className="py-12" aria-labelledby="founder-note">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="founder-card glass p-6 rounded-lg">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-700 to-sky-500 flex-shrink-0 flex items-center justify-center text-2xl text-white">A</div>
            <div>
              <h3 id="founder-note" className="text-lg font-bold">Founder’s Note</h3>
              <p className="mt-3 text-slate-200 max-w-2xl">Aeviris started with one mission: to build AI that truly helps people learn, create, and think better. This is just the beginning — the real work is building systems that matter.</p>
              <div className="mt-4 text-sm font-semibold text-slate-200">— Ankit Kashyap, Founder & Builder at Aeviris</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
