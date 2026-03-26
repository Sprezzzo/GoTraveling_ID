import { motion } from "framer-motion";
import { galleryImages } from "@/data";

export function Gallery() {
  return (
    <section id="galeri" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Momen Indah</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Galeri Perjalanan</h3>
            <p className="text-muted-foreground text-lg">
              Kumpulan momen tak terlupakan dari perjalanan seru tamu-tamu kami.
            </p>
          </motion.div>
        </div>

        <div className="masonry-grid">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="masonry-item relative group rounded-2xl overflow-hidden cursor-pointer bg-muted"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full bg-white/10">
                  Glorious Trip
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
