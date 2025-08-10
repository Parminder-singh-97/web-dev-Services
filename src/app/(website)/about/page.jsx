import AboutUs_Header from '@/components/About/About-Banner'
import About_main from '@/components/About/About-main'
import OurCommitment from '@/components/About/About-OurCommitment '
import We_offer_section from '@/components/About/About-We-offer'
import ContactSection from '@/components/About/contactUs'
import WorkCount from '@/components/Home/Why-chooseUS/WorkCount'
import React from 'react'

const AboutUs = () => {
  return (
    <>
      <AboutUs_Header/>
      <About_main/>
      <We_offer_section/>
      <OurCommitment/>
      <WorkCount/>
      <ContactSection/>
      
    </>
  )
}

export default AboutUs
