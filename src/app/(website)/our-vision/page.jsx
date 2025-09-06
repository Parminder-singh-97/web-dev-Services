import ContactSection from '@/components/ContactUs/ContactUs'
import OurVisionSection from '@/components/About/Our-vision'
import Vision_header from '@/components/About/Vision-header'
import WorkCount from '@/components/Home/Why-chooseUS/WorkCount'
import React from 'react'

const page = () => {
  return (
    <>
    <Vision_header/>
    <OurVisionSection/>
    {/* <WorkCount/> */}
    <ContactSection/>
      
    </>
  )
}

export default page
