'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#journey', label: 'Parcours' },
    { href: '#projects', label: 'Projets' },
    { href: '/freelance', label: 'Services Freelance', isPage: true },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPage?: boolean) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    if (isPage) {
      router.push(href)
      return
    }

    if (pathname === '/') {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      router.push('/' + href)
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'dark:bg-dark-900/95 bg-light-900/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <nav className="section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center font-bold text-xl text-white">
              MH
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isPage)}
                className="dark:text-gray-300 text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <Link
              href="/contact"
              className="btn-primary"
            >
              Contact & Devis
            </Link>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="dark:text-gray-300 text-gray-700 hover:text-primary transition-colors p-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full dark:bg-dark-800 bg-light-800 shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isPage)}
                  className="dark:text-gray-300 text-gray-700 hover:text-primary transition-colors duration-200 py-2 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/contact"
                className="btn-primary text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact & Devis
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
