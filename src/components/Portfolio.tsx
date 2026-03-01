import { motion } from 'motion/react';

const projects = [
  {
    title: "Villa am See",
    district: "Wannsee",
    img: "https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=800&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Modernes Atrium",
    district: "Mitte",
    img: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=800&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Historischer Park",
    district: "Dahlem",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    title: "Waldgarten",
    district: "Grunewald",
    img: "https://images.unsplash.com/photo-1558905089-8668962ce015?q=80&w=800&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-1"
  }
];

export default function Portfolio() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-forest mb-4">Ausgewählte Werke</h2>
          <p className="text-forest/70 font-sans uppercase tracking-widest text-sm">Einblicke in unsere Manufaktur</p>
        </div>
        <button className="btn-premium px-8 py-3 border border-forest text-forest font-sans text-sm uppercase tracking-wider rounded-full">
          Ganzes Portfolio
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`relative rounded-3xl overflow-hidden group img-hover-container ${project.span}`}
          >
            <img src={project.img} alt={project.title} className="w-full h-full object-cover img-hover-effect" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-cream/20 backdrop-blur-md border border-cream/30 text-cream text-xs font-sans uppercase tracking-wider rounded-full">
                  {project.district}
                </span>
              </div>
              <h3 className="text-2xl font-serif text-cream">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
