import { motion } from 'framer-motion';
import { Database, Layers3, MonitorSmartphone } from 'lucide-react';
import SectionShell from './SectionShell';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills & Technology Stack"
      title="A modern stack for AI-enabled products and high-trust digital experiences."
      copy="The stack is selected around speed, maintainability, integrations, and the kind of interface quality executives notice."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
          <div className="absolute right-8 top-8 h-40 w-40 rounded-full border border-cyan/20" />
          <div className="absolute right-16 top-16 h-24 w-24 rounded-full border border-violet/25 skill-orbit" />
          <p className="text-sm font-semibold uppercase text-cyan">Capability map</p>
          <h3 className="mt-4 text-3xl font-semibold text-mist">Design, code, AI, and advisory in one operating system.</h3>
          <p className="mt-5 text-sm leading-7 text-steel">
            Strong portfolios do not just list tools. They show judgment. This stack supports
            business-grade web platforms, AI features, data-connected workflows, and polished UI systems.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: MonitorSmartphone, label: 'Frontend systems' },
              { icon: Database, label: 'Data products' },
              { icon: Layers3, label: 'Design systems' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.045] p-4">
                <Icon className="text-cyan" size={24} />
                <p className="mt-4 text-sm font-semibold text-mist">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-card interactive-card rounded-[1.5rem] p-5"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.46 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base font-semibold text-mist">{skill.name}</h3>
                <span className="rounded-full border border-cyan/20 bg-cyan/10 px-2.5 py-1 text-xs font-semibold text-cyan">
                  {skill.level}%
                </span>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.07]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan via-cobalt to-violet"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.04, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
