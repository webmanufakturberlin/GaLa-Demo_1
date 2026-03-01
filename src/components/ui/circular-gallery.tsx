import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface GalleryItem {
  title: string;
  subtitle: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
  };
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  radius?: number;
  autoRotateSpeed?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.02, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);
    const interactionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const lastMouseXRef = useRef<number | null>(null);

    // Mouse/touch drag rotation
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const handlePointerDown = (e: PointerEvent) => {
        setIsInteracting(true);
        lastMouseXRef.current = e.clientX;
        if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
      };

      const handlePointerMove = (e: PointerEvent) => {
        if (lastMouseXRef.current === null) return;
        const delta = e.clientX - lastMouseXRef.current;
        lastMouseXRef.current = e.clientX;
        setRotation(prev => prev + delta * 0.3);
      };

      const handlePointerUp = () => {
        lastMouseXRef.current = null;
        interactionTimeoutRef.current = setTimeout(() => {
          setIsInteracting(false);
        }, 500);
      };

      container.addEventListener('pointerdown', handlePointerDown);
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);

      return () => {
        container.removeEventListener('pointerdown', handlePointerDown);
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerup', handlePointerUp);
        if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
      };
    }, []);

    // Auto-rotation when not interacting
    useEffect(() => {
      const autoRotate = () => {
        if (!isInteracting) {
          setRotation(prev => prev + autoRotateSpeed);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isInteracting, autoRotateSpeed]);

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        role="region"
        aria-label="3D Galerie"
        className={cn("relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none", className)}
        style={{ perspective: '2000px' }}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            const opacity = Math.max(0.3, 1 - (normalizedAngle / 180));

            return (
              <div
                key={item.photo.url}
                role="group"
                aria-label={item.title}
                className="absolute w-[280px] h-[370px] sm:w-[300px] sm:h-[400px]"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-140px',
                  marginTop: '-185px',
                  opacity: opacity,
                  transition: 'opacity 0.3s linear',
                }}
              >
                <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden group border border-bronze/20 bg-cream/70 backdrop-blur-lg">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                    draggable={false}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent text-cream">
                    <h2 className="text-xl font-serif font-bold">{item.title}</h2>
                    <p className="text-sm font-sans opacity-80 mt-1">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
