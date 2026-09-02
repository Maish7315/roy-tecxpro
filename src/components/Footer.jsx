import { ArrowUpRight, Code2, Instagram, Linkedin, Mail, MessageCircle, Twitter } from 'lucide-react';
import { navigation, profile, socials } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="container-shell">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <a href="#home" className="inline-flex items-center gap-3 text-lg font-semibold text-mist">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-cyan text-night shadow-glow">
                  <Code2 size={20} />
                </span>
                {profile.brand}
              </a>
              <p className="mt-5 max-w-xl text-sm leading-7 text-steel">
                AI strategy, premium interface design, full-stack web development, and automation
                systems for ambitious businesses.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase text-cyan">Navigation</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {navigation.map((item) => (
                  <a key={item.href} href={item.href} className="text-sm text-steel transition hover:text-cyan">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase text-cyan">Connect</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-mist transition hover:border-cyan/35 hover:text-cyan"
                    aria-label={social.label}
                  >
                    {social.label === 'LinkedIn' && <Linkedin size={17} />}
                    {social.label === 'Instagram' && <Instagram size={17} />}
                    {social.label === 'X' && <Twitter size={17} />}
                    {social.label === 'WhatsApp' && <MessageCircle size={17} />}
                  </a>
                ))}
              </div>
              <a href={`mailto:${profile.email}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-mist hover:text-cyan">
                {profile.email}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright 2024-2026 {profile.brand}. All rights reserved.</p>
            <p>Designed and built in Nairobi, Kenya.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
