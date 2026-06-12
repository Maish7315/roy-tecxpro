import { motion } from 'framer-motion';
import { Bot, Code2, Cpu, Lightbulb, Palette, Workflow } from 'lucide-react';
import SectionShell from './SectionShell';
import { services } from '../data/portfolio';

const icons = [Bot, Code2, Palette, Workflow, Cpu, Lightbulb];

export default function Services() {
  return (
    <SectionShell
      id="services"
      eyebrow="Services"
      title="Digital solutions shaped for real business movement."
      copy="Each engagement is designed to give leaders the strategic confidence, product quality, and technical implementation needed to move faster."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.article
              key={service.title}
              className="glass-card interactive-card group relative overflow-hidden rounded-[1.75rem] p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.55 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="grid h-[3.25rem] w-[3.25rem] place-items-center rounded-2xl border border-cyan/25 bg-cyan/10 text-cyan shadow-glow">
                <Icon size={25} />
              </div>
              <h3 className="mt-7 text-xl font-semibold text-mist">{service.title}</h3>
              <p className="mt-4 min-h-28 text-sm leading-7 text-steel">{service.description}</p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <p className="text-xs font-semibold uppercase text-cyan">Typical output</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">{service.outcome}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
