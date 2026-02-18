import React from 'react'
import { motion } from 'framer-motion'
import top_image from '../../top_image.png'

export default function Hero(){
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* subtle animated particles/background lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 h-full flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Copy */}
          <div className="text-left">
            <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1}} className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">Building the <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-sky-400">AI Innovation</span> Revolution</motion.h1>
            <motion.p initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.25}} className="mt-4 subheading text-lg text-slate-300">Aeviris is building next-generation AI systems, research tools, and digital intelligence for the future.</motion.p>

            <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.4}} className="mt-6 flex flex-wrap gap-3">
              <a href="#products" className="btn-primary" aria-label="Explore Aeviris">Explore Aeviris</a>
              <a href="#vision" className="inline-flex items-center px-5 py-3 glass border border-slate-700 text-slate-100 rounded-lg hover:bg-white/5 transition">Our Vision</a>
            </motion.div>
          </div>

          {/* Right: Image with glow, float, reflection */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* stronger halo behind the brain */}
              <div className="absolute -inset-12 halo" />
              {/* radial glow for extra pop */}
              <div className="absolute -inset-24 radial-glow" />

              <img
                src={top_image}
                alt="AI brain"
                className="relative w-72 sm:w-96 lg:w-[420px] drop-shadow-2xl rounded-xl float-slow hero-image"
              />

              {/* reflection / glass sheen */}
              <div className="absolute left-0 right-0 top-full mt-4 flex justify-center">
                <div className="w-64 sm:w-80 lg:w-[420px] h-12 bg-white/6 backdrop-blur-sm rounded-t-xl transform scale-y-[-1] opacity-30 blur-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* subtle overlay to add cinematic vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-40" />
    </section>
  )
}
