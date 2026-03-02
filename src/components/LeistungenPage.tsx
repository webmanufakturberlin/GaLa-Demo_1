import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { ShinyButton } from './ui/shiny-button';

const serviceData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  paragraphs: string[];
}> = {
  gartengestaltung: {
    title: 'Gartengestaltung',
    subtitle: 'Individuelle Konzepte für Ihren Traumgarten',
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
    image: '/Leistungen_2.webp',
    paragraphs: [
      'Unsere Gartengestaltung beginnt immer mit einem persönlichen Gespräch. Wir nehmen uns Zeit, Ihre Wünsche, Ihren Lebensstil und die Besonderheiten Ihres Grundstücks zu verstehen. Ob Sie einen ruhigen Rückzugsort, einen repräsentativen Vorgarten oder einen lebhaften Familiengarten suchen – wir entwickeln ein maßgeschneidertes Konzept, das all Ihre Vorstellungen vereint.',
      'Mithilfe modernster 3D-Visualisierungstechnologie können Sie Ihren zukünftigen Garten bereits vor dem ersten Spatenstich erleben. Wir arbeiten ausschließlich mit hochwertigen, nachhaltigen Materialien und setzen auf eine Bepflanzung, die nicht nur schön aussieht, sondern auch das lokale Ökosystem fördert.',
      'Von der Auswahl der richtigen Natursteine für Ihre Terrasse bis hin zur perfekten Positionierung eines Wasserspiels – jedes Detail wird sorgfältig geplant. Unsere Gestaltungen verbinden zeitlose Eleganz mit praktischer Funktionalität, damit Ihr Garten über Jahrzehnte hinweg Freude bereitet.',
    ],
  },
  landschaftsbau: {
    title: 'Landschaftsbau',
    subtitle: 'Professionelle Umsetzung mit Meisterqualität',
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
    image: '/Leistungen_3.webp',
    paragraphs: [
      'Unser Landschaftsbau-Team besteht aus erfahrenen Meistern und Gesellen, die ihr Handwerk von Grund auf gelernt haben. Jedes Projekt wird mit der gleichen Sorgfalt und Leidenschaft umgesetzt – ob es sich um eine kleine Terrassenerneuerung oder die komplette Neugestaltung eines großen Grundstücks handelt.',
      'Wir verwenden ausschließlich geprüfte, langlebige Materialien von regionalen Lieferanten. Natursteine aus Brandenburg, Holz aus nachhaltiger Forstwirtschaft und modernste Drainagesysteme sorgen dafür, dass Ihre Außenanlage nicht nur schön, sondern auch technisch einwandfrei ist.',
      'Von der präzisen Verlegung von Pflastersteinen bis zum fachgerechten Bau komplexer Hangbefestigungen – unsere Arbeit zeichnet sich durch Liebe zum Detail und höchste handwerkliche Standards aus. Wir arbeiten termingerecht und halten Sie über jeden Fortschritt auf dem Laufenden.',
    ],
  },
  pflege: {
    title: 'Pflege & Erhalt',
    subtitle: 'Nachhaltige Betreuung für Ihren Garten',
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
    image: '/Leistungen_4.webp',
    paragraphs: [
      'Ein Garten ist ein lebendiges System, das sich ständig verändert und kontinuierliche Pflege benötigt. Unser erfahrenes Pflegeteam übernimmt diese Aufgabe mit Fachwissen und Hingabe. Wir erstellen für jeden Garten einen individuellen Pflegeplan, der auf die spezifischen Bedürfnisse Ihrer Pflanzen und Anlagen abgestimmt ist.',
      'Von der wöchentlichen Rasenpflege über den fachgerechten Gehölzschnitt bis hin zur saisonalen Bepflanzung – wir sorgen dafür, dass Ihr Garten zu jeder Jahreszeit in bester Verfassung ist. Unsere Bewässerungsspezialisten installieren und warten moderne Systeme, die Wasser sparen und gleichzeitig optimale Ergebnisse liefern.',
      'Mit unserer 5-Jahres-Anwachsgarantie gehen wir einen Schritt weiter als die meisten Anbieter. Wir stehen für die Qualität unserer Arbeit ein und begleiten Sie langfristig. Auch im Winter sind wir für Sie da – mit zuverlässigem Winterdienst und fachgerechtem Frostschutz für empfindliche Pflanzen.',
    ],
  },
};

export default function LeistungenPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? serviceData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="relative min-h-screen bg-cream">
        <Navbar />
        <div className="pt-32 pb-24 px-6 text-center">
          <h1 className="text-3xl font-serif text-forest mb-4">Seite nicht gefunden</h1>
          <button onClick={() => navigate('/')} className="text-bronze hover:underline font-sans">
            Zurück zur Startseite
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />

      {/* Hero banner */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-forest/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <p className="text-bronze font-sans text-xs uppercase tracking-widest mb-3">{service.subtitle}</p>
          <h1 className="text-4xl md:text-6xl font-serif text-cream">{service.title}</h1>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/#leistungen')}
            className="flex items-center gap-2 text-forest/60 hover:text-forest mb-10 font-sans text-sm transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </button>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-sans text-forest/80 leading-relaxed mb-12"
          >
            {service.description}
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-forest/5 rounded-2xl p-8 md:p-10 mb-12"
          >
            <h2 className="text-2xl font-serif text-forest mb-6">Unsere Leistungen im Detail</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bronze flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-forest/80">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Paragraphs */}
          {service.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="font-sans text-forest/70 leading-relaxed mb-6"
            >
              {p}
            </motion.p>
          ))}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <ShinyButton onClick={() => navigate('/#contact')}>
              Jetzt Beratung anfragen
            </ShinyButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
