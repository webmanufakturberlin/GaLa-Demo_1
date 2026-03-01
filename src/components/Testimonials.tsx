import { TestimonialsSection } from './ui/testimonials-with-marquee';

const testimonials = [
  {
    author: {
      name: 'Familie von Waldthausen',
      location: 'Berlin Dahlem',
    },
    text: 'Unser Garten in Dahlem ist zu einem wahren Kunstwerk herangewachsen. Die Detailverliebtheit und das Gespür für die Historie des Ortes sind unübertroffen.',
    rating: 5,
  },
  {
    author: {
      name: 'Dr. Alexander Schmidt',
      location: 'Berlin Grunewald',
    },
    text: 'Von der ersten 3D-Visualisierung bis zum letzten gepflanzten Baum – ein absolut reibungsloser, hochprofessioneller Prozess. Ein Meisterwerk.',
    rating: 5,
  },
  {
    author: {
      name: 'Elena & Marcus Weber',
      location: 'Berlin Wannsee',
    },
    text: 'Die organische Formensprache und die Auswahl der Materialien haben unserem Zuhause am Wannsee eine völlig neue, beruhigende Seele eingehaucht.',
    rating: 5,
  },
  {
    author: {
      name: 'Thomas Müller',
      location: 'Berlin Charlottenburg',
    },
    text: 'Hervorragende Beratung und Umsetzung. Unser Dachgarten ist nun eine grüne Oase mitten in der Stadt.',
    rating: 5,
  },
  {
    author: {
      name: 'Sabine Hoffmann',
      location: 'Berlin Zehlendorf',
    },
    text: 'Professionell, pünktlich und mit einem exzellenten Auge für Design. Wir könnten nicht zufriedener sein!',
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <TestimonialsSection
      title="Stimmen unserer Klienten"
      description="Erfahrungen unserer geschätzten Kunden"
      testimonials={testimonials}
      className="relative z-10"
    />
  );
}
