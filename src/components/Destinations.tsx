import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { destinations } from "@/data";

export function Destinations() {
  return (
    <section id="destinasi" className="py-24 md:py-32 bg-background pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Destinasi Pilihan</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Destinasi Populer</h3>
            <p className="text-muted-foreground text-lg">
              Eksplorasi keindahan alam Indonesia dari ujung barat hingga timur. Temukan destinasi impian Anda selanjutnya.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-4">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2 text-white/80 text-sm mb-2 font-medium">
                    <MapPin className="w-4 h-4 text-primary" />
                    Indonesia
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-1">{dest.name}</h4>
                </div>
              </div>
              <div className="px-2">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {dest.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground block">Mulai dari</span>
                    <span className="font-bold text-foreground">{dest.price}</span>
                  </div>
                  <a href="#paket" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
