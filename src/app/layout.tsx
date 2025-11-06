import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mathis Higuinen - Développeur iOS & Web',
  description: 'Portfolio de Mathis Higuinen, développeur iOS et Web spécialisé dans la création d\'applications mobiles intuitives et d\'extensions web innovantes.',
  keywords: 'développeur iOS, développeur web, Swift, SwiftUI, JavaScript, React, portfolio',
  authors: [{ name: 'Mathis Higuinen' }],
  openGraph: {
    title: 'Mathis Higuinen - Développeur iOS & Web',
    description: 'Je crée des applications mobiles intuitives et des extensions web innovantes pour transformer vos idées en produits performants.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.className} bg-dark-900 text-gray-100`}>
        {children}
      </body>
    </html>
  )
}
