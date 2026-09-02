const optimized = (path) => new URL(`../../optimized/${path}`, import.meta.url).href;

export const profile = {
  name: 'Roy Nyamawi Sanga',
  brand: 'Roy-TECXpro',
  title: 'AI Technology Advisor, Full-Stack Web Developer, UI/UX Designer, and Digital Solutions Consultant',
  location: 'Nairobi, Kenya',
  email: 'roysanga127@gmail.com',
  secondaryEmail: 'leeweb7315@gmail.com',
  phone: '+254 740 297 140',
  secondaryPhone: '+254 706 573 493',
  portrait: optimized('roy-portrait.jpg'),
  portraitAlt: 'Roy Nyamawi Sanga portrait',
};

export const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/roysanga' },
  { label: 'Instagram', href: 'https://instagram.com/roytecxpro.ltd' },
  { label: 'X', href: 'https://twitter.com/Roysanga254' },
  { label: 'WhatsApp', href: 'https://wa.me/254740297140' },
];

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const rotatingWords = [
  'AI Solutions',
  'Web Development',
  'UI/UX Design',
  'Business Automation',
  'Digital Transformation',
];

export const stats = [
  { label: 'Projects Completed', value: 50, suffix: '+' },
  { label: 'Clients Served', value: 35, suffix: '+' },
  { label: 'Technologies Mastered', value: 24, suffix: '+' },
  { label: 'Industries Impacted', value: 12, suffix: '+' },
];

export const services = [
  {
    title: 'AI Consulting',
    description:
      'Strategic advisory for teams that want to adopt AI safely, profitably, and with workflows people actually use.',
    outcome: 'AI roadmaps, use-case audits, model selection, governance',
  },
  {
    title: 'Custom Web Development',
    description:
      'High-performing React, Next.js, and full-stack products built for speed, conversion, and long-term maintainability.',
    outcome: 'Dashboards, SaaS platforms, e-commerce, portals',
  },
  {
    title: 'UI/UX Design',
    description:
      'Premium interfaces that translate complex business logic into polished, intuitive customer experiences.',
    outcome: 'Design systems, prototypes, responsive product UI',
  },
  {
    title: 'Business Automation',
    description:
      'Automation systems that remove repetitive work, connect teams, and turn scattered operations into reliable flows.',
    outcome: 'CRM flows, lead routing, reporting, notifications',
  },
  {
    title: 'AI Integration',
    description:
      'Practical integrations using AI APIs for chat assistants, recommendations, document intelligence, and internal tools.',
    outcome: 'Assistants, AI search, content pipelines, RAG systems',
  },
  {
    title: 'Technical Advisory',
    description:
      'Trusted guidance for founders and business owners making technology decisions that affect growth and cost.',
    outcome: 'Architecture reviews, vendor choices, execution planning',
  },
];

export const projects = [
  {
    title: 'OlkuToto Tours & Travel',
    category: 'Travel Platform',
    description:
      'A tourism booking experience with destination storytelling, lead capture, booking flows, and performance-focused mobile UX.',
    metrics: ['150% booking increase', '500+ travelers reached'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Payments'],
    demoUrl: 'https://olkutototours.co.ke/',
    sourceLabel: 'Private Source',
    image: optimized('olkutoto.webp.jpg'),
  },
  {
    title: 'Maish Fashion Boutique',
    category: 'E-commerce',
    description:
      'A premium fashion storefront with product discovery, conversion-led layout, M-Pesa readiness, and brand-first presentation.',
    metrics: ['40% conversion rate', '2.5K monthly sales'],
    technologies: ['React', 'E-commerce', 'SEO', 'M-Pesa'],
    demoUrl: 'https://maishfashionboutique.co.ke/',
    sourceLabel: 'Private Source',
    image: optimized('fashion.webp.jpg'),
  },
  {
    title: 'Kwa Ground Youth Empowerment',
    category: 'Community Platform',
    description:
      'A youth opportunity platform combining job discovery, resource access, application flows, and community engagement.',
    metrics: ['1K+ active users', '200+ jobs posted'],
    technologies: ['Vue.js', 'Firebase', 'PWA', 'Analytics'],
    demoUrl: 'https://kwagraund.netlify.app/',
    sourceLabel: 'Private Source',
    image: optimized('youth.webp.jpg'),
  },
  {
    title: 'Kijana Electronics Store',
    category: 'Retail Commerce',
    description:
      'Modern electronics commerce with fast product scanning, mobile-first filtering, trust signals, and live support paths.',
    metrics: ['500+ products', '95% satisfaction'],
    technologies: ['React', 'Search UX', 'Responsive', 'Live Chat'],
    demoUrl: 'http://kijanaaelectronics.netlify.app',
    sourceLabel: 'Private Source',
    image: optimized('electronics.webp.jpg'),
  },
  {
    title: 'Bree Tours & Safaris',
    category: 'Travel Platform',
    description:
      'A safari and tour booking platform with destination storytelling, itinerary planning, lead capture, and mobile-optimized booking flows.',
    metrics: ['200+ bookings', '4.9 rating'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Payments', 'AI Chat'],
    demoUrl: 'https://breetoursandsafaris.co.ke/',
    sourceLabel: 'Private Source',
    image: optimized('breetours.webp.jpg'),
  },
  {
    title: 'Cool Point',
    category: 'Business Platform',
    description:
      'A client-facing showcase platform with dynamic service pages, performance-optimized media, and AI-powered engagement widgets.',
    metrics: ['30% leads increase', '4.8 rating'],
    technologies: ['React', 'Netlify', 'Tailwind', 'AI Assistants'],
    demoUrl: 'https://cool-point.netlify.app/',
    sourceLabel: 'Private Source',
    image: optimized('coolpoint.webp.jpg'),
  },
  {
    title: 'Moonmist Adventure',
    category: 'Adventure Platform',
    description:
      'An adventure activity platform with experience listings, booking flows, real-time availability, and AI-driven recommendation engine.',
    metrics: ['150+ adventures', '4.7 rating'],
    technologies: ['React', 'Firebase', 'AI Search', 'Payments'],
    demoUrl: 'https://moonmistadventure.netlify.app/',
    sourceLabel: 'Private Source',
    image: optimized('adventure.webp.jpg'),
  },
  {
    title: 'Project Kitchen',
    category: 'Restaurant Platform',
    description:
      'A restaurant platform with menu discovery, table reservations, AI concierge chatbots, and mobile-first ordering experience.',
    metrics: ['40% order increase', '4.8 rating'],
    technologies: ['React', 'Netlify', 'AI Chatbot', 'Orders'],
    demoUrl: 'https://project-kitchen.netlify.app/',
    sourceLabel: 'Private Source',
    image: optimized('kitchen.webp.jpg'),
  },
  {
    title: 'AJ Forex',
    category: 'Finance Platform',
    description:
      'A forex trading information platform with market insights, AI signal analysis, responsive dashboards, and client engagement tools.',
    metrics: ['500+ traders', '4.9 rating'],
    technologies: ['React', 'Netlify', 'AI Signals', 'Charts'],
    demoUrl: 'https://ajforex.netlify.app/',
    sourceLabel: 'Private Source',
    image: optimized('forex.webp.jpg'),
  },
];

export const processSteps = [
  {
    title: 'Discovery',
    description: 'Clarify the business model, decision makers, audience needs, current stack, and the real success metric.',
  },
  {
    title: 'Strategy',
    description: 'Map the product direction, AI opportunities, technical risks, content system, and conversion architecture.',
  },
  {
    title: 'Design',
    description: 'Create polished flows, visual systems, responsive screens, and interactive prototypes before build starts.',
  },
  {
    title: 'Development',
    description: 'Ship fast, accessible, production-grade frontend and backend features with clean reusable components.',
  },
  {
    title: 'Launch',
    description: 'Optimize performance, analytics, SEO, security basics, forms, hosting, and handoff documentation.',
  },
  {
    title: 'Growth',
    description: 'Improve the product with data, automation, AI enhancements, conversion testing, and ongoing advisory.',
  },
];

export const skills = [
  { name: 'React', level: 94 },
  { name: 'Next.js', level: 88 },
  { name: 'TypeScript', level: 86 },
  { name: 'Python', level: 82 },
  { name: 'Node.js', level: 87 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'AI APIs', level: 90 },
  { name: 'Firebase', level: 84 },
  { name: 'Supabase', level: 81 },
  { name: 'MongoDB', level: 80 },
];

export const testimonials = [
  {
    quote:
      'Roy transformed our outdated website into a modern, user-friendly platform. The new experience feels premium and converts far better.',
    name: 'Sarah Wanjiku',
    role: 'Founder, Retail Brand',
  },
  {
    quote:
      'He understood the business goal first, then designed the technology around it. The result was fast, beautiful, and easy for our team to manage.',
    name: 'David Mwangi',
    role: 'Operations Director',
  },
  {
    quote:
      'Roy combines design taste with strong technical execution. He gave us a product that looks trustworthy and performs like a serious business tool.',
    name: 'Grace Achieng',
    role: 'Startup Founder',
  },
];

export const achievements = [
  {
    title: 'Certifications',
    detail: 'Professional training across UX, responsive web design, JavaScript, and modern React development.',
  },
  {
    title: 'Awards',
    detail: 'Recognized by clients for reliable execution, premium interface quality, and measurable business results.',
  },
  {
    title: 'Community Contributions',
    detail: 'Supports youth and small businesses with digital literacy, web strategy, and practical technology guidance.',
  },
  {
    title: 'Open Source Projects',
    detail: 'Builds reusable frontend patterns, automation utilities, and learning resources for modern web teams.',
  },
];

export const technologyStrip = [
  'AI Strategy',
  'React Systems',
  'Automation',
  'Product Design',
  'Conversion UX',
  'API Integrations',
  'Performance',
  'Technical Advisory',
];
