import Navbar from './components/Navbar';
import Splash from './components/Splash';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import QuoteForm from './components/QuoteForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import RequestPage from './pages/RequestPage';
import { isRequestPage } from './lib/site';

export default function App() {
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
      <QuoteForm />
      <FAQ />
      <Footer />
    </>
  );
}
