import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

const skillCategories = [
  { name: "Frontend", value: 85, fill: "hsl(var(--primary))" },
  { name: "Backend/Python", value: 70, fill: "hsl(var(--accent-light))" },
  { name: "Databases", value: 65, fill: "hsl(var(--gold))" },
  { name: "Dev Tools", value: 75, fill: "hsl(210, 60%, 50%)" },
  { name: "AI & Automation", value: 60, fill: "hsl(280, 50%, 50%)" },
];

const languageCards = [
  { name: "HTML5", emoji: "🟥", progress: 95 },
  { name: "CSS3", emoji: "🟦", progress: 90 },
  { name: "JavaScript", emoji: "🟨", progress: 75 },
  { name: "Python", emoji: "🐍", progress: 70 },
  { name: "Tailwind CSS", emoji: "💨", progress: 85 },
  { name: "Bootstrap", emoji: "🅱️", progress: 80 },
  { name: "WordPress", emoji: "🔵", progress: 70 },
  { name: "Git & GitHub", emoji: "🐙", progress: 80 },
  { name: "Databases", emoji: "🗄️", progress: 65 },
  { name: "Data Structures", emoji: "🌲", progress: 65 },
  { name: "Algorithms", emoji: "⚡", progress: 60 },
  { name: "AI Automation", emoji: "🤖", progress: 70 },
];

const softSkills = [
  { icon: "🎤", title: "Presentation & Communication", desc: "Presented at Cairo ICT 2025 to startup founders and ministry officials" },
  { icon: "🧩", title: "Problem Solving", desc: "From debugging code to generating 4 client deals in one month" },
  { icon: "⏱️", title: "Time Management", desc: "Balancing school, freelance, projects, and self-learning simultaneously" },
];

const learning = [
  { name: "React.js", progress: 40, note: "In Progress 🔥" },
  { name: "Advanced Python", progress: 60, note: "In Progress 🔥" },
];

const SkillsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl lg:text-5xl font-bold"
            >
              Skills Dashboard
            </motion.h1>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-xs text-muted-foreground bg-card border border-border rounded-md px-3 py-1.5"
            >
              Last Updated: 2025
            </motion.span>
          </div>

          {/* TOP ROW — Tech Stack Overview Radial Chart */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 bg-[hsl(220,15%,8%)] border border-border rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="relative z-10">
              <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                Tech Stack Overview
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                      cx="50%"
                      cy="50%"
                      innerRadius="20%"
                      outerRadius="90%"
                      data={skillCategories}
                      startAngle={180}
                      endAngle={-180}
                      barSize={14}
                    >
                      <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                      <RadialBar
                        background={{ fill: "hsl(var(--secondary))" }}
                        dataKey="value"
                        angleAxisId={0}
                        cornerRadius={6}
                      />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  {skillCategories.map((cat, i) => (
                    <motion.div
                      key={cat.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: cat.fill }} />
                      <span className="font-body text-sm text-muted-foreground flex-1">{cat.name}</span>
                      <span className="font-mono text-sm text-foreground">{cat.value}%</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* MIDDLE ROW — Language Cards */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              Languages & Tools
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {languageCards.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + i * 0.04 }}
                  className="bg-[hsl(220,15%,8%)] border border-border rounded-xl p-4 hover:border-primary/40 transition-all duration-300 group"
                >
                  <span className="text-2xl block mb-2">{skill.emoji}</span>
                  <h3 className="font-body text-sm font-medium text-foreground mb-3 truncate">{skill.name}</h3>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.04 }}
                    />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground mt-1.5 block">{skill.progress}%</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* BOTTOM ROW — Soft Skills + Currently Learning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Soft Skills */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[hsl(220,15%,8%)] border border-border rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              <div className="relative z-10">
                <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold inline-block" />
                  Soft Skills
                </h2>
                <div className="space-y-5">
                  {softSkills.map((s, i) => (
                    <motion.div
                      key={s.title}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex gap-3"
                    >
                      <span className="text-2xl flex-shrink-0">{s.icon}</span>
                      <div>
                        <h3 className="font-body text-sm font-semibold text-foreground">{s.title}</h3>
                        <p className="font-body text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Currently Learning */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-[hsl(220,15%,8%)] border border-border rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              <div className="relative z-10">
                <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-light inline-block" />
                  Currently Learning
                </h2>
                <div className="space-y-6">
                  {learning.map((l, i) => (
                    <motion.div
                      key={l.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-body text-sm font-medium text-foreground">{l.name}</span>
                        <span className="font-mono text-xs text-muted-foreground">{l.progress}% {l.note}</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent-light rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${l.progress}%` }}
                          transition={{ duration: 1.2, delay: 0.5 + i * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SkillsPage;
