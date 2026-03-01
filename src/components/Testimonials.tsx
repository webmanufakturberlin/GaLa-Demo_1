import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    quote: "Unser Garten in Dahlem ist zu einem wahren Kunstwerk herangewachsen. Die Detailverliebtheit und das Gespür für die Historie des Ortes sind unübertroffen.",
    author: "Familie von Waldthausen",
    location: "Berlin Dahlem"
  },
  {
    quote: "Von der ersten 3D-Visualisierung bis zum letzten gepflanzten Baum – ein absolut reibungsloser, hochprofessioneller Prozess. Ein Meisterwerk.",
    author: "Dr. Alexander Schmidt",
    location: "Berlin Grunewald"
  },
  {
    quote: "Die organische Formensprache und die Auswahl der Materialien haben unserem Zuhause am Wannsee eine völlig neue, beruhigende Seele eingehaucht.",
    author: "Elena & Marcus Weber",
    location: "Berlin Wannsee"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12 bg-forest text-cream relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <Quote className="w-12 h-12 mx-auto text-bronze mb-6 opacity-50" />
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Stimmen unserer Klienten</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center text-center"
            >
              <p className="font-serif text-xl leading-relaxed mb-8 italic opacity-90">"{review.quote}"</p>
              <div className="mt-auto">
                <div className="w-12 h-12 rounded-full bg-bronze/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-serif text-bronze text-lg">{review.author.charAt(0)}</span>
                </div>
                <h4 className="font-sans font-medium text-sm tracking-wide">{review.author}</h4>
                <p className="font-sans text-xs text-cream/50 uppercase tracking-widest mt-1">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
