import { ReactElement } from 'react';

import AboutMe from '@/components/AboutMe/AboutMe';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Team from '@/components/Team/Team';
import Layout from '@/layout/Layout';
import { NextPageWithLayout } from '@/types/global';

const LandingPage: NextPageWithLayout = () => {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

LandingPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default LandingPage;
