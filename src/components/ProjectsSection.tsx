import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Calendar, Chrome, Smartphone, Cpu, Bot, Database, GraduationCap, Code2 } from 'lucide-react'

const ProjectsSection = () => {
  const projects = [
    {
      id: 'skillforge',
      title: 'SkillForge',
      subtitle: 'Plateforme d\'apprentissage SaaS',
      year: '2025',
      description: 'Marketplace d\'apprentissage nouvelle génération avec système de monétisation pour créateurs. Paiements via Stripe Connect avec commission automatique 4%, IDE intégré Monaco Editor, et suivi de progression avancé. Inclut analytics créateur, certificats PDF auto-générés, et 15+ tests E2E.',
      image: '/images/formation-illustration.png',
      icon: <GraduationCap className="w-6 h-6" />,
      technologies: ['Next.js 14', 'TypeScript', 'React 18', 'Supabase', 'PostgreSQL', 'Stripe Connect', 'Tailwind CSS', 'Monaco Editor', 'Playwright', 'Resend', 'Sentry'],
      color: 'from-violet-500 to-purple-500',
      link: 'https://formation-web-kappa.vercel.app',
      videoUrl: 'https://youtu.be/shlQcerB2L0'
    },
    {
      id: 'portfolio',
      title: 'Portfolio Mathis Higuinen',
      subtitle: 'Site web personnel',
      year: '2025',
      description: 'Portfolio développeur full-stack moderne avec design responsive, intégration EmailJS pour formulaires de contact, sections About/Skills/Journey/Projects. Développé avec Next.js 14 et TypeScript pour présenter 7 ans d\'expérience en développement.',
      icon: <Code2 className="w-6 h-6" />,
      technologies: ['Next.js 14', 'TypeScript', 'React 18', 'Tailwind CSS', 'EmailJS', 'Vercel'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'solana-trading-bot',
      title: 'Solana Trading Bot',
      subtitle: 'Bot Telegram',
      year: '2025',
      description: 'Bot de trading automatisé sur la blockchain Solana avec copy-trading, sniping de tokens, DCA (Dollar Cost Averaging), et gestion de positions en temps réel via Telegram. Architecture événementielle avec Kafka pour le traitement distribué des ordres.',
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
      color: 'from-blue-500 to-cyan-500',
      link: 'https://chromewebstore.google.com/detail/streaming-english-learner/ihpcbahpgelkeebgolejlpipcogffacd'
    },
    {
      id: 'romane-app',
      title: 'Romane App',
      subtitle: 'Application iOS Éducative',
      year: '2022',
      description: 'Application éducative iOS basée sur les flashcards avec algorithme de révision espacée intelligent. Disponible en deux versions : mobile indépendante pour étudiants et intégrée aux établissements scolaires. Cartes personnalisables avec texte, images, vidéos et audio.',
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
      color: 'from-indigo-500 to-purple-500',
      link: 'https://solo-vault-git-main-mathis-projects-5e16dcfb.vercel.app'
    }
  ]

  return (
    <section id="projects" className="section-padding py-20 dark:bg-dark-800/50 bg-light-800/50" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="projects-heading" className="text-center mb-12 dark:text-white text-gray-900">
          Mes Projets <span className="text-primary">Significatifs</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8" role="list" aria-label="Liste des projets">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-xl dark:bg-dark-800 bg-white border dark:border-dark-600 border-light-600 hover:border-primary transition-all duration-300 shadow-sm"
              role="listitem"
            >
              {/* Project Image/Placeholder */}
              <div className="relative h-64 bg-gradient-to-br dark:from-dark-700 dark:to-dark-900 from-gray-100 to-gray-200 overflow-hidden">
                {project.image && (
                  <>
                    <Image
                      src={project.image}
                      alt={`Capture d'écran du projet ${project.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      loading={index < 2 ? "eager" : "lazy"}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAABAgMRIf/aAAwDAQACEQMRAD8Aw2CzmETRRzvCQoI2yEqdwzwRjkfRUr0Xjj0P/9k="
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} aria-hidden="true"></div>
                  </>
                )}
                {!project.image && (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} aria-hidden="true"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 dark:bg-dark-800/80 bg-white/80 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-sm">
                          <div className="text-primary" aria-hidden="true">{project.icon}</div>
                        </div>
                        <p className="dark:text-gray-400 text-gray-700">Aperçu du projet</p>
                      </div>
                    </div>
                  </>
                )}

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-gray-300">
                        <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                        <time dateTime={project.year}>{project.year}</time>
                      </span>
                      <Link
                        href={`/projet/${project.id}`}
                        className="flex items-center text-primary hover:text-orange-400 transition-colors"
                        aria-label={`Voir les détails du projet ${project.title}`}
                      >
                        Voir détails
                        <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <header className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold dark:text-white text-gray-900 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="dark:text-gray-400 text-gray-500 text-sm">{project.subtitle}</p>
                  </div>
                  <time dateTime={project.year} className="text-primary text-sm font-semibold">{project.year}</time>
                </header>

                <p className="dark:text-gray-300 text-gray-700 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <ul className="flex flex-wrap gap-2 mb-4" aria-label="Technologies utilisées">
                  {project.technologies.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="px-2 py-1 dark:bg-dark-700 bg-light-700 dark:text-gray-400 text-gray-500 rounded text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <Link
                  href={`/projet/${project.id}`}
                  className="inline-flex items-center text-primary hover:text-orange-400 transition-colors group"
                  aria-label={`En savoir plus sur ${project.title}`}
                >
                  <span>Voir les détails</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="dark:text-gray-400 text-gray-500 mb-4">Intéressé par mon travail ?</p>
          <Link href="/contact" className="btn-primary inline-flex items-center" aria-label="Me contacter pour discuter de votre projet">
            Discutons de votre projet
            <ExternalLink className="w-5 h-5 ml-2" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
