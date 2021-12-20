import * as React from 'react';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import { MainLayoutRoot, MainLayoutWrapper } from '../src/styles/layoutStyled';
import Navbar from '../src/components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from '../src/components/Services';
import About from '../src/components/About';
import GetStarted from '../src/components/GetStarted';

export default function Index() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <MainLayoutRoot>
      <Navbar />
      <MainLayoutWrapper>
        <Header />
        <Services />
        <About />
        <GetStarted />
      </MainLayoutWrapper>

      <Footer />
    </MainLayoutRoot>
  );
}
