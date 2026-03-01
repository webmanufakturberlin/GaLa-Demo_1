import { motion } from 'motion/react';
import { CheckCircle, MapPin, Leaf, Cuboid } from 'lucide-react';
import { useState, type Key } from 'react';
import SectionHeading from './ui/SectionHeading';
import CountUp from './ui/CountUp';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const boxes = [
  {
    title: 'Kundenzufriedenheit',
    number: 98,
    suffix: '%',
    desc: 'Schlüsselfertige Übergabe mit kompromissloser Zuverlässigkeit und höchstem Qualitätsanspruch.',
    icon: CheckCircle,
    colSpan: 'md:col-span-2',
    bg: 'bg-forest text-cream',
  },
  {
    title: 'Jahre Berliner Expertise',
    number: 15,
    suffix: '+',
    desc: 'Tiefes Verständnis für lokales Klima, Bodenbeschaffenheit und städtisches Erbe.',
    icon: MapPin,
    colSpan: 'md:col-span-1',
    bg: 'bg-sand text-forest',
  },
  {
    title: 'Ökologische Balance',
    number: 100,
    suffix: '%',
    desc: 'Förderung der Biodiversität durch nachhaltige Materialien und heimische Bepflanzung.',
    icon: Leaf,
    colSpan: 'md:col-span-1',
    bg: 'bg-cream text-forest border border-forest/10',
  },
  {
    title: 'Digitale 3D-Manufaktur',
    number: 0,
    suffix: '',
    desc: 'Erleben Sie den Luxus, Ihren zukünftigen Garten in fotorealistischem 3D zu durchschreiten, bevor der erste Spatenstich erfolgt.',
    icon: Cuboid,
    colSpan: 'md:col-span-2',
    bg: 'bg-bronze text-cream',
  },
];

function GlowCard({
  box,
  index,
}: {
  key?: Key;
  box: (typeof boxes)[number];
  index: number;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverBorderGradient
      as="div"
      containerClassName={`${box.colSpan}`}
      className="w-full h-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ y: -6, scale: 1.02 }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative p-10 rounded-3xl ${box.bg} shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col justify-between overflow-hidden cursor-default`}
      >
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.08), transparent 60%)`,
            }}
          />
        )}

        <box.icon className="w-10 h-10 mb-8 opacity-80 relative z-10" strokeWidth={1.5} />
        <div className="relative z-10">
          <h3 className="text-3xl font-serif mb-4 leading-snug">
            {box.number > 0 && <CountUp end={box.number} suffix={box.suffix} />}
            {box.number > 0 ? ' ' : ''}
            {box.title}
          </h3>
          <p className="font-sans text-sm leading-relaxed opacity-90">{box.desc}</p>
        </div>
      </motion.div>
    </HoverBorderGradient>
  );
}

export default function ValueProposition() {
  return (
    <section id="about" className="py-24 section-container relative z-10">
      <SectionHeading title="Was uns ausmacht" subtitle="Exzellenz in jedem Detail" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {boxes.map((box, i) => (
          <GlowCard key={i} box={box} index={i} />
        ))}
      </div>
    </section>
  );
}
