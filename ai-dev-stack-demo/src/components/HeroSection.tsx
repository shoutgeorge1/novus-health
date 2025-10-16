'use client'

import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToStack = () => {
    document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Rest of your hero section code stays the same */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
          <span className="text-sm text-gray-300">⚡ Powered by AI</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white">
          Build at the{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Speed of Thought
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          Experience the future of development with our AI-powered stack
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          From idea to production in minutes. ChatGPT plans it. Claude codes it. Vercel deploys it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Building Now
          </button>
          <button 
            onClick={scrollToStack}
            className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg border border-white/30 transition-all duration-300 backdrop-blur-sm"
          >
            See the Stack
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              &lt;60min
            </div>
            <div className="text-gray-400">Idea to Production</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-400">AI-Assisted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              ∞
            </div>
            <div className="text-gray-400">Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  )
}
