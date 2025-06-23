
import Hero from '../components/Hero';
import FeaturedCars from '../components/FeaturedCars';
import TrustSignals from '../components/TrustSignals';
import About from '../components/About';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FeaturedCars />
      <TrustSignals />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
