import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const leafPaths = [
  "M12.08 2.16l1.6 3.52 3.84-.64-1.28 3.52 4.16 2.24-3.52 2.24.64 3.84-3.52-1.6-2.24 4.16-2.24-4.16-3.52 1.6.64-3.84-3.52-2.24 4.16-2.24-1.28-3.52 3.84.64 1.6-3.52z",
  "M12 2c-1.1 0-2 .9-2 2 0 .37.1.7.28 1-.86.3-1.5 1.1-1.5 2 0 .55.22 1.05.58 1.41C8.18 8.77 7.5 9.8 7.5 11c0 1.1.9 2 2 2 .37 0 .7-.1 1-.28.3.86 1.1 1.5 2 1.5s1.7-.64 2-1.5c.3.18.63.28 1 .28 1.1 0 2-.9 2-2 0-1.2-.68-2.23-1.86-2.59.36-.36.58-.86.58-1.41 0-.9-.64-1.7-1.5-2 .18-.3.28-.63.28-1 0-1.1-.9-2-2-2z",
  "M12 2C12 2 6 7 6 13C6 18 12 22 12 22C12 22 18 18 18 13C18 7 12 2 12 2Z"
];

const Leaf = ({ delay, x, duration, scale, pathIndex }: { delay: number, x: number, duration: number, scale: number, pathIndex: number }) => {
  return (
    <motion.div
      initial={{ y: '-10vh', x: `${x}vw`, rotate: 0, opacity: 0 }}
      animate={{ 
        y: '110vh', 
        x: `${x + (Math.random() * 10 - 5)}vw`, 
        rotate: 360, 
        opacity: [0, 0.6, 0.6, 0] 
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        delay: delay,
        ease: "linear"
      }}
      className="fixed z-0 pointer-events-none text-forest/20"
      style={{ scale }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d={leafPaths[pathIndex]} />
      </svg>
    </motion.div>
  );
};

export function BackgroundEffects() {
  const [leaves, setLeaves] = useState<Array<{id: number, delay: number, x: number, duration: number, scale: number, pathIndex: number}>>([]);

  useEffect(() => {
    const newLeaves = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 20,
      x: Math.random() * 100,
      duration: 15 + Math.random() * 15,
      scale: 0.8 + Math.random() * 2,
      pathIndex: Math.floor(Math.random() * leafPaths.length)
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <>
      <div className="texture-overlay"></div>
      <div className="dappled-sunlight"></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {leaves.map(leaf => (
          <Leaf key={leaf.id} {...leaf} />
        ))}
      </div>
    </>
  );
}
