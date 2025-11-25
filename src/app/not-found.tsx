import Link from 'next/link'
import { Home, ArrowLeft, Mail } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Page non trouvée (404)',
  description: 'La page que vous recherchez n\'existe pas. Retournez à l\'accueil du portfolio de Mathis Higuinen.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="section-padding py-20 text-center max-w-2xl mx-auto">
          {/* Code d'erreur stylisé */}
          <div className="mb-8">
            <span className="text-9xl font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              404
            </span>
          </div>

          {/* Message d'erreur */}
          <h1 className="text-3xl md:text-4xl text-white mb-4">
            Oups ! Page introuvable
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
            Pas d'inquiétude, voici quelques liens utiles pour vous aider.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="btn-primary inline-flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" aria-hidden="true" />
              Retour à l'accueil
            </Link>
            <Link
              href="/contact"
              className="btn-outline inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
              Me contacter
            </Link>
          </div>

          {/* Liens rapides */}
          <div className="border-t border-dark-600 pt-8">
            <p className="text-gray-500 mb-4">Liens rapides :</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#about"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                À propos
              </Link>
              <span className="text-dark-600">•</span>
              <Link
                href="/#projects"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Projets
              </Link>
              <span className="text-dark-600">•</span>
              <Link
                href="/#skills"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Compétences
              </Link>
              <span className="text-dark-600">•</span>
              <Link
                href="/freelance"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Services Freelance
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
