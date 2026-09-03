import { useEffect, useMemo, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Bot, CheckCircle2, ExternalLink, Sparkles, Zap } from 'lucide-react';
import { profile, rotatingWords, technologyStrip } from '../data/portfolio';

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 700], [0, 90]);
  const headlineY = useTransform(scrollY, [0, 700], [0, -42]);
  const particles = useMemo(
    () =>
      Array.from({ length: 46 }, (_, index) => ({
        id: index,
        left: `${(index * 19) % 100}%`,
        top: `${(index * 31) % 100}%`,
        x: `${((index % 8) - 3) * 18}px`,
        y: `${((index % 6) - 2) * 22}px`,
        duration: `${4 + (index % 7)}s`,
      })),
    [],
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 2100);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative z-10 min-h-screen overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-0 grid-bg opacity-40 mask-fade-bottom" />
      <div className="absolute inset-0 bg-radial-cyan" />
      <div className="aurora-line" />
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            '--x': particle.x,
            '--y': particle.y,
            '--duration': particle.duration,
          }}
        />
      ))}

      <div className="container-shell relative">
        <div className="grid min-h-[calc(100vh-9rem)] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div style={{ y: headlineY }} className="max-w-4xl">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <Sparkles size={14} />
              AI strategy meets premium product design
            </motion.div>

            <motion.h1
              className="mt-7 text-balance text-5xl font-semibold leading-[0.95] text-mist sm:text-6xl lg:text-7xl xl:text-8xl"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              Transforming Businesses Through AI & Modern Technology
            </motion.h1>

            <motion.div
              className="mt-6 flex min-h-14 flex-wrap items-center gap-3 text-xl font-semibold text-steel sm:text-2xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.7 }}
            >
              <span>Focused on</span>
              <motion.span
                key={rotatingWords[wordIndex]}
                className="rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-cyan shadow-glow"
                initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -18, filter: 'blur(10px)' }}
                transition={{ duration: 0.35 }}
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </motion.div>

            <motion.p
              className="mt-7 max-w-2xl text-lg leading-8 text-steel sm:text-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.7 }}
            >
              I help CEOs, founders, and growth teams turn ambitious ideas into intelligent products,
              automated operations, and digital experiences that feel expensive for the right reasons.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.7 }}
            >
              <a href="#projects" className="premium-button-primary">
                View My Work
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="premium-button-ghost">
                Schedule Consultation
                <ExternalLink size={17} />
              </a>
            </motion.div>

            <motion.div
              className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.7 }}
            >
              {['AI-ready architecture', 'Conversion-led UI', 'Business automation'].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-steel">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div style={{ y: portraitY }} className="hero-portrait-wrapper relative lg:pl-6">
            <div className="absolute -left-10 top-12 hidden h-48 w-48 rounded-full bg-violet/20 blur-3xl lg:block" />
            <div className="absolute -right-4 bottom-0 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />

            <motion.div
              className="interactive-card glass-panel relative overflow-hidden rounded-[2rem] p-4"
              initial={{ opacity: 0, scale: 0.95, rotateX: 8 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ delay: 0.18, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
            >
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={profile.portrait}
                  alt={profile.portraitAlt}
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/15 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/12 bg-night/70 p-4 backdrop-blur-xl">
                  <p className="text-sm font-semibold text-mist">{profile.name}</p>
                  <p className="mt-1 text-xs leading-5 text-steel">{profile.title}</p>
                </div>
              </div>

              <div className="absolute right-8 top-8 rounded-2xl border border-cyan/25 bg-cyan/10 p-3 text-cyan backdrop-blur-xl">
                <Bot size={26} />
              </div>
              <div className="absolute -left-3 bottom-28 rounded-2xl border border-white/12 bg-night/85 px-4 py-3 shadow-panel backdrop-blur-xl">
                <div className="flex items-center gap-2 text-sm font-semibold text-mist">
                  <Zap size={16} className="text-cyan" />
                  Strategy to launch
                </div>
                <p className="mt-1 text-xs text-steel">Design, build, automate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden border-y border-white/10 bg-white/[0.035] py-4 backdrop-blur-xl">
        <div className="marquee-track gap-3">
          {[...technologyStrip, ...technologyStrip].map((item, index) => (
            <span key={`${item}-${index}`} className="tag-chip mx-2">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
