import Navbar from './components/Navbar';
import Splash from './components/Splash';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import QuoteCta from './components/QuoteCta';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import RequestPage from './pages/RequestPage';
import { AreasPage, SuburbPage } from './pages/AreaPages';
import { currentPath, isRequestPage } from './lib/site';
import { areaPageFor } from './lib/suburbs';

export default function App() {
  const area = areaPageFor(currentPath());
  if (area) {
    return (
      <>
        <Navbar />
        {area.kind === 'areas' ? <AreasPage /> : <SuburbPage suburb={area.suburb} />}
        <Footer />
      </>
    );
  }
  if (isRequestPage()) {
    return (
      <>
        <Navbar />
        <RequestPage />
        <Footer />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <Splash />
      <Hero />
      <Services />
      <Process />
      <Gallery />
      <Testimonials />
      <QuoteCta />
      <FAQ />
      <Footer />
    </>
  );
}
