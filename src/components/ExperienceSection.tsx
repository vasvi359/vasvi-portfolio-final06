import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Associate Intern",
    org: "Enfuse Solutions Pvt Ltd.",
    period: "Jun 2025 – Jul 2025",
    details: [
      "Created AI proctoring tool using YOLO, LSTM, CNN, DBSCAN, Random Forest on Microsoft Azure",
      "Analyzed performance metrics and documented findings",
      "Authored academic research paper detailing the system architecture",
    ],
  },
  {
    type: "edu",
    title: "B.Tech CSE – AI/ML",
    org: "IILM University, Greater Noida",
    period: "2022 – Present",
    details: [
      "Specialization in Artificial Intelligence and Machine Learning",
      "Coursework in Generative AI, Deep Learning, Computer Vision",
      "Active participation in national hackathons",
    ],
  },
  {
    type: "edu",
    title: "Higher Secondary Education",
    org: "Kendriya Vidyalaya 1, Gandhi Nagar",
    period: "2022",
    details: [],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Journey</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title + item.org}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[12px] top-1 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background z-10 md:left-1/2 md:-translate-x-1/2" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="p-5 rounded-xl bg-card border border-border">
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {item.type === "work" ? (
                        <Briefcase size={14} className="text-primary" />
                      ) : (
                        <GraduationCap size={14} className="text-accent" />
                      )}
                      <span className="text-xs text-muted-foreground">{item.period}</span>
                    </div>
                    <h3 className="font-display font-semibold text-base mb-1">{item.title}</h3>
                    <p className="text-sm text-primary/80 mb-3">{item.org}</p>
                    {item.details.length > 0 && (
                      <ul className={`space-y-1.5 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                        {item.details.map((d, j) => (
                          <li key={j} className="text-xs text-muted-foreground leading-relaxed">
                            {d}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
