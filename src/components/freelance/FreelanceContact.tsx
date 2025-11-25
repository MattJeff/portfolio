'use client'

import { Mail, Phone, MapPin, ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function FreelanceContact() {
  return (
    <section id="contact" className="py-20 bg-light-900 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Démarrons votre projet
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
            Premier échange de 30min gratuit pour évaluer la faisabilité
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 border border-gray-200 dark:border-dark-600 hover:border-primary transition-all duration-300 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Email</h4>
                  <a href="mailto:mhiguinen235@gmail.com" className="text-primary hover:underline">
                    mhiguinen235@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Réponse sous 24h</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 border border-gray-200 dark:border-dark-600 hover:border-primary transition-all duration-300 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Téléphone</h4>
                  <a href="tel:0674578668" className="text-primary hover:underline">
                    06 74 57 86 68
                  </a>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">WhatsApp disponible</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 border border-gray-200 dark:border-dark-600 hover:border-primary transition-all duration-300 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Localisation</h4>
                  <p className="text-gray-700 dark:text-gray-300">Paris, France</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Remote • Hybride • Sur site IDF</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-br from-primary/20 to-orange-600/10 border border-primary/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Prêt à démarrer ?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Utilisez le formulaire de contact complet pour me présenter votre projet en détail.
                Je vous réponds sous 24h avec un premier retour et nous pourrons planifier un
                appel de 30 minutes gratuit.
              </p>

              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 mb-6"
              >
                Accéder au formulaire de contact
                <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="border-t border-gray-200 dark:border-dark-600 pt-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Autres options</h4>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/mathis-higuinen-37578a392/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Me contacter sur LinkedIn</span>
                  </a>
                  <a
                    href="https://calendly.com/mathis-higuinen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Réserver un créneau de 30min</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-6 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-600/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h4 className="font-bold text-gray-900 dark:text-white">Disponibilité actuelle</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Je suis actuellement <strong className="text-green-600 dark:text-green-400">disponible</strong> pour de nouveaux projets
                à partir de <strong>Janvier 2025</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
