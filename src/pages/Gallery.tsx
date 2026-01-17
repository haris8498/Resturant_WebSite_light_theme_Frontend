import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80",
];

const Gallery = () => (
  <Layout>
    <section className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-foreground mb-4">Gallery</h1>
          <p className="font-body text-muted-foreground">A visual journey through our kitchen</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }} className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Gallery;
