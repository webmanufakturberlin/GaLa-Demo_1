import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />
      <Hero />
      <ValueProposition />
      <Process />
      <Portfolio />
      <Testimonials />
      <Footer />
      <Chatbot />
    </div>
  );
}
