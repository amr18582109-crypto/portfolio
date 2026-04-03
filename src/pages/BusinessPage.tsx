import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import CountUp from "@/components/CountUp";
import miraxLogo from "@/assets/mirax-logo.jpg";

const trendPhotos = [
  "/all photos/fosa.png",
  "/all photos/fosa1.png",
  "/all photos/fosa2.png",
  "/all photos/fosa3.png",
  "/all photos/fosa4.png",
  'all photos/omar.png'
];

const BusinessPage = () => {
  const triumphRef = useRef<HTMLDivElement>(null);
  const triumphInView = useInView(triumphRef, { once: true });

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* MIRAX */}
        <section className="min-h-screen relative flex items-center px-6 md:px-16 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
          <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto w-full py-20">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-6xl lg:text-8xl font-bold tracking-tight mb-2"
              >
                <span className="text-gradient-gold">MIRAX</span>
              </motion.h2>
              <div className="w-16 h-0.5 bg-gold mb-8" />
              <p className="font-body text-muted-foreground mb-6">Clothing Brand · Under Development</p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                A brand in the making. Not a side project. A vision built from scratch.
              </p>
              <div className="space-y-2 font-mono text-sm mb-8">
                <p className="text-foreground">✓ Brand Identity — Complete</p>
                <p className="text-foreground">✓ Packaging Design — Complete</p>
                <p className="text-foreground">✓ Visual Direction — Defined</p>
                <p className="text-muted-foreground">◷ Products — In Development</p>
              </div>
              <p className="font-body text-sm text-muted-foreground italic mb-8">
                MIRAX isn't just clothes. It's a mindset. Built by a 17-year-old who decided to build something real.
              </p>
              <a
                href="https://mirax-eg.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold/50 text-gold rounded-lg font-body text-sm hover:bg-gold/10 transition-colors"
              >
                Visit Brand Site <ExternalLink size={14} />
                <span className="text-xs text-muted-foreground ml-1">🔧 Under Development</span>
              </a>
            </div>

            {/* Mirax Logo */}
            <div className="flex items-center justify-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src="/all photos/mirax.png"
                alt="Mirax Logo"
                className="w-[1800px] h-[500px] rounded-xl object-cover"
                style={{ boxShadow: '0 0 40px 8px hsla(40, 50%, 70%, 0.25)' }}
              />
            </div>
          </div>
        </section>

        {/* TRENDISTA */}
        <section className="min-h-screen relative px-6 md:px-16 lg:px-24 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(220,20%,5%)] to-background" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl lg:text-7xl font-bold mb-2"
            >
              TRENDISTA
            </motion.h2>
            <div className="w-16 h-0.5 bg-primary mb-6" />
            <p className="font-body text-muted-foreground mb-2">Custom Print-on-Demand Fashion · Sold via Facebook · Summer 2024</p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4 max-w-2xl">
              3 unique designs. Real customers. Real sales. ~10,000 EGP revenue generated. At 17.
            </p>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-mono text-sm rounded mb-10">
              💰 Real Revenue: ~10,000 EGP
            </span>
            <p className="font-body text-sm text-muted-foreground mb-10">
              Status: Closed by choice — bigger things ahead.
            </p>

            {/* Editorial product layout */}
            <div className="relative grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={trendPhotos[0]}
                alt="Trendista Owl Yin-Yang Design"
                className="w-full object-cover rounded-xl border border-border hover:border-primary/50 transition-colors md:mt-12"
              />

              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                src={trendPhotos[1]}
                alt="Trendista Owl Design V2"
                className="w-full  object-cover rounded-xl border border-border hover:border-primary/50 transition-colors"
              />
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                src={trendPhotos[2]}
                alt="Trendista Owl Design V2"
                className="w-full object-cover rounded-xl border border-border hover:border-primary/50 transition-colors"
              />
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                src={trendPhotos[3]}
                alt="Trendista Owl Design V2"
                className="w-full  object-cover rounded-xl border border-border hover:border-primary/50 transition-colors"
              />
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                src={trendPhotos[4]}
                alt="Trendista Owl Design V2"
                className="w-full  object-cover rounded-xl border border-border hover:border-primary/50 transition-colors"
              />
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                src={trendPhotos[5]}
                alt="Trendista Owl Design V2"
                className="w-full  object-cover rounded-xl border border-border hover:border-primary/50 transition-colors"
              />
            </div>

            
          </div>
        </section>

        {/* TRIUMPH FINISHINGS */}
        <section ref={triumphRef} className="min-h-screen relative px-6 md:px-16 lg:px-24 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
          <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl lg:text-5xl font-bold mb-2"
              >
                TRIUMPH FINISHINGS
              </motion.h2>
              <div className="w-16 h-0.5 bg-primary mb-6" />
              <p className="font-body text-muted-foreground mb-6">Interior Finishing Company · New Cairo, 5th Settlement</p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                From raw concrete → dream home. They handle everything. I handled their growth.
              </p>
              <div className="space-y-2 font-body text-sm text-muted-foreground mb-8">
                <p>→ Built complete company website from scratch</p>
                <p>→ Managed all social media accounts</p>
                <p>→ Created full content & marketing strategy</p>
                <p>→ Ran targeted ad campaigns</p>
              </div>
              <a
                href="https://triumphbuss.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-body text-sm hover:bg-accent-light transition-colors"
              >
                View Live Site <ExternalLink size={14} />
              </a>
            </div>

            {/* Impact numbers */}
            <div className="space-y-8">
              {[
                { end: 4, label: "Clients Acquired" },
                { end: 1, label: "Month" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-5xl lg:text-6xl font-bold text-foreground">
                    {triumphInView && <CountUp end={s.end} />}
                  </div>
                  <div className="font-body text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
              <div>
                <div className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                  700K–900K EGP
                </div>
                <div className="font-body text-muted-foreground mt-1">Avg. Deal Value</div>
              </div>
              <div>
                <div className="font-display text-3xl lg:text-4xl font-bold text-primary">
                  ~{triumphInView && <CountUp end={3.2} decimals={1} />}M EGP
                </div>
                <div className="font-body text-muted-foreground mt-1">Total Pipeline Generated</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default BusinessPage;
