import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-600 mt-20">
      <div className="section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Column */}
          <div>
            <h3 className="text-primary mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:0674578668" className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors">
                <Phone size={16} />
                <span>06 74 57 86 68</span>
              </a>
              <a href="mailto:mhiguinen235@gmail.com" className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors">
                <Mail size={16} />
                <span>mhiguinen235@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin size={16} className="mt-1" />
                <span>22 Allée des Asturies,<br />35000 Rennes</span>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-primary mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link href="#about" className="block text-gray-400 hover:text-primary transition-colors">
                À propos
              </Link>
              <Link href="#skills" className="block text-gray-400 hover:text-primary transition-colors">
                Compétences
              </Link>
              <Link href="#journey" className="block text-gray-400 hover:text-primary transition-colors">
                Parcours
              </Link>
              <Link href="#projects" className="block text-gray-400 hover:text-primary transition-colors">
                Projets
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-primary transition-colors">
                Contact & Devis
              </Link>
            </div>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-primary mb-4">Réseaux Sociaux</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/MattJeff"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-dark-600 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mathis-higuinen-37578a392/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-dark-600 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/mathishiguinen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-dark-600 transition-all"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-600 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Mathis Higuinen. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
