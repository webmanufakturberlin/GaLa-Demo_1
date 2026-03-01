import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  location: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  rating: number // 1-5 stars
  href?: string
  className?: string
}

export function TestimonialCard({
  author,
  text,
  rating,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'

  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg border border-bronze/20",
        "bg-gradient-to-b from-cream/50 to-cream/10",
        "p-4 text-start sm:p-6",
        "hover:from-cream/60 hover:to-cream/20",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-colors duration-300",
        className
      )}
    >
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating ? "fill-bronze text-bronze" : "fill-none text-bronze/20"
            )}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="sm:text-md mb-4 text-sm text-forest/80 italic leading-relaxed">
        "{text}"
      </p>

      {/* Author Info */}
      <div className="flex flex-col items-start mt-auto">
        <h3 className="text-md font-semibold leading-none text-forest font-serif">
          {author.name}
        </h3>
        <p className="text-xs text-forest/50 uppercase tracking-widest mt-1 font-sans">
          {author.location}
        </p>
      </div>
    </Card>
  )
}
