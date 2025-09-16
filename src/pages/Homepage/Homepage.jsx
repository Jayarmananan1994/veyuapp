import Header from '../../components/Header';
import Hero from './Hero';
import StyleSection from './StyleSection';
import Features from './Features';
import HowItWorks from './HowItWorks';
import CTA from './CTA';
import Footer from '../../components/Footer';

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