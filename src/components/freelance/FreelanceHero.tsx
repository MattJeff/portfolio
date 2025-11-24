'use client'

import { Star, Award, Code, Briefcase } from 'lucide-react'

export default function FreelanceHero() {
  return (
    <section className="relative bg-dark-900 text-white py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Développeur Freelance Expert</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Développeur <span className="text-primary">Full-Stack Expert</span>
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
            <div className="bg-dark-800 border border-dark-600 rounded-xl p-4 hover:border-primary transition-all">
              <div className="text-3xl font-bold text-primary mb-1">7+</div>
              <div className="text-sm text-gray-400">Années d'expérience</div>
            </div>
            <div className="bg-dark-800 border border-dark-600 rounded-xl p-4 hover:border-primary transition-all">
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-gray-400">Projets livrés</div>
            </div>
            <div className="bg-dark-800 border border-dark-600 rounded-xl p-4 hover:border-primary transition-all">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-gray-400">Satisfaction client</div>
            </div>
            <div className="bg-dark-800 border border-dark-600 rounded-xl p-4 hover:border-primary transition-all">
              <div className="text-3xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#services"
              className="btn-primary flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              Voir mes services
            </a>
            <a
              href="/contact"
              className="btn-outline flex items-center gap-2"
            >
              <Code className="w-5 h-5" />
              Discutons de votre projet
            </a>
          </div>

          {/* Rating */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-gray-400">Qualité garantie</span>
          </div>
        </div>
      </div>
    </section>
  )
}
