import React from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'

const JourneySection = () => {
  const journeyItems = [
    {
      year: '2023 - 2024',
      title: 'Développeur iOS Freelance',
      type: 'work',
      description: 'Développement et maintenance de +6 apps iOS, relation client, gestion de projet autonome',
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      year: '2023',
      title: 'Développeur iOS - AXA Assurance',
      type: 'work',
      description: 'Développement d\'une app interne en équipe Agile, maintenance, utilisation de Git',
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      year: '2022',
      title: 'Graduate Développement iOS & Android',
      type: 'education',
      description: 'Formation spécialisée terminée',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      year: '2021',
      title: 'Bachelor Développement iOS & Android',
      type: 'education',
      description: 'Formation spécialisée terminée',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      year: '2020',
      title: 'Licence Informatique & Électronique',
      type: 'education',
      description: 'Université Rennes 1 (non terminé)',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      year: '2019',
      title: 'Baccalauréat Scientifique',
      type: 'education',
      description: 'Sciences de l\'Ingénieur',
      icon: <GraduationCap className="w-5 h-5" />
    }
  ]

  return (
    <section id="journey" className="section-padding py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-12 text-white">
          Mon <span className="text-primary">Parcours</span>
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-dark-600"></div>

          {journeyItems.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-dark-800 border-2 border-primary rounded-full flex items-center justify-center z-10">
                <div className="text-primary">{item.icon}</div>
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-20' : 'md:ml-auto md:pl-20'
              } md:w-5/12`}>
                <div className="card hover:border-primary/50 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-primary font-semibold">{item.year}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.type === 'work' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {item.type === 'work' ? 'Expérience' : 'Formation'}
                    </span>
                  </div>
                  <h3 className="text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* End Dot */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 bottom-0 w-4 h-4 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default JourneySection
