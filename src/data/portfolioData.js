export const personal = {
  name: "john.dev",
  title: "Créateur d'applications web et mobiles | @john_bk",
  tagline: "Développeur passionné par la conception de solutions performantes, de l'architecture backend jusqu'à l'interface utilisateur.",
  bio: [
    "Développeur passionné par la conception de solutions performantes, de l'architecture backend jusqu'à l'interface utilisateur. Je conçois des applications web et mobiles robustes et évolutives.",
    "Disponible pour des projets en freelance ou des collaborations innovantes. N'hésitez pas à explorer mes dépôts !"
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
  { name: "Laravel", level: 88, color: "#FF2D20", category: "backend" },
  { name: "SQL", level: 82, color: "#4479A1", category: "backend" },
  { name: "Java", level: 75, color: "#b07219", category: "backend" },
  { name: "HTML/CSS", level: 95, color: "#e34f26", category: "frontend" },
  { name: "JavaScript", level: 90, color: "#F7DF1E", category: "frontend" },
  { name: "React", level: 88, color: "#6366f1", category: "frontend" },
  { name: "Flutter", level: 78, color: "#06b6d4", category: "mobile" },
  { name: "Kotlin", level: 72, color: "#7F52FF", category: "mobile" },
  { name: "C++", level: 70, color: "#00599C", category: "system" },
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
    github: "https://github.com/jboukahel14-boop/eco-.git",
    live: "https://frontend-six-sigma-69.vercel.app/",
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
