import { motion } from 'motion/react';

const steps = [
  {
    title: "Erstgespräch",
    desc: "Wir hören zu, verstehen Ihre Vision und analysieren das Potenzial Ihres Grundstücks.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Digitale Vision",
    desc: "Entwicklung eines maßgeschneiderten 3D-Konzepts, das Architektur und Natur verschmelzen lässt.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Handwerkliche Realisierung",
    desc: "Präzise Umsetzung durch unsere Meisterhandwerker mit feinsten, nachhaltigen Materialien.",
    img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Langfristige Pflege",
    desc: "Diskrete und fachgerechte Betreuung, damit Ihr Refugium über Generationen hinweg gedeiht.",
    img: "https://images.unsplash.com/photo-1416879598555-220b8fa2f408?q=80&w=400&auto=format&fit=crop"
  }
];

export default function Process() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-serif text-forest mb-4">Die Craftsmanship Methode</h2>
        <p className="text-forest/70 font-sans uppercase tracking-widest text-sm">Von der Vision zur Wirklichkeit</p>
      </div>
      
      <div className="space-y-24 relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-bronze/20 -translate-x-1/2 hidden md:block"></div>
        
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={`flex-1 flex ${i % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'} w-full`}>
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cream shadow-xl img-hover-container">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover img-hover-effect" referrerPolicy="no-referrer" />
              </div>
            </div>
            
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bronze z-10 shadow-[0_0_0_8px_var(--color-cream)]"></div>
            
            <div className={`flex-1 text-center md:text-left ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
              <span className="text-bronze font-serif text-xl italic mb-2 block">Schritt 0{i + 1}</span>
              <h3 className="text-2xl md:text-3xl font-serif text-forest mb-4">{step.title}</h3>
              <p className="text-forest/80 font-sans leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
