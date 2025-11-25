'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding pt-20"
      aria-labelledby="hero-title"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fadeIn">
          <h1 id="hero-title" className="dark:text-white text-gray-900 mb-4">
            Mathis <span className="text-primary">Higuinen</span>
          </h1>
          <p className="text-2xl md:text-3xl dark:text-gray-300 text-gray-700 mb-6" role="doc-subtitle">
            Développeur Full-Stack iOS & Web | 7+ ans d'expérience | Expert React, Swift, IA
          </p>
          <p className="text-lg dark:text-gray-400 text-gray-500 mb-8 max-w-2xl mx-auto">
            Je crée des applications mobiles intuitives, des plateformes SaaS performantes et des solutions IA innovantes
            pour transformer vos idées en produits à succès.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="btn-primary inline-flex items-center justify-center group cursor-pointer"
              aria-label="Voir mes projets de développement"
            >
              Découvrir mes projets
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} aria-hidden="true" />
            </a>
            <Link
              href="/contact"
              className="btn-outline inline-flex items-center justify-center"
              aria-label="Me contacter pour un projet"
            >
              Me contacter
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
