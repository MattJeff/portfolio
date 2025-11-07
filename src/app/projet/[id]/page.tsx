'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Calendar, User, Code2, Layers } from 'lucide-react'

const projectsData = {
  'solana-trading-bot': {
    title: 'Solana Trading Bot - Bot Telegram',
    year: '2025',
    client: 'Projet Professionnel',
    description: `Bot de trading automatisé sur la blockchain Solana avec interface Telegram, permettant aux traders de gérer leurs positions de manière professionnelle. Le bot offre des fonctionnalités avancées comme le copy-trading, le sniping de nouveaux tokens, et le DCA (Dollar Cost Averaging).

    L'architecture événementielle basée sur Kafka permet un traitement distribué et scalable des ordres de trading. Le système gère des milliers de transactions par seconde avec une latence minimale, essentiel pour le trading haute fréquence sur Solana.

    Le projet se distingue par son interface Telegram intuitive qui génère des cartes PNL visuelles, permettant aux utilisateurs de suivre leurs performances en temps réel. Le système multi-langues et le programme de référence intégré facilitent l'adoption à l'échelle internationale.`,
    challenges: `Les défis techniques majeurs :
    - Architecture distribuée avec Kafka pour traitement temps réel
    - Gestion de la complexité des ordres blockchain (transactions, slippage, MEV)
    - Synchronisation des états utilisateur entre services distribués
    - Optimisation des endpoints RPC Solana pour haute disponibilité
    - Génération dynamique d'images PNL avec Canvas dans Node.js
    - Sniping de tokens avec latence ultra-faible (<100ms)`,
    solution: `J'ai développé une architecture microservices événementielle avec Kafka comme backbone de communication. Chaque fonctionnalité (copy-trading, DCA, positions, transactions) est isolée dans un service dédié communiquant via gRPC/Protobuf pour des performances optimales. Le RPC Manager implémente un système de failover automatique entre plusieurs endpoints Solana. L'intégration Telegram utilise un système de state machine pour gérer les conversations complexes. Le système de génération de cartes PNL utilise Canvas pour créer des visualisations graphiques riches directement dans le bot.`,
    technologies: ['Node.js', 'ES Modules', 'Solana Web3.js', 'Kafka', 'Docker', 'Alpine Linux', 'gRPC', 'Protobuf', 'Telegram Bot API', 'Canvas', 'QRCode', 'RPC Manager'],
    features: [
      'Copy Trading avec synchronisation Kafka temps réel',
      'Token Sniping automatisé avec détection de nouveaux tokens',
      'DCA (Dollar Cost Averaging) personnalisable',
      'Gestion de positions multi-wallets',
      'Ordres limites avec exécution automatique',
      'Génération de cartes PNL graphiques avec Canvas',
      'Système de référence intégré',
      'Interface multi-langues (EN/FR/ES)',
      'QR codes pour dépôts wallet',
      'Architecture microservices distribuée',
      'Monitoring et analytics en temps réel',
      'Gestion d\'état utilisateur persistante'
    ],
    images: ['/images/solana-trading-bot-1.jpg', '/images/solana-trading-bot-2.jpg']
  },
  'localforge-ai': {
    title: 'LocalForge AI - Dataset Generator',
    year: '2025',
    client: 'Projet Open Source',
    description: `LocalForge AI est une application desktop cross-platform permettant de générer des datasets d'entraînement de haute qualité pour le fine-tuning de modèles d'IA. L'application se distingue par son architecture 100% locale garantissant la confidentialité totale des données.

    Le workflow en 3 étapes permet d'importer des documents multi-formats (PDF, DOCX, TXT, Markdown, HTML), de générer automatiquement des paires instruction/réponse via LLMs locaux (Ollama), et d'exporter au format JSONL standard.

    L'application a été conçue pour les développeurs et chercheurs en IA qui ont besoin de créer des datasets de qualité tout en gardant un contrôle total sur leurs données sensibles. Le traitement parallèle et le chunking intelligent assurent des performances optimales même sur de grands corpus de documents.`,
    challenges: `Les défis techniques majeurs :
    - Architecture hybride React/TypeScript + Rust pour performances optimales
    - Gestion du traitement parallèle de multiples documents volumineux
    - Intégration transparente avec l'API Ollama pour l'inférence locale
    - Parsing robuste de multiples formats de documents (PDF, DOCX, HTML)
    - Chunking intelligent avec overlapping pour maintenir la cohérence contextuelle
    - Interface utilisateur réactive avec suivi de progression en temps réel`,
    solution: `J'ai développé une architecture hybride exploitant les forces de chaque technologie : React/TypeScript pour l'UI moderne et Rust/Tauri pour les performances système. Le backend Rust utilise Tokio pour l'asynchrone et Rayon pour le traitement parallèle. Un système de chunking intelligent découpe les documents avec overlapping pour maintenir le contexte. L'intégration avec Ollama permet l'inférence LLM locale sans dépendance cloud. Le state management avec Zustand assure une UI réactive avec des mises à jour en temps réel du workflow de génération.`,
    technologies: ['React 19', 'TypeScript', 'Rust', 'Tauri 2.0', 'Vite', 'Tailwind CSS 4', 'Zustand', 'Tokio', 'Ollama API', 'i18next', 'Framer Motion'],
    features: [
      'Import multi-formats (PDF, DOCX, TXT, Markdown, HTML)',
      'Génération automatique via LLMs locaux (Ollama)',
      'Chunking intelligent avec overlapping contextuel',
      'Traitement parallèle pour performances optimales',
      'Export JSONL compatible Hugging Face',
      'Interface drag & drop intuitive',
      'Suivi de progression en temps réel',
      'Architecture 100% locale (confidentialité)',
      'Support multilingue (EN/FR)',
      'Cross-platform (macOS, Windows, Linux)'
    ],
    images: ['/images/localforge-ai-1.jpg', '/images/localforge-ai-2.jpg']
  },
  'learning-english': {
    title: 'Learning English - Extension Chrome',
    year: '2025',
    client: 'Projet Personnel',
    description: `Learning English est une extension Chrome révolutionnaire qui transforme Netflix en plateforme d'apprentissage de l'anglais. 
    
    Cette extension permet aux utilisateurs d'apprendre l'anglais de manière immersive en regardant leurs séries et films préférés. Elle offre des sous-titres interactifs avec traduction instantanée, des quiz contextuels basés sur le contenu visionné, et un système de révision des mots appris.
    
    Le projet a été conçu pour répondre au besoin croissant d'outils d'apprentissage linguistique engageants et pratiques. En utilisant du contenu que les utilisateurs consomment déjà, l'extension rend l'apprentissage naturel et motivant.`,
    challenges: `Les principaux défis rencontrés :
    - Synchronisation précise avec le lecteur vidéo Netflix
    - Extraction et analyse des sous-titres en temps réel
    - Création d'un système de traduction contextuelle intelligent
    - Interface utilisateur non-intrusive mais accessible`,
    solution: `J'ai développé une architecture modulaire permettant une intégration transparente avec Netflix. L'extension utilise des API de traduction avancées et un système de cache intelligent pour offrir une expérience fluide. L'interface a été conçue pour être minimale pendant le visionnage tout en restant facilement accessible pour les interactions d'apprentissage.`,
    technologies: ['JavaScript', 'Chrome Extension API', 'HTML5', 'CSS3', 'REST APIs', 'Local Storage'],
    features: [
      'Sous-titres interactifs avec traduction au survol',
      'Quiz contextuels basés sur le contenu',
      'Dictionnaire personnel avec révisions espacées',
      'Statistiques de progression détaillées',
      'Mode sombre/clair automatique',
      'Export des mots appris'
    ],
    images: ['/images/learning-english-1.jpg', '/images/learning-english-2.jpg']
  },
  'romane-app': {
    title: 'Romane App - Application iOS',
    year: '2022',
    client: 'Client Privé',
    description: `Romane App est une application iOS complète développée pour répondre aux besoins spécifiques d'une entreprise de services. Cette application mobile native offre une expérience utilisateur fluide et intuitive.
    
    L'application intègre des fonctionnalités avancées de gestion de contenu, un système de notifications push personnalisées, et une interface utilisateur moderne suivant les dernières guidelines d'Apple.
    
    Le projet a nécessité une étroite collaboration avec le client pour comprendre et implémenter des workflows métier complexes tout en maintenant une simplicité d'utilisation pour l'utilisateur final.`,
    challenges: `Les défis principaux du projet :
    - Gestion de données offline avec synchronisation
    - Optimisation des performances pour des grandes quantités de données
    - Intégration avec des systèmes backend existants
    - Support multi-langue et accessibilité`,
    solution: `J'ai implémenté une architecture MVVM robuste avec Core Data pour la persistance des données. L'utilisation de SwiftUI a permis de créer une interface réactive et moderne. Un système de cache intelligent assure une expérience fluide même en mode offline.`,
    technologies: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'CloudKit', 'Push Notifications', 'REST API'],
    features: [
      'Interface utilisateur moderne avec SwiftUI',
      'Mode offline avec synchronisation automatique',
      'Notifications push personnalisées',
      'Authentification sécurisée avec biométrie',
      'Support multi-langue (FR, EN, ES)',
      'Analytics et tableaux de bord intégrés'
    ],
    images: ['/images/romane-app-1.jpg', '/images/romane-app-2.jpg']
  }
}

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params?.id as string
  const project = projectsData[projectId as keyof typeof projectsData]

  if (!project) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen section-padding">
          <div className="max-w-4xl mx-auto py-20 text-center">
            <h1 className="text-4xl text-white mb-4">Projet non trouvé</h1>
            <p className="text-gray-400 mb-8">Le projet que vous recherchez n'existe pas.</p>
            <Link href="/#projects" className="btn-primary inline-flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour aux projets
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="section-padding py-4 border-b border-dark-600">
          <Link href="/#projects" className="inline-flex items-center text-gray-400 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux projets
          </Link>
        </div>

        {/* Project Header */}
        <section className="section-padding py-12 bg-gradient-to-b from-dark-800/50 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Info */}
              <div>
                <h1 className="text-white mb-6">{project.title}</h1>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <User className="w-5 h-5 mr-2" />
                    <span>{project.client}</span>
                  </div>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  {project.description.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mt-8">
                  <h3 className="text-xl text-white mb-4 flex items-center">
                    <Code2 className="w-5 h-5 mr-2 text-primary" />
                    Technologies Utilisées
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-dark-700 text-gray-300 rounded-md text-sm border border-dark-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-900 rounded-xl overflow-hidden border border-dark-600">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <Layers className="w-20 h-20 text-primary/30 mx-auto mb-4" />
                      <p className="text-gray-500">Aperçu du projet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-white mb-8">
              Fonctionnalités <span className="text-primary">Principales</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="card hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="section-padding py-12 bg-dark-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Challenges */}
              <div>
                <h2 className="text-3xl text-white mb-6">
                  Défis <span className="text-primary">Rencontrés</span>
                </h2>
                <div className="space-y-4 text-gray-300">
                  {project.challenges.split('\n').filter(line => line.startsWith('-')).map((challenge, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p>{challenge.substring(2)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-3xl text-white mb-6">
                  Solution <span className="text-primary">Apportée</span>
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl text-white mb-4">
              Intéressé par un projet similaire ?
            </h2>
            <p className="text-gray-400 mb-8">
              Je serais ravi de discuter de votre projet et de voir comment je peux vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Demander un devis
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/#projects" className="btn-outline inline-flex items-center">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voir d'autres projets
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
