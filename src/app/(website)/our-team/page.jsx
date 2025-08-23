import ContactSection from '@/components/ContactUs/ContactUs'
import OurTeamSection from '@/components/About/Our-team'
import Team_header from '@/components/About/Team-header'
import WorkCount from '@/components/Home/Why-chooseUS/WorkCount'
import React from 'react'

const page = () => {
  return (
    <>
    <Team_header/>
    <OurTeamSection/>
    <WorkCount/>
    <ContactSection/>
      
    </>
  )
}

export default page
