import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ShinyButton } from './ui/shiny-button';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0 organic-mask" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1920&auto=format&fit=crop"
          alt="Luxuriöser Garten in Berlin"
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-forest/40 mix-blend-multiply"></div>
      </motion.div>

      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 text-center px-4 section-container mt-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream leading-tight mb-6 drop-shadow-lg"
        >
          Gärten, die Geschichten erzählen.
          <br />
          <span className="italic text-sand font-light">Ihr privates Refugium in Berlin.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-lg md:text-xl font-sans text-cream/90 uppercase tracking-widest mb-10"
        >
          Meisterhafter Landschaftsbau trifft auf zeitloses Design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <ShinyButton onClick={() => scrollTo('contact')}>
            Beratung anfragen
          </ShinyButton>
          <ShinyButton onClick={() => scrollTo('portfolio')}>
            Portfolio ansehen
          </ShinyButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
