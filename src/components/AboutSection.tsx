import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section id="about" className="section-padding py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12 text-white">
          À propos de <span className="text-primary">moi</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Column */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-dark-700 rounded-2xl overflow-hidden border-2 border-primary/30">
                {/* Placeholder pour la photo - remplacer avec une vraie image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-600 to-dark-800">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">MH</span>
                    </div>
                    <p className="text-gray-400">Photo professionnelle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Développeur passionné et autodidacte, je possède une solide expérience dans la création 
              d'applications mobiles iOS et d'extensions web. J'ai mené avec succès plusieurs projets 
              de A à Z, de la conception initiale jusqu'au déploiement final.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Ma curiosité naturelle, mon autonomie et un sens aigu du service client me permettent 
              de livrer des solutions performantes. Aujourd'hui, je suis prêt à mettre mes compétences 
              techniques et ma capacité d'adaptation au service de votre entreprise pour relever de 
              nouveaux défis.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-dark-700 border border-primary/30 rounded-lg text-sm text-gray-300">
                🚀 Autodidacte
              </span>
              <span className="px-4 py-2 bg-dark-700 border border-primary/30 rounded-lg text-sm text-gray-300">
                💡 Créatif
              </span>
              <span className="px-4 py-2 bg-dark-700 border border-primary/30 rounded-lg text-sm text-gray-300">
                🎯 Orienté résultats
              </span>
              <span className="px-4 py-2 bg-dark-700 border border-primary/30 rounded-lg text-sm text-gray-300">
                🤝 Collaboratif
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
