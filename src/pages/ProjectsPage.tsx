import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import CurrencyConverter from "@/components/CurrencyConverter";
import CinemaBooking from "@/components/CinemaBooking";

type Filter = "all" | "web" | "python";

const webProjects = [
  {
    name: "SkillX Platform",
    badge: "🌟 Featured",
    desc: "My flagship project. A smart platform that connects students with real companies, while using AI to recommend the most in-demand skills based on each student's profile and interests.",
    github: "https://github.com/amr18582109-crypto/SKILLX.git",
    live: "https://skillxx.netlify.app",
    tags: ["CSS", "JS", "react", "tawilwind", "AI Integration"],
  },
  {
    name: "Triumph Finishings Hub",
    badge: "💼 Real Client",
    desc: "Complete website for a real interior finishing company in New Cairo. Built their full digital presence, managed social media, generated 4 clients worth 700K–900K EGP each.",
    github: "https://github.com/amr18582109-crypto/triumph-finishings-hub.git",
    live: "https://triumphbuss.netlify.app",
    tags: ["react","tawiwind" , "CSS", "JS"],
  },
  {
    name: "Paths to Success",
    badge: "🏫 School Project",
    desc: "A platform that organizes school competitions and academic projects, helping students discover and participate in opportunities.",
    github: "https://github.com/omar-syntax/paths-to-success.git",
    live: "https://competition11.netlify.app/",
    tags: ["react", "tawiwind","CSS", "JS"],
  },
  {
    name: "furniture website",
    desc: "HTML & CSS course project — practicing layouts, design systems, and responsive design principles.",
    github: "https://github.com/amr18582109-crypto/on-site13.git",
    live: "https://on-site-13.netlify.app",
    tags: ["HTML", "CSS" , "JS"],
  },
  {
    name: "actitvity manger website",
    desc: "Personal frontend practice project, pushing design skills beyond coursework.",
    github: "https://github.com/amr18582109-crypto/on-site-12.git",
    live: "https://on-site-12.netlify.app",
    tags: ["HTML", "CSS" , "JS"],
  },
  {
    name: "restarunt website",
    desc: "JavaScript course project — DOM manipulation, events, and building interactive UI components.",
    github: "https://github.com/amr18582109-crypto/on-site-11.git",
    live: "https://onsite-11.netlify.app",
    tags: ["HTML", "CSS", "JS"],
  },
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <PageTransition>
      <div className="min-h-screen px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl lg:text-5xl font-bold mb-10"
          >
            Projects
          </motion.h1>

          {/* Filters */}
          <div className="flex gap-3 mb-10 font-body">
            {(["all", "web", "python"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {f === "all" ? "All" : f === "web" ? "Web Projects" : "Python Apps"}
              </button>
            ))}
          </div>

          {/* Web projects grid */}
          <AnimatePresence mode="wait">
            {(filter === "all" || filter === "web") && (
              <motion.div
                key="web"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16"
              >
                {webProjects.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:glow-burgundy-sm transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="h-1 bg-primary" />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                        {p.badge && (
                          <span className="text-xs font-mono px-2 py-1 bg-primary/10 text-primary rounded">
                            {p.badge}
                          </span>
                        )}
                      </div>
                      <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {p.tags.map((t) => (
                          <span key={t} className="text-xs font-mono px-2 py-1 bg-secondary rounded text-muted-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                          <Github size={14} /> GitHub
                        </a>
                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-primary hover:text-accent-light transition-colors">
                          <ExternalLink size={14} /> Live Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Python apps */}
          <AnimatePresence mode="wait">
            {(filter === "all" || filter === "python") && (
              <motion.div
                key="python"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h2 className="font-display text-2xl font-bold mb-8">Python Apps — Interactive Simulators</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-4">💱 Currency Converter</h3>
                    <p className="font-body text-sm text-muted-foreground mb-4">
                      Python CLI app for converting between EGP, USD, and EUR with a clean menu-driven interface.
                    </p>
                    <CurrencyConverter />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-4">🎬 Tazkarty — Cinema Booking</h3>
                    <p className="font-body text-sm text-muted-foreground mb-4">
                      Python cinema seat booking system with Economy, Standard, VIP, and Premium sections.
                    </p>
                    <CinemaBooking />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
