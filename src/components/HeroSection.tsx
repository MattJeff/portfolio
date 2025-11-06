'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

const HeroSection = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fadeIn">
          <h1 className="text-white mb-4">
            Mathis <span className="text-primary">Higuinen</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Développeur iOS & Web • 7 ans d'expérience
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Je crée des applications mobiles intuitives et des extensions web innovantes
            pour transformer vos idées en produits performants.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="btn-primary inline-flex items-center justify-center group cursor-pointer"
            >
              Découvrir mes projets
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <Link
              href="/contact"
              className="btn-outline inline-flex items-center justify-center"
            >
              Me contacter
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
