import { motion } from 'motion/react';
import SectionHeading from './ui/SectionHeading';

const steps = [
  {
    title: 'Erstgespräch',
    desc: 'Wir hören zu, verstehen Ihre Vision und analysieren das Potenzial Ihres Grundstücks.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'Digitale Vision',
    desc: 'Entwicklung eines maßgeschneiderten 3D-Konzepts, das Architektur und Natur verschmelzen lässt.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'Handwerkliche Realisierung',
    desc: 'Präzise Umsetzung durch unsere Meisterhandwerker mit feinsten, nachhaltigen Materialien.',
    img: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'Langfristige Pflege',
    desc: 'Diskrete und fachgerechte Betreuung, damit Ihr Refugium über Generationen hinweg gedeiht.',
    img: 'https://images.unsplash.com/photo-1416879598555-220b8fa2f408?q=80&w=400&auto=format&fit=crop',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <SectionHeading title="Der Weg zu deiner Gartenoase" subtitle="Von der Vision zur Wirklichkeit" />

        {/* Horizontal/Oblique Flow Layout */}
        <div className="relative mt-16">
          {/* Connecting Line - Diagonal */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-bronze/20 transform -rotate-3 origin-center"></div>

          {/* Steps in horizontal/oblique layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col items-center text-center relative"
                style={{
                  transform: `translateY(${i % 2 === 0 ? '0' : '2rem'})`
                }}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-bronze text-cream flex items-center justify-center font-serif text-lg font-semibold z-10 shadow-lg">
                  {i + 1}
                </div>

                {/* Image */}
                <div className="w-full aspect-square max-w-[280px] rounded-2xl overflow-hidden border-4 border-cream shadow-xl img-hover-container group mb-6">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover img-hover-effect group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl lg:text-2xl font-serif text-forest font-semibold">{step.title}</h3>
                  <p className="text-forest/80 font-sans text-sm leading-relaxed">{step.desc}</p>
                </div>

                {/* Arrow between steps (except last one) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/3 text-bronze/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
