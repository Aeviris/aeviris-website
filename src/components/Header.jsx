import React from 'react'

export default function Header(){
  return (
    <header className="w-full border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
        <div className="flex items-baseline gap-3">
          <div className="logo text-2xl sm:text-3xl">AEVIRIS<span className="ml-1 text-sm align-super">™</span></div>
          <div className="logo-subtle text-slate-400 hidden sm:block">AI · Products · Platforms</div>
        </div>
        <nav className="ml-auto text-sm text-slate-300 hidden sm:flex gap-6">
          <a href="#products">Products</a>
        </nav>
      </div>
    </header>
  )
}
