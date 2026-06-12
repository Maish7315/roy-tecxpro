import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionShell from './SectionShell';
import { testimonials } from '../data/portfolio';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const current = testimonials[active];

  return (
    <SectionShell
      id="testimonials"
      eyebrow="Testimonials"
      title="What clients notice when the work is done properly."
      copy="The goal is not decoration. It is trust, clarity, speed, and a digital experience that creates momentum."
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass-card rounded-[2rem] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase text-cyan">Client confidence</p>
          <h3 className="mt-4 text-3xl font-semibold text-mist">Premium work should feel calm, clear, and inevitable.</h3>
          <p className="mt-5 text-sm leading-7 text-steel">
            Strong design lowers doubt. Strong engineering lowers risk. Together, they make your
            business easier to understand and easier to choose.
          </p>
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-mist transition hover:border-cyan/40"
              onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-mist transition hover:border-cyan/40"
              onClick={() => setActive((active + 1) % testimonials.length)}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="glass-panel relative min-h-[25rem] overflow-hidden rounded-[2rem] p-6 sm:p-8">
          <div className="absolute right-8 top-8 h-48 w-48 rounded-full bg-cyan/10 blur-3xl" />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, x: 30, filter: 'blur(12px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -30, filter: 'blur(12px)' }}
              transition={{ duration: 0.45 }}
              className="relative"
            >
              <div className="flex gap-2 text-cyan">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={20} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-10 text-2xl font-medium leading-snug text-mist sm:text-3xl">
                "{current.quote}"
              </blockquote>
              <div className="mt-10 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-cyan to-violet text-lg font-bold text-night">
                  {current.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-mist">{current.name}</p>
                  <p className="mt-1 text-sm text-steel">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 left-6 flex gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={`h-2.5 rounded-full transition ${active === index ? 'w-9 bg-cyan' : 'w-2.5 bg-white/20'}`}
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
