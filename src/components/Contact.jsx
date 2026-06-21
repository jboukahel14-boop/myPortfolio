import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { personal } from "../data/portfolioData";

function FloatingShape({ className, color, size, delay, duration }) {
  return (
    <motion.div
      className={`absolute rounded-full opacity-20 pointer-events-none ${className}`}
      style={{ backgroundColor: color, width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: duration || 8,
        delay: delay || 0,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <FloatingShape
          className="top-20 left-10"
          color="#6366f1"
          size="120px"
          delay={0}
          duration={10}
        />
        <FloatingShape
          className="top-40 right-20"
          color="#06b6d4"
          size="80px"
          delay={2}
          duration={8}
        />
        <FloatingShape
          className="bottom-20 left-1/3"
          color="#818cf8"
          size="100px"
          delay={4}
          duration={12}
        />
        <FloatingShape
          className="bottom-40 right-1/4"
          color="#6366f1"
          size="60px"
          delay={1}
          duration={7}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-accent font-mono text-sm tracking-widest">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-mono">Email</p>
                  <p className="text-sm text-white">{personal.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-mono">Location</p>
                  <p className="text-sm text-white">{personal.location}</p>
                </div>
              </div>
            </div>

            <p className="text-text-secondary text-sm leading-relaxed">
              I'm always open to new opportunities, collaborations, and interesting
              projects. Whether you need a full-stack architect or a frontend
              specialist — let's build something great together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="group">
                  <label className="block text-xs font-mono text-text-secondary mb-2 tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full bg-surface-light/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-text-secondary/40 outline-none transition-all duration-300 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-mono text-text-secondary mb-2 tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full bg-surface-light/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-text-secondary/40 outline-none transition-all duration-300 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-mono text-text-secondary mb-2 tracking-wide">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full bg-surface-light/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-text-secondary/40 outline-none transition-all duration-300 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl font-medium text-sm bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center gap-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                {sent ? (
                  <>Sent! ✓</>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
