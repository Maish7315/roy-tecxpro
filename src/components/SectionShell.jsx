import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const variants = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SectionShell({ id, eyebrow, title, copy, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`relative z-10 py-20 sm:py-24 lg:py-28 ${className}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
    >
      <div className="container-shell">
        {(eyebrow || title || copy) && (
          <div className="mb-10 sm:mb-14">
            {eyebrow && (
              <div className="eyebrow">
                <Sparkles size={14} />
                {eyebrow}
              </div>
            )}
            {title && <h2 className="section-heading text-balance">{title}</h2>}
            {copy && <p className="section-copy">{copy}</p>}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}
