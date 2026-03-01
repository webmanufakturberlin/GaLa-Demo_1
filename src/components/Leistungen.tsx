import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useState, type Key } from 'react';
import SectionHeading from './ui/SectionHeading';
import ServiceModal from './ServiceModal';

const services = [
  {
    title: 'Gartengestaltung',
    subtitle: 'Individuelle Konzepte',
    description:
      'Von der ersten Skizze bis zum fertigen Gartenparadies – wir entwerfen Außenräume, die Ihre Persönlichkeit widerspiegeln und sich harmonisch in die Berliner Architekturlandschaft einfügen. Jeder Garten ist ein Unikat, das Funktionalität und Ästhetik perfekt vereint.',
    features: [
      'Individuelle Gartenplanung und Konzeptentwicklung',
      'Fotorealistische 3D-Visualisierungen',
      'Pflanzplanung mit heimischen und klimaangepassten Arten',
      'Materialberatung für Terrassen, Wege und Mauern',
      'Beleuchtungskonzepte für stimmungsvolle Abende',
      'Integration von Wasserelementen und Kunstobjekten',
    ],
    image: '/Leistungen_2.png',
    cardImage: '/Leistungen_2.png',
  },
  {
    title: 'Landschaftsbau',
    subtitle: 'Professionelle Umsetzung',
    description:
      'Unsere Meisterhandwerker verwandeln Visionen in Realität. Mit über 15 Jahren Erfahrung im Berliner Landschaftsbau setzen wir Projekte jeder Größenordnung mit höchster Präzision und nachhaltigsten Materialien um.',
    features: [
      'Terrassen- und Wegebau mit Naturstein und Holz',
      'Professioneller Zaunbau und Sichtschutzlösungen',
      'Mauerbau und Hangbefestigungen',
      'Teichbau und Wasserspiele',
      'Rasenneuanlage und Rollrasen',
      'Erdarbeiten und Geländemodellierung',
    ],
    image: '/Leistungen_3.png',
    cardImage: '/Leistungen_3.png',
  },
  {
    title: 'Pflege & Erhalt',
    subtitle: 'Nachhaltige Betreuung',
    description:
      'Ein schöner Garten verdient dauerhafte Aufmerksamkeit. Unser Pflegeteam kümmert sich diskret und fachgerecht um Ihren Außenraum, damit er über Generationen hinweg in voller Pracht erstrahlt.',
    features: [
      'Regelmäßige Gartenpflege und Rasenmähen',
      'Professioneller Gehölzschnitt und Baumfällung',
      'Bewässerungsanlagen – Installation und Wartung',
      'Saisonale Bepflanzung und Blumenwiesen',
      'Winterdienst und Frostschutzmaßnahmen',
      'Schädlingsbekämpfung und Pflanzenschutz',
    ],
    image: '/Leistungen_4.png',
    cardImage: '/Leistungen_4.png',
  },
];

export default function Leistungen() {
  const [activeService, setActiveService] = useState<(typeof services)[number] | null>(null);

  return (
    <>
      <section id="leistungen" className="py-24 md:py-32 section-container relative z-10">
        <SectionHeading title="Unsere Leistungen" subtitle="Ganzheitliche Gartenkultur" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: '1200px' }}>
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} onClick={() => setActiveService(service)} />
          ))}
        </div>
      </section>
      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
    </>
  );
}

function ServiceCard({
  service,
  index,
  onClick,
}: {
  key?: Key;
  service: (typeof services)[number];
  index: number;
  onClick: () => void;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90, scale: 0.6 }}
      whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
      viewport={{ margin: '-80px' }}
      transition={{ duration: 0.9, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="relative h-[380px] md:h-[480px] rounded-3xl overflow-hidden group cursor-pointer"
    >
      {/* Background image */}
      <img
        src={service.cardImage}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-forest/85 group-hover:bg-forest/70 transition-colors duration-300" />

      {/* Cursor glow */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(146,108,68,0.2), transparent 70%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-bronze font-sans text-xs uppercase tracking-widest mb-2">{service.subtitle}</p>
            <h3 className="text-2xl md:text-3xl font-serif text-cream">{service.title}</h3>
          </div>
          <div className="w-12 h-12 rounded-full border border-cream/30 flex items-center justify-center group-hover:bg-bronze group-hover:border-bronze transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 text-cream group-hover:rotate-45 transition-transform duration-300" />
          </div>
        </div>
        <p className="text-cream/60 font-sans text-sm leading-relaxed max-w-xs group-hover:text-cream/80 transition-colors duration-300">
          {service.description.slice(0, 120)}...
        </p>
      </div>
    </motion.div>
  );
}
