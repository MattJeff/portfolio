// Composants JSON-LD pour le SEO
// Ces données structurées aident Google à comprendre le contenu

export function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://mathishiguinen.fr/#person',
    name: 'Mathis Higuinen',
    givenName: 'Mathis',
    familyName: 'Higuinen',
    url: 'https://mathishiguinen.fr',
    image: 'https://mathishiguinen.fr/images/mathis-higuinen.jpg',
    jobTitle: 'Développeur Full-Stack iOS & Web',
    description: 'Développeur Full-Stack avec 7+ ans d\'expérience spécialisé en iOS (Swift, SwiftUI), Web (React, Next.js) et IA/Blockchain.',
    email: 'mhiguinen235@gmail.com',
    telephone: '+33674578668',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
      addressLocality: 'France',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Graduate & Bachelor iOS/Android Developer',
    },
    knowsAbout: [
      'Développement iOS',
      'Swift',
      'SwiftUI',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Python',
      'Django',
      'Blockchain',
      'Solana',
      'Intelligence Artificielle',
      'Machine Learning',
    ],
    sameAs: [
      'https://github.com/mathishiguinen',
      'https://linkedin.com/in/mathishiguinen',
      'https://twitter.com/mathishiguinen',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebSiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://mathishiguinen.fr/#website',
    url: 'https://mathishiguinen.fr',
    name: 'Mathis Higuinen - Portfolio Développeur Full-Stack',
    description: 'Portfolio de Mathis Higuinen, développeur Full-Stack iOS & Web avec 7+ ans d\'expérience. Spécialisé en Swift, React, Next.js, IA et Blockchain.',
    publisher: {
      '@id': 'https://mathishiguinen.fr/#person',
    },
    inLanguage: 'fr-FR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://mathishiguinen.fr/?s={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ProfessionalServiceJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://mathishiguinen.fr/#service',
    name: 'Mathis Higuinen - Développement Full-Stack',
    url: 'https://mathishiguinen.fr',
    description: 'Services de développement Full-Stack : applications iOS, sites web, SaaS, extensions Chrome, bots de trading, intégration IA.',
    image: 'https://mathishiguinen.fr/images/og-image.png',
    telephone: '+33674578668',
    email: 'mhiguinen235@gmail.com',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    serviceType: [
      'Développement iOS',
      'Développement Web',
      'Développement SaaS',
      'Extensions Chrome',
      'Bots de Trading',
      'Intégration IA',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de développement',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Développement Application iOS',
            description: 'Création d\'applications iOS natives avec Swift et SwiftUI',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Développement Web Full-Stack',
            description: 'Sites web et applications avec React, Next.js, Node.js',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Développement SaaS',
            description: 'Plateformes SaaS complètes avec authentification, paiements et analytics',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '125',
      bestRating: '5',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface ProjectJsonLdProps {
  title: string
  description: string
  url: string
  image?: string
  technologies: string[]
  dateCreated: string
}

export function ProjectJsonLd({ title, description, url, image, technologies, dateCreated }: ProjectJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description: description,
    url: url,
    image: image || 'https://mathishiguinen.fr/images/og-image.png',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web, iOS',
    author: {
      '@id': 'https://mathishiguinen.fr/#person',
    },
    dateCreated: dateCreated,
    keywords: technologies.join(', '),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function FAQJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quels sont les services de développement proposés par Mathis Higuinen ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mathis Higuinen propose des services de développement iOS (Swift, SwiftUI), développement web (React, Next.js, Node.js), création de SaaS, extensions Chrome, bots de trading et intégration d\'IA.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle est l\'expérience de Mathis Higuinen en développement ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mathis Higuinen possède plus de 7 ans d\'expérience en développement logiciel, avec plus de 125 projets livrés. Il est diplômé Graduate & Bachelor en développement iOS/Android.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment contacter Mathis Higuinen pour un projet ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vous pouvez contacter Mathis Higuinen via le formulaire de contact sur le site, par email à mhiguinen235@gmail.com, par téléphone au 06 74 57 86 68, ou en réservant un appel de 30 minutes via Calendly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quelles technologies maîtrise Mathis Higuinen ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mathis maîtrise Swift, SwiftUI, React, Next.js, TypeScript, Node.js, Python, Django, PostgreSQL, Supabase, Stripe, ainsi que les technologies blockchain (Solana) et IA.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
