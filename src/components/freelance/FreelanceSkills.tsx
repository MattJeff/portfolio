'use client'

const skillCategories = [
  {
    category: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React 19', level: 100 },
      { name: 'Next.js 15', level: 100 },
      { name: 'TypeScript', level: 100 },
      { name: 'TailwindCSS', level: 100 },
      { name: 'React Native', level: 95 },
    ]
  },
  {
    category: 'Backend',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 100 },
      { name: 'Go (Golang)', level: 90 },
      { name: 'Python', level: 95 },
      { name: 'FastAPI', level: 95 },
      { name: 'PHP 8.4', level: 85 },
    ]
  },
  {
    category: 'Databases',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'PostgreSQL', level: 100 },
      { name: 'MongoDB', level: 100 },
      { name: 'Redis', level: 95 },
      { name: 'TimescaleDB', level: 85 },
      { name: 'Supabase', level: 100 },
    ]
  },
  {
    category: 'DevOps & Cloud',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Docker', level: 100 },
      { name: 'Kubernetes', level: 90 },
      { name: 'GitHub Actions', level: 95 },
      { name: 'Prometheus', level: 85 },
      { name: 'AWS', level: 85 },
    ]
  },
  {
    category: 'IA & Machine Learning',
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'OpenAI (GPT-4)', level: 100 },
      { name: 'Whisper', level: 100 },
      { name: 'PyTorch', level: 85 },
      { name: 'Ollama', level: 90 },
      { name: 'LangChain', level: 90 },
    ]
  },
  {
    category: 'Blockchain & Web3',
    color: 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'Solana Web3.js', level: 100 },
      { name: 'Jupiter', level: 100 },
      { name: 'Jito (MEV)', level: 100 },
      { name: 'Raydium', level: 90 },
      { name: 'Ethers.js', level: 80 },
    ]
  },
]

export default function FreelanceSkills() {
  return (
    <section className="py-20 bg-dark-800/50">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stack Technique
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Maîtrise complète de 10+ technologies en production
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-dark-800 rounded-2xl p-8 border border-dark-600 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              {/* Category Title */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary">
                  {category.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-dark-800 border border-primary/30 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-300">Technologies maîtrisées</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">7+</div>
              <div className="text-gray-300">Années d'expérience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-300">Projets en production</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
