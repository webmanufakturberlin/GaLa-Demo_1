import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const leafPaths = [
  // Simple teardrop leaf
  "M12 2C12 2 6 7 6 13C6 18 12 22 12 22C12 22 18 18 18 13C18 7 12 2 12 2Z",
  // Maple-style leaf
  "M12 1L9 6L3 5L6 10L2 14L8 13L10 19L12 14L14 19L16 13L22 14L18 10L21 5L15 6L12 1Z",
  // Elongated willow leaf
  "M12 2C10 5 8 9 8 13C8 17 10 20 12 22C14 20 16 17 16 13C16 9 14 5 12 2Z",
  // Oak-style rounded leaf
  "M12 2C12 2 8 4 7 7C6 10 8 11 7 14C6 17 8 19 12 22C16 19 18 17 17 14C16 11 18 10 17 7C16 4 12 2 12 2Z",
  // Small round leaf
  "M12 3C9 3 5 7 5 12C5 17 9 21 12 22C15 21 19 17 19 12C19 7 15 3 12 3Z",
];

const Leaf = ({ delay, x, duration, scale, pathIndex, opacity }: { delay: number; x: number; duration: number; scale: number; pathIndex: number; opacity: number }) => {
  return (
    <motion.div
      initial={{ y: '-10vh', x: `${x}vw`, rotate: 0, opacity: 0 }}
      animate={{
        y: '110vh',
        x: `${x + (Math.random() * 10 - 5)}vw`,
        rotate: 360,
        opacity: [0, opacity, opacity, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: 'linear',
      }}
      className="fixed z-0 pointer-events-none text-green-600/30"
      style={{ scale }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d={leafPaths[pathIndex]} />
      </svg>
    </motion.div>
  );
};

export function BackgroundEffects() {
  const [leaves, setLeaves] = useState<Array<{ id: number; delay: number; x: number; duration: number; scale: number; pathIndex: number; opacity: number }>>([]);

  useEffect(() => {
    const newLeaves = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 20,
      x: Math.random() * 100,
      duration: 15 + Math.random() * 15,
      scale: 0.6 + Math.random() * 2,
      pathIndex: Math.floor(Math.random() * leafPaths.length),
      opacity: 0.3 + Math.random() * 0.4,
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <>
      <div className="texture-overlay"></div>
      <div className="dappled-sunlight"></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {leaves.map((leaf) => (
          <Leaf key={leaf.id} {...leaf} />
        ))}
      </div>
    </>
  );
}
