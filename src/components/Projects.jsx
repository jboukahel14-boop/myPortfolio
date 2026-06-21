import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/portfolioData";

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouse = (e) => {
    const el = cardRef.current;
    if (!el || !hovered) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${y * -10}deg) scale3d(1.02,1.02,1.02)`;
    el.style.boxShadow = `${-x * 20}px ${-y * 20}px 40px rgba(0,0,0,0.3)`;
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
    el.style.boxShadow = "none";
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className="group glass rounded-2xl overflow-hidden transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-[3/2]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

        <div className="absolute top-4 left-4 flex gap-2">
          <span
            className="px-3 py-1 rounded-full text-xs font-mono font-medium backdrop-blur-md"
            style={{
              backgroundColor: `${project.color}20`,
              color: project.color,
              border: `1px solid ${project.color}30`,
            }}
          >
            {project.subtitle}
          </span>
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            className="w-9 h-9 rounded-full glass-strong flex items-center justify-center text-text-secondary hover:text-white hover:border-primary transition-all"
            aria-label={`${project.title} GitHub`}
          >
            <FaGithub size={16} />
          </a>
          <a
            href={project.live}
            className="w-9 h-9 rounded-full glass-strong flex items-center justify-center text-text-secondary hover:text-white hover:border-accent transition-all"
            aria-label={`${project.title} Live Demo`}
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded-md text-xs font-mono tracking-wide"
              style={{
                backgroundColor: "#ffffff08",
                color: "#94a3b8",
                border: "1px solid #ffffff10",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary font-mono text-sm tracking-widest">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl">
            Production applications built end-to-end, from database schema to pixel-perfect UI.
          </p>

          <div className="flex gap-3 mt-6">
            {["all", "featured"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-xs font-mono tracking-wide transition-all duration-300 ${
                  filter === f
                    ? "bg-primary/20 text-primary border border-primary/40"
                    : "bg-white/5 text-text-secondary border border-white/10 hover:border-text-secondary/30"
                }`}
              >
                {f === "all" ? "All Projects" : "Featured"}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
