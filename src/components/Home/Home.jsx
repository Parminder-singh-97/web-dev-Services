import AboutSection from "./about-section/About-sec";
import LogoSlider from "./about-section/LogoSlider";
import BestCompanySection from "./best-Company/Best-company";
import ClientTestimonials from "./clients-say/Client-say";
import FaqSections from "./faq-section/Faq-sec";
import Hero from "./hero/Hero";
import WhyChooseUS from "./Why-chooseUS/WhyChoose-US";
import WorkCount from "./Why-chooseUS/WorkCount";

const Home = () => {
  return (
    <>
      <Hero/>
      <LogoSlider/>
      <BestCompanySection/>  
      <AboutSection/>
      <WhyChooseUS/> 
      <ClientTestimonials/>
      {/* <WorkCount/>  */}
      <FaqSections/>
    </>
  );
}

export default Home
