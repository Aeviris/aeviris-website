import React from 'react'

export default function Footer(){
  return (
    <footer className="py-6 mt-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm">Aeviris © 2026</div>
        <div className="text-sm flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="mailto:hello@aeviris.com">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}
