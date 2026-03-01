import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import MagneticButton from './ui/MagneticButton';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-sand/30 relative z-10">
      <div className="section-container">
        <SectionHeading title="Lassen Sie uns sprechen" subtitle="Ihr Gartenprojekt beginnt hier" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -60, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-forest/80 font-sans leading-relaxed mb-10">
              Ob Sie eine erste Vision für Ihren Garten haben oder ein konkretes Projekt
              besprechen möchten – wir freuen uns auf Ihre Nachricht. Jedes Gespräch beginnt
              mit Zuhören.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h4 className="font-sans font-medium text-sm text-forest">Adresse</h4>
                  <p className="text-forest/70 font-sans text-sm">Kurfürstendamm 123, 10711 Berlin</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h4 className="font-sans font-medium text-sm text-forest">Telefon</h4>
                  <a href="tel:+49301234567" className="text-forest/70 font-sans text-sm hover:text-bronze transition-colors">
                    +49 30 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h4 className="font-sans font-medium text-sm text-forest">E-Mail</h4>
                  <a href="mailto:contact@berlin-landscaping.de" className="text-forest/70 font-sans text-sm hover:text-bronze transition-colors">
                    contact@berlin-landscaping.de
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, x: 60, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block font-sans text-xs uppercase tracking-widest text-forest/70 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-cream border border-forest/10 font-sans text-sm text-forest placeholder-forest/40 focus:border-bronze focus:outline-none transition-colors"
                placeholder="Ihr Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-sans text-xs uppercase tracking-widest text-forest/70 mb-2">
                E-Mail *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-cream border border-forest/10 font-sans text-sm text-forest placeholder-forest/40 focus:border-bronze focus:outline-none transition-colors"
                placeholder="ihre@email.de"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-sans text-xs uppercase tracking-widest text-forest/70 mb-2">
                Telefon (optional)
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-xl bg-cream border border-forest/10 font-sans text-sm text-forest placeholder-forest/40 focus:border-bronze focus:outline-none transition-colors"
                placeholder="+49 30 ..."
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-sans text-xs uppercase tracking-widest text-forest/70 mb-2">
                Nachricht *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-cream border border-forest/10 font-sans text-sm text-forest placeholder-forest/40 focus:border-bronze focus:outline-none transition-colors resize-none"
                placeholder="Erzählen Sie uns von Ihrem Gartenprojekt..."
              />
            </div>

            <MagneticButton className="btn-premium px-8 py-4 bg-forest text-cream font-sans text-sm uppercase tracking-wider rounded-full border border-forest w-full md:w-auto">
              Nachricht senden
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
