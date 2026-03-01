import { motion, useAnimation } from 'motion/react';
import { CheckCircle, MapPin, Leaf, ShieldCheck, UserCheck, Star } from 'lucide-react';
import { useState, type Key, type ComponentType } from 'react';
import SectionHeading from './ui/SectionHeading';
import CountUp from './ui/CountUp';

// Each icon gets a unique hover animation
const iconAnimations: Record<string, { hover: object; tap?: object }> = {
  CheckCircle: {
    hover: { scale: [1, 1.3, 1.1], rotate: [0, 10, -10, 0], transition: { duration: 0.6, ease: 'easeInOut' } },
  },
  MapPin: {
    hover: { y: [0, -14, 0, -6, 0], transition: { duration: 0.7, ease: 'easeOut' } },
  },
  Leaf: {
    hover: { rotate: [0, -20, 15, -10, 5, 0], scale: [1, 1.15, 1], transition: { duration: 0.8, ease: 'easeInOut' } },
  },
  ShieldCheck: {
    hover: { x: [0, -4, 4, -3, 3, 0], transition: { duration: 0.5, ease: 'easeInOut' } },
  },
  Star: {
    hover: { rotate: 360, scale: [1, 1.2, 1], transition: { duration: 0.8, ease: 'easeInOut' } },
  },
  UserCheck: {
    hover: { x: [0, 8, 0], scale: [1, 1.15, 1], transition: { duration: 0.5, ease: 'easeOut' } },
  },
};

// Unique entrance directions for each card
const entranceVariants = [
  { initial: { opacity: 0, x: -80, rotate: -5 }, whileInView: { opacity: 1, x: 0, rotate: 0 } },
  { initial: { opacity: 0, y: 60, scale: 0.8 }, whileInView: { opacity: 1, y: 0, scale: 1 } },
  { initial: { opacity: 0, x: 80, rotate: 5 }, whileInView: { opacity: 1, x: 0, rotate: 0 } },
  { initial: { opacity: 0, y: -50, scale: 0.85 }, whileInView: { opacity: 1, y: 0, scale: 1 } },
  { initial: { opacity: 0, x: -60, y: 40 }, whileInView: { opacity: 1, x: 0, y: 0 } },
  { initial: { opacity: 0, scale: 0.7, rotate: -3 }, whileInView: { opacity: 1, scale: 1, rotate: 0 } },
];

const boxes = [
  {
    title: 'Kundenzufriedenheit',
    number: 98,
    suffix: '%',
    desc: 'Schlüsselfertige Übergabe mit kompromissloser Zuverlässigkeit und höchstem Qualitätsanspruch.',
    icon: CheckCircle,
    iconName: 'CheckCircle',
    colSpan: 'md:col-span-2',
    bg: 'bg-cream border-forest/10',
    hoverBg: 'hover:bg-white',
    iconColor: 'text-forest/70',
    accentColor: 'from-forest/5 to-transparent',
  },
  {
    title: 'Jahre Berliner Expertise',
    number: 15,
    suffix: '+',
    desc: 'Tiefes Verständnis für lokales Klima, Bodenbeschaffenheit und städtisches Erbe.',
    icon: MapPin,
    iconName: 'MapPin',
    colSpan: 'md:col-span-1',
    bg: 'bg-sand/30 border-bronze/15',
    hoverBg: 'hover:bg-sand/50',
    iconColor: 'text-bronze/70',
    accentColor: 'from-bronze/5 to-transparent',
  },
  {
    title: 'Ökologische Balance',
    number: 100,
    suffix: '%',
    desc: 'Förderung der Biodiversität durch nachhaltige Materialien und heimische Bepflanzung.',
    icon: Leaf,
    iconName: 'Leaf',
    colSpan: 'md:col-span-1',
    bg: 'bg-cream border-forest/10',
    hoverBg: 'hover:bg-white',
    iconColor: 'text-forest/60',
    accentColor: 'from-forest/5 to-transparent',
  },
  {
    title: 'Garantierte Pflege',
    number: 5,
    suffix: ' Jahre',
    desc: 'Sorgenfreie Anwachsgarantie und intensive Betreuung in den ersten entscheidenden Jahren.',
    icon: ShieldCheck,
    iconName: 'ShieldCheck',
    colSpan: 'md:col-span-1',
    bg: 'bg-sand/20 border-forest/10',
    hoverBg: 'hover:bg-sand/40',
    iconColor: 'text-forest/60',
    accentColor: 'from-forest/5 to-transparent',
  },
  {
    title: 'Premium Handwerkskunst',
    number: 100,
    suffix: '%',
    desc: 'Ausschließliche Verwendung von erlesenen Natursteinen und kompromisslose Verarbeitungsqualität bei jedem Schnitt.',
    icon: Star,
    iconName: 'Star',
    colSpan: 'md:col-span-1',
    bg: 'bg-cream border-bronze/15',
    hoverBg: 'hover:bg-white',
    iconColor: 'text-bronze/60',
    accentColor: 'from-bronze/5 to-transparent',
  },
  {
    title: 'Persönliche Betreuung',
    number: 1,
    suffix: ' Ansprechpartner',
    desc: 'Ein fester Meister begleitet Ihr Projekt von der ersten Ideenskizze bis zur schlüsselfertigen Übergabe - für maximale Transparenz und Vertrauen.',
    icon: UserCheck,
    iconName: 'UserCheck',
    colSpan: 'md:col-span-3',
    bg: 'bg-sand/20 border-forest/10',
    hoverBg: 'hover:bg-sand/40',
    iconColor: 'text-forest/60',
    accentColor: 'from-forest/5 to-transparent',
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
  const iconControls = useAnimation();
  const entrance = entranceVariants[index] || entranceVariants[0];

  const Icon = box.icon;

  return (
    <div className={box.colSpan}>
      <motion.div
        initial={entrance.initial}
        whileInView={entrance.whileInView}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        onMouseEnter={() => {
          setIsHovered(true);
          const anim = iconAnimations[box.iconName];
          if (anim) iconControls.start(anim.hover as any);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          iconControls.start({ scale: 1, rotate: 0, x: 0, y: 0, transition: { duration: 0.3 } });
        }}
        className={`relative p-10 rounded-3xl ${box.bg} ${box.hoverBg} text-forest border-2 transition-all duration-500 w-full h-full flex flex-col justify-between overflow-hidden cursor-default`}
        style={{
          boxShadow: isHovered
            ? '0 12px 40px rgba(146, 108, 68, 0.15), 0 0 0 1px rgba(146, 108, 68, 0.2)'
            : '0 2px 12px rgba(27, 48, 34, 0.04)',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        }}
      >
        {/* Cursor glow */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(146,108,68,0.08), transparent 60%)`,
            }}
          />
        )}

        {/* Top accent gradient */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${isHovered ? 'from-bronze via-bronze/60 to-bronze' : 'from-transparent to-transparent'} transition-all duration-500 rounded-t-3xl`} />

        <motion.div
          animate={iconControls}
          className="relative z-10"
        >
          <Icon
            className={`w-10 h-10 mb-8 ${isHovered ? 'text-bronze' : box.iconColor} transition-colors duration-400`}
            strokeWidth={1.5}
          />
        </motion.div>

        <div className="relative z-10">
          <h3 className="text-3xl font-serif mb-4 leading-snug text-forest">
            {box.number > 0 && <CountUp end={box.number} suffix={box.suffix} />}
            {box.number > 0 ? ' ' : ''}
            {box.title}
          </h3>
          <p className="font-sans text-sm leading-relaxed text-forest/70">{box.desc}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function ValueProposition() {
  return (
    <section id="about" className="py-24 w-full px-6 md:px-12 lg:px-16 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Was uns ausmacht" subtitle="Exzellenz in jedem Detail" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {boxes.map((box, i) => (
            <GlowCard key={i} box={box} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
