import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/theme/ThemeContext";
import { useWelcomeDialog } from "@/components/WelcomeDialog";
import { useLocation } from "react-router-dom";

const menuItems = [
  {
    label: "Home",
    href: "#hero",
  },
  {
    label: "About",
    href: "#about",
    submenu: [
      { label: "Our Vision", href: "#about" },
      { label: "Philosophy", href: "#about" },
      { label: "DYPCOE", href: "#about" },
      { label: "Team", href: "/team" },
    ],
  },
  {
    label: "IKS Domains",
    href: "#iks-domains",
    submenu: [
      { label: "Ayurveda", href: "#iks-domains" },
      { label: "Vedic Mathematics", href: "#iks-domains" },
      { label: "Ancient Astronomy", href: "#iks-domains" },
      { label: "Traditional Agriculture", href: "#iks-domains" },
      { label: "Vastu Architecture", href: "#iks-domains" },
      { label: "Metallurgy", href: "#iks-domains" },
      { label: "Yoga Science", href: "#iks-domains" },
      { label: "Indian Philosophy", href: "#iks-domains" },
    ],
  },
  {
    label: "Innovation",
    href: "#tech-integration",
    submenu: [
      { label: "AI + Ayurveda", href: "#tech-integration" },
      { label: "IoT + Water Systems", href: "#tech-integration" },
      { label: "Data Science + Agriculture", href: "#tech-integration" },
      { label: "Robotics + Mechanics", href: "#tech-integration" },
      { label: "Blockchain + Knowledge", href: "#tech-integration" },
    ],
  },
  {
    label: "Events & Activities",
    href: "#activities",
    submenu: [
      { label: "Expert Lecture Series", href: "#activities" },
      { label: "IKS Hackathons", href: "#activities" },
      { label: "Field Research", href: "#activities" },
      { label: "Innovation Exhibitions", href: "#activities" },
      { label: "Vedic Math Workshops", href: "#activities" },
      { label: "Cultural Heritage Events", href: "#activities" },
    ],
  },
  {
    label: "Impact",
    href: "#impact",
  },
  {
    label: "Join Us",
    href: "#cta",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);

  const { isDark, toggle } = useTheme();
  const { openDialog } = useWelcomeDialog();
  const location = useLocation();

  const logoSrc = isDark ? "/logo-dark.jpeg" : "/logo-light.jpeg";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const resolveLink = (href: string) => {
    if (href.startsWith("#")) {
      return location.pathname === "/" ? href : `/${href}`;
    }
    return href;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-primary/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <a
          href="/#hero"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              openDialog();
            }
          }}
          className="flex items-center gap-3"
        >
          <img
            src={logoSrc}
            alt="Anveshika"
            className="h-10 w-10 rounded-full object-cover border border-primary/30"
          />
          <span className="font-display text-xl font-bold gradient-text">
            Anveshika
          </span>
        </a>

        <div className="flex items-center gap-3">

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div key={item.label} className="nav-item relative">
                <a
                  href={resolveLink(item.href)}
                  className="flex items-center gap-1 px-4 py-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-3.5 h-3.5" />}
                </a>

                {item.submenu && (
                  <div className="nav-dropdown">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.label}
                        href={resolveLink(sub.href)}
                        className="block px-4 py-2.5 text-base text-foreground/90 hover:text-primary hover:bg-primary/5 transition-all"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle isDark={isDark} toggle={toggle} />

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => {
                      if (item.submenu) {
                        setOpenMobileSub(
                          openMobileSub === item.label ? null : item.label
                        );
                      } else {
                        window.location.href = resolveLink(item.href);
                        setMobileOpen(false);
                      }
                    }}
                    className="w-full flex items-center justify-between px-3 py-3 text-base text-foreground/80 hover:text-primary transition-colors rounded-lg"
                  >
                    <span className="font-medium text-base">{item.label}</span>

                    {item.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openMobileSub === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {item.submenu && openMobileSub === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        {item.submenu.map((sub) => (
                          <a
                            key={sub.label}
                            href={resolveLink(sub.href)}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2.5 text-base text-foreground/90 hover:text-primary transition-colors"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;