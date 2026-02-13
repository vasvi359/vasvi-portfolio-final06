import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Smart India Hackathon 2025",
    description: "National Round Qualifier — Qualified out of 225 teams, sole female member of the team.",
  },
  {
    icon: Award,
    title: "Smart India Hackathon 2024",
    description: "National Round Qualifier — Qualified out of 132 teams, collaborated in System Design.",
  },
  {
    icon: Star,
    title: "Dark Pattern Buster Hackathon 2023",
    description: "Nodal Center Qualifier — Qualified out of 50 teams, designed the web page.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Achievements</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Recognition & <span className="gradient-text">Goals</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center hover:shadow-[var(--shadow-glow)]"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl gradient-border bg-card/80 text-center max-w-2xl mx-auto"
        >
          <h3 className="font-display text-xl font-semibold mb-3 gradient-text">My Goal</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            To become an AI Engineer and contribute to impactful AI solutions that solve real-world problems 
            in the tech industry. I aim to work with top technology companies, leveraging deep learning and 
            machine learning to build systems that make a meaningful difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
