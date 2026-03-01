import { motion } from 'motion/react';
import SectionHeading from './ui/SectionHeading';

const projects = [
  {
    title: 'Naturnaher Wasserlauf',
    district: 'Wannsee',
    img: '/Portfolio_1.png',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Villen-Garten',
    district: 'Dahlem',
    img: '/Portfolio_2.png',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Harmonische Anlage',
    district: 'Zehlendorf',
    img: '/Portfolio_3.png',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Erlesene Kräuterspirale',
    district: 'Grunewald',
    img: '/Portfolio_4.png',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    title: 'Mediterraner Terrassentraum',
    district: 'Mitte',
    img: '/Portfolio_5.png',
    span: 'md:col-span-2 md:row-span-2',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 section-container relative z-10">
      <SectionHeading title="Unser Portfolio" subtitle="Einblicke in unsere Manufaktur" />

      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -4 }}
            className={`relative rounded-3xl overflow-hidden group img-hover-container cursor-pointer ${project.span}`}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover img-hover-effect group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-cream/20 backdrop-blur-md border border-cream/30 text-cream text-xs font-sans uppercase tracking-wider rounded-full">
                  {project.district}
                </span>
              </div>
              <h3 className="text-2xl font-serif text-cream group-hover:text-sand transition-colors duration-300">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
