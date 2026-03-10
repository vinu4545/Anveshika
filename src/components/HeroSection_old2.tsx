import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Compass, BookOpen, Users } from "lucide-react";
import ParticleField from "./ParticleField";
import { TREE_SVG_HTML } from "./treeSvg";
import { useTheme } from "@/theme/ThemeContext";

// ─────────────────────────────────────────────────────────────────────────────
// Tree CSS  (wind keyframes · fruit animations · leaf color vars)
// ─────────────────────────────────────────────────────────────────────────────
const TREE_CSS = `
  @keyframes fruitWind_about {
    0% { transform: rotate(0.000deg); }
    20% { transform: rotate(0.660deg); }
    38% { transform: rotate(1.320deg); }
    55% { transform: rotate(0.550deg); }
    70% { transform: rotate(1.100deg); }
    85% { transform: rotate(0.330deg); }
    95% { transform: rotate(0.770deg); }
    100% { transform: rotate(0.000deg); }
  }
  @keyframes fruitWind_research {
    0% { transform: rotate(0.000deg); }
    20% { transform: rotate(0.540deg); }
    38% { transform: rotate(1.080deg); }
    55% { transform: rotate(0.450deg); }
    70% { transform: rotate(0.900deg); }
    85% { transform: rotate(0.270deg); }
    95% { transform: rotate(0.630deg); }
    100% { transform: rotate(0.000deg); }
  }
  @keyframes fruitWind_documentation {
    0% { transform: rotate(0.000deg); }
    20% { transform: rotate(0.720deg); }
    38% { transform: rotate(1.440deg); }
    55% { transform: rotate(0.600deg); }
    70% { transform: rotate(1.200deg); }
    85% { transform: rotate(0.360deg); }
    95% { transform: rotate(0.840deg); }
    100% { transform: rotate(0.000deg); }
  }
  @keyframes fruitWind_projects {
    0% { transform: rotate(0.000deg); }
    18% { transform: rotate(0.340deg); }
    35% { transform: rotate(0.765deg); }
    52% { transform: rotate(0.297deg); }
    67% { transform: rotate(0.637deg); }
    82% { transform: rotate(0.170deg); }
    93% { transform: rotate(0.468deg); }
    100% { transform: rotate(0.000deg); }
  }
  @keyframes fruitWind_events {
    0% { transform: rotate(0.000deg); }
    18% { transform: rotate(0.300deg); }
    35% { transform: rotate(0.675deg); }
    52% { transform: rotate(0.262deg); }
    67% { transform: rotate(0.562deg); }
    82% { transform: rotate(0.150deg); }
    93% { transform: rotate(0.413deg); }
    100% { transform: rotate(0.000deg); }
  }
  @keyframes fruitWind_magazines {
    0% { transform: rotate(0.000deg); }
    22% { transform: rotate(0.450deg); }
    40% { transform: rotate(0.900deg); }
    56% { transform: rotate(0.360deg); }
    70% { transform: rotate(0.765deg); }
    83% { transform: rotate(0.225deg); }
    94% { transform: rotate(0.585deg); }
    100% { transform: rotate(0.000deg); }
  }
  @keyframes fruitWind_ayurveda {
    0% { transform: rotate(0.000deg); }
    22% { transform: rotate(0.400deg); }
    40% { transform: rotate(0.800deg); }
    56% { transform: rotate(0.320deg); }
    70% { transform: rotate(0.680deg); }
    83% { transform: rotate(0.200deg); }
    94% { transform: rotate(0.520deg); }
    100% { transform: rotate(0.000deg); }
  }
  @keyframes fruitWind_sanskrit {
    0% { transform: rotate(0.000deg); }
    20% { transform: rotate(0.770deg); }
    36% { transform: rotate(1.430deg); }
    53% { transform: rotate(0.605deg); }
    67% { transform: rotate(1.155deg); }
    81% { transform: rotate(0.385deg); }
    92% { transform: rotate(0.935deg); }
    100% { transform: rotate(0.000deg); }
  }
  @keyframes fruitWind_shastra {
    0% { transform: rotate(0.000deg); }
    20% { transform: rotate(0.665deg); }
    36% { transform: rotate(1.235deg); }
    53% { transform: rotate(0.522deg); }
    67% { transform: rotate(0.997deg); }
    81% { transform: rotate(0.332deg); }
    92% { transform: rotate(0.807deg); }
    100% { transform: rotate(0.000deg); }
  }

.svg-fruit .fruit-label-text {
  opacity: 0;
  transition: opacity 0.18s ease;
}
.svg-fruit:hover .fruit-label-text,
.svg-fruit:focus .fruit-label-text {
  opacity: 1;
}
.svg-fruit circle[stroke="white"] {
  transition: stroke-width 0.2s ease, r 0.2s cubic-bezier(0.34,1.56,0.64,1);
}
.svg-fruit:hover circle[stroke="white"],
.svg-fruit:focus circle[stroke="white"] {
  stroke-width: 6;
}





:root {
  /* ── Leaf green palette (light mode) ── */
  --lc-0: #26390F;
  --lc-1: #2B401D;
  --lc-10: #48602F;
  --lc-11: #4B6331;
  --lc-12: #506633;
  --lc-13: #586C37;
  --lc-14: #5A7238;
  --lc-15: #5C7539;
  --lc-16: #61793D;
  --lc-17: #677D3F;
  --lc-18: #6D833F;
  --lc-19: #708743;
  --lc-2: #304320;
  --lc-20: #768C44;
  --lc-21: #7B914A;
  --lc-22: #8CA350;
  --lc-3: #334521;
  --lc-4: #33471D;
  --lc-5: #364B23;
  --lc-6: #394F28;
  --lc-7: #3C5428;
  --lc-8: #3D4D1F;
  --lc-9: #41592B;
}
body.dark {
  /* ── Leaf golden palette (dark mode) ── */
  --lc-0: #855F06;
  --lc-1: #8C6811;
  --lc-10: #AE831F;
  --lc-11: #B18622;
  --lc-12: #B48924;
  --lc-13: #BA8F28;
  --lc-14: #C19223;
  --lc-15: #C49423;
  --lc-16: #C89929;
  --lc-17: #CC9C2A;
  --lc-18: #D39E23;
  --lc-19: #D7A329;
  --lc-2: #906C17;
  --lc-20: #DCA627;
  --lc-21: #E1AD30;
  --lc-22: #F4B92D;
  --lc-3: #926D18;
  --lc-4: #946A07;
  --lc-5: #987116;
  --lc-6: #9C7720;
  --lc-7: #A1791A;
  --lc-8: #9A6E07;
  --lc-9: #A77D1C;
}
`;

// ─────────────────────────────────────────────────────────────────────────────
// Tree JS  (leaf click-to-fall · fruit nav · theme-leaf-transition)
// Runs once after SVG mounts via new Function(TREE_JS)()
// ─────────────────────────────────────────────────────────────────────────────
const TREE_JS = `function rand(a,b){ return a + Math.random()*(b-a); }
function rsign(){ return Math.random()>.5?1:-1; }

function makeWindFrames(){
  const wd   = rsign() * rand(90, 320);   // horizontal wind drift
  const fall = rand(280, 560);            // vertical fall distance
  const rot  = rsign() * rand(240, 500);  // total spin degrees
  const wb   = rsign() * rand(18, 50);    // lateral flutter wobble

  return [
    { transform:'translate(0,0) rotate(0deg) scale(1)',                                      opacity:1,   offset:0    },
    { transform:\`translate(\${wd*.06}px,\${rand(-25,-8)}px) rotate(\${rot*.03}deg) scale(1.04)\`, opacity:1,   offset:0.07 },
    { transform:\`translate(\${wd*.22}px,\${rand(-8,10)}px)  rotate(\${rot*.12}deg) scale(.97)\`,  opacity:1,   offset:0.18 },
    { transform:\`translate(\${wd*.42+wb}px,\${fall*.28}px)  rotate(\${rot*.35}deg) scale(.88)\`,  opacity:.92, offset:0.38 },
    { transform:\`translate(\${wd*.63-wb*.6}px,\${fall*.52}px) rotate(\${rot*.57}deg) scale(.73)\`,opacity:.72, offset:0.56 },
    { transform:\`translate(\${wd*.80+wb*.3}px,\${fall*.74}px) rotate(\${rot*.76}deg) scale(.52)\`,opacity:.40, offset:0.74 },
    { transform:\`translate(\${wd}px,\${fall}px)              rotate(\${rot}deg)     scale(.12)\`, opacity:0,   offset:1    },
  ];
}

function setupLeaf(el){
  let busy = false;
  el.addEventListener('click', function(e){
    e.stopPropagation();
    if(busy) return;
    busy = true;

    // Cancel branch-sway while falling
    el.classList.add('leaf-falling');

    const dur  = rand(1300, 2100);
    const anim = el.animate(makeWindFrames(), {
      duration: dur,
      easing:  'cubic-bezier(.22,.61,.36,1)',
      fill:    'forwards'
    });

    anim.onfinish = ()=>{
      anim.cancel();                    // clear fill:forwards
      el.classList.remove('leaf-falling');
      el.classList.add('leaf-hidden');  // invisible while waiting

      setTimeout(()=>{
        el.classList.remove('leaf-hidden');
        el.classList.add('leaf-regrowing');

        const regrow = el.animate([
          { transform:'scale(0) rotate(-12deg)', opacity:0,   transformOrigin:'center', transformBox:'fill-box', offset:0    },
          { transform:'scale(1.18) rotate(4deg)',opacity:.88,  transformOrigin:'center', transformBox:'fill-box', offset:0.62 },
          { transform:'scale(.96) rotate(-1deg)',opacity:1,    transformOrigin:'center', transformBox:'fill-box', offset:0.85 },
          { transform:'scale(1)   rotate(0deg)', opacity:1,    transformOrigin:'center', transformBox:'fill-box', offset:1    },
        ],{ duration:680, easing:'cubic-bezier(.34,1.56,.64,1)', fill:'forwards' });

        regrow.onfinish = ()=>{ regrow.cancel(); el.classList.remove('leaf-regrowing'); busy=false; };
      }, rand(2000,3000));
    };
  });
}

document.querySelectorAll('.leaf-group').forEach(setupLeaf);

document.querySelectorAll('.svg-fruit').forEach(function(el){
  el.addEventListener('click', function(){
    var h = el.getAttribute('data-href');
    if(h) window.location.href = h;
  });
  el.addEventListener('keydown', function(e){
    if(e.key==='Enter'||e.key===' '){
      var h = el.getAttribute('data-href');
      if(h) window.location.href = h;
    }
  });
});

function fallLeaf(el, delay){
  return new Promise(function(resolve){
    setTimeout(function(){
      el.classList.add('leaf-falling');
      var dur  = rand(900,1600);
      var anim = el.animate(makeWindFrames(),{
        duration:dur, easing:'cubic-bezier(.22,.61,.36,1)', fill:'forwards'
      });
      anim.onfinish = function(){
        anim.cancel();
        el.style.visibility = 'hidden';
        el.classList.remove('leaf-falling');
        resolve();
      };
    }, delay);
  });
}

function regrowLeaf(el, delay){
  return new Promise(function(resolve){
    setTimeout(function(){
      el.style.visibility = '';
      el.classList.add('leaf-regrowing');
      var anim = el.animate([
        {transform:'scale(0) rotate(-12deg)', opacity:0,  transformOrigin:'center', transformBox:'fill-box', offset:0  },
        {transform:'scale(1.18) rotate(4deg)',opacity:.88, transformOrigin:'center', transformBox:'fill-box', offset:.62},
        {transform:'scale(.96) rotate(-1deg)',opacity:1,   transformOrigin:'center', transformBox:'fill-box', offset:.85},
        {transform:'scale(1) rotate(0deg)',   opacity:1,   transformOrigin:'center', transformBox:'fill-box', offset:1  },
      ],{duration:620, easing:'cubic-bezier(.34,1.56,.64,1)', fill:'forwards'});
      anim.onfinish = function(){
        anim.cancel();
        el.classList.remove('leaf-regrowing');
        resolve();
      };
    }, delay);
  });
}

// Expose to theme toggle
// NOTE: ThemeContext has already applied/removed body.dark before this is called.
// We temporarily revert body.dark so leaves fall in the OLD color, then reapply
// after all leaves are hidden so the color swap is invisible.
window.themeLeafTransition = function(toDark){
  var leaves = Array.from(document.querySelectorAll('.leaf-group'));

  // Revert to old color while leaves are visible and falling
  if (toDark) {
    document.body.classList.remove('dark');
  } else {
    document.body.classList.add('dark');
  }

  // Stagger falls over ~1.8s
  var fallPromises = leaves.map(function(el){
    var delay = rand(0, 1800);
    return fallLeaf(el, delay);
  });

  Promise.all(fallPromises).then(function(){
    // All leaves are now hidden — snap to new color silently
    if (toDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    // Regrow staggered in new color
    var regrowPromises = leaves.map(function(el){
      var delay = rand(0, 2200);
      return regrowLeaf(el, delay);
    });
    return Promise.all(regrowPromises);
  });
};`;

// ─────────────────────────────────────────────────────────────────────────────

const HeroSection = () => {
  const svgWrapperRef = useRef<HTMLDivElement>(null);
  // Read theme state from the site-wide ThemeContext (same source as Navbar toggle)
  const { isDark } = useTheme();
  // Track previous isDark so we only fire the leaf animation on actual changes
  const prevIsDarkRef = useRef<boolean>(isDark);

  // Inject tree CSS into <head> once on mount
  useEffect(() => {
    if (document.getElementById("tree-css")) return;
    const styleEl = document.createElement("style");
    styleEl.id = "tree-css";
    styleEl.textContent = TREE_CSS;
    document.head.appendChild(styleEl);
    return () => { document.getElementById("tree-css")?.remove(); };
  }, []);

  // Execute tree JS 50 ms after SVG is in the DOM
  useEffect(() => {
    if (!svgWrapperRef.current) return;
    const timer = setTimeout(() => {
      try {
        // eslint-disable-next-line no-new-func
        new Function(TREE_JS)();
      } catch (e) {
        console.warn("Tree JS init error:", e);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // When Navbar's ThemeToggle fires, trigger leaf fall → color swap → regrow
  useEffect(() => {
    // Skip on first mount (no transition needed, just paint the right color)
    if (prevIsDarkRef.current === isDark) return;
    prevIsDarkRef.current = isDark;

    const w = window as Window & { themeLeafTransition?: (d: boolean) => void };
    if (w.themeLeafTransition) {
      w.themeLeafTransition(isDark);
    }
  }, [isDark]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Animated particle field */}
      <ParticleField />

      {/* Sanskrit pattern overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-30 pointer-events-none z-0" />

      {/* ── Tree SVG (dangerouslySetInnerHTML keeps raw SVG attrs intact) ── */}
      <div
        ref={svgWrapperRef}
        className="relative z-10 w-full"
        style={{ maxHeight: "75vh", overflow: "hidden" }}
        dangerouslySetInnerHTML={{ __html: TREE_SVG_HTML }}
      />

      {/* ── Text + buttons below tree ──────────────────────────────────── */}
      <div className="relative z-10 w-full container mx-auto px-4 text-center pb-24 pt-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="sanskrit-text text-primary/70 text-lg md:text-xl mb-6"
        >
          "विद्या ददाति विनयं, विनयाद् याति पात्रताम्"
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="gradient-text">Anveshika</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto"
        >
          Exploring Ancient Wisdom to Engineer the Future
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A student-driven innovation ecosystem integrating Indian Knowledge Systems
          with Artificial Intelligence, Data Science, and Modern Engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#iks-domains"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 4.5 }}
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium bg-primary text-primary-foreground overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsla(30,90%,55%,0.4)] will-change-transform"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Compass className="w-5 h-5" />
              Explore Knowledge
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 4.7, delay: 0.2 }}
            className="group inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium glass-card text-foreground hover:border-primary/30 transition-all duration-300 will-change-transform"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Discover IKS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>

          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 4.9, delay: 0.4 }}
            className="group inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 will-change-transform"
          >
            <span className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Join Anveshika
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 rounded-full bg-primary/60" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
