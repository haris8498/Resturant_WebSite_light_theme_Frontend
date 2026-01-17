import { motion } from "framer-motion";
import { Leaf, Heart, Award, Users } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Farm Fresh",
    description: "Locally sourced ingredients from partner farms within 50 miles",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish is crafted with passion and attention to detail",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for culinary excellence and sustainable practices",
  },
  {
    icon: Users,
    title: "Family Owned",
    description: "Three generations of culinary tradition and hospitality",
  },
];

export const AboutPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80"
                    alt="Chef preparing food"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-square bg-primary p-6 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <span className="font-serif text-5xl font-bold block">25+</span>
                    <span className="font-body text-sm opacity-80">Years of Excellence</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4 mt-8"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80"
                    alt="Restaurant ambiance"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&q=80"
                    alt="Fresh ingredients"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/10 via-transparent to-golden/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-body mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Tradition of
              <span className="text-primary block">Culinary Excellence</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
              Nestled in the heart of the countryside, The Rustic Table has been serving 
              farm-fresh cuisine since 1999. Our commitment to sustainable farming and 
              traditional cooking methods creates an unforgettable dining experience.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-foreground">{value.title}</h4>
                    <p className="font-body text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-body font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Learn Our Story
              <span className="text-lg">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
