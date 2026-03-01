import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { MessageSquare, Monitor, Hammer, Sprout } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const steps = [
  {
    title: 'Erstgespräch',
    desc: 'Wir hören zu, verstehen Ihre Vision und analysieren das Potenzial Ihres Grundstücks.',
    icon: MessageSquare,
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop',
    detail: 'Gemeinsam erkunden wir Ihre Wünsche, den Charakter Ihres Grundstücks und die Möglichkeiten, die sich bieten.',
  },
  {
    title: 'Digitale Vision',
    desc: 'Entwicklung eines maßgeschneiderten 3D-Konzepts, das Architektur und Natur verschmelzen lässt.',
    icon: Monitor,
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop',
    detail: 'Fotorealistische 3D-Visualisierungen lassen Sie Ihren zukünftigen Garten bereits vor dem ersten Spatenstich erleben.',
  },
  {
    title: 'Handwerkliche Realisierung',
    desc: 'Präzise Umsetzung durch unsere Meisterhandwerker mit feinsten, nachhaltigen Materialien.',
    icon: Hammer,
    img: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=400&auto=format&fit=crop',
    detail: 'Unsere Meisterhandwerker verwandeln den Plan in Realität – mit Liebe zum Detail und erlesenen Materialien.',
  },
  {
    title: 'Langfristige Pflege',
    desc: 'Diskrete und fachgerechte Betreuung, damit Ihr Refugium über Generationen hinweg gedeiht.',
    icon: Sprout,
    img: 'https://images.unsplash.com/photo-1416879598555-220b8fa2f408?q=80&w=400&auto=format&fit=crop',
    detail: 'Mit unserer 5-Jahres-Anwachsgarantie und regelmäßiger Pflege bleibt Ihr Garten dauerhaft in Bestform.',
  },
];

function StepCard({ step, index, isActive, onClick }: {
  key?: number;
  step: typeof steps[number];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-80px' });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onClick}
      className="cursor-pointer group"
    >
      {/* Desktop Card */}
      <div className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
        isActive
          ? 'bg-forest shadow-[0_8px_40px_rgba(146,108,68,0.2)] scale-[1.02]'
          : 'bg-cream hover:bg-white shadow-md hover:shadow-lg'
      }`}>
        {/* Image - expands when active */}
        <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'h-48' : 'h-0'}`}>
          <img
            src={step.img}
            alt={step.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-6">
          {/* Step number + Icon */}
          <div className="flex items-center gap-4 mb-4">
            <div className={`relative w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
              isActive
                ? 'bg-bronze text-cream shadow-[0_0_20px_rgba(146,108,68,0.4)]'
                : 'bg-forest/10 text-forest group-hover:bg-bronze/20'
            }`}>
              <span className="text-sm font-sans font-bold">{String(index + 1).padStart(2, '0')}</span>
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-bronze"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </div>
            <Icon className={`w-6 h-6 transition-colors duration-300 ${
              isActive ? 'text-bronze' : 'text-forest/40 group-hover:text-bronze/60'
            }`} strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h3 className={`text-xl font-serif font-semibold mb-2 transition-colors duration-300 ${
            isActive ? 'text-cream' : 'text-forest'
          }`}>
            {step.title}
          </h3>

          {/* Description */}
          <p className={`font-sans text-sm leading-relaxed transition-colors duration-300 ${
            isActive ? 'text-cream/80' : 'text-forest/60'
          }`}>
            {step.desc}
          </p>

          {/* Expanded detail text */}
          <motion.div
            initial={false}
            animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm leading-relaxed text-cream/70 mt-3 pt-3 border-t border-cream/20">
              {step.detail}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 100]);

  return (
    <section ref={sectionRef} id="process" className="py-32 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading title="Der Weg zu deiner Gartenoase" subtitle="Von der Vision zur Wirklichkeit" />

        {/* Desktop: Horizontal timeline */}
        <div className="hidden lg:block relative mt-16">
          {/* Progress line */}
          <div className="absolute top-6 left-[6%] right-[6%] h-[2px] bg-forest/10 rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-bronze via-bronze to-bronze/40 rounded-full origin-left"
              style={{ scaleX: useTransform(lineProgress, (v) => Math.min(v / 100, 1)) }}
            />
          </div>

          {/* Step markers on the line */}
          <div className="flex justify-between mb-12 relative">
            {steps.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`relative w-12 h-12 rounded-full flex items-center justify-center font-sans text-sm font-bold transition-all duration-500 z-10 ${
                  i <= activeStep
                    ? 'bg-bronze text-cream shadow-[0_0_15px_rgba(146,108,68,0.3)]'
                    : 'bg-cream text-forest/40 border-2 border-forest/10 hover:border-bronze/40'
                }`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                {String(i + 1).padStart(2, '0')}
                {i === activeStep && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-bronze/50"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <StepCard
                key={i}
                step={step}
                index={i}
                isActive={i === activeStep}
                onClick={() => setActiveStep(i)}
              />
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-forest/10">
            <motion.div
              className="w-full bg-gradient-to-b from-bronze to-bronze/30 rounded-full origin-top"
              style={{
                height: useTransform(lineProgress, (v) => `${Math.min(v, 100)}%`),
              }}
            />
          </div>

          <div className="space-y-8 pl-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === activeStep;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  onClick={() => setActiveStep(i)}
                  className="relative cursor-pointer"
                >
                  {/* Circle marker on the line */}
                  <div className={`absolute -left-[52px] top-6 w-10 h-10 rounded-full flex items-center justify-center font-sans text-xs font-bold transition-all duration-400 z-10 ${
                    i <= activeStep
                      ? 'bg-bronze text-cream shadow-[0_0_12px_rgba(146,108,68,0.3)]'
                      : 'bg-cream text-forest/40 border-2 border-forest/10'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Card */}
                  <div className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                    isActive
                      ? 'bg-forest shadow-lg'
                      : 'bg-cream shadow-md'
                  }`}>
                    {/* Image */}
                    <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'h-40' : 'h-0'}`}>
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className={`w-5 h-5 ${isActive ? 'text-bronze' : 'text-forest/40'}`} strokeWidth={1.5} />
                        <h3 className={`text-lg font-serif font-semibold ${isActive ? 'text-cream' : 'text-forest'}`}>
                          {step.title}
                        </h3>
                      </div>
                      <p className={`font-sans text-sm leading-relaxed ${isActive ? 'text-cream/80' : 'text-forest/60'}`}>
                        {step.desc}
                      </p>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="font-sans text-sm leading-relaxed text-cream/70 mt-3 pt-3 border-t border-cream/20"
                        >
                          {step.detail}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
