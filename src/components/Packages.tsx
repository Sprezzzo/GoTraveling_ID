import { useState } from "react";
import { motion } from "framer-motion";
import { Check, CalendarDays, Clock, MessageCircle } from "lucide-react";
import { openTrips, privateTrips, WHATSAPP_LINK } from "@/data";

export function Packages() {
  const [activeTab, setActiveTab] = useState<"open" | "private">("open");

  const currentTrips = activeTab === "open" ? openTrips : privateTrips;

  return (
    <section id="paket" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Penawaran Spesial</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8">Paket Trip Kami</h3>

            {/* Custom Tabs */}
            <div className="inline-flex items-center p-1 bg-muted rounded-xl mb-12">
              <button
                onClick={() => setActiveTab("open")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === "open"
                    ? "bg-background text-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Open Trip
              </button>
              <button
                onClick={() => setActiveTab("private")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === "private"
                    ? "bg-background text-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Private Trip
              </button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTrips.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden flex flex-col relative shadow-xl shadow-black/30 group min-h-[520px]"
            >
              {/* Destination background photo */}
              <div className="absolute inset-0">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              </div>

              {/* Glass content panel */}
              <div className="relative z-10 flex flex-col flex-1 p-7 pt-auto justify-end">
                {/* Top badges */}
                <div className="flex items-center gap-2 mb-auto pt-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-sm text-white border border-white/20">
                    <Clock className="w-3 h-3" /> {trip.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-sm text-white border border-white/20">
                    <CalendarDays className="w-3 h-3" /> Everyday
                  </span>
                </div>

                {/* Glass card body */}
                <div className="mt-32 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5">
                  <h4 className="text-xl font-bold text-white mb-1">{trip.title}</h4>
                  <p className="text-sm text-white/75 mb-4 leading-relaxed">{trip.description}</p>

                  <div className="mb-4 pb-4 border-b border-white/20">
                    <span className="text-2xl font-bold text-primary drop-shadow-sm">{trip.price}</span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {['Transportasi ber-AC', 'Driver & Guide ramah', 'Tiket wisata', 'Dokumentasi premium'].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-white/85">
                        <div className="bg-primary/80 rounded-full p-0.5 flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-lg font-semibold bg-green-500 hover:bg-green-400 text-white flex items-center justify-center gap-2 transition-colors duration-200 text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Booking via WhatsApp
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
