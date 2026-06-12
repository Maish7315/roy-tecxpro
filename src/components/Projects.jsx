import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock } from 'lucide-react';
import SectionShell from './SectionShell';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Featured Projects"
      title="Premium builds with strategy, execution, and measurable proof."
      copy="A selected showcase of client-facing platforms, e-commerce systems, and community products designed to perform across mobile and desktop."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="glass-panel interactive-card group overflow-hidden rounded-[2rem]"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.65 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-night/65 px-3 py-1 text-xs font-semibold text-cyan backdrop-blur-xl">
                {project.category}
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <h3 className="text-2xl font-semibold text-mist">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-steel">{project.description}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.metrics.map((metric) => (
                  <div key={metric} className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-mist">
                    {metric}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag-chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="premium-button-primary">
                  Live Demo
                  <ExternalLink size={17} />
                </a>
                <button type="button" className="premium-button-ghost cursor-not-allowed opacity-80" title="Client source code is private">
                  {project.sourceLabel === 'Private Source' ? <Lock size={17} /> : <Github size={17} />}
                  Source Code
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
