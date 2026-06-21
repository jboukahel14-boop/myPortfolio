export const personal = {
  name: "John",
  title: "Full-Stack Developer",
  tagline: "Building premium, high-performance web applications that drive business growth.",
  bio: [
    "I'm a Full-Stack Developer with 3+ years of hands-on experience architecting and building production web applications. I specialize in PHP, Laravel, and MySQL for robust backends, paired with React and modern frontend tools for interfaces that users love.",
    "Every project I deliver is built with performance, scalability, and clean code in mind. From database schema design to pixel-perfect UI, I own the full stack and ship systems that work."
  ],
  email: "john@example.com",
  location: "San Francisco, CA",
  resumeUrl: "#",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  }
};

export const skills = [
  { name: "React", level: 92, color: "#6366f1", category: "frontend" },
  { name: "JavaScript", level: 90, color: "#818cf8", category: "frontend" },
  { name: "TypeScript", level: 82, color: "#4f46e5", category: "frontend" },
  { name: "HTML/CSS", level: 95, color: "#e34f26", category: "frontend" },
  { name: "Tailwind CSS", level: 90, color: "#06b6d4", category: "frontend" },
  { name: "PHP", level: 88, color: "#777BB4", category: "backend" },
  { name: "Laravel", level: 85, color: "#FF2D20", category: "backend" },
  { name: "MySQL", level: 82, color: "#4479A1", category: "backend" },
  { name: "REST APIs", level: 88, color: "#10B981", category: "backend" },
  { name: "Git", level: 85, color: "#F05032", category: "tools" },
  { name: "Docker", level: 75, color: "#2496ED", category: "tools" },
  { name: "Linux", level: 78, color: "#FCC624", category: "tools" },
];

export const projects = [
  {
    id: 1,
    title: "NovaCommerce",
    subtitle: "Enterprise E-Commerce Engine",
    description: "A full-stack marketplace platform handling 50K+ daily transactions. Laravel powers the modular API layer with Redis caching and MySQL read replicas, while React delivers a real-time dashboard with WebSocket-driven inventory tracking.",
    tech: ["Laravel", "React", "MySQL", "Redis", "WebSockets", "Docker"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    color: "#6366f1",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "FlowCharts",
    subtitle: "Collaborative Workflow Builder",
    description: "Drag-and-drop workflow automation tool built with React Flow on the frontend and a Laravel REST API handling complex DAG execution, role-based access control, and real-time collaboration via Laravel Reverb.",
    tech: ["React", "Laravel", "MySQL", "Reverb", "React Flow", "Tailwind"],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
    color: "#06b6d4",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "DataPulse",
    subtitle: "Analytics Dashboard",
    description: "Real-time analytics platform ingesting millions of events via Laravel Horizon queues. The React frontend renders dynamic visualizations with drill-down filtering, role-based dashboards, and PDF report exports.",
    tech: ["React", "Laravel", "MySQL", "Horizon", "D3.js", "Redis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    color: "#818cf8",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 4,
    title: "SaaSKit",
    subtitle: "Multi-Tenant Boilerplate",
    description: "Production-ready SaaS starter with subscription management, tenancy, Stripe billing, and a React admin panel. Used as the foundation for 3 commercial SaaS products.",
    tech: ["Laravel", "React", "MySQL", "Stripe", "Tenancy"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    color: "#4f46e5",
    github: "#",
    live: "#",
    featured: false,
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
