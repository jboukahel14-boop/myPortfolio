import { useRef } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

function SkillBlock({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative"
    >
      <div
        className="relative glass rounded-xl p-5 h-full flex flex-col items-center justify-center gap-3 transition-all duration-500 cursor-default"
        style={{
          transformStyle: "preserve-3d",
        }}
        onMouseMove={(e) => {
          const el = e.currentTarget;
          const rect = el.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          el.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${y * -8}deg) translateZ(10px)`;
          el.style.borderColor = `${skill.color}40`;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) translateZ(0)";
          el.style.borderColor = "rgba(255,255,255,0.06)";
        }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold font-mono transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
          style={{
            backgroundColor: `${skill.color}15`,
            color: skill.color,
            boxShadow: `0 0 20px ${skill.color}10`,
          }}
        >
          {skill.name.slice(0, 2).toUpperCase()}
        </div>

        <span className="text-sm font-medium text-white text-center">{skill.name}</span>

        <div className="w-full h-1.5 rounded-full bg-surface-light overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 + index * 0.06, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{
              backgroundColor: skill.color,
              boxShadow: `0 0 8px ${skill.color}`,
            }}
          />
        </div>

        <span className="text-xs font-mono text-text-secondary">{skill.level}%</span>
      </div>

      <div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"
        style={{
          background: `radial-gradient(circle, ${skill.color}20, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}

function Section({ title, color, items }) {
  return (
    <div className="mb-12 last:mb-0">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-lg font-semibold mb-6 flex items-center gap-3"
      >
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
        />
        {title}
      </motion.h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {items.map((skill, i) => (
          <SkillBlock key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Skills3D() {
  const ref = useRef(null);

  const frontend = skills.filter((s) => s.category === "frontend");
  const backend = skills.filter((s) => s.category === "backend");
  const mobile = skills.filter((s) => s.category === "mobile");
  const system = skills.filter((s) => s.category === "system");

  return (
    <section id="skills" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-accent font-mono text-sm tracking-widest">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl">
            Every skill level represents real production experience across shipped projects.
          </p>
        </motion.div>

        <Section title="Backend" color="#FF2D20" items={backend} />
        <Section title="Frontend" color="#6366f1" items={frontend} />
        <Section title="Mobile" color="#06b6d4" items={mobile} />
        <Section title="System" color="#00599C" items={system} />
      </div>
    </section>
  );
}
