import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 85 },
  { name: "Machine Learning", level: 75 },
  { name: "Deep Learning (CNN, LSTM)", level: 70 },
  { name: "Data Structures & Algorithms", level: 75 },
  { name: "Computer Vision (YOLO)", level: 70 },
  { name: "TensorFlow", level: 65 },
  { name: "Generative AI & Prompt Engineering", level: 70 },
  { name: "C/C++", level: 75 },
  { name: "Java", level: 65 },
  { name: "Database Management", level: 65 },
  { name: "OOP Concepts", level: 80 },
  { name: "AI Chatbot Development", level: 70 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-4 rounded-lg bg-card border border-border hover:border-primary/20 transition-all group"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05 + 0.3, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
