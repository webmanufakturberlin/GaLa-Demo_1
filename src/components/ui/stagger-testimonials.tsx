"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

export interface StaggerTestimonial {
  tempId: number;
  testimonial: string;
  by: string;
  location: string;
  rating: number;
}

interface TestimonialCardProps {
  position: number;
  testimonial: StaggerTestimonial;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-forest text-cream border-forest"
          : "z-0 bg-cream text-forest border-bronze/20 hover:border-bronze/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(146,108,68,0.3)" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className={cn("absolute block origin-top-right rotate-45", isCenter ? "bg-bronze/30" : "bg-bronze/15")}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />

      {/* Star rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < testimonial.rating
                ? isCenter ? "fill-bronze text-bronze" : "fill-bronze text-bronze"
                : "fill-none text-bronze/20"
            )}
          />
        ))}
      </div>

      <h3 className={cn(
        "text-base sm:text-lg font-serif italic leading-relaxed",
        isCenter ? "text-cream" : "text-forest"
      )}>
        "{testimonial.testimonial}"
      </h3>

      <div className={cn(
        "absolute bottom-8 left-8 right-8 mt-2",
        isCenter ? "text-cream/80" : "text-forest/60"
      )}>
        <p className="text-sm font-serif font-semibold">
          {testimonial.by}
        </p>
        <p className="text-xs font-sans uppercase tracking-widest mt-1 opacity-70">
          {testimonial.location}
        </p>
      </div>
    </div>
  );
};

interface StaggerTestimonialsProps {
  testimonials: StaggerTestimonial[];
  className?: string;
}

export const StaggerTestimonials: React.FC<StaggerTestimonialsProps> = ({ testimonials: initialTestimonials, className }) => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(initialTestimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300",
            "bg-cream border-2 border-bronze/30 text-forest hover:bg-bronze hover:text-cream hover:border-bronze",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
          )}
          aria-label="Vorheriges Testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300",
            "bg-cream border-2 border-bronze/30 text-forest hover:bg-bronze hover:text-cream hover:border-bronze",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
          )}
          aria-label="Nächstes Testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
