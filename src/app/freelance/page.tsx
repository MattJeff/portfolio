import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FreelanceHero from '@/components/freelance/FreelanceHero'
import FreelanceServices from '@/components/freelance/FreelanceServices'
import FreelanceSkills from '@/components/freelance/FreelanceSkills'
import FreelancePortfolio from '@/components/freelance/FreelancePortfolio'
import FreelancePricing from '@/components/freelance/FreelancePricing'
import FreelanceContact from '@/components/freelance/FreelanceContact'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services Freelance - Développeur Full-Stack Expert IA & Blockchain',
  description: 'Développeur Full-Stack Expert IA & Blockchain | SaaS, Extensions Chrome, Bots de Trading | 7+ ans d\'expérience, 125+ projets livrés. Tarifs à partir de 500€.',
  keywords: [
    'freelance développeur',
    'développeur full-stack freelance',
    'tarif développeur',
    'création SaaS',
    'développeur IA',
    'développeur blockchain',
    'bot trading Solana',
    'extension Chrome développeur',
  ],
  alternates: {
    canonical: 'https://mathishiguinen.fr/freelance',
  },
  openGraph: {
    title: 'Services Freelance - Mathis Higuinen | Développeur Expert',
    description: '7+ ans d\'expérience, 125+ projets livrés. Développement iOS, Web, SaaS, IA, Blockchain. Demandez un devis gratuit.',
    url: 'https://mathishiguinen.fr/freelance',
    images: [
      {
        url: '/images/og-freelance.png',
        width: 1200,
        height: 630,
        alt: 'Mathis Higuinen - Services Freelance',
      },
    ],
  },
  twitter: {
    title: 'Services Freelance - Mathis Higuinen',
    description: '7+ ans d\'expérience, 125+ projets livrés. Développement iOS, Web, SaaS, IA, Blockchain.',
    images: ['/images/og-freelance.png'],
  },
}

export default function FreelancePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <FreelanceHero />
        <FreelanceServices />
        <FreelanceSkills />
        <FreelancePortfolio />
        <FreelancePricing />
        <FreelanceContact />
      </main>
      <Footer />
    </>
  )
}
