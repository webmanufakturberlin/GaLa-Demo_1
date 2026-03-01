import { motion } from 'motion/react';
import { CheckCircle, MapPin, Leaf, Cuboid } from 'lucide-react';

const boxes = [
  {
    title: "98% Kundenzufriedenheit",
    desc: "Schlüsselfertige Übergabe mit kompromissloser Zuverlässigkeit und höchstem Qualitätsanspruch.",
    icon: CheckCircle,
    colSpan: "md:col-span-2",
    bg: "bg-forest text-cream"
  },
  {
    title: "15+ Jahre Berliner Expertise",
    desc: "Tiefes Verständnis für lokales Klima, Bodenbeschaffenheit und städtisches Erbe.",
    icon: MapPin,
    colSpan: "md:col-span-1",
    bg: "bg-sand text-forest"
  },
  {
    title: "100% Ökologische Balance",
    desc: "Förderung der Biodiversität durch nachhaltige Materialien und heimische Bepflanzung.",
    icon: Leaf,
    colSpan: "md:col-span-1",
    bg: "bg-cream text-forest border border-forest/10"
  },
  {
    title: "Digitale 3D-Manufaktur",
    desc: "Erleben Sie den Luxus, Ihren zukünftigen Garten in fotorealistischem 3D zu durchschreiten, bevor der erste Spatenstich erfolgt.",
    icon: Cuboid,
    colSpan: "md:col-span-2",
    bg: "bg-bronze text-cream"
  }
];

export default function ValueProposition() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {boxes.map((box, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`p-10 rounded-3xl ${box.colSpan} ${box.bg} shadow-sm hover:shadow-md transition-shadow duration-500 flex flex-col justify-between`}
          >
            <box.icon className="w-10 h-10 mb-8 opacity-80" strokeWidth={1.5} />
            <div>
              <h3 className="text-3xl font-serif mb-4 leading-snug">{box.title}</h3>
              <p className="font-sans text-sm leading-relaxed opacity-90">{box.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
