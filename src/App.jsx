
import { useState } from "react";
import {
  Menu, X, ArrowUpRight, Code2, Smartphone,
  Palette, Cloud, Search, ShieldCheck,
  CheckCircle2, Globe, Zap, MessageCircle,
  ArrowRight, Layers, Monitor
} from "lucide-react";

const WHATSAPP_NUMBER = "919876543210"; // Replace with your number
const PHONE_NUMBER = "+91 98765 43210"; // Replace with your mobile
const OFFICE_ADDRESS = "Your Office Address, Lucknow, Uttar Pradesh, India";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Web Development",
    description: "Fast, responsive websites and scalable web applications built for your business.",
    tags: ["React", "Node.js", "MERN"]
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Mobile Applications",
    description: "Intuitive mobile experiences that keep your customers connected anywhere.",
    tags: ["React Native", "Android"]
  },
  {
    icon: Palette,
    number: "03",
    title: "UI/UX Design",
    description: "Beautiful, thoughtful interfaces designed around real user needs.",
    tags: ["Figma", "Prototyping"]
  },
  {
    icon: Cloud,
    number: "04",
    title: "Cloud & DevOps",
    description: "Reliable deployment pipelines, cloud infrastructure and automated workflows.",
    tags: ["AWS", "Docker", "CI/CD"]
  },
  {
    icon: Search,
    number: "05",
    title: "SEO & Digital",
    description: "Improve discoverability and create a stronger online presence.",
    tags: ["SEO", "Analytics"]
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "IT Consulting",
    description: "Practical technical guidance to help your business choose the right solutions.",
    tags: ["Architecture", "Security"]
  }
];

const projects = [
  {
    number: "01",
    title: "Nexa Commerce",
    category: "E-commerce platform",
    tech: "React · Node.js · MongoDB",
    style: "project-purple",
    icon: Layers
  },
  {
    number: "02",
    title: "Finora Dashboard",
    category: "Business analytics",
    tech: "React · REST API · Charts",
    style: "project-blue",
    icon: Monitor
  },
  {
    number: "03",
    title: "Orbit Connect",
    category: "Business website",
    tech: "React · Responsive UI",
    style: "project-orange",
    icon: Globe
  }
];

function WhatsAppButton({ children = "Meet us on WhatsApp", className = "" }) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello! I would like to discuss an IT project."
  )}`;

  return (
    <a
      className={`whatsapp-button ${className}`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={18} />
      {children}
      <ArrowUpRight size={16} />
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About Us", "#about"],
    ["Portfolio", "#portfolio"],
    ["Services", "#services"],
    ["Contact Us", "#contact"]
  ];

  return (
    <header className="navbar">
      <a href="#home" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-icon"><Code2 size={23} /></span>
        <span>nexora<span className="brand-dot">.</span><small> DIGITAL STUDIO</small></span>
      </a>

      <button
        className="menu-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "nav-links nav-open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <WhatsAppButton className="nav-cta" />
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="live-dot" />
          YOUR TECHNOLOGY PARTNER
        </div>

        <h1>
          sidhi web site
          <br />into <span className="gradient-text">digital reality.</span>
        </h1>

        <p className="hero-description">
          We design and build digital experiences that help ambitious
          businesses innovate, grow and stand out in a connected world.
        </p>

        <div className="hero-actions">
          <a href="#portfolio" className="button button-primary">
            Explore our work <ArrowUpRight size={18} />
          </a>
          <a href="#services" className="text-link">
            What we do <ArrowRight size={17} />
          </a>
        </div>

        <div className="hero-trust">
          <div className="trust-icon"><CheckCircle2 size={19} /></div>
          <span>Thoughtful design. Reliable technology. Real results.</span>
        </div>
      </div>

      <div className="hero-art" aria-label="Abstract digital technology illustration">
        <div className="art-grid" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="art-center">
          <Code2 size={66} strokeWidth={1.25} />
          <span>BUILD THE FUTURE</span>
        </div>
        <div className="float-card float-top">
          <Zap size={19} />
          <div><strong>Smart solutions</strong><small>Built for growth</small></div>
        </div>
        <div className="float-card float-bottom">
          <Globe size={20} />
          <div><strong>Digital first</strong><small>Ready for tomorrow</small></div>
        </div>
        <div className="art-tag">IDEAS × TECHNOLOGY</div>
      </div>

      <div className="hero-bottom">
        <span>DESIGN</span><i /> <span>DEVELOPMENT</span><i /> <span>INNOVATION</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-wrap section-space" id="about">
      <div className="section-heading">
        <p className="eyebrow">WHO WE ARE</p>
        <h2>Technology should move<br />your business <span>forward.</span></h2>
      </div>

      <div className="about-content">
        <p>
          We are a digital agency focused on creating useful, modern and
          dependable technology. From the first idea to launch day, we turn
          complex challenges into simple digital experiences.
        </p>
        <p>
          Our approach combines creative thinking, clean engineering and
          a focus on the people who use what we build.
        </p>
        <a href="#contact" className="text-link">
          Let's talk about your idea <ArrowRight size={17} />
        </a>
      </div>

      <div className="values-grid">
        <div><span>01</span><h3>Purposeful design</h3><p>Every detail has a reason to exist.</p></div>
        <div><span>02</span><h3>Reliable engineering</h3><p>Quality, performance and maintainability.</p></div>
        <div><span>03</span><h3>People first</h3><p>Solutions made for real people and needs.</p></div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services section-space" id="services">
      <div className="section-wrap">
        <div className="section-top">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE DO</p>
            <h2>Digital services.<br /><span>Real possibilities.</span></h2>
          </div>
          <p className="section-summary">
            Everything you need to launch, improve and grow your digital presence.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <div className="service-icon"><Icon size={23} /></div>
                  <span>{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tag-list">
                  {service.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="portfolio section-wrap section-space" id="portfolio">
      <div className="section-top">
        <div className="section-heading">
          <p className="eyebrow">SELECTED PROJECTS</p>
          <h2>Ideas made <span>visible.</span></h2>
        </div>
        <p className="section-summary">
          A look at the kind of digital experiences we can create.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map(project => {
          const Icon = project.icon;
          return (
            <article className="portfolio-card" key={project.number}>
              <div className={`project-art ${project.style}`}>
                <div className="project-window">
                  <div className="window-dots"><i /><i /><i /></div>
                  <Icon size={45} strokeWidth={1.2} />
                  <span>{project.title}</span>
                  <div className="window-lines"><i /><i /><i /></div>
                </div>
                <span className="project-number">{project.number}</span>
              </div>
              <div className="project-info">
                <div>
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                  <small>{project.tech}</small>
                </div>
                <a href="#contact" aria-label={`Discuss a project like ${project.title}`}>
                  <ArrowUpRight size={21} />
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <p className="portfolio-note">
        These are illustrative sample projects. Replace them with your real client work.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-wrap section-space" id="contact">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Have an idea?<br /><span>Let's make it happen.</span></h2>
          <p>Tell us what you're planning. We'd love to hear about your next project.</p>
          <WhatsAppButton />
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <div className="contact-icon"><MessageCircle size={21} /></div>
            <div>
              <span>CALL / WHATSAPP</span>
              <a href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, "")}`}>{PHONE_NUMBER}</a>
              <a className="detail-link" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                Message us on WhatsApp <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><Globe size={21} /></div>
            <div>
              <span>OUR OFFICE</span>
              <p>{OFFICE_ADDRESS}</p>
              <a
                className="detail-link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View location <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer section-wrap">
      <a href="#home" className="brand">
        <span className="brand-icon"><Code2 size={21} /></span>
        <span>nexora<span className="brand-dot">.</span></span>
      </a>
      <p>Thoughtful technology for a digital world.</p>
      <a href="#home" className="back-top">Back to top ↑</a>
      <small>© {new Date().getFullYear()} Nexora Digital Studio.</small>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
