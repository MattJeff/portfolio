'use client'

import { ExternalLink, Github, Award } from 'lucide-react'

const projects = [
  {
    title: 'HFactory',
    subtitle: 'Plateforme SaaS Autonome',
    description: 'Système multi-agents IA avec Event Sourcing/CQRS, 7 agents spécialisés, infrastructure Kubernetes production-ready.',
    tech: ['Go', 'React', 'PostgreSQL', 'Kubernetes', 'NATS', 'GPT-4'],
    achievements: ['Architecture Event Sourcing', '7 agents IA', 'Infrastructure K8s'],
    budget: '6 mois de développement',
    image: '/projects/hfactory.jpg',
    badge: 'Vision $1B'
  },
  {
    title: 'COBRA2',
    subtitle: 'Bot de Trading Solana',
    description: 'Bot de trading production 24/7 avec integration Jito MEV, multi-wallet management, monitoring Telegram temps réel.',
    tech: ['Node.js', 'TypeScript', 'Solana', 'Jupiter', 'Jito', 'MongoDB'],
    achievements: ['MEV optimization', 'Multi-wallet', 'Monitoring temps réel'],
    budget: '4 mois de développement',
    image: '/projects/cobra2.jpg',
    badge: 'Production'
  },
  {
    title: 'MyYtsubtile',
    subtitle: 'Extension Chrome YouTube',
    description: 'Extension avec transcription automatique Whisper AI, stylisation sous-titres personnalisables, 500+ installations.',
    tech: ['React', 'TypeScript', 'FastAPI', 'Whisper', 'yt-dlp', 'FFmpeg'],
    achievements: ['Transcription IA', '500+ utilisateurs', 'Précision 95%+'],
    budget: '3 mois de développement',
    image: '/projects/ytsubtile.jpg'
  },
  {
    title: 'Romane App',
    subtitle: 'Application Sociale Mobile',
    description: 'App iOS/Android complète avec chat temps réel, video calls WebRTC, auth multi-provider, 1000+ beta testers.',
    tech: ['React Native', 'Firebase', 'WebRTC', 'Node.js'],
    achievements: ['1000+ users', 'Chat temps réel', 'Video calls'],
    budget: '5 mois de développement',
    image: '/projects/romane.jpg'
  },
  {
    title: 'EcoRide',
    subtitle: 'Plateforme Covoiturage',
    description: 'Plateforme complète avec système de crédits, paiements, recherche trajets avancée, dashboards admin/employé.',
    tech: ['PHP 8.4', 'MySQL', 'MongoDB', 'Argon2id'],
    achievements: ['Architecture hybride SQL/NoSQL', 'Tests 80%', 'Note 18/20'],
    budget: '3 mois de développement',
    image: '/projects/ecoride.jpg'
  },
  {
    title: 'HyperCubeX',
    subtitle: 'Framework IA Recherche',
    description: 'Framework PyTorch pour Abstract Reasoning Corpus avec GPU acceleration, REINFORCE learning, tests académiques.',
    tech: ['Python', 'PyTorch', 'CUDA', 'pytest'],
    achievements: ['Accuracy 40%+', 'GPU acceleration', 'CI/CD'],
    budget: '4 mois de recherche',
    image: '/projects/hypercubex.jpg',
    badge: 'R&D'
  },
]

export default function FreelancePortfolio() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projets Phares
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            125+ projets livrés - Voici mes réalisations les plus marquantes
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 group"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    {project.title[0]}
                  </div>
                </div>
                {project.badge && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                    {project.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2 mb-4">
                  {project.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Budget */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    {project.budget}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Envie de voir plus de projets ou de discuter du vôtre ?
          </p>
          <a
            href="/projet"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 mr-4"
          >
            Voir tous les projets
          </a>
          <a
            href="#contact"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300"
          >
            Démarrer un projet
          </a>
        </div>
      </div>
    </section>
  )
}
