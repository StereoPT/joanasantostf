import AboutMe from '@/components/AboutMe/AboutMe';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Team from '@/components/Team/Team';

const LandingPage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <AboutMe />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default LandingPage;
