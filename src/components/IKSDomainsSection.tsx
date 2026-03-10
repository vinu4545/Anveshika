import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "@/theme/ThemeContext";

import ayurveda from "@/assets/ayurveda.jpg";
import vedicMath from "@/assets/vedic-math.jpg";
import astronomy from "@/assets/astronomy.jpg";
import agriculture from "@/assets/agriculture.jpg";
import vastu from "@/assets/vastu.jpg";
import metallurgy from "@/assets/metallurgy.jpg";
import yoga from "@/assets/yoga.jpg";
import philosophy from "@/assets/philosophy.jpg";

const domains = [
  { title: "Ayurveda", subtitle: "The Science of Life", image: ayurveda },
  { title: "Vedic Mathematics", subtitle: "Ancient Computational Wisdom", image: vedicMath },
  { title: "Ancient Astronomy", subtitle: "Mapping the Cosmos", image: astronomy },
  { title: "Traditional Agriculture", subtitle: "Sustainable Farming Heritage", image: agriculture },
  { title: "Vastu Architecture", subtitle: "Sacred Spatial Design", image: vastu },
  { title: "Metallurgy", subtitle: "Ancient Material Science", image: metallurgy },
  { title: "Yoga Science", subtitle: "Mind-Body Integration", image: yoga },
  { title: "Indian Philosophy", subtitle: "Foundations of Thought", image: philosophy },
];

const IKSDomainsSection = () => {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { isDark } = useTheme();

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 350, behavior: "smooth" });
  };

  return (
    <section
      id="iks-domains"
      className={`py-24 relative text-foreground ${isDark ? "bg-black" : "bg-background"}`}
      ref={ref}
    >
      <div className="container mx-auto px-4 mb-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="sanskrit-text text-center text-primary/60 text-lg md:text-xl mb-4"
        >
          "सा विद्या या विमुक्तये" — Knowledge is that which liberates
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4"
        >
          IKS Knowledge <span className="gradient-text">Domains</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-8"
        >
          Explore the vast heritage of Indian Knowledge Systems across diverse disciplines
        </motion.p>

        {/* Scroll buttons */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => scroll(-1)}
            className="p-2 rounded-full glass-card transition-all duration-200 hover:scale-110 hover:bg-[#7c1b1f] hover:text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="p-2 rounded-full glass-card transition-all duration-200 hover:scale-110 hover:bg-[#7c1b1f] hover:text-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal scroll carousel */}
      <div ref={scrollRef} className="scroll-horizontal flex gap-6 px-8 pb-4">
        {domains.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 * i }}
            className="shrink-0 w-[300px] md:w-[340px] group relative rounded-2xl overflow-hidden hover-lift cursor-pointer"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="aspect-[3/4] relative overflow-hidden">
              <img
                src={d.image}
                alt={d.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs text-primary/80 uppercase tracking-widest mb-1">{d.subtitle}</p>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">{d.title}</h3>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-primary/20 text-primary backdrop-blur-md border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IKSDomainsSection;
