import React from 'react'
import { motion } from 'framer-motion'

const principles = [
  {icon:'⚡', title:'Velocity > Perfection', desc:'Ship fast, iterate with data.'},
  {icon:'🧠', title:'Intelligence over automation', desc:'Smarter systems, not just scripts.'},
  {icon:'🛡️', title:'Privacy by design', desc:'User data safety is a core constraint.'},
  {icon:'🧪', title:'Research-backed innovation', desc:'Ship ideas validated by experiments.'}
]

export default function Principles(){
  return (
    <div>
      <h3 className="section-title gradient-underline">Our Principles</h3>
      <motion.div className="principles-grid mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        initial={{opacity:0,y:10}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true, amount:0.2}}
        transition={{duration:0.5}}
      >
        {principles.map(p=> (
          <motion.div key={p.title} className="principle-card glass p-4 rounded-lg flex items-start gap-3"
            whileHover={{translateY:-6, scale:1.02}}
            transition={{type:'spring', stiffness:200}}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-400 text-white shadow-lg">{p.icon}</div>
            <div>
              <div className="text-white text-lg font-semibold">{p.title}</div>
              <div className="text-slate-300 text-sm mt-1">{p.desc}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
