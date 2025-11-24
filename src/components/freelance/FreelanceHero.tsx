'use client'

import { Star, Award, Code, Briefcase } from 'lucide-react'

export default function FreelanceHero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium">Top Freelance Developer</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Développeur Full-Stack Expert
          </h1>

          <p className="text-2xl md:text-3xl mb-4 text-gray-300">
            IA & Blockchain | SaaS & Extensions
          </p>

          {/* Subtitle */}
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Architecte full-stack transformant vos idées en SaaS rentables.
            Expert React/Go/Python, IA générative & blockchain Solana.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-400 mb-1">7+</div>
              <div className="text-sm text-gray-400">Années d'expérience</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">125+</div>
              <div className="text-sm text-gray-400">Projets livrés</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold text-pink-400 mb-1">100%</div>
              <div className="text-sm text-gray-400">Satisfaction client</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400 mb-1">10+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#services"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              Voir mes services
            </a>
            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Code className="w-5 h-5" />
              Discutons de votre projet
            </a>
          </div>

          {/* Rating */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-400">5.0/5 sur 50+ missions</span>
          </div>
        </div>
      </div>
    </section>
  )
}
