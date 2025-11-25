'use client'

import Link from 'next/link'
import { ExternalLink, Award } from 'lucide-react'

const projects = [
  {
    id: 'skillforge',
    title: 'SkillForge',
    subtitle: 'Plateforme d\'apprentissage SaaS',
    description: 'Marketplace d\'apprentissage nouvelle génération avec système de monétisation pour créateurs. Paiements via Stripe Connect.',
    tech: ['Next.js 14', 'TypeScript', 'Supabase', 'Stripe Connect'],
    achievements: ['Commission automatique 4%', 'IDE Monaco Editor', '15+ tests E2E'],
    budget: 'SaaS complet',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    subtitle: 'Site web personnel',
    description: 'Portfolio développeur full-stack moderne avec design responsive et intégration EmailJS.',
    tech: ['Next.js 14', 'TypeScript', 'TailwindCSS', 'EmailJS'],
    achievements: ['Design moderne', 'Responsive', 'Contact intégré'],
    budget: 'Site vitrine',
  },
  {
    id: 'solana-trading-bot',
    title: 'Solana Trading Bot',
    subtitle: 'Bot Telegram',
    description: 'Bot de trading automatisé sur Solana avec copy-trading, sniping, DCA et gestion temps réel via Telegram.',
    tech: ['Node.js', 'Solana Web3.js', 'Kafka', 'Telegram Bot'],
    achievements: ['Architecture événementielle', 'Trading automatisé', 'Monitoring temps réel'],
    budget: 'Bot de trading',
  },
  {
    id: 'localforge-ai',
    title: 'LocalForge AI',
    subtitle: 'Application Desktop',
    description: 'Application desktop pour générer des datasets d\'entraînement IA. Architecture 100% locale pour la confidentialité.',
    tech: ['React', 'TypeScript', 'Rust', 'Tauri'],
    achievements: ['100% local', 'Cross-platform', 'Workflow 3 étapes'],
    budget: 'App desktop',
  },
  {
    id: 'learning-english',
    title: 'Learning English',
    subtitle: 'Extension Chrome',
    description: 'Extension Chrome pour apprendre l\'anglais avec Netflix, sous-titres interactifs et exercices contextuels.',
    tech: ['JavaScript', 'Chrome API', 'HTML5'],
    achievements: ['Sous-titres interactifs', 'Exercices', 'Netflix integration'],
    budget: 'Extension Chrome',
  },
  {
    id: 'romane-app',
    title: 'Romane App',
    subtitle: 'Application iOS',
    description: 'Application iOS éducative avec flashcards et algorithme de révision espacée intelligent.',
    tech: ['Swift', 'SwiftUI', 'Core Data', 'CloudKit'],
    achievements: ['Révision espacée', 'Multi-média', 'Versions mobile/école'],
    budget: 'App mobile',
  },
]

export default function FreelancePortfolio() {
  return (
    <section className="py-20 bg-light-900 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projets Réalisés
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
            15+ projets livrés - Découvrez mes réalisations les plus marquantes
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/projet/${project.id}`}
              className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-600 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-orange-600/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-900 dark:text-white text-6xl font-bold opacity-20">
                    {project.title[0]}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 dark:text-white">
                  {project.budget}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2 mb-4">
                  {project.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover indicator */}
              <div className="px-6 pb-6">
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Voir le projet</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            Envie de voir tous les projets en détail ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#projects"
              className="btn-primary inline-flex items-center gap-2"
            >
              Voir tous les projets
            </Link>
            <Link
              href="/contact"
              className="btn-outline inline-flex items-center gap-2"
            >
              Démarrer un projet
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
