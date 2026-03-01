import { motion } from 'motion/react';
import SectionHeading from './ui/SectionHeading';
import { CircularGallery, type GalleryItem } from './ui/circular-gallery';

const galleryData: GalleryItem[] = [
  {
    title: 'Naturnaher Wasserlauf',
    subtitle: 'Wannsee',
    photo: {
      url: '/Portfolio_1.png',
      text: 'Naturnaher Wasserlauf in Wannsee',
      pos: 'center',
    },
  },
  {
    title: 'Villen-Garten',
    subtitle: 'Dahlem',
    photo: {
      url: '/Portfolio_2.png',
      text: 'Villen-Garten in Dahlem',
      pos: 'center',
    },
  },
  {
    title: 'Harmonische Anlage',
    subtitle: 'Zehlendorf',
    photo: {
      url: '/Portfolio_3.png',
      text: 'Harmonische Anlage in Zehlendorf',
      pos: 'center',
    },
  },
  {
    title: 'Erlesene Kräuterspirale',
    subtitle: 'Grunewald',
    photo: {
      url: '/Portfolio_4.png',
      text: 'Erlesene Kräuterspirale in Grunewald',
      pos: 'center',
    },
  },
  {
    title: 'Mediterraner Terrassentraum',
    subtitle: 'Mitte',
    photo: {
      url: '/Portfolio_5.png',
      text: 'Mediterraner Terrassentraum in Mitte',
      pos: 'center',
    },
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative z-10 overflow-hidden bg-forest/5">
      <div className="section-container pt-32 pb-8">
        <SectionHeading title="Unser Portfolio" subtitle="Einblicke in unsere Manufaktur" />
      </div>

      {/* Desktop: 3D Circular Gallery */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="hidden md:block w-full h-[70vh] min-h-[500px] max-h-[700px]"
      >
        <CircularGallery
          items={galleryData}
          radius={450}
          autoRotateSpeed={0.15}
        />
      </motion.div>

      <div className="hidden md:block text-center pb-16 pt-4">
        <p className="text-forest/50 font-sans text-sm">Ziehen zum Drehen</p>
      </div>

      {/* Mobile: Horizontal Scroll Gallery */}
      <div className="md:hidden pb-12">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-4 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
          {galleryData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex-shrink-0 snap-center w-[80vw] max-w-[320px] rounded-2xl overflow-hidden bg-cream shadow-lg"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.photo.url}
                  alt={item.photo.text}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-serif font-semibold text-cream">{item.title}</h3>
                  <p className="text-sm font-sans text-cream/80 uppercase tracking-wider">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-forest/50 font-sans text-sm mt-2">Wischen zum Entdecken</p>
      </div>
    </section>
  );
}
