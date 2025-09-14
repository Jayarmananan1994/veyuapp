import Header from '../components/Header';
import Hero from '../components/Hero';
import StyleSection from '../components/StyleSection';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <StyleSection />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}

export default Homepage;