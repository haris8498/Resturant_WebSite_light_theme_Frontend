import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Food Critic",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    quote: "The Rustic Table offers an unforgettable dining experience. Every dish tells a story of craftsmanship and passion for local ingredients.",
    rating: 5,
  },
  {
    name: "James Crawford",
    role: "Regular Guest",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    quote: "This has become our family's favorite spot. The warm atmosphere and exceptional food make every visit feel like coming home.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Travel Blogger",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    quote: "A hidden gem that deserves all the praise. The farm-to-table concept is executed perfectly, and the herb-crusted lamb is divine!",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      {/* Decorative quotes */}
      <div className="absolute top-12 left-12 text-primary/10">
        <Quote size={120} />
      </div>
      <div className="absolute bottom-12 right-12 text-primary/10 rotate-180">
        <Quote size={120} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-body mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            What Our Guests Say
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-xl text-center"
          >
            {/* Avatar */}
            <div className="mb-6">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-golden shadow-lg"
              >
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-golden text-xl"
                >
                  ★
                </motion.span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-body text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
              "{testimonials[current].quote}"
            </blockquote>

            {/* Author */}
            <div>
              <p className="font-serif text-lg font-bold text-foreground">
                {testimonials[current].name}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {testimonials[current].role}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-md"
            >
              <ChevronLeft size={20} />
            </motion.button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-md"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
