import Hero from '../components/Hero';
import WhySmartSpecs from '../components/whySmartSpecs';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import HowToOrder from '../components/Steps';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <WhySmartSpecs />
      <Products/>
      <HowToOrder />
      <Testimonials />      
      <ContactSection />
      {/* <Footer /> */}
      {/* Next sections go here */}
    </>
  );
};

export default Home;