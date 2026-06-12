import { motion } from 'framer-motion';
import { Award, BrainCircuit, Globe2, MapPin, ShieldCheck } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import SectionShell from './SectionShell';
import { profile, stats } from '../data/portfolio';

export default function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="About Roy"
      title="A technology partner for leaders who need clarity, speed, and taste."
      copy="I blend AI advisory, full-stack engineering, and UI/UX strategy to help businesses modernize without losing the human trust that makes customers buy."
    >
      <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
        <motion.div
          className="glass-card interactive-card rounded-[2rem] p-6 sm:p-8"
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        >
          <div className="flex flex-wrap gap-3">
            {['AI Technology Advisor', 'Full-Stack Developer', 'UI/UX Designer'].map((item) => (
              <span key={item} className="tag-chip">
                {item}
              </span>
            ))}
          </div>
          <h3 className="mt-8 text-2xl font-semibold text-mist sm:text-3xl">{profile.name}</h3>
          <p className="mt-5 text-base leading-8 text-steel">
            Based in Nairobi, I work with ambitious founders, business owners, and teams that want
            more than a good-looking website. They need systems that explain their value, automate
            the work behind the scenes, and help customers trust them faster.
          </p>
          <p className="mt-4 text-base leading-8 text-steel">
            My approach is simple: understand the commercial problem, design the experience, build
            the right technology, and keep improving it with measurable feedback. The outcome is a
            digital presence that feels premium and performs like a serious business asset.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: BrainCircuit, label: 'AI-first thinking' },
              { icon: ShieldCheck, label: 'Trustworthy execution' },
              { icon: Globe2, label: 'Global-ready products' },
              { icon: MapPin, label: profile.location },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.045] p-4">
                <Icon className="text-cyan" size={22} />
                <p className="mt-3 text-sm font-semibold text-mist">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card interactive-card rounded-[1.75rem] p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                whileHover={{ y: -6 }}
              >
                <p className="text-4xl font-semibold text-mist">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm text-steel">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
              <div className="relative grid min-h-64 place-items-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute h-36 w-36 rounded-full bg-cyan/15 blur-3xl" />
                <div className="relative text-center">
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl border border-cyan/25 bg-cyan/10 text-cyan shadow-glow">
                    <Award size={34} />
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase text-cyan">Professional Certificate</p>
                  <p className="mt-2 text-xl font-semibold text-mist">2026 Credential</p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase text-cyan">Professional credibility</p>
                <h3 className="mt-3 text-2xl font-semibold text-mist">Certified, business-minded, and built for outcomes.</h3>
                <p className="mt-4 text-sm leading-7 text-steel">
                  The portfolio combines training, delivery experience, and client-facing judgment
                  across responsive design, JavaScript, React, UX, and digital transformation.
                </p>
                <a href="#contact" className="premium-button-ghost mt-6 w-fit">
                  Talk about your project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
