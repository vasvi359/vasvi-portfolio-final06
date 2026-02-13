import { motion } from "framer-motion";
import { Bot, ShieldCheck, Wheat, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "Goblin.AI",
    description:
      "Engineered a Python-based interactive chatbot integrating OpenAI API for smart, human-like conversations using both voice and text input. Achieved 75% accuracy in providing correct information with quick, steady response times.",
    tags: ["Python", "OpenAI API", "NLP", "Voice Input"],
    highlight: "75% accuracy rate",
  },
  {
    icon: ShieldCheck,
    title: "AI Proctoring System",
    description:
      "Engineered an AI proctoring system using YOLO, CNN, LSTM, DBSCAN, and Random Forest on Microsoft Azure that achieved 95% anomaly detection accuracy, leading to a 40% increase in exam integrity during pilot testing.",
    tags: ["YOLO", "CNN", "LSTM", "Azure", "Random Forest"],
    highlight: "95% detection accuracy",
  },
  {
    icon: Wheat,
    title: "Crop Classification (SAR Images)",
    description:
      "A machine learning project focused on agricultural data classification using Synthetic Aperture Radar imagery for accurate crop identification and analysis.",
    tags: ["Machine Learning", "SAR", "Classification", "Agriculture"],
    highlight: "SAR image analysis",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Projects</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon size={24} className="text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium whitespace-nowrap ml-4">
                      {project.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
