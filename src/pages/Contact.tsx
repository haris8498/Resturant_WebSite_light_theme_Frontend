import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="font-body text-muted-foreground">We'd love to hear from you</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              {[
                { icon: MapPin, label: "Address", value: "123 Harvest Lane, Countryside, CA 90210" },
                { icon: Phone, label: "Phone", value: "(555) 123-4567" },
                { icon: Mail, label: "Email", value: "hello@rustictable.com" },
                { icon: Clock, label: "Hours", value: "Tue-Sat: 5pm-11pm | Sun: 10am-9pm" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 bg-card rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold">{item.label}</h3>
                    <p className="font-body text-muted-foreground text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.form initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="bg-card p-8 rounded-2xl shadow-lg space-y-6">
              {submitted ? (
                <div className="text-center py-12">
                  <span className="text-5xl mb-4 block">✓</span>
                  <h3 className="font-serif text-2xl font-bold text-primary">Thank You!</h3>
                  <p className="font-body text-muted-foreground mt-2">We'll be in touch soon.</p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" required className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                    <input type="email" placeholder="Email" required className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                  <textarea placeholder="Message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                    className="w-full py-4 bg-primary text-primary-foreground rounded-full font-body font-medium">
                    Send Message
                  </motion.button>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
