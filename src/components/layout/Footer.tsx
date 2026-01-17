import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-wood text-cream py-16 relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 bg-linen-texture opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-2xl font-bold">R</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">The Rustic Table</h3>
                <p className="text-xs text-cream/60 tracking-widest uppercase">Farm to Table</p>
              </div>
            </div>
            <p className="text-cream/70 font-body text-sm leading-relaxed">
              A culinary journey through the seasons, celebrating local farmers and artisanal traditions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-serif text-lg font-semibold mb-6">Explore</h4>
            <nav className="flex flex-col gap-3">
              {["Menu", "About", "Gallery", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-cream/70 hover:text-golden transition-colors font-body text-sm"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg font-semibold mb-6">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-golden mt-1 flex-shrink-0" />
                <p className="text-cream/70 font-body text-sm">
                  123 Harvest Lane<br />
                  Countryside, CA 90210
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-golden flex-shrink-0" />
                <p className="text-cream/70 font-body text-sm">(555) 123-4567</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-golden mt-1 flex-shrink-0" />
                <div className="text-cream/70 font-body text-sm">
                  <p>Tue - Thu: 5pm - 10pm</p>
                  <p>Fri - Sat: 5pm - 11pm</p>
                  <p>Sun: 10am - 3pm, 5pm - 9pm</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-serif text-lg font-semibold mb-6">Stay Connected</h4>
            <div className="flex gap-4 mb-6">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-golden/20 transition-colors"
                >
                  <Icon size={18} className="text-cream" />
                </motion.a>
              ))}
            </div>
            <p className="text-cream/70 font-body text-sm mb-4">
              Subscribe for seasonal menu updates and exclusive events.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 font-body text-sm focus:outline-none focus:border-golden"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-golden text-wood rounded-full font-body text-sm font-medium"
              >
                Join
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-cream/50 font-body text-sm">
            © 2024 The Rustic Table. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cream/50 hover:text-cream font-body text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-cream/50 hover:text-cream font-body text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
