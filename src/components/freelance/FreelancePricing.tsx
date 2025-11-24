'use client'

import { Check, Zap, Crown } from 'lucide-react'

const packages = [
  {
    name: 'MVP Rapide',
    icon: Zap,
    price: '8k - 20k',
    currency: 'EUR',
    duration: '2-4 semaines',
    description: 'Prototype fonctionnel pour valider votre idée rapidement',
    features: [
      'Atelier de cadrage (1 jour)',
      'Backend API minimal',
      'Frontend responsive React/Next.js',
      'Database (Supabase/PostgreSQL)',
      'Auth simple (email/password)',
      '1 feature principale + 2-3 secondaires',
      'Déploiement cloud',
      '1 révision',
      'Documentation basique'
    ],
    cta: 'Démarrer un MVP',
    popular: false
  },
  {
    name: 'SaaS Complet',
    icon: Crown,
    price: '50k - 200k',
    currency: 'EUR',
    duration: '3-6 mois',
    description: 'Solution complète de l\'idée à la production scalable',
    features: [
      'Audit & cadrage complet (1 semaine)',
      'Architecture Event Sourcing/CQRS',
      'Backend API REST/GraphQL',
      'Frontend React/Next.js moderne',
      'Auth sécurisée (JWT, OAuth, SSO)',
      'Système de paiements (Stripe/PayPal)',
      'Dashboard admin complet',
      'Tests unitaires & integration (80%+)',
      'CI/CD automatisé',
      'Déploiement cloud avec monitoring',
      'Documentation technique complète',
      'Formation équipe',
      '30 jours de support post-livraison'
    ],
    cta: 'Lancer mon SaaS',
    popular: true
  },
  {
    name: 'Horaire',
    icon: Check,
    price: '150 - 300',
    currency: 'EUR/h',
    duration: 'Flexible',
    description: 'Facturation à l\'heure pour missions ponctuelles ou consulting',
    features: [
      'Développement senior : 150-180 EUR/h',
      'Expert (IA, Blockchain) : 180-200 EUR/h',
      'Architecture consulting : 200-250 EUR/h',
      'CTO Freelance : 250-300 EUR/h',
      'Code review & mentoring : 150 EUR/h',
      'Support urgent (+50%)',
      'Mission weekend (+100%)',
      'Facturation transparente',
      'Communication quotidienne'
    ],
    cta: 'Réserver une mission',
    popular: false
  }
]

const additionalServices = [
  {
    name: 'Extension Chrome/Firefox',
    price: '5k - 25k EUR',
    duration: '1-3 mois'
  },
  {
    name: 'Bot de Trading Crypto',
    price: '20k - 80k EUR',
    duration: '2-4 mois'
  },
  {
    name: 'Application Mobile',
    price: '30k - 100k EUR',
    duration: '3-6 mois'
  },
  {
    name: 'Intégration IA',
    price: '10k - 40k EUR',
    duration: '1-3 mois'
  },
  {
    name: 'Maintenance Mensuelle',
    price: '2k - 10k EUR/mois',
    duration: 'Récurrent'
  },
  {
    name: 'CTO Freelance',
    price: '8k - 12k EUR/mois',
    duration: '2j/semaine'
  }
]

export default function FreelancePricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tarifs & Forfaits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solutions adaptées à votre budget et vos besoins
          </p>
        </div>

        {/* Main Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon
            return (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-2xl scale-105 border-4 border-blue-400'
                    : 'bg-gray-50 border-2 border-gray-200'
                } hover:shadow-2xl transition-all duration-300 relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    Le plus populaire
                  </div>
                )}

                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${pkg.popular ? 'bg-white/20' : 'bg-white'}`}>
                    <Icon className={`w-6 h-6 ${pkg.popular ? 'text-white' : 'text-blue-600'}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className={`text-4xl font-bold mb-1 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.price}
                  </div>
                  <div className={`text-sm ${pkg.popular ? 'text-white/80' : 'text-gray-500'}`}>
                    {pkg.currency} • {pkg.duration}
                  </div>
                </div>

                {/* Description */}
                <p className={`mb-6 ${pkg.popular ? 'text-white/90' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-white' : 'text-green-500'}`} />
                      <span className={`text-sm ${pkg.popular ? 'text-white/90' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl'
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            )
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Autres Services Disponibles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="font-bold text-gray-900 mb-2">{service.name}</h4>
                <div className="text-blue-600 font-semibold mb-1">{service.price}</div>
                <div className="text-sm text-gray-500">Durée : {service.duration}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Info */}
        <div className="mt-12 bg-gray-900 text-white rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Modalités de Paiement</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Projets au forfait :</strong> 30% signature, 40% mi-parcours, 30% livraison</li>
                <li>• <strong>Missions longues :</strong> Facturation mensuelle à 30 jours</li>
                <li>• <strong>Accepté :</strong> Virement SEPA, PayPal, Crypto (USDC/USDT)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Conditions Spéciales</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Startups pre-seed :</strong> -15% + equity possible</li>
                <li>• <strong>Projets open-source :</strong> Tarif réduit -30%</li>
                <li>• <strong>Associations/NGO :</strong> Tarif solidaire -40%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4 text-lg">
            Premier échange de 30min <strong className="text-blue-600">gratuit</strong> pour évaluer la faisabilité
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
          >
            Demander un devis gratuit
          </a>
        </div>
      </div>
    </section>
  )
}
