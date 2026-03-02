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

const portfolioItems: Record<string, Array<{ title: string; description: string }>> = {
  'vorher-nachher': [
    { title: 'Gartentransformation Dahlem', description: 'Komplette Neugestaltung eines verwilderten Grundstücks zu einer modernen Gartenanlage.' },
    { title: 'Terrassenumbau Charlottenburg', description: 'Von der einfachen Betonfläche zur einladenden Outdoor-Lounge mit Natursteinbelag.' },
    { title: 'Vorgarten-Revitalisierung Steglitz', description: 'Verwandlung eines monotonen Vorgartens in ein blühendes Willkommens-Ensemble.' },
    { title: 'Poolbereich Wannsee', description: 'Neugestaltung des Poolbereichs mit mediterraner Bepflanzung und Natursteinmauern.' },
    { title: 'Hinterhof-Oase Kreuzberg', description: 'Urbaner Hinterhof wird zum grünen Rückzugsort mit vertikaler Begrünung.' },
    { title: 'Dachgarten Mitte', description: 'Transformation einer ungenutzten Dachfläche in einen üppigen Dachgarten.' },
  ],
  'zaeune': [
    { title: 'Cortenstahl-Sichtschutz', description: 'Moderner Sichtschutz aus Cortenstahl mit integrierter Beleuchtung.' },
    { title: 'Naturholzzaun Zehlendorf', description: 'Handgefertigter Lärchenzaun mit horizontaler Lattung im skandinavischen Stil.' },
    { title: 'Gabionenwand Grunewald', description: 'Gabionen-Sichtschutz gefüllt mit regionalen Natursteinen.' },
    { title: 'Schmiedeeisen-Tor Dahlem', description: 'Maßgefertigtes Eingangstor im klassischen Berliner Stil.' },
    { title: 'Bambuszaun Prenzlauer Berg', description: 'Nachhaltiger Sichtschutz aus heimischem Bambus mit natürlicher Patina.' },
    { title: 'Lebender Zaun Spandau', description: 'Hainbuchenhecke als natürlicher Sichtschutz mit integrierten Staudenbeeten.' },
  ],
  'rasen': [
    { title: 'Englischer Rasen Dahlem', description: 'Professionelle Rasenanlage mit Bewässerungssystem für ein perfektes Grün.' },
    { title: 'Wildblumenwiese Wannsee', description: 'Natürliche Wildblumenwiese als ökologische Alternative zum klassischen Rasen.' },
    { title: 'Sportrasen Charlottenburg', description: 'Strapazierfähiger Sportrasen für die private Nutzung mit Drainage-System.' },
    { title: 'Rollrasen-Verlegung Steglitz', description: 'Sofort-Ergebnis durch professionelle Rollrasen-Verlegung auf 400m².' },
    { title: 'Rasensanierung Grunewald', description: 'Komplette Sanierung eines geschädigten Altrasens mit Bodenaufbereitung.' },
    { title: 'Kräuterrasen Mitte', description: 'Duftender Kräuterrasen mit Thymian und Kamille als pflegeleichte Alternative.' },
  ],
  'garten': [
    { title: 'Japanischer Garten Dahlem', description: 'Zen-Garten mit Kiesflächen, Wasserelement und Ahorn-Bepflanzung.' },
    { title: 'Cottage-Garten Zehlendorf', description: 'Romantischer Cottage-Garten mit üppigen Staudenbeeten und Rosenbogen.' },
    { title: 'Moderner Stadtgarten Mitte', description: 'Minimalistischer Stadtgarten mit klaren Linien und Sichtbeton-Elementen.' },
    { title: 'Mediterraner Garten Charlottenburg', description: 'Südländisches Flair mit Olivenbäumen, Lavendel und Terrakotta-Akzenten.' },
    { title: 'Naturgarten Spandau', description: 'Ökologischer Naturgarten mit heimischen Pflanzen und Insektenhotel.' },
    { title: 'Familiengarten Steglitz', description: 'Kindgerechter Garten mit Spielbereich, Naschgarten und gemütlicher Sitzecke.' },
  ],
  'pflege': [
    { title: 'Jahreszeitenpflege Villa Dahlem', description: 'Ganzjährige Gartenpflege mit saisonaler Bepflanzung und Winterschutz.' },
    { title: 'Heckenschnitt Zehlendorf', description: 'Professioneller Formschnitt einer 80m langen Buchsbaumhecke.' },
    { title: 'Baumpflege Grunewald', description: 'Fachgerechter Baumschnitt und Kronenpflege alter Eichen und Linden.' },
    { title: 'Rasenpflege-Programm Wannsee', description: 'Monatliches Premium-Pflegeprogramm mit Düngung, Vertikutierung und Mähen.' },
    { title: 'Bewässerungssystem Charlottenburg', description: 'Installation und Wartung eines automatischen Bewässerungssystems.' },
    { title: 'Winterdienst Mitte', description: 'Zuverlässiger Winterdienst mit Räumung und ökologischem Streugut.' },
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
            onClick={() => navigate('/')}
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
                  className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-56 bg-forest/10 flex items-center justify-center">
                    <span className="text-forest/30 font-sans text-sm">Bild Platzhalter</span>
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
