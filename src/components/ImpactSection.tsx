import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Cpu, Globe, Users } from "lucide-react";

const AnimatedCounter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span>{count}+</span>;
};

const stats = [
  { icon: GraduationCap, label: "Academic Impact", value: 50, suffix: "Research Projects", desc: "Published papers and ongoing research" },
  { icon: Cpu, label: "Tech Innovation", value: 30, suffix: "Tech Solutions", desc: "Working prototypes and applications" },
  { icon: Globe, label: "Social Impact", value: 20, suffix: "Community Programs", desc: "Villages and communities reached" },
  { icon: Users, label: "Student Growth", value: 500, suffix: "Active Members", desc: "Students empowered through IKS" },
];

const ImpactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="sanskrit-text text-center text-primary/60 text-lg md:text-xl mb-4"
        >
          "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन" — Focus on action, not results
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Our <span className="gradient-text">Impact</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i }}
              className="glass-card rounded-2xl p-8 text-center hover-lift group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:animate-glow-pulse transition-all">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-display text-4xl font-bold gradient-text mb-1">
                <AnimatedCounter target={s.value} inView={inView} />
              </div>
              <p className="text-sm font-medium text-foreground mb-1">{s.suffix}</p>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
