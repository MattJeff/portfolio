import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="section-padding py-20" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="about-heading" className="text-center mb-12 dark:text-white text-gray-900">
          À propos de <span className="text-primary">moi</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Column */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-6" aria-hidden="true"></div>
              <div className="relative dark:bg-dark-700 bg-light-700 rounded-2xl overflow-hidden border-2 border-primary/30">
                <div className="w-full h-full flex items-center justify-center dark:bg-gradient-to-br dark:from-dark-600 dark:to-dark-800 bg-gradient-to-br from-light-700 to-light-800">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center" role="img" aria-label="Initiales de Mathis Higuinen">
                      <span className="text-4xl font-bold text-primary">MH</span>
                    </div>
                    <p className="dark:text-gray-400 text-gray-500">Mathis Higuinen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-6">
            <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed">
              Développeur Full-Stack passionné avec <strong>7+ ans d'expérience</strong>, je me spécialise dans la création
              d'applications iOS (Swift, SwiftUI), de plateformes web (React, Next.js) et de solutions IA innovantes.
              J'ai livré avec succès <strong>plus de 125 projets</strong>, de la conception jusqu'au déploiement.
            </p>
            <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed">
              Ma curiosité naturelle, mon autonomie et un sens aigu du service client me permettent
              de livrer des solutions performantes. Expert en <strong>SaaS, extensions Chrome, bots de trading</strong> et
              <strong> intégration d'IA</strong>, je transforme vos idées en produits à succès.
            </p>

            <ul className="flex flex-wrap gap-3 pt-4" aria-label="Qualités professionnelles">
              <li className="px-4 py-2 dark:bg-dark-700 bg-light-700 border border-primary/30 rounded-lg text-sm dark:text-gray-300 text-gray-700">
                Autodidacte
              </li>
              <li className="px-4 py-2 dark:bg-dark-700 bg-light-700 border border-primary/30 rounded-lg text-sm dark:text-gray-300 text-gray-700">
                Créatif
              </li>
              <li className="px-4 py-2 dark:bg-dark-700 bg-light-700 border border-primary/30 rounded-lg text-sm dark:text-gray-300 text-gray-700">
                Orienté résultats
              </li>
              <li className="px-4 py-2 dark:bg-dark-700 bg-light-700 border border-primary/30 rounded-lg text-sm dark:text-gray-300 text-gray-700">
                Collaboratif
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
