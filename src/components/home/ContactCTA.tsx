import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

export const ContactCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 bg-golden/20 text-golden rounded-full text-sm font-body mb-4">
              Visit Us Today
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              Ready for an
              <span className="text-golden block">Unforgettable Experience?</span>
            </h2>
            <p className="font-body text-lg text-cream/80 mb-8 max-w-lg">
              Join us for an evening of exceptional cuisine and warm hospitality. 
              Reserve your table and let us create memories for you.
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-golden text-wood rounded-full font-body font-semibold text-lg shadow-lg hover:bg-golden/90 transition-colors"
            >
              Reserve Your Table
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {[
              {
                icon: MapPin,
                title: "Location",
                content: "123 Harvest Lane, Countryside, CA 90210",
              },
              {
                icon: Phone,
                title: "Reservations",
                content: "(555) 123-4567",
              },
              {
                icon: Clock,
                title: "Opening Hours",
                content: "Tue-Sat: 5pm-11pm | Sun: 10am-9pm",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="bg-card/10 backdrop-blur-sm border border-cream/20 rounded-2xl p-6 flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-xl bg-golden/20 flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} className="text-golden" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-cream text-lg">
                    {item.title}
                  </h4>
                  <p className="font-body text-cream/70">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
