import React, { useState } from 'react'
import { motion } from 'framer-motion'
import coursesImg from '../../home_page_courses.jpg'

export default function CurrentProduct(){
  const [show, setShow] = useState(false)
  return (
    <section className="py-16">
      <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="product-section">
          <div>
            <h2 className="section-title">Aeviris: Master <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-sky-400">AI, ML</span></h2>
            <p className="mt-2 text-slate-300">AI Tutor · Courses + Practice · Pro subscription</p>

            <ul className="glow-list">
              <li>Personalized AI tutor for hands-on learning</li>
              <li>Bite-sized courses and interactive practice</li>
              <li>Pro subscription for advanced projects and labs</li>
            </ul>

            <div className="mt-6 preview-container">
              <a href="#download" className="btn-primary-lg">Get the App</a>
              <div className="mt-2 text-sm text-slate-400">Available soon · In development</div>
            </div>
          </div>

          <div className="flex justify-center relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <div className="app-frame glass flex items-center justify-center">
              <button aria-label="Preview courses" className="image-preview-btn pill" onFocus={() => setShow(true)} onBlur={() => setShow(false)}>Hover to preview</button>
            </div>

            <div className={`product-image-wrapper ${show ? 'visible' : ''}`}>
              <div className="product-image-halo" />
              <img src={coursesImg} alt="Courses preview" className="product-full-image float-slow" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

 
