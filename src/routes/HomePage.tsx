import { FC } from 'react'
import Page from 'src/layout/Page'
import HeroSection from 'src/layout/Sections/HomePage/HeroSection/HeroSection'
import OffersSection from 'src/layout/Sections/HomePage/OffersSection/OffersSection'
import AboutSection from 'src/layout/Sections/HomePage/AboutSection/AboutSection'
import OurProductsSection from 'src/layout/Sections/HomePage/OurProductsSection/OurProductsSection'
import OrganicSection from 'src/layout/Sections/HomePage/OrganicSection/OrganicSection'
import TestimonialsSection from 'src/layout/Sections/HomePage/TestimonialsSection/TestimonialsSection'
import EcoFriendlySection from 'src/layout/Sections/HomePage/EcoFriendlySection/EcoFriendlySection'
import NewsSection from 'src/layout/Sections/HomePage/NewsSection/NewsSection'

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