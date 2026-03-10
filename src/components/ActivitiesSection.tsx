import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Mic, Code, MapPin, Trophy, Calculator, Palette, Landmark, Users } from "lucide-react";
import { useTheme } from "@/theme/ThemeContext";

const activities = [
  { icon: Mic, title: "Expert Lecture Series on IKS", desc: "Renowned scholars sharing ancient wisdom" },
  { icon: Code, title: "IKS Technology Hackathons", desc: "Building solutions bridging tradition & tech" },
  { icon: MapPin, title: "Field Research Visits", desc: "On-ground exploration of heritage sites" },
  { icon: Trophy, title: "Innovation Exhibitions", desc: "Showcasing student research projects" },
  { icon: Calculator, title: "Vedic Mathematics Workshops", desc: "Ancient computational techniques" },
  { icon: Palette, title: "Traditional Craft Workshops", desc: "Hands-on learning of heritage crafts" },
  { icon: Landmark, title: "Cultural Heritage Events", desc: "Celebrating India's knowledge traditions" },
  { icon: Users, title: "Community Outreach Programs", desc: "Bringing IKS to communities" },
];

const ActivitiesSection = () => {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { isDark } = useTheme();

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 350, behavior: "smooth" });
  };

  return (
    <section
      id="activities"
      className={`py-24 text-foreground ${isDark ? "bg-black" : "bg-background"}`}
      ref={ref}
    >
      <div className="container mx-auto px-4 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Events & <span className="gradient-text">Activities</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-8"
        >
          Engage, learn, and innovate through our diverse programs
        </motion.p>
        <div className="flex justify-center gap-3">
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

      <div ref={scrollRef} className="scroll-horizontal flex gap-6 px-8 pb-4">
        {activities.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 * i }}
            className="shrink-0 w-[280px] md:w-[320px] glass-card rounded-2xl p-8 hover-lift group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(123,31,37,0.45)]">
              <a.icon className="w-7 h-7 text-primary transition-colors group-hover:text-[hsl(348,40%,20%)]" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{a.title}</h3>
            <p className="text-muted-foreground text-sm mb-5">{a.desc}</p>
            <span className="inline-flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
              Explore <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ActivitiesSection;
