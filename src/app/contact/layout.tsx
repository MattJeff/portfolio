import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Demandez un Devis Gratuit',
  description: 'Contactez Mathis Higuinen pour votre projet de développement iOS ou Web. Demandez un devis gratuit, réponse sous 24h. Téléphone : 06 74 57 86 68.',
  keywords: [
    'contact développeur',
    'devis développement iOS',
    'devis développement web',
    'freelance développeur contact',
    'Mathis Higuinen contact',
  ],
  alternates: {
    canonical: 'https://mathishiguinen.fr/contact',
  },
  openGraph: {
    title: 'Contactez Mathis Higuinen - Devis Gratuit',
    description: 'Demandez un devis gratuit pour votre projet. Réponse garantie sous 24h. Développeur Full-Stack iOS & Web.',
    url: 'https://mathishiguinen.fr/contact',
    images: [
      {
        url: '/images/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Contactez Mathis Higuinen',
      },
    ],
  },
  twitter: {
    title: 'Contactez Mathis Higuinen - Devis Gratuit',
    description: 'Demandez un devis gratuit pour votre projet. Réponse garantie sous 24h.',
    images: ['/images/og-contact.png'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
