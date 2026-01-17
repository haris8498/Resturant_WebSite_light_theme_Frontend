import { motion } from "framer-motion";
import { Star } from "lucide-react";

const featuredDishes = [
  {
    name: "Herb-Crusted Lamb",
    description: "Tender lamb with rosemary, thyme, and garlic, served with roasted vegetables",
    price: "$42",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
    tag: "Chef's Special",
  },
  {
    name: "Wild Mushroom Risotto",
    description: "Creamy arborio rice with foraged mushrooms and aged parmesan",
    price: "$28",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80",
    tag: "Vegetarian",
  },
  {
    name: "Pan-Seared Salmon",
    description: "Fresh Atlantic salmon with lemon butter sauce and seasonal greens",
    price: "$36",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80",
    tag: "Popular",
  },
];

export const FeaturedDishes = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-golden/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-body mb-4">
            Our Specialties
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Dishes
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites from our seasonal menu, crafted with love and the finest ingredients
          </p>
        </motion.div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish, index) => (
            <motion.article
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 warm-shadow">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-golden text-wood text-xs font-body font-semibold rounded-full">
                    {dish.tag}
                  </span>
                  
                  {/* Price */}
                  <span className="absolute bottom-4 right-4 px-4 py-2 bg-card/90 backdrop-blur-sm text-foreground font-serif text-xl font-bold rounded-full shadow-lg">
                    {dish.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-golden text-golden" />
                    ))}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {dish.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground line-clamp-2">
                    {dish.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium hover:bg-primary/90 transition-colors shadow-lg"
          >
            View Full Menu
            <span className="text-lg">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
