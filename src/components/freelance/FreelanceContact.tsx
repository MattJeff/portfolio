'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar } from 'lucide-react'

export default function FreelanceContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler l'envoi (à remplacer par EmailJS ou votre backend)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Merci ! Je vous recontacte sous 24h.')
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        service: '',
        message: ''
      })

      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Démarrons votre projet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premier échange de 30min gratuit pour évaluer la faisabilité
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Formulaire de contact
            </h3>

            {submitMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email professionnel *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Votre entreprise"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service recherché *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="saas">Développement SaaS Complet</option>
                  <option value="extension">Extension Chrome/Firefox</option>
                  <option value="bot">Bot de Trading Crypto</option>
                  <option value="mobile">Application Mobile</option>
                  <option value="ia">Intégration IA</option>
                  <option value="consulting">Consulting / Tech Lead</option>
                  <option value="mvp">MVP Rapide</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget estimé
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                >
                  <option value="">Sélectionnez un budget</option>
                  <option value="5-20k">5k - 20k EUR</option>
                  <option value="20-50k">20k - 50k EUR</option>
                  <option value="50-100k">50k - 100k EUR</option>
                  <option value="100k+">100k+ EUR</option>
                  <option value="horaire">Facturation horaire</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Décrivez votre projet *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                  placeholder="Décrivez votre projet, vos objectifs, vos contraintes..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer ma demande
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                Réponse garantie sous 24h • Premier échange gratuit
              </p>
            </form>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:mathis.higuinen@example.com" className="text-blue-600 hover:underline">
                      mathis.higuinen@example.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Téléphone</h4>
                    <a href="tel:+33612345678" className="text-green-600 hover:underline">
                      +33 6 12 34 56 78
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Lun-Ven 9h-18h</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Localisation</h4>
                    <p className="text-gray-700">Paris, France</p>
                    <p className="text-sm text-gray-500 mt-1">Remote • Hybride • Sur site IDF</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Autres moyens de contact</h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/mathis-higuinen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all"
                >
                  <MessageSquare className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-sm text-white/80">Message instantané</div>
                  </div>
                </a>

                <a
                  href="https://calendly.com/mathis-higuinen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all"
                >
                  <Calendar className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">Calendly</div>
                    <div className="text-sm text-white/80">Réserver un créneau de 30min</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h4 className="font-bold text-gray-900">Disponibilité actuelle</h4>
              </div>
              <p className="text-gray-700 mb-3">
                Je suis actuellement <strong className="text-green-600">disponible</strong> pour de nouveaux projets à partir de <strong>Janvier 2025</strong>.
              </p>
              <p className="text-sm text-gray-600">
                Missions longues (3-12 mois) ou projets au forfait acceptés. Remote ou Paris/IDF.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
