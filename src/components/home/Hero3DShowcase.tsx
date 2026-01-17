import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const foodImages = [
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80",
];

const floatingIngredients = [
  { emoji: "🍅", delay: 0, x: -120, y: -80 },
  { emoji: "🌿", delay: 0.5, x: 130, y: -60 },
  { emoji: "🧄", delay: 1, x: -100, y: 80 },
  { emoji: "🫒", delay: 1.5, x: 140, y: 60 },
  { emoji: "🌶️", delay: 2, x: -60, y: 120 },
  { emoji: "🍋", delay: 2.5, x: 80, y: -100 },
];

export const Hero3DShowcase = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % foodImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x: x * 15, y: y * 15 });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-wood-texture opacity-30" />
      
      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-body mb-6"
            >
              ✦ Farm to Table Excellence
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
            >
              Where Every
              <span className="block text-primary">Meal Tells</span>
              <span className="block italic">a Story</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-body text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8"
            >
              Experience the warmth of handcrafted dishes made with locally-sourced ingredients, 
              served in an atmosphere that feels like home.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="/menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Explore Our Menu
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary text-primary rounded-full font-body font-medium text-lg hover:bg-primary/5 transition-colors"
              >
                Reserve a Table
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 3D Food Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          >
            {/* Main Dish Plate */}
            <motion.div
              animate={{
                rotateX: -mousePosition.y,
                rotateY: mousePosition.x,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative preserve-3d mx-auto"
              style={{ maxWidth: "500px" }}
            >
              {/* Plate Shadow */}
              <div className="absolute inset-0 translate-y-8 blur-3xl bg-foreground/20 rounded-full" />
              
              {/* Main Plate */}
              <div className="relative">
                {/* Plate Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-golden/30 via-transparent to-primary/20 p-1">
                  <div className="w-full h-full rounded-full bg-linen" />
                </div>
                
                {/* Food Image */}
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-square rounded-full overflow-hidden border-8 border-linen shadow-2xl"
                >
                  <img
                    src={foodImages[currentImage]}
                    alt="Signature dish"
                    className="w-full h-full object-cover"
                  />
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
                </motion.div>
              </div>

              {/* Floating Ingredients */}
              {floatingIngredients.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    delay: item.delay,
                    duration: 0.5,
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay,
                    },
                    rotate: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay,
                    },
                  }}
                  className="absolute text-4xl"
                  style={{
                    left: `calc(50% + ${item.x}px)`,
                    top: `calc(50% + ${item.y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {item.emoji}
                </motion.div>
              ))}
            </motion.div>

            {/* Image Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {foodImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
