'use client'

import { Code, Chrome, TrendingUp, Smartphone, Brain, Users } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Développement SaaS Complet',
    description: 'MVP → Scale : architecture moderne, Event Sourcing, CQRS, microservices. Backend API, frontend React/Next.js, CI/CD, monitoring.',
    price: '50k - 200k EUR',
    duration: '3-6 mois',
    features: [
      'Architecture Event Sourcing/CQRS',
      'Backend API REST/GraphQL',
      'Frontend React/Next.js',
      'Tests & CI/CD (80%+ coverage)',
      'Déploiement cloud & monitoring',
      'Dashboard admin complet'
    ],
    highlight: true
  },
  {
    icon: Chrome,
    title: 'Extensions Chrome/Firefox',
    description: 'Extensions navigateur professionnelles avec IA, traitement temps réel, UI moderne. Soumission aux stores incluse.',
    price: '5k - 25k EUR',
    duration: '1-3 mois',
    features: [
      'Développement React + TypeScript',
      'Backend API si nécessaire',
      'Intégration IA (GPT-4, Whisper)',
      'Système de monétisation',
      'Tests multi-navigateurs',
      'Soumission Web Store'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Bots de Trading Crypto',
    description: 'Bots Solana sophistiqués : DEX integration, MEV optimization, multi-wallet, monitoring temps réel Telegram.',
    price: '20k - 80k EUR',
    duration: '2-4 mois',
    features: [
      'Integration Jupiter & Jito MEV',
      'Multi-wallet management',
      'Risk management avancé',
      'Monitoring Telegram temps réel',
      'Backtesting historique',
      'Dashboard analytics'
    ],
    badge: 'Spécialiste Solana'
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Apps React Native iOS/Android : authentification multi-provider, chat temps réel, video calls WebRTC.',
    price: '30k - 100k EUR',
    duration: '3-6 mois',
    features: [
      'React Native (iOS + Android)',
      'Backend API complet',
      'Auth multi-provider',
      'Features temps réel',
      'Video calls WebRTC',
      'Soumission App Store & Google Play'
    ]
  },
  {
    icon: Brain,
    title: 'Intégration IA Générative',
    description: 'Intégration GPT-4, Whisper, LLMs locaux. Chatbots, transcription, génération de contenu, analyse documentaire.',
    price: '10k - 40k EUR',
    duration: '1-3 mois',
    features: [
      'Integration OpenAI (GPT-4, Whisper)',
      'LLMs locaux (Ollama, Groq)',
      'Prompt engineering',
      'UI conversationnelle',
      'Gestion tokens & coûts',
      'Analytics usage IA'
    ],
    badge: 'Expert IA'
  },
  {
    icon: Users,
    title: 'Consulting & Tech Lead',
    description: 'Accompagnement technique, architecture, code reviews, mentoring. Mission CTO/Tech Lead freelance.',
    price: '200-300 EUR/h',
    duration: '3-12 mois',
    features: [
      'Audit technique complet',
      'Recommandations architecture',
      'Code reviews hebdomadaires',
      'Mentoring développeurs',
      'Definition processes CI/CD',
      'Roadmap technique'
    ]
  }
]

export default function FreelanceServices() {
  return (
    <section id="services" className="py-20 bg-dark-800/50">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Solutions complètes de développement, de l'idée au produit en production
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  service.highlight ? 'border-2 border-primary relative' : 'border border-dark-600'
                }`}
              >
                {service.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Le plus populaire
                  </div>
                )}

                {service.badge && (
                  <div className="absolute -top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {service.badge}
                  </div>
                )}

                {/* Icon */}
                <div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Price & Duration */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-dark-600">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-400">
                      Durée : {service.duration}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    service.highlight
                      ? 'btn-primary'
                      : 'bg-dark-700 text-white hover:bg-dark-600 border border-dark-600'
                  }`}
                >
                  Discuter du projet
                </a>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Besoin d'un service personnalisé ou d'un devis sur mesure ?
          </p>
          <a
            href="/contact"
            className="btn-primary inline-block"
          >
            Contactez-moi pour un devis gratuit
          </a>
        </div>
      </div>
    </section>
  )
}
