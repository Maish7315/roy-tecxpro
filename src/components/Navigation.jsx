import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Code2, Menu, X } from 'lucide-react';
import { navigation, profile } from '../data/portfolio';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <motion.nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-3 py-3 transition ${
          scrolled ? 'glass-panel border-white/15' : 'border-white/10 bg-white/[0.035] backdrop-blur-xl'
        }`}
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#home" className="flex items-center gap-3 rounded-full pl-2 pr-3 text-sm font-semibold text-mist" onClick={close}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-cyan text-night shadow-glow">
            <Code2 size={20} />
          </span>
          <span className="hidden sm:inline">{profile.brand}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-steel transition hover:bg-white/[0.08] hover:text-mist"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <a href="#contact" className="premium-button-primary px-4 py-2 text-sm">
            Schedule Consultation
            <ArrowRight size={16} />
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-mist lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-white/12 bg-night/90 p-3 shadow-panel backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            <div className="grid gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-mist transition hover:bg-white/[0.08]"
                  onClick={close}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="premium-button-primary mt-2" onClick={close}>
                Schedule Consultation
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
