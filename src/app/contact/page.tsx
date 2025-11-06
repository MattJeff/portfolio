'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Send, Calendar, Phone, Mail, MessageSquare, Euro, FileText, Sparkles, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    budget: '',
    projectDescription: '',
    features: ''
  })

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [quoteStatus, setQuoteStatus] = useState<{
    loading: boolean
    success: boolean
    error: string
  }>({ loading: false, success: false, error: '' })

  const [contactStatus, setContactStatus] = useState<{
    loading: boolean
    success: boolean
    error: string
  }>({ loading: false, success: false, error: '' })

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    console.log('EmailJS Configuration Check:', {
      hasPublicKey: !!publicKey,
      hasServiceId: !!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      hasTemplateQuote: !!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_QUOTE,
      hasTemplateContact: !!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT
    })

    if (publicKey) {
      emailjs.init(publicKey)
      console.log('✅ EmailJS initialized')
    } else {
      console.error('❌ EmailJS Public Key is missing!')
    }
  }, [])

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setQuoteStatus({ loading: true, success: false, error: '' })

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_QUOTE

      console.log('Sending quote with:', { serviceId, templateId })

      if (!serviceId || !templateId) {
        throw new Error('Configuration EmailJS manquante. Avez-vous redémarré le serveur ?')
      }

      const templateParams = {
        to_name: 'Mathis',
        from_name: quoteForm.name,
        from_email: quoteForm.email,
        budget: quoteForm.budget || 'Non spécifié',
        project_description: quoteForm.projectDescription,
        features: quoteForm.features || 'Non spécifié',
        reply_to: quoteForm.email
      }

      console.log('Template params:', templateParams)

      const response = await emailjs.send(serviceId, templateId, templateParams)

      console.log('✅ Email sent successfully:', response)

      setQuoteStatus({ loading: false, success: true, error: '' })
      setQuoteForm({ name: '', email: '', budget: '', projectDescription: '', features: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setQuoteStatus({ loading: false, success: false, error: '' }), 5000)
    } catch (error: any) {
      console.error('❌ Error sending quote:', error)
      const errorMessage = error.text || error.message || 'Erreur inconnue'
      setQuoteStatus({
        loading: false,
        success: false,
        error: `Erreur: ${errorMessage}. Contactez-moi à mhiguinen235@gmail.com`
      })
    }
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setContactStatus({ loading: true, success: false, error: '' })

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT

      console.log('Sending contact message with:', { serviceId, templateId })

      if (!serviceId || !templateId) {
        throw new Error('Configuration EmailJS manquante. Avez-vous redémarré le serveur ?')
      }

      const templateParams = {
        to_name: 'Mathis',
        from_name: contactForm.name,
        from_email: contactForm.email,
        message: contactForm.message,
        reply_to: contactForm.email
      }

      console.log('Template params:', templateParams)

      const response = await emailjs.send(serviceId, templateId, templateParams)

      console.log('✅ Contact message sent successfully:', response)

      setContactStatus({ loading: false, success: true, error: '' })
      setContactForm({ name: '', email: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setContactStatus({ loading: false, success: false, error: '' }), 5000)
    } catch (error: any) {
      console.error('❌ Error sending contact message:', error)
      const errorMessage = error.text || error.message || 'Erreur inconnue'
      setContactStatus({
        loading: false,
        success: false,
        error: `Erreur: ${errorMessage}. Contactez-moi à mhiguinen235@gmail.com`
      })
    }
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding py-16 bg-gradient-to-b from-dark-800/50 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-4">
              Travaillons <span className="text-primary">ensemble</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Vous avez un projet d'application iOS ou de développement web ? 
              Je suis là pour transformer vos idées en réalité digitale.
            </p>
          </div>
        </section>

        <div className="section-padding py-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Quote Form Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl text-white mb-3 flex items-center">
                  <FileText className="w-8 h-8 text-primary mr-3" />
                  Demandez un devis pour votre projet
                </h2>
                <p className="text-gray-400">
                  Décrivez votre projet et recevez une estimation personnalisée
                </p>
              </div>

              <form onSubmit={handleQuoteSubmit} className="space-y-6">
                {/* Success Message */}
                {quoteStatus.success && (
                  <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <p className="text-green-400">Votre demande de devis a été envoyée avec succès ! Je vous répondrai sous 24h.</p>
                  </div>
                )}

                {/* Error Message */}
                {quoteStatus.error && (
                  <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                    <p className="text-red-400">{quoteStatus.error}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="quote-name" className="block text-gray-300 mb-2">
                    Votre nom complet *
                  </label>
                  <input
                    type="text"
                    id="quote-name"
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Jean Dupont"
                    value={quoteForm.name}
                    onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="quote-email" className="block text-gray-300 mb-2">
                    Votre email *
                  </label>
                  <input
                    type="email"
                    id="quote-email"
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                    placeholder="jean.dupont@example.com"
                    value={quoteForm.email}
                    onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-gray-300 mb-2">
                    Budget estimé
                  </label>
                  <select
                    id="budget"
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:border-primary focus:outline-none transition-colors"
                    value={quoteForm.budget}
                    onChange={(e) => setQuoteForm({...quoteForm, budget: e.target.value})}
                  >
                    <option value="">Sélectionnez une fourchette</option>
                    <option value="< 5000€">Moins de 5 000€</option>
                    <option value="5000-10000€">5 000€ - 10 000€</option>
                    <option value="> 10000€">Plus de 10 000€</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="project-description" className="block text-gray-300 mb-2">
                    Description de votre projet *
                  </label>
                  <textarea
                    id="project-description"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Décrivez votre projet, vos objectifs et vos besoins..."
                    value={quoteForm.projectDescription}
                    onChange={(e) => setQuoteForm({...quoteForm, projectDescription: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="features" className="block text-gray-300 mb-2">
                    Fonctionnalités souhaitées
                  </label>
                  <textarea
                    id="features"
                    rows={3}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Listez les fonctionnalités principales que vous souhaitez..."
                    value={quoteForm.features}
                    onChange={(e) => setQuoteForm({...quoteForm, features: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  disabled={quoteStatus.loading}
                  className="btn-primary w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {quoteStatus.loading ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Euro className="w-5 h-5 mr-2" />
                      Recevoir mon devis
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact & Meeting Section */}
            <div>
              {/* Quick Contact */}
              <div className="mb-12">
                <div className="mb-8">
                  <h2 className="text-3xl text-white mb-3 flex items-center">
                    <MessageSquare className="w-8 h-8 text-primary mr-3" />
                    Une simple question ?
                  </h2>
                  <p className="text-gray-400">
                    Envoyez-moi un message rapide ou planifiez un appel
                  </p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  {/* Success Message */}
                  {contactStatus.success && (
                    <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <p className="text-green-400">Votre message a été envoyé ! Je vous répondrai rapidement.</p>
                    </div>
                  )}

                  {/* Error Message */}
                  {contactStatus.error && (
                    <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                      <p className="text-red-400">{contactStatus.error}</p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="contact-name" className="block text-gray-300 mb-2">
                      Votre nom
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Votre nom"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-gray-300 mb-2">
                      Votre email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                      placeholder="votre@email.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      Votre message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={3}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Votre message..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={contactStatus.loading}
                    className="btn-outline w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {contactStatus.loading ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Schedule Call CTA */}
              <div className="bg-gradient-to-br from-primary/20 to-orange-600/20 rounded-xl p-8 border border-primary/30">
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl text-white mb-3">Préférez-vous discuter de vive voix ?</h3>
                  <p className="text-gray-300 mb-6">
                    Réservez un créneau de 30 minutes pour discuter de votre projet
                  </p>
                  <a
                    href="https://calendly.com/mathishiguinen/parlons-de-votre-projet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Planifier un appel de 30 min
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <a
                  href="tel:0758760738"
                  className="flex items-center space-x-3 text-gray-400 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>07 58 76 07 38</span>
                </a>
                <a
                  href="mailto:mathis.higuinen@email.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>mathis.higuinen@email.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-gray-300 font-semibold">Réponse rapide</div>
              <div className="text-gray-500 text-sm">Sous 24h</div>
            </div>
            <div className="text-center">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-gray-300 font-semibold">Devis gratuit</div>
              <div className="text-gray-500 text-sm">Sans engagement</div>
            </div>
            <div className="text-center">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-gray-300 font-semibold">100% Remote</div>
              <div className="text-gray-500 text-sm">Collaboration flexible</div>
            </div>
            <div className="text-center">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-gray-300 font-semibold">Suivi projet</div>
              <div className="text-gray-500 text-sm">Communication régulière</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
