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

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full h-[70vh] min-h-[500px] max-h-[700px]"
      >
        <CircularGallery
          items={galleryData}
          radius={450}
          autoRotateSpeed={0.15}
        />
      </motion.div>

      <div className="text-center pb-16 pt-4">
        <p className="text-forest/50 font-sans text-sm">Ziehen zum Drehen</p>
      </div>
    </section>
  );
}
