'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'CEO, TechStart',
    company: 'Startup SaaS',
    text: 'Mathis a transformé notre idée en un SaaS production-ready en 4 mois. Son expertise en architecture Event Sourcing nous a permis de scaler sans refonte. Communication parfaite, code de qualité exceptionnelle.',
    rating: 5,
    project: 'Développement SaaS Complet',
    budget: '80k EUR'
  },
  {
    name: 'Alexandre D.',
    role: 'Founder, CryptoTrading',
    company: 'Trading DeFi',
    text: 'Le bot de trading Solana développé par Mathis est en production 24/7 depuis 6 mois. Integration Jito MEV impeccable, monitoring temps réel, code robuste. ROI positif dès le premier mois.',
    rating: 5,
    project: 'Bot de Trading Solana',
    budget: '45k EUR'
  },
  {
    name: 'Marie L.',
    role: 'Product Manager, MediaCo',
    company: 'Startup Média',
    text: 'Notre extension Chrome avec transcription IA a dépassé nos attentes. 500+ installations en 2 mois, précision 95%+. Mathis a géré toute la complexité technique (Whisper, FFmpeg, Chrome API) avec brio.',
    rating: 5,
    project: 'Extension Chrome',
    budget: '15k EUR'
  },
  {
    name: 'Thomas R.',
    role: 'CTO, SocialApp',
    company: 'App Mobile',
    text: 'App React Native iOS/Android avec chat temps réel et video calls. Livraison en 5 mois, 1000+ beta testers conquis. Architecture Firebase solide, code bien documenté. Un vrai professionnel.',
    rating: 5,
    project: 'Application Mobile',
    budget: '60k EUR'
  },
  {
    name: 'Julie P.',
    role: 'CEO, InnovTech',
    company: 'Scale-up',
    text: 'Mission CTO freelance sur 6 mois. Mathis a restructuré notre architecture monolithique en microservices, mis en place CI/CD, formé l\'équipe. Dette technique réduite de 70%. Indispensable.',
    rating: 5,
    project: 'Consulting Architecture',
    budget: '50k EUR'
  },
  {
    name: 'David K.',
    role: 'Founder, AIStartup',
    company: 'Startup IA',
    text: 'Intégration GPT-4 dans notre plateforme documentaire. Mathis maîtrise parfaitement l\'écosystème IA (OpenAI, LangChain, prompt engineering). Résultat : chatbot précis et rapide, nos clients adorent.',
    rating: 5,
    project: 'Intégration IA',
    budget: '25k EUR'
  }
]

export default function FreelanceTestimonials() {
  return (
    <section className="py-20 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ce que disent mes clients
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            50+ missions réussies avec un taux de satisfaction de 100%
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-dark-600 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-br bg-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-dark-600 pt-4">
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-300">{testimonial.role}</div>
                <div className="text-sm text-primary font-medium">{testimonial.company}</div>
              </div>

              {/* Project Info */}
              <div className="mt-4 bg-gradient-to-r from-primary/10 to-orange-600/5 rounded-lg p-3">
                <div className="text-xs text-gray-300 mb-1">Projet : {testimonial.project}</div>
                <div className="text-sm font-semibold text-white">Budget : {testimonial.budget}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r bg-primary rounded-2xl p-12 text-white text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-white/90">Satisfaction client</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-white/90">Missions réussies</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-white/90">Projets livrés</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">7+</div>
              <div className="text-white/90">Années d'expérience</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-dark-800 rounded-xl p-6 border border-dark-600 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="font-semibold text-white">Livraison rapide</div>
          </div>
          <div className="bg-dark-800 rounded-xl p-6 border border-dark-600 text-center">
            <div className="text-3xl mb-2">🔒</div>
            <div className="font-semibold text-white">NDA & Confidentialité</div>
          </div>
          <div className="bg-dark-800 rounded-xl p-6 border border-dark-600 text-center">
            <div className="text-3xl mb-2">💬</div>
            <div className="font-semibold text-white">Communication 24/7</div>
          </div>
          <div className="bg-dark-800 rounded-xl p-6 border border-dark-600 text-center">
            <div className="text-3xl mb-2">✅</div>
            <div className="font-semibold text-white">Garantie qualité</div>
          </div>
        </div>
      </div>
    </section>
  )
}
