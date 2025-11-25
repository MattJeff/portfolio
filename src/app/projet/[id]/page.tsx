import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Calendar, User, Code2, Layers } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BreadcrumbJsonLd, ProjectJsonLd } from '@/components/seo/JsonLd'
import { getProject, getAllProjectIds } from '@/data/projects'

interface PageProps {
  params: Promise<{ id: string }>
}

// Générer les pages statiques pour tous les projets
export async function generateStaticParams() {
  const projectIds = getAllProjectIds()
  return projectIds.map((id) => ({ id }))
}

// Générer les metadata dynamiques pour chaque projet
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const project = getProject(id)

  if (!project) {
    return {
      title: 'Projet non trouvé',
      description: 'Le projet demandé n\'existe pas.',
    }
  }

  const shortDescription = project.description.split('\n')[0].substring(0, 160)

  return {
    title: project.title,
    description: shortDescription,
    keywords: [
      project.title,
      ...project.technologies.slice(0, 10),
      'projet développeur',
      'portfolio Mathis Higuinen',
    ],
    alternates: {
      canonical: `https://mathishiguinen.fr/projet/${id}`,
    },
    openGraph: {
      title: project.title,
      description: shortDescription,
      url: `https://mathishiguinen.fr/projet/${id}`,
      type: 'article',
      images: project.images[0] ? [
        {
          url: project.images[0],
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ] : [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: shortDescription,
      images: project.images[0] ? [project.images[0]] : ['/images/og-image.png'],
    },
  }
}

// Fonction pour extraire l'ID YouTube
function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/
  ]
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params
  const project = getProject(id)

  if (!project) {
    notFound()
  }

  const breadcrumbItems = [
    { name: 'Accueil', url: 'https://mathishiguinen.fr' },
    { name: 'Projets', url: 'https://mathishiguinen.fr/#projects' },
    { name: project.title, url: `https://mathishiguinen.fr/projet/${id}` },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ProjectJsonLd
        title={project.title}
        description={project.description.split('\n')[0]}
        url={`https://mathishiguinen.fr/projet/${id}`}
        image={project.images[0]}
        technologies={project.technologies}
        dateCreated={`${project.year}-01-01`}
      />
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="section-padding py-4 border-b border-dark-600">
          <Link href="/#projects" className="inline-flex items-center text-gray-400 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Retour aux projets
          </Link>
        </nav>

        {/* Project Header */}
        <article>
          <header className="section-padding py-12 bg-gradient-to-b from-dark-800/50 to-transparent">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-white mb-6">{project.title}</h1>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                  <time dateTime={project.year}>{project.year}</time>
                </div>
                <div className="flex items-center text-gray-400">
                  <User className="w-5 h-5 mr-2" aria-hidden="true" />
                  <span>{project.client}</span>
                </div>
              </div>

              {project.link && (
                <div className="mb-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center"
                  >
                    Voir le projet en ligne
                    <ExternalLink className="w-5 h-5 ml-2" aria-hidden="true" />
                  </a>
                </div>
              )}

              <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
                {project.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Project Image */}
              <figure className="relative mb-8">
                <div className="relative h-96 bg-gradient-to-br from-dark-700 to-dark-900 rounded-xl overflow-hidden border border-dark-600">
                  {project.images && project.images[0] ? (
                    <Image
                      src={project.images[0]}
                      alt={`Capture d'écran du projet ${project.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center p-8">
                        <Layers className="w-20 h-20 text-primary/30 mx-auto mb-4" aria-hidden="true" />
                        <p className="text-gray-500">Aperçu du projet</p>
                      </div>
                    </div>
                  )}
                </div>
              </figure>

              {/* YouTube Video Player */}
              {project.videoUrl && (() => {
                const videoId = getYouTubeId(project.videoUrl)
                return videoId ? (
                  <div className="mb-8">
                    <h2 className="text-xl text-white mb-4">Démonstration vidéo</h2>
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-xl border border-dark-600"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={`Démonstration vidéo du projet ${project.title}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </div>
                ) : null
              })()}

              {/* Technologies */}
              <section className="mt-8" aria-labelledby="technologies-heading">
                <h2 id="technologies-heading" className="text-xl text-white mb-4 flex items-center">
                  <Code2 className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />
                  Technologies Utilisées
                </h2>
                <ul className="flex flex-wrap gap-2" role="list">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="px-3 py-1.5 bg-dark-700 text-gray-300 rounded-md text-sm border border-dark-600"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </header>

          {/* Features Section */}
          <section className="section-padding py-12" aria-labelledby="features-heading">
            <div className="max-w-6xl mx-auto">
              <h2 id="features-heading" className="text-3xl text-white mb-8">
                Fonctionnalités <span className="text-primary">Principales</span>
              </h2>

              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="card hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="section-padding py-12 bg-dark-800/30" aria-labelledby="challenges-solutions-heading">
            <h2 id="challenges-solutions-heading" className="sr-only">Défis et Solutions</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Challenges */}
                <div>
                  <h3 className="text-3xl text-white mb-6">
                    Défis <span className="text-primary">Rencontrés</span>
                  </h3>
                  <ul className="space-y-4 text-gray-300" role="list">
                    {project.challenges.split('\n').filter(line => line.startsWith('-')).map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                        <span>{challenge.substring(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-3xl text-white mb-6">
                    Solution <span className="text-primary">Apportée</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>

        {/* CTA Section */}
        <section className="section-padding py-20" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl text-white mb-4">
              Intéressé par un projet similaire ?
            </h2>
            <p className="text-gray-400 mb-8">
              Je serais ravi de discuter de votre projet et de voir comment je peux vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Demander un devis
                <ExternalLink className="w-5 h-5 ml-2" aria-hidden="true" />
              </Link>
              <Link href="/#projects" className="btn-outline inline-flex items-center justify-center">
                <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
                Voir d'autres projets
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
