import { FC } from 'react'
import Page from '../layout/Page'
import HeroSection from '../components/Sections/HeroSection/HeroSection'
import OffersSection from '../components/Sections/OffersSection/OffersSection'
import AboutSection from '../components/Sections/AboutSection/AboutSection'
import OurProductsSection from '../components/Sections/OurProductsSection/OurProductsSection'
import OrganicSection from '../components/Sections/OrganicSection/OrganicSection'

const HomePage : FC = () => {
  return (
    <Page>
      <HeroSection />
      <OffersSection />
      <AboutSection />
      <OurProductsSection />
      <OrganicSection />
    </Page>
  )
}

export default HomePage