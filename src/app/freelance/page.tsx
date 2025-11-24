import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FreelanceHero from '@/components/freelance/FreelanceHero'
import FreelanceServices from '@/components/freelance/FreelanceServices'
import FreelanceSkills from '@/components/freelance/FreelanceSkills'
import FreelancePortfolio from '@/components/freelance/FreelancePortfolio'
import FreelancePricing from '@/components/freelance/FreelancePricing'
import FreelanceTestimonials from '@/components/freelance/FreelanceTestimonials'
import FreelanceContact from '@/components/freelance/FreelanceContact'

export const metadata = {
  title: 'Services Freelance - Mathis Higuinen | Développeur Full-Stack Expert',
  description: 'Développeur Full-Stack Expert IA & Blockchain | SaaS, Extensions Chrome, Bots de Trading | 7+ ans d\'expérience, 125+ projets livrés',
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
        <FreelanceTestimonials />
        <FreelanceContact />
      </main>
      <Footer />
    </>
  )
}
