import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

import ABOUT_PHOTO from "@/assets/about-photo.jpg";

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative">
                <img
                  src= '/all photos/about.png'
                  alt="Amr Khaled at WE School"
                  className="w-72 sm:w-80 lg:w-[3880px] rounded-2xl object-cover border-2 border-primary/30 glow-burgundy"
                />
                <div className="absolute -inset-3 border border-primary/10 rounded-2xl -z-10" style={{ transform: "rotate(2deg)" }} />
              </div>
            </motion.div>

            {/* Right — Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="font-display text-4xl lg:text-5xl font-bold mb-8">Who Am I?</h1>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  I'm <span className="text-foreground font-medium">Amr Khaled Mahmoud</span>, a 17-year-old developer and entrepreneur
                  from Egypt, currently in my second year at WE Applied Technology School.
                </p>
                <p>
                  I don't just write code — I build things that work in the real world.
                  From selling t-shirts online and making real money, to landing 4 clients
                  for a real company in a single month. I combine technical skills with
                  a business mindset that most developers my age don't have yet.
                </p>
                <p>
                  I started unfocused — loving coding but struggling with the rest.
                  I finished my first year with 84% anyway. Then I spent my summer
                  building: a clothing brand, an e-commerce page, real projects.
                </p>
                <p>
                  When year 2 started, I came back different — focused, hungry,
                  and a role model for many of my classmates.
                </p>
                <p className="text-foreground font-medium">
                  I'm not just learning to code. I'm learning to build.
                </p>
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {[
                  { icon: "🎓", text: "WE Applied Technology School — 2nd Year — Grade: 84%" },
                  { icon: "📍", text: "Egypt 🇪🇬" },
                  { icon: "🎯", text: "Full-Stack Dev + Entrepreneurship" },
                  { icon: "🌐", text: "Arabic (Native) · English (Professional)" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="bg-card border border-border rounded-lg p-4 font-body text-sm text-muted-foreground"
                  >
                    <span className="mr-2">{item.icon}</span>{item.text}
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-10 border-l-4 border-primary pl-6 italic font-display text-xl text-foreground">
                "I don't wait for opportunities. I build them."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
