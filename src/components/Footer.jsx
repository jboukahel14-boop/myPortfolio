import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { personal } from "../data/portfolioData";

const icons = [
  { icon: FaGithub, href: personal.social.github, label: "GitHub" },
  { icon: FaLinkedin, href: personal.social.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, href: personal.social.twitter, label: "Twitter" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#hero" className="text-lg font-bold tracking-tight">
              <span className="text-primary">{personal.name}</span>
              <span className="text-accent">.dev</span>
            </a>
            <p className="text-sm text-text-secondary mt-2 font-mono">
              Full-Stack Developer &bull; PHP & Laravel &bull; React
            </p>
          </div>

          <div className="flex items-center gap-6">
            {icons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary/60 font-mono">
            &copy; {new Date().getFullYear()} {personal.name}. Built with React, Three.js & Laravel.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-text-secondary hover:text-primary transition-colors font-mono"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
