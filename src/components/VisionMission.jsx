import React from 'react'
import { motion } from 'framer-motion'

export default function VisionMission(){
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div className="vision-card glass p-8 rounded-lg"
          initial={{opacity:0,y:10}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true, amount:0.2}}
          transition={{duration:0.6}}
        >
          <h3 className="text-xl font-bold">Vision</h3>
          <p className="mt-4 text-2xl font-extrabold leading-snug">Lead the next wave of <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-sky-400">human-AI intelligence</span>.</p>
        </motion.div>

        <motion.div className="vision-card glass p-8 rounded-lg"
          initial={{opacity:0,y:10}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true, amount:0.2}}
          transition={{duration:0.6, delay:0.08}}
        >
          <h3 className="text-xl font-bold">Mission</h3>
          <p className="mt-4 text-2xl font-extrabold leading-snug">Build intelligent systems that transform how people <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-sky-400">learn, build, and think</span>.</p>
        </motion.div>
      </div>
    </section>
  )
}
