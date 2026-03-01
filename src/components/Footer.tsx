export default function Footer() {
  return (
    <footer className="bg-forest text-cream pt-24 pb-12 px-6 md:px-12 relative z-10 border-t border-cream/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-serif mb-6">Berlin Premium Landscaping</h2>
          <p className="font-sans text-sm text-cream/70 leading-relaxed max-w-sm">
            Wir erschaffen zeitlose Außenräume, die Natur und Architektur in perfekter Harmonie vereinen. Ihr privates Refugium in der Hauptstadt.
          </p>
        </div>
        
        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest text-bronze mb-6">Navigation</h4>
          <ul className="space-y-3 font-sans text-sm text-cream/80">
            <li><a href="#" className="hover:text-bronze transition-colors">Portfolio</a></li>
            <li><a href="#" className="hover:text-bronze transition-colors">Leistungen</a></li>
            <li><a href="#" className="hover:text-bronze transition-colors">Über uns</a></li>
            <li><a href="#" className="hover:text-bronze transition-colors">Journal</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest text-bronze mb-6">Kontakt</h4>
          <ul className="space-y-3 font-sans text-sm text-cream/80">
            <li>Kurfürstendamm 123<br/>10711 Berlin</li>
            <li className="pt-2"><a href="tel:+49301234567" className="hover:text-bronze transition-colors">+49 30 123 4567</a></li>
            <li><a href="mailto:contact@berlin-landscaping.de" className="hover:text-bronze transition-colors">contact@berlin-landscaping.de</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-xs text-cream/50">
        <p>&copy; 2026 Berlin Premium Landscaping. Alle Rechte vorbehalten.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cream transition-colors">Impressum</a>
          <a href="#" className="hover:text-cream transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
