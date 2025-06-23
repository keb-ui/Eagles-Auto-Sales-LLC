
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedCars from '../components/FeaturedCars';
import TrustSignals from '../components/TrustSignals';
import Reviews from '../components/Reviews';
import About from '../components/About';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedCars />
      <TrustSignals />
      <Reviews />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
