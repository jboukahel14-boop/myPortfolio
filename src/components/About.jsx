import { useRef } from "react";
import { motion } from "framer-motion";
import { personal } from "../data/portfolioData";

const tiltCards = [
  {
    title: "Backend Architecture",
    items: ["PHP", "Laravel", "MySQL", "REST APIs"],
    color: "#6366f1",
    icon: "{ }",
  },
  {
    title: "Frontend Engineering",
    items: ["React", "JavaScript", "TypeScript", "Tailwind"],
    color: "#06b6d4",
    icon: "< />",
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Linux", "Git", "Redis"],
    color: "#818cf8",
    icon: "#!",
  },
];

function TiltCard({ card, index }) {
  const cardRef = useRef(null);

  const handleMouse = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${y * -12}deg) scale(1.02)`;
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className="glass rounded-2xl p-6 transition-transform duration-200 ease-out cursor-default group"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-mono font-bold mb-4"
        style={{ backgroundColor: `${card.color}15`, color: card.color }}
      >
        {card.icon}
      </div>
      <h3 className="text-lg font-semibold mb-3 text-white">{card.title}</h3>
      <div className="flex flex-wrap gap-2">
        {card.items.map((item) => (
          <span
            key={item}
            className="px-3 py-1 rounded-full text-xs font-mono tracking-wide"
            style={{
              backgroundColor: `${card.color}10`,
              color: card.color,
              border: `1px solid ${card.color}20`,
            }}
          >
            {item}
          </span>
        ))}
      </div>
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${card.color}08, transparent 40%)`,
        }}
      />
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-primary font-mono text-sm tracking-widest">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="space-y-5 text-text-secondary leading-relaxed">
              {personal.bio.map((paragraph, i) => (
                <p key={i} className="text-base md:text-lg">{paragraph}</p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {["PHP", "L", "R"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-surface flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: i === 0 ? "#777BB4" : i === 1 ? "#6366f1" : "#06b6d4",
                      color: "#fff",
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <span className="text-sm text-text-secondary">
                <span className="text-primary font-semibold">3+ years</span> of full-stack experience
              </span>
            </motion.div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {tiltCards.map((card, i) => (
              <TiltCard key={card.title} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
