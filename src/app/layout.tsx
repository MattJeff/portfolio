import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { PersonJsonLd, WebSiteJsonLd, ProfessionalServiceJsonLd, FAQJsonLd } from '@/components/seo/JsonLd'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const siteUrl = 'https://mathishiguinen.fr'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#f97316',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mathis Higuinen - Développeur Full-Stack iOS & Web | Expert React, Swift, IA',
    template: '%s | Mathis Higuinen',
  },
  description: 'Mathis Higuinen, développeur Full-Stack avec 7+ ans d\'expérience. Expert iOS (Swift, SwiftUI), Web (React, Next.js), IA et Blockchain. 125+ projets livrés. Contactez-moi pour votre projet.',
  keywords: [
    'Mathis Higuinen',
    'développeur iOS',
    'développeur web',
    'développeur full-stack',
    'freelance développeur',
    'Swift',
    'SwiftUI',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'Django',
    'développeur France',
    'création application iOS',
    'création site web',
    'développeur SaaS',
    'intégration IA',
    'développeur blockchain',
    'Solana développeur',
  ],
  authors: [{ name: 'Mathis Higuinen', url: siteUrl }],
  creator: 'Mathis Higuinen',
  publisher: 'Mathis Higuinen',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'fr-FR': siteUrl,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Mathis Higuinen - Portfolio',
    title: 'Mathis Higuinen - Développeur Full-Stack iOS & Web',
    description: 'Développeur Full-Stack avec 7+ ans d\'expérience. Expert iOS, Web, IA et Blockchain. Transformez vos idées en produits performants.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mathis Higuinen - Développeur Full-Stack iOS & Web',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mathishiguinen',
    creator: '@mathishiguinen',
    title: 'Mathis Higuinen - Développeur Full-Stack iOS & Web',
    description: 'Développeur Full-Stack avec 7+ ans d\'expérience. Expert iOS, Web, IA et Blockchain.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#f97316' },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'technology',
  classification: 'Portfolio de développeur',
  verification: {
    google: 'votre-code-verification-google',
  },
  other: {
    'msapplication-TileColor': '#f97316',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Mathis Higuinen',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light' || (!theme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <PersonJsonLd />
        <WebSiteJsonLd />
        <ProfessionalServiceJsonLd />
        <FAQJsonLd />
      </head>
      <body className={`${inter.className} dark:bg-dark-900 dark:text-gray-100 bg-light-900 text-gray-900 antialiased transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
