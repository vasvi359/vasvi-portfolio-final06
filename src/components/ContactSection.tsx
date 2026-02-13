import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "vasvibali@gmail.com",
    href: "mailto:vasvibali@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "vasvi-bali",
    href: "https://linkedin.com/in/vasvi-bali-69a3b730a/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "GitHub Profile",
    href: "https://github.com/",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            I'm always open to discussing AI projects, collaboration opportunities, or just a friendly chat about technology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <link.icon size={18} className="text-primary" />
              </div>
              <p className="font-medium text-sm mb-1">{link.label}</p>
              <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                {link.value}
                <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © 2025 Vasvi Bali. Built with passion for AI.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
