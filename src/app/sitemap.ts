import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mathishiguinen.fr'

  // Liste des projets pour générer les URLs dynamiques
  const projects = [
    'skillforge',
    'portfolio',
    'solana-trading-bot',
    'localforge-ai',
    'learning-english',
    'romane-app',
    'squizer-api',
    'solovault'
  ]

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projet/${project}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/freelance`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...projectUrls,
  ]
}
