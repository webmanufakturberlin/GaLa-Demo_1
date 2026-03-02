import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SectionHeading from './ui/SectionHeading';
import Navbar from './Navbar';
import Footer from './Footer';

const categories = [
  { id: 'vorher-nachher', label: 'Vorher-Nachher' },
  { id: 'zaeune', label: 'Zäune' },
  { id: 'rasen', label: 'Rasen' },
  { id: 'garten', label: 'Garten' },
  { id: 'pflege', label: 'Pflege' },
];

const portfolioItems: Record<string, Array<{ title: string; description: string; image: string }>> = {
  'vorher-nachher': [
    { title: 'Gartentransformation Dahlem', description: 'Komplette Neugestaltung eines verwilderten Grundstücks zu einer modernen Gartenanlage.', image: '/Portfolio_1.webp' },
    { title: 'Terrassenumbau Charlottenburg', description: 'Von der einfachen Betonfläche zur einladenden Outdoor-Lounge mit Natursteinbelag.', image: '/Portfolio_2.webp' },
    { title: 'Vorgarten-Revitalisierung Steglitz', description: 'Verwandlung eines monotonen Vorgartens in ein blühendes Willkommens-Ensemble.', image: '/Portfolio_3.webp' },
    { title: 'Poolbereich Wannsee', description: 'Neugestaltung des Poolbereichs mit mediterraner Bepflanzung und Natursteinmauern.', image: '/Portfolio_4.webp' },
    { title: 'Hinterhof-Oase Kreuzberg', description: 'Urbaner Hinterhof wird zum grünen Rückzugsort mit vertikaler Begrünung.', image: '/Portfolio_5.webp' },
    { title: 'Dachgarten Mitte', description: 'Transformation einer ungenutzten Dachfläche in einen üppigen Dachgarten.', image: '/Portfolio_6.webp' },
  ],
  'zaeune': [
    { title: 'Cortenstahl-Sichtschutz', description: 'Moderner Sichtschutz aus Cortenstahl mit integrierter Beleuchtung.', image: '/Portfolio_7.webp' },
    { title: 'Naturholzzaun Zehlendorf', description: 'Handgefertigter Lärchenzaun mit horizontaler Lattung im skandinavischen Stil.', image: '/Portfolio_8.webp' },
    { title: 'Gabionenwand Grunewald', description: 'Gabionen-Sichtschutz gefüllt mit regionalen Natursteinen.', image: '/Portfolio_1.webp' },
    { title: 'Schmiedeeisen-Tor Dahlem', description: 'Maßgefertigtes Eingangstor im klassischen Berliner Stil.', image: '/Portfolio_2.webp' },
    { title: 'Bambuszaun Prenzlauer Berg', description: 'Nachhaltiger Sichtschutz aus heimischem Bambus mit natürlicher Patina.', image: '/Portfolio_3.webp' },
    { title: 'Lebender Zaun Spandau', description: 'Hainbuchenhecke als natürlicher Sichtschutz mit integrierten Staudenbeeten.', image: '/Portfolio_4.webp' },
  ],
  'rasen': [
    { title: 'Englischer Rasen Dahlem', description: 'Professionelle Rasenanlage mit Bewässerungssystem für ein perfektes Grün.', image: '/Portfolio_5.webp' },
    { title: 'Wildblumenwiese Wannsee', description: 'Natürliche Wildblumenwiese als ökologische Alternative zum klassischen Rasen.', image: '/Portfolio_6.webp' },
    { title: 'Sportrasen Charlottenburg', description: 'Strapazierfähiger Sportrasen für die private Nutzung mit Drainage-System.', image: '/Portfolio_7.webp' },
    { title: 'Rollrasen-Verlegung Steglitz', description: 'Sofort-Ergebnis durch professionelle Rollrasen-Verlegung auf 400m².', image: '/Portfolio_8.webp' },
    { title: 'Rasensanierung Grunewald', description: 'Komplette Sanierung eines geschädigten Altrasens mit Bodenaufbereitung.', image: '/Portfolio_1.webp' },
    { title: 'Kräuterrasen Mitte', description: 'Duftender Kräuterrasen mit Thymian und Kamille als pflegeleichte Alternative.', image: '/Portfolio_2.webp' },
  ],
  'garten': [
    { title: 'Japanischer Garten Dahlem', description: 'Zen-Garten mit Kiesflächen, Wasserelement und Ahorn-Bepflanzung.', image: '/Portfolio_3.webp' },
    { title: 'Cottage-Garten Zehlendorf', description: 'Romantischer Cottage-Garten mit üppigen Staudenbeeten und Rosenbogen.', image: '/Portfolio_4.webp' },
    { title: 'Moderner Stadtgarten Mitte', description: 'Minimalistischer Stadtgarten mit klaren Linien und Sichtbeton-Elementen.', image: '/Portfolio_5.webp' },
    { title: 'Mediterraner Garten Charlottenburg', description: 'Südländisches Flair mit Olivenbäumen, Lavendel und Terrakotta-Akzenten.', image: '/Portfolio_6.webp' },
    { title: 'Naturgarten Spandau', description: 'Ökologischer Naturgarten mit heimischen Pflanzen und Insektenhotel.', image: '/Portfolio_7.webp' },
    { title: 'Familiengarten Steglitz', description: 'Kindgerechter Garten mit Spielbereich, Naschgarten und gemütlicher Sitzecke.', image: '/Portfolio_8.webp' },
  ],
  'pflege': [
    { title: 'Jahreszeitenpflege Villa Dahlem', description: 'Ganzjährige Gartenpflege mit saisonaler Bepflanzung und Winterschutz.', image: '/Portfolio_1.webp' },
    { title: 'Heckenschnitt Zehlendorf', description: 'Professioneller Formschnitt einer 80m langen Buchsbaumhecke.', image: '/Portfolio_3.webp' },
    { title: 'Baumpflege Grunewald', description: 'Fachgerechter Baumschnitt und Kronenpflege alter Eichen und Linden.', image: '/Portfolio_5.webp' },
    { title: 'Rasenpflege-Programm Wannsee', description: 'Monatliches Premium-Pflegeprogramm mit Düngung, Vertikutierung und Mähen.', image: '/Portfolio_7.webp' },
    { title: 'Bewässerungssystem Charlottenburg', description: 'Installation und Wartung eines automatischen Bewässerungssystems.', image: '/Portfolio_2.webp' },
    { title: 'Winterdienst Mitte', description: 'Zuverlässiger Winterdienst mit Räumung und ökologischem Streugut.', image: '/Portfolio_4.webp' },
  ],
};

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('vorher-nachher');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <section className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate('/#portfolio')}
            className="flex items-center gap-2 text-forest/60 hover:text-forest mb-8 font-sans text-sm transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </button>

          <SectionHeading title="Portfolio" subtitle="Alle Projekte im Überblick" />

          {/* Category filter tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-sans text-sm transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-forest text-cream shadow-md'
                    : 'bg-forest/10 text-forest hover:bg-forest/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid of placeholder cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {portfolioItems[activeCategory]?.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-serif font-semibold text-forest mb-1">{item.title}</h3>
                    <p className="text-sm font-sans text-forest/60 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <Footer />
    </div>
  );
}
