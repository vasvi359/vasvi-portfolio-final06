import { motion } from "framer-motion";
import { Brain, BookOpen, Target } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI/ML Focus",
    description: "Specializing in machine learning, deep learning, and computer vision with hands-on project experience.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
    description: "Completed coursework in Generative AI, ChatGPT technologies, and supervised learning architectures.",
  },
  {
    icon: Target,
    title: "Goal-Driven",
    description: "Focused on becoming an AI Engineer and contributing to impactful solutions in the tech industry.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">About Me</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Passionate about <span className="gradient-text">Intelligent Systems</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
            I'm a dedicated AI/ML student at IILM University, Greater Noida, pursuing B.Tech in Computer Science Engineering 
            with a specialization in Artificial Intelligence. With strong skills in Python, machine learning, and computer vision, 
            I'm passionate about understanding how intelligent systems are built and applying core concepts like model training, 
            data analysis, and deep learning to real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
