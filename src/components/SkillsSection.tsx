import React from 'react'
import { Code2, Palette, Server, Users, Cpu, Globe } from 'lucide-react'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Langages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['Swift (iOS)', 'JavaScript', 'HTML5', 'CSS3'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frameworks & Outils',
      icon: <Palette className="w-6 h-6" />,
      skills: ['SwiftUI', 'UIKit', 'Git', 'GitHub', 'Xcode'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Systèmes d\'exploitation',
      icon: <Cpu className="w-6 h-6" />,
      skills: ['macOS', 'iOS', 'Windows'],
      note: 'Exploration active de Linux - Debian',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Qualités Humaines',
      icon: <Users className="w-6 h-6" />,
      skills: ['Curiosité', 'Sens du service', 'Aisance relationnelle', 'Capacité d\'écoute', 'Autonomie', 'Rigueur'],
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="skills" className="section-padding py-20 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12 text-white">
          Mes <span className="text-primary">Compétences</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                <div className="text-white">{category.icon}</div>
              </div>
              
              <h3 className="text-xl text-white mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-dark-700 text-gray-300 rounded-md text-sm hover:bg-primary hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {category.note && (
                <p className="text-sm text-gray-400 mt-3 italic">
                  {category.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Additional Skills Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">6+</div>
            <div className="text-gray-400">Apps iOS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">3+</div>
            <div className="text-gray-400">Années d'expérience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-gray-400">Autodidacte</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">∞</div>
            <div className="text-gray-400">Curiosité</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
