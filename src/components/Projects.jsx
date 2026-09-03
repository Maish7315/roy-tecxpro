import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Lock, Mail } from 'lucide-react';
import SectionShell from './SectionShell';
import { projects } from '../data/portfolio';

const WHATSAPP_URL = 'https://wa.me/254740297140';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

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
            viewport={{ once: true, amount: 0 }}
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
                  <div
                    key={metric}
                    className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-mist"
                  >
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
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="premium-button-primary"
                >
                  Live Demo
                  <ExternalLink size={17} />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="premium-button-ghost"
                  title="Source code access"
                >
                  <Lock size={17} />
                  Source Code
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <SourceCodeModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onWhatsApp={() => {
          window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
          setActiveProject(null);
        }}
      />
    </SectionShell>
  );
}

function SourceCodeModal({ project, onClose, onWhatsApp }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            layoutId="source-modal"
            className="glass-card pointer-events-auto relative w-full max-w-md rounded-[1.5rem] border border-white/15 p-6 text-center shadow-glow sm:p-8"
            initial={{ scale: 0.9, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 24 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10">
              <Lock className="h-7 w-7 text-cyan" />
            </div>

            <h3 className="text-xl font-semibold text-mist sm:text-2xl">Source Code Access</h3>

            <p className="mt-3 text-sm leading-7 text-steel">
              Source code for{' '}
              <span className="font-semibold text-mist">"{project.title}"</span>{' '}
              is private and maintained in a secure repository.
            </p>

            <p className="mt-3 text-sm font-medium text-sky-300">
              To access the source code please click the button below and talk to
              dev Roy.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={onWhatsApp}
                className="premium-button-primary w-full"
              >
                <Mail size={18} />
                Contact on WhatsApp
              </button>
              <button type="button" onClick={onClose} className="premium-button-ghost w-full">
                Close
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full p-1 text-steel opacity-60 transition hover:text-mist hover:opacity-100"
              aria-label="Close modal"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
