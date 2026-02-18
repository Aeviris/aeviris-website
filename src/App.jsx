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
