import React from 'react'
import Hero from './components/Hero'
import WhatWeBuild from './components/WhatWeBuild'
import CurrentProduct from './components/CurrentProduct'
import WhyAeviris from './components/WhyAeviris'
import VisionMission from './components/VisionMission'
import Labs from './components/Labs'
import FounderNote from './components/FounderNote'
import Footer from './components/Footer'
import Header from './components/Header'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section className="max-w-5xl mx-auto py-20 px-6 text-gray-300 backdrop-blur-md bg-white/5 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">What is Aeviris?</h2>
        <p className="mb-6">
        Aeviris is an AI innovation company and AI research startup focused on building
        next-generation artificial intelligence systems, large language models (LLMs),
        research tools, and developer platforms. We design intelligent products for
        education, productivity, and future AI infrastructure.
        </p>


        <h2 className="text-3xl font-bold mb-4">Founder</h2>
        <p>
        Aeviris is founded by a solo builder focused on AI systems, product engineering,
        and next-generation research. The mission is to build foundational AI technology
        from India for the world — spanning LLMs, AI products, and future intelligence platforms.
        </p>

        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <WhatWeBuild />
          <CurrentProduct />
          <WhyAeviris />
          <VisionMission />
          <Labs />
          <FounderNote />
        </div>
      </main>
      <Footer />
    </div>
  )
}
