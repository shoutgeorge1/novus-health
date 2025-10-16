import HeroSection from '../components/HeroSection'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      
      {/* Stack Section */}
      <section id="stack" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Development Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every tool optimized for speed, efficiency, and AI-human collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🧠', title: 'Planning', tech: 'ChatGPT', desc: 'Architecture & debugging' },
              { icon: '💻', title: 'Development', tech: 'VS Code / Cursor / Claude Code', desc: 'AI-powered coding' },
              { icon: '🔁', title: 'Version Control', tech: 'Git + GitHub', desc: 'Collaborative development' },
              { icon: '🧱', title: 'Framework', tech: 'Next.js + Tailwind + Node.js', desc: 'Modern web stack' },
              { icon: '🚀', title: 'Deployment', tech: 'Vercel + Edge Functions', desc: 'Global edge deployment' },
              { icon: '📊', title: 'Analytics', tech: 'Plausible + GoHighLevel', desc: 'Privacy-first insights' },
              { icon: '⚙️', title: 'Automation', tech: 'GitHub Actions + Zapier', desc: 'Workflow automation' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <h4 className="text-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-medium mb-3">{item.tech}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Build the Future?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Join the AI development revolution. Let's create something amazing together.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project ideas, goals, or how we can help..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            AI Dev Stack
          </h3>
          <p className="text-gray-400 mb-4">
            Building the future of development, one AI-powered project at a time.
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 AI Dev Stack. Idea → Production in &lt;60 minutes
          </p>
        </div>
      </footer>
    </main>
  )
}
