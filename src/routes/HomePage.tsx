import { FC } from 'react'
import Page from 'src/layout/Page'
import HeroSection from 'src/layout/Sections/HomePage/HeroSection'
import OffersSection from 'src/layout/Sections/HomePage/OffersSection'
import AboutSection from 'src/layout/Sections/HomePage/AboutSection'
import OurProductsSection from 'src/layout/Sections/HomePage/OurProductsSection'
import OrganicSection from 'src/layout/Sections/HomePage/OrganicSection'
import TestimonialsSection from 'src/layout/Sections/HomePage/TestimonialsSection'
import EcoFriendlySection from 'src/layout/Sections/HomePage/EcoFriendlySection'
import NewsSection from 'src/layout/Sections/HomePage/NewsSection'

const HomePage : FC = () => {
  return (
    <Page>
      <HeroSection />
      <OffersSection />
      <AboutSection />
      <OurProductsSection />
      <TestimonialsSection />
      <OrganicSection />
      <EcoFriendlySection />
      <NewsSection />
    </Page>
  )
}

export default HomePage