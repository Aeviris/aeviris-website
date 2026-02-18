import React from 'react'
import { motion } from 'framer-motion'
import Principles from './Principles'
import Moat from './Moat'

const chips = [
  {title:'AI-first mindset', desc:'We design every product with AI at the core.'},
  {title:'Premium UX', desc:'Apple-level polish, developer-grade performance.'},
  {title:'Real-world impact', desc:'Built for real users, real scale.'},
  {title:'Secure & scalable', desc:'Enterprise-grade security & infra.'},
  {title:'Built by builders', desc:'Made by devs, for devs.'}
]

export default function WhyAeviris(){
  return (
    <section className="py-12 cinema-bg relative overflow-hidden">
      <div className="film-grain" />
      <h2 className="text-2xl font-bold">Why Aeviris</h2>

      <motion.div className="mt-6 flex flex-wrap gap-4"
        initial={{opacity:0,y:8}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true, amount:0.2}}
        transition={{duration:0.5}}
      >
        {chips.map(c=> (
          <motion.div key={c.title}
            className="chip glass flex items-center px-4 py-2 rounded-full text-sm text-slate-100 cursor-pointer relative"
            whileHover={{scale:1.04}}
            onHoverStart={() => {}}
          >
            <span className="chip-title font-medium">{c.title}</span>
            <span className="chip-halo" />
            <div className="chip-tooltip" role="tooltip">{c.desc}</div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10">
        <Principles />
      </div>

      <div className="mt-12">
        <Moat />
      </div>
    </section>
  )
}
