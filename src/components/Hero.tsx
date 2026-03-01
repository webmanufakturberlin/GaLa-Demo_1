import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 organic-mask">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1920&auto=format&fit=crop" 
          alt="Hero Landscape" 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-forest/40 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream leading-tight mb-6 drop-shadow-lg"
        >
          Gärten, die Geschichten erzählen.<br/>
          <span className="italic text-sand font-light">Ihr privates Refugium in Berlin.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-lg md:text-xl font-sans text-cream/90 uppercase tracking-widest"
        >
          Meisterhafter Landschaftsbau trifft auf zeitloses Design.
        </motion.p>
      </div>
    </section>
  );
}
