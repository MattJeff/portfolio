import React from 'react'
import Link from 'next/link'
import { ExternalLink, Github, Calendar, Chrome, Smartphone, Cpu, Bot, Database } from 'lucide-react'

const ProjectsSection = () => {
  const projects = [
    {
      id: 'solana-trading-bot',
      title: 'Solana Trading Bot',
      subtitle: 'Bot Telegram',
      year: '2025',
      description: 'Bot de trading automatisé sur la blockchain Solana avec copy-trading, sniping de tokens, DCA (Dollar Cost Averaging), et gestion de positions en temps réel via Telegram. Architecture événementielle avec Kafka pour le traitement distribué des ordres.',
      image: '/images/solana-trading-bot.jpg',
      icon: <Bot className="w-6 h-6" />,
      technologies: ['Node.js', 'Solana Web3.js', 'Kafka', 'Telegram Bot API', 'Docker', 'gRPC', 'Canvas', 'Protobuf'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'localforge-ai',
      title: 'LocalForge AI',
      subtitle: 'Application Desktop Cross-Platform',
      year: '2025',
      description: 'Application desktop moderne permettant de générer des datasets d\'entraînement de haute qualité pour le fine-tuning de modèles d\'IA. Architecture 100% locale garantissant la confidentialité des données avec workflow en 3 étapes.',
      image: '/images/localforge-ai.jpg',
      icon: <Cpu className="w-6 h-6" />,
      technologies: ['React', 'TypeScript', 'Rust', 'Tauri', 'Tailwind', 'AI/LLM'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'learning-english',
      title: 'Learning English',
      subtitle: 'Extension Chrome',
      year: '2025',
      description: 'Extension Chrome innovante pour apprendre l\'anglais en regardant Netflix avec des sous-titres interactifs et des exercices contextuels.',
      image: '/images/learning-english.jpg',
      icon: <Chrome className="w-6 h-6" />,
      technologies: ['JavaScript', 'Chrome API', 'HTML5', 'CSS3'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'romane-app',
      title: 'Romane App',
      subtitle: 'Application iOS Éducative',
      year: '2022',
      description: 'Application éducative iOS basée sur les flashcards avec algorithme de révision espacée intelligent. Disponible en deux versions : mobile indépendante pour étudiants et intégrée aux établissements scolaires. Cartes personnalisables avec texte, images, vidéos et audio.',
      image: '/images/romane-app.jpg',
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ['Swift', 'SwiftUI', 'Core Data', 'AVFoundation', 'CloudKit'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'squizer-api',
      title: 'Squizer API',
      subtitle: 'API Backend de Chat Vidéo Social',
      year: '2025',
      description: 'Plateforme de chat vidéo en temps réel avec matching géolocalisé et WebRTC. Architecture REST Django pour mobile/web avec système d\'amis et appels directs.',
      image: '/images/squizer-api.jpg',
      icon: <Database className="w-6 h-6" />,
      technologies: ['Django', 'PostgreSQL', 'Redis', 'WebRTC', 'PostGIS', 'AWS', 'REST API', 'OpenTok'],
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'solovault',
      title: 'SoloVault',
      subtitle: 'Base de données SaaS solo',
      year: '2025',
      description: 'Plateforme web de vente d\'une base de données de 50+ projets SaaS solopreneurs avec filtres avancés, paiement Stripe et export Excel. Inclut dark/light mode et design responsive.',
      image: '/images/solovault.jpg',
      icon: <Database className="w-6 h-6" />,
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe', 'XLSX', 'EmailJS'],
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  return (
    <section id="projects" className="section-padding py-20 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12 text-white">
          Mes Projets <span className="text-primary">Significatifs</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-dark-800 border border-dark-600 hover:border-primary transition-all duration-300"
            >
              {/* Project Image/Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-dark-700 to-dark-900 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-dark-800/80 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <div className="text-primary">{project.icon}</div>
                    </div>
                    <p className="text-gray-400">Aperçu du projet</p>
                  </div>
                </div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-gray-300">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.year}
                      </span>
                      <Link
                        href={`/projet/${project.id}`}
                        className="flex items-center text-primary hover:text-orange-400 transition-colors"
                      >
                        Voir détails
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{project.subtitle}</p>
                  </div>
                  <span className="text-primary text-sm font-semibold">{project.year}</span>
                </div>

                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-dark-700 text-gray-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Link
                  href={`/projet/${project.id}`}
                  className="inline-flex items-center text-primary hover:text-orange-400 transition-colors group"
                >
                  <span>Voir les détails</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Intéressé par mon travail ?</p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            Discutons de votre projet
            <ExternalLink className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
