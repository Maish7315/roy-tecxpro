import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionShell from './SectionShell';
import { processSteps } from '../data/portfolio';

export default function Process() {
  return (
    <SectionShell
      id="process"
      eyebrow="Process"
      title="A clear path from business problem to polished digital product."
      copy="The workflow is structured enough for serious delivery and flexible enough for founders who need fast iteration."
    >
      <div className="relative">
        <div className="timeline-line absolute left-5 top-0 hidden h-full w-px md:left-1/2 md:block" />
        <div className="grid gap-5">
          {processSteps.map((step, index) => {
            const isRight = index % 2 === 1;
            return (
              <motion.div
                key={step.title}
                className={`relative grid gap-4 md:grid-cols-2 ${isRight ? '' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: index * 0.07, duration: 0.58 }}
              >
                <div className={isRight ? 'hidden md:block' : ''} />
                <div className={`glass-card interactive-card relative rounded-[1.75rem] p-6 ${isRight ? 'md:ml-8' : 'md:mr-8'}`}>
                  <span className="absolute -left-3 top-7 hidden h-6 w-6 rounded-full border border-cyan/40 bg-night shadow-glow md:block" />
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan text-night">
                      <CheckCircle2 size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-cyan">Step {index + 1}</p>
                      <h3 className="mt-1 text-xl font-semibold text-mist">{step.title}</h3>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-steel">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
