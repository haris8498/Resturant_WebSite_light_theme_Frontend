import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const About = () => (
  <Layout>
    <section className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-foreground mb-4">Our Story</h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">A tradition of culinary excellence since 1999</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.img initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" alt="Chef" className="rounded-2xl shadow-xl" />
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="font-serif text-3xl font-bold mb-6">From Our Family to Yours</h2>
            <p className="font-body text-muted-foreground mb-4">For over 25 years, The Rustic Table has been a cornerstone of farm-to-table dining. Our commitment to local farmers and artisanal ingredients creates dishes that tell the story of our land.</p>
            <p className="font-body text-muted-foreground">Every meal is prepared with love, honoring traditions passed down through three generations of our family.</p>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
