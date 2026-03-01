import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Leistungen from './components/Leistungen';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';
import PageLoader from './components/PageLoader';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <PageLoader />
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <ValueProposition />
      <Leistungen />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}
