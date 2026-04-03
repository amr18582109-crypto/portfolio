import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import CountUp from "@/components/CountUp";

const HERO_PHOTO = "https://lh3.googleusercontent.com/d/1_IBEF3pKi1g_O8XS1usL95qPdKwrGt3A";

const floatingTags = ["HTML", "CSS", "JS", "Python",  "React", "Git", "AI", "Tailwind"];

const HomePage = () => {
  const navigate = useNavigate();
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        {/* Grain overlay */}
        <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none animate-grain" />

        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-top-right rotate-[25deg] translate-y-[40vh]" />

        {/* Hero */}
        <div className="min-h-screen flex items-center px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="z-10"
            >
              <p className="font-body text-muted-foreground text-lg mb-2">Hi, I'm</p>
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
                <span className="text-gradient-burgundy">Amr</span>
                <br />
                <span className="text-foreground">Khaled</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground mb-1">
                Developer · Entrepreneur · Builder
              </p>
              <p className="font-mono text-sm text-muted-foreground/70 mb-8">
                17 y/o | WE Applied Technology School | Cairo, Egypt
              </p>
              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => navigate("/projects")}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-body font-medium hover:bg-accent-light transition-colors glow-burgundy-sm"
                >
                  View My Work
                </button>

              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <img
                  src= '/all photos/home.png'
                  alt="Amr Khaled at Cairo ICT"
                  className="w-72 sm:w-80 lg:w-96 rounded-2xl object-cover glow-burgundy relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl z-20" />
              </div>

              {/* Floating tags */}
              {floatingTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  className="absolute font-mono text-xs px-2 py-1 rounded bg-secondary/80 text-muted-foreground border border-border/50 hidden lg:block"
                  style={{
                    top: `${15 + (i % 4) * 22}%`,
                    right: i < 4 ? `${-5 + i * 8}%` : undefined,
                    left: i >= 4 ? `${-10 + (i - 4) * 12}%` : undefined,
                  }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-body">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className="border-t border-primary/30 bg-secondary/50 backdrop-blur"
        >
          <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { end: 6, suffix: "", label: "Projects" },
              { end: 4, suffix: "", label: "Real Clients" },
              { end: 10, suffix: ",000 EGP", label: "Revenue" },
              { end: 3.2, suffix: "M EGP", label: "Deals Closed", decimals: 1, prefix: "+" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {statsInView && (
                    <CountUp
                      end={stat.end}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      decimals={stat.decimals}
                    />
                  )}
                </div>
                <div className="font-body text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default HomePage;
