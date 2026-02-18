import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  {icon: '🤖', title: 'AI Products', desc: 'Consumer-grade apps that use AI to amplify human ability.'},
  {icon: '🧠', title: 'Intelligent Systems', desc: 'Systems that learn and adapt at scale.'},
  {icon: '⚙️', title: 'AI Platforms', desc: 'Platforms and APIs to power developers and teams.'},
  {icon: '🎓', title: 'Learning Experiences', desc: 'Interactive courses and tutors — our first product.'}
]

export default function WhatWeBuild(){
  return (
    <section id="products" className="py-16 cinema-bg relative">
      <div className="film-grain"/>
      <div className="light-streak"/>

      <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title gradient-underline">What We Build</h2>
        <p className="mt-3 subheading text-slate-300">From AI-powered apps to intelligent systems and platforms — we build for scale and impact.</p>

        <div className="mt-8 cards-grid">
          {cards.map(c=> (
            <motion.div key={c.title} whileHover={{y:-6}} className="glass-card neon-edge">
              <div className="flex items-start gap-4">
                <div className="card-icon" aria-hidden>{c.icon}</div>
                <div>
                  <div className="card-title">{c.title}</div>
                  <div className="card-desc mt-2">{c.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
