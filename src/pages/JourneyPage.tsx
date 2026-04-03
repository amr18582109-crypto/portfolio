import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageTransition from "@/components/PageTransition";

const cairoICTPhotos = [
  "/all photos/cairo_ict.png",
  "/all photos/big.png",
  "/all photos/badawy.png",
  "/all photos/we logo.png",
];


const trendPhotos = [
  "/all photos/fosa.png",
  "/all photos/omar.png",
];

const timeline = [
  {
    date: "2024",
    title: "The Beginning",
    content: "Started WE Applied Technology School. First year was a mixed bag — passionate about coding but unfocused on academics. Coded every day regardless. Finished with 84%.",
  },
  {
    date: "Summer 2025",
    title: "First Business",
    content: "Instead of resting, I built. Launched Trendista — sold custom print-on-demand t-shirts on Facebook. Made ~10,000 EGP. Closed it intentionally to focus on leveling up. Started Mirax clothing brand concept.",
    hasTrendista: true,
  },
  {
    date: "September 2025 ",
    title: "The Comeback",
    content: "Returned to school year 2 completely transformed. Completed 8+ courses. Became a reference point for classmates. Focused, consistent, driven.",
  },
  {
    date: "November 2025",
    title: "Cairo ICT Event ⭐",
    content: "Represented WE School at Cairo ICT — Egypt's biggest international tech exhibition. Met AI startup founders. Explored cutting-edge AI tools. Visited Ministry of Communications pavilion. This day changed everything.",
    hasGallery: true,
  },
  {
    date: "Jan 2026",
    title: "First Real Client",
    content: "Landed contract with Triumph Finishings — interior design company in Fifth Settlement. Built full website, managed social media, created content strategy. Generated 4 clients worth 700,000–900,000 EGP each in one month.",
  },
  {
    date: "Now",
    title: "Building the Future 🚀",
    content: "Working on SkillX platform. Diving into React . Growing Mirax brand. Building personal brand on social media. The journey has just started.",
  },
];

const courses = [
  "HTML & CSS", "Git & GitHub", "JavaScript Core", "Python Programming",
  "Database Design", "Data Structures & Algorithms", "Bootstrap Framework", "AI Tools & Automation",
];

const goals = [
  "🚀 Launch Mirax clothing brand",
  "📱 Build personal brand & content",
  "💻 Master React ",
  "🏢 Scale client acquisition",
  "🌍 Grow SkillX into a real product",
];

const JourneyPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl lg:text-5xl font-bold mb-16"
          >
            My Journey
          </motion.h1>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-0 md:left-24 top-0 bottom-0 w-px bg-border" />

            {timeline.map((item, i) => (
              <TimelineItem key={item.date} item={item} index={i} />
            ))}
          </div>

          {/* Courses Grid */}
          <section className="mt-24">
            <h2 className="font-display text-2xl font-bold mb-8">Completed Courses</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {courses.map((c) => (
                <div key={c} className="bg-card border border-border rounded-lg p-4 font-body text-sm flex items-center gap-2">
                  <span className="text-emerald-500">✅</span> {c}
                </div>
              ))}
            </div>
          </section>

          {/* Goals */}
          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold mb-8">What's Next</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {goals.map((g, i) => (
                <motion.div
                  key={g}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="bg-card border border-border rounded-lg p-4 font-body text-sm hover:border-primary/30 transition-colors"
                >
                  {g}
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

const TimelineItem = ({ item, index }: { item: typeof timeline[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 }}
      className="relative pl-8 md:pl-36 pb-12"
    >
      {/* Dot */}
      <div className="absolute left-0 md:left-24 top-2 w-2.5 h-2.5 rounded-full bg-primary -translate-x-1 glow-burgundy-sm" />

      {/* Date */}
      <span className="absolute left-0 md:left-0 top-0 font-mono text-xs text-primary md:w-20 md:text-right">
        {item.date}
      </span>

      <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.content}</p>

      {/* Cairo ICT Gallery */}
      {item.hasGallery && (
        <div className="mt-6 flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {cairoICTPhotos.map((url, j) => (
            <img
              key={j}
              src={url}
              alt={`Amr at Cairo ICT ${j + 1}`}
              className="h-36 sm:h-44 rounded-lg object-cover border border-border hover:border-primary/50 hover:scale-105 transition-all duration-300 flex-shrink-0"
            />
          ))}
        </div>
      )}

      {/* Trendista Gallery */}
      {item.hasTrendista && (
        <div className="mt-6 space-y-4">
          <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-thin">
            {trendPhotos.map((url, j) => (
              <img
                key={j}
                src={url}
                alt={`Trendista product ${j + 1}`}
                className="h-36 sm:h-44 rounded-lg object-cover border border-border hover:border-primary/50 hover:scale-105 transition-all duration-300 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default JourneyPage;
