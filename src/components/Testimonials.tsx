import { motion } from 'motion/react';
import { StaggerTestimonials, type StaggerTestimonial } from './ui/stagger-testimonials';
import SectionHeading from './ui/SectionHeading';

const testimonials: StaggerTestimonial[] = [
  {
    tempId: 0,
    testimonial: 'Unser Garten in Dahlem ist zu einem wahren Kunstwerk herangewachsen. Die Detailverliebtheit und das Gespür für die Historie des Ortes sind unübertroffen.',
    by: 'Familie von Waldthausen',
    location: 'Berlin Dahlem',
    rating: 5,
  },
  {
    tempId: 1,
    testimonial: 'Von der ersten 3D-Visualisierung bis zum letzten gepflanzten Baum – ein absolut reibungsloser, hochprofessioneller Prozess. Ein Meisterwerk.',
    by: 'Dr. Alexander Schmidt',
    location: 'Berlin Grunewald',
    rating: 5,
  },
  {
    tempId: 2,
    testimonial: 'Die organische Formensprache und die Auswahl der Materialien haben unserem Zuhause am Wannsee eine völlig neue, beruhigende Seele eingehaucht.',
    by: 'Elena & Marcus Weber',
    location: 'Berlin Wannsee',
    rating: 5,
  },
  {
    tempId: 3,
    testimonial: 'Hervorragende Beratung und Umsetzung. Unser Dachgarten ist nun eine grüne Oase mitten in der Stadt.',
    by: 'Thomas Müller',
    location: 'Berlin Charlottenburg',
    rating: 5,
  },
  {
    tempId: 4,
    testimonial: 'Professionell, pünktlich und mit einem exzellenten Auge für Design. Wir könnten nicht zufriedener sein!',
    by: 'Sabine Hoffmann',
    location: 'Berlin Zehlendorf',
    rating: 4,
  },
  {
    tempId: 5,
    testimonial: 'Ein traumhaftes Ergebnis! Die Natursteinmauer und das Wasserspiel sind zum absoluten Highlight unseres Grundstücks geworden.',
    by: 'Michael Wagner',
    location: 'Potsdam Babelsberg',
    rating: 5,
  },
  {
    tempId: 6,
    testimonial: 'Kreative Ansätze, die genau unseren Geschmack getroffen haben. Die Pflanzenvielfalt ist beeindruckend und das Team war sehr zuvorkommend.',
    by: 'Julia & Stefan Klein',
    location: 'Berlin Köpenick',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-sand/20 relative z-10">
      <div className="section-container">
        <SectionHeading title="Stimmen unserer Klienten" subtitle="Erfahrungen unserer geschätzten Kunden" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
      >
        <StaggerTestimonials testimonials={testimonials} />
      </motion.div>
    </section>
  );
}
