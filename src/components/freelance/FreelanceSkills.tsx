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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stack Technique
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maîtrise complète de 10+ technologies en production
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Category Title */}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
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
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-700">Technologies maîtrisées</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">7+</div>
              <div className="text-gray-700">Années d'expérience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">125+</div>
              <div className="text-gray-700">Projets en production</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
