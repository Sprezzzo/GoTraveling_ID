import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { offices } from "@/data";

function getMapsUrl(address: string, city: string) {
  const query = encodeURIComponent(`${address}, ${city}, Indonesia`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function Offices() {
  return (
    <section id="kontak" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Lokasi</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Alamat Kantor Kami</h3>
            <p className="text-muted-foreground text-lg">
              Kunjungi cabang kantor kami yang tersebar di berbagai destinasi utama di Indonesia.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {offices.map((office, index) => (
            <motion.a
              key={index}
              href={getMapsUrl(office.address, office.city)}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group flex flex-col items-start cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-1.5">
                {office.city}
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                {office.address}
              </p>
              <span className="mt-3 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                Buka di Google Maps →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
