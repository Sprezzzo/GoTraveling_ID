import { motion } from "framer-motion";
import { ShieldCheck, Tags, Shield, Users } from "lucide-react";

const stats = [
  { value: "1.5K+", label: "Trip Sukses" },
  { value: "10.4K", label: "Followers" },
  { value: "2015", label: "Berdiri Sejak" },
];

export function Highlights() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Terpercaya Sejak 2015",
      description: "Lebih dari 10 tahun melayani ribuan wisatawan domestik dan mancanegara.",
    },
    {
      icon: <Tags className="w-8 h-8" />,
      title: "Harga Terjangkau",
      description: "Paket wisata budget friendly tanpa sedikitpun mengurangi kualitas pelayanan.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trip Aman & Nyaman",
      description: "Armada transportasi terjamin dan akomodasi penginapan terbaik di kelasnya.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Guide Profesional",
      description: "Tim pemandu lokal yang berpengalaman, informatif, dan sangat ramah.",
    },
  ];

  return (
    <section className="bg-muted/50 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute -top-24 -right-24 w-96 h-96 opacity-5 pointer-events-none mix-blend-multiply">
        <img
          src={`${import.meta.env.BASE_URL}images/pattern-bg.png`}
          alt="Decorative pattern"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Stats Bar — sits at the very top of this section, fully visible */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-2xl px-6 py-8 shadow-xl shadow-black/20 flex flex-wrap justify-around items-center gap-6 divide-x divide-border"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center flex-1 px-4 min-w-[80px]">
              <span className="text-3xl font-bold text-primary">{stat.value}</span>
              <span className="text-sm text-muted-foreground font-medium mt-1 text-center whitespace-nowrap">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Keunggulan</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Mengapa Pilih Kami?</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
