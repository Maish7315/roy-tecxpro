import { motion } from 'framer-motion';
import { Award, Code2, HeartHandshake, Trophy } from 'lucide-react';
import SectionShell from './SectionShell';
import { achievements } from '../data/portfolio';

const icons = [Award, Trophy, HeartHandshake, Code2];

export default function Achievements() {
  return (
    <SectionShell
      id="achievements"
      eyebrow="Achievements"
      title="Signals of credibility beyond the interface."
      copy="Certifications, client results, community work, and reusable technical patterns all support one promise: thoughtful technology that earns trust."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {achievements.map((achievement, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.article
              key={achievement.title}
              className="glass-card interactive-card rounded-[1.75rem] p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: index * 0.07, duration: 0.52 }}
              whileHover={{ y: -6 }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan/25 bg-cyan/10 text-cyan">
                <Icon size={24} />
              </div>
              <h3 className="mt-7 text-xl font-semibold text-mist">{achievement.title}</h3>
              <p className="mt-4 text-sm leading-7 text-steel">{achievement.detail}</p>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
