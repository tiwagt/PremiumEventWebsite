import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Portfolio from '../components/sections/Portfolio';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import About from '../components/sections/About';
import SocialProof from '../components/sections/SocialProof';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Testimonials />
        <About />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;