import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, Twitter } from 'lucide-react';
import SectionShell from './SectionShell';
import { profile, socials } from '../data/portfolio';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_g2h9628';
const EMAILJS_TEMPLATE_ID = 'template_xkjt4zr';
const EMAILJS_PUBLIC_KEY = 'Mow79wXXzMPUWzj2S';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setSubmitError('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        event.target,
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      window.setTimeout(() => setSent(false), 3600);
      event.target.reset();
    } catch (error) {
      setSent(false);
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Bring the next digital move into focus."
      copy="Use the form for project inquiries, AI strategy calls, website rebuilds, automation ideas, or a technical advisory conversation."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="grid gap-6">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase text-cyan">Start a conversation</p>
            <h3 className="mt-4 text-3xl font-semibold text-mist">Schedule a consultation with {profile.brand}.</h3>
            <p className="mt-5 text-sm leading-7 text-steel">
              Share the business challenge, the audience, the budget range, and the result you want.
              I will help shape the right next step.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                { icon: Mail, title: 'Email', value: profile.email, href: `mailto:${profile.email}` },
                { icon: Phone, title: 'Phone', value: profile.phone, href: `tel:${profile.phone.replaceAll(' ', '')}` },
                { icon: MapPin, title: 'Location', value: profile.location, href: 'https://maps.google.com/?q=Nairobi,Kenya' },
              ].map(({ icon: Icon, title, value, href }) => (
                <a
                  key={title}
                  href={href}
                  target={title === 'Location' ? '_blank' : undefined}
                  rel={title === 'Location' ? 'noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-4 transition hover:border-cyan/35 hover:bg-cyan/5"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan/10 text-cyan">
                    <Icon size={20} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-mist">{title}</span>
                    <span className="mt-1 block text-sm text-steel">{value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] px-4 text-sm font-semibold text-mist transition hover:border-cyan/35 hover:text-cyan"
                >
                  {social.label === 'LinkedIn' && <Linkedin size={16} className="mr-2" />}
                  {social.label === 'Instagram' && <Instagram size={16} className="mr-2" />}
                  {social.label === 'X' && <Twitter size={16} className="mr-2" />}
                  {social.label === 'WhatsApp' && <MessageCircle size={16} className="mr-2" />}
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card relative min-h-72 overflow-hidden rounded-[2rem] p-6">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/25" />
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/15 blur-2xl" />
            <div className="relative flex h-full min-h-60 flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="tag-chip">Nairobi HQ</span>
                <span className="tag-chip">Worldwide clients</span>
              </div>
              <div>
                <p className="text-2xl font-semibold text-mist">Interactive map placeholder</p>
                <p className="mt-3 max-w-md text-sm leading-7 text-steel">
                  Based in Kenya, available for remote advisory, design, development, and automation partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-panel rounded-[2rem] p-6 sm:p-8"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-mist">
              Name
              <input className="field" name="name" placeholder="Your name" required />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-mist">
              Email
              <input className="field" type="email" name="email" placeholder="you@company.com" required />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-mist sm:col-span-2">
              Project type
              <select className="field" name="type" defaultValue="AI consultation">
                <option>AI consultation</option>
                <option>Website or web app</option>
                <option>UI/UX design</option>
                <option>Business automation</option>
                <option>Technical advisory</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-mist sm:col-span-2">
              Message
              <textarea
                className="field min-h-40 resize-y"
                name="message"
                placeholder="Tell me what you want to build, improve, automate, or clarify."
                required
              />
            </label>
          </div>

          <button type="submit" className="premium-button-primary mt-6 w-full" disabled={sending}>
            {sending ? (
              'Sending...'
            ) : sent ? (
              <>
                Message Ready
                <CalendarDays size={18} />
              </>
            ) : (
              <>
                Send Message
                <Send size={18} />
              </>
            )}
          </button>

          {sent && (
            <div className="mt-4 rounded-3xl border border-cyan/30 bg-cyan/10 p-4 text-sm text-mist">
              Message sent to Roy successfully! Please wait for a reply via email. Thank you.
            </div>
          )}
          {submitError && !sent && (
            <div className="mt-4 rounded-3xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-mist">
              {submitError}
            </div>
          )}
        </motion.form>
      </div>
    </SectionShell>
  );
}
