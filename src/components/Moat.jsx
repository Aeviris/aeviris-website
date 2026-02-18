import React from 'react'
import { motion } from 'framer-motion'

const moat = [
  {icon:'🧠', title:'Deep AI R&D', desc:'Advanced models and research-driven productization.'},
  {icon:'🛠️', title:'Product-first engineering', desc:'Engineered for product velocity and reliability.'},
  {icon:'🌍', title:'Built for global scale', desc:'Multi-region, performant, and localized.'}
]

export default function Moat(){
  return (
    <div>
      <h3 className="section-title gradient-underline">What Makes Us Different</h3>
      <motion.div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{opacity:0,y:10}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true, amount:0.2}}
        transition={{duration:0.6}}
      >
        {moat.map(m=> (
          <motion.div key={m.title} className="moat-card glass p-6 rounded-lg"
            whileHover={{scale:1.03}}
            transition={{duration:0.18}}
          >
            <div className="text-3xl">{m.icon}</div>
            <h4 className="font-semibold mt-3">{m.title}</h4>
            <p className="mt-2 text-slate-300">{m.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
