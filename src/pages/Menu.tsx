import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";

const menuCategories = ["All", "Appetizers", "Mains", "Desserts", "Drinks"];

const menuItems = [
  { name: "Bruschetta", description: "Grilled bread with tomato, basil, and olive oil", price: "$12", category: "Appetizers", image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80" },
  { name: "Soup of the Day", description: "Chef's seasonal selection with crusty bread", price: "$10", category: "Appetizers", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80" },
  { name: "Herb-Crusted Lamb", description: "Tender lamb with rosemary and roasted vegetables", price: "$42", category: "Mains", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80" },
  { name: "Pan-Seared Salmon", description: "Atlantic salmon with lemon butter sauce", price: "$36", category: "Mains", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80" },
  { name: "Wild Mushroom Risotto", description: "Creamy arborio rice with foraged mushrooms", price: "$28", category: "Mains", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80" },
  { name: "Tiramisu", description: "Classic Italian dessert with espresso and mascarpone", price: "$14", category: "Desserts", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80" },
  { name: "Artisan Wine", description: "Selection of local and imported wines", price: "$12+", category: "Drinks", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80" },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? menuItems : menuItems.filter(i => i.category === activeCategory);

  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold text-foreground mb-4">Our Menu</h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">Seasonal dishes crafted with love</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {menuCategories.map((cat) => (
              <motion.button key={cat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-body text-sm transition-all ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}>
                {cat}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl font-bold">{item.name}</h3>
                    <span className="text-primary font-serif font-bold">{item.price}</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
