import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data";

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Review</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Kata Mereka</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-3xl shadow-lg shadow-black/5 border border-border/50 relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10 rotate-180" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-8 relative z-10">
                "{testi.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-border/50 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-foreground">{testi.name}</h5>
                  <p className="text-sm text-muted-foreground">{testi.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
