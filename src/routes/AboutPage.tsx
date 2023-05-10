import { FC } from 'react'
import Page from 'src/layout/Page'
import SectionBanner from 'src/components/SectionBanner/SectionBanner'
import AboutPicture from 'src/assets/images/section-about.jpg';

const AboutPage : FC = () => {
  return (
    <Page>
        <SectionBanner title='About Us' image={AboutPicture} />
    </Page>
  )
}

export default AboutPage