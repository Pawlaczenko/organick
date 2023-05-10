import { FC } from 'react'
import Page from 'src/layout/Page'
import SectionBanner from 'src/components/SectionBanner'
import AboutPicture from 'src/assets/images/section-about.jpg';
import AboutSection from 'src/layout/Sections/AboutPage/AboutSection';

const AboutPage : FC = () => {
  return (
    <Page>
        <SectionBanner title='About Us' image={AboutPicture} />
        <AboutSection />
    </Page>
  )
}

export default AboutPage