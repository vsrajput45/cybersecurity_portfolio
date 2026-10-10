/**
 * Central portfolio data — generated from Vivek Kumar's resume.
 * Every fact on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Vivek Kumar',
  displayName: 'Vivek Kumar',
  firstName: 'VIVEK',
  seriesTag: 'VS SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A VIVEK ORIGINAL',
  role: 'Cybersecurity & Software Developer',
  tagline: ['Cybersecurity', 'Data Analytics', 'Software Development'],
  intro:
    'BCA student at Noida International University focused on cybersecurity and data analytics, with hands-on experience in security projects, SQL/DBMS, Linux environments, and data-oriented problem solving. Interested in security monitoring, threat detection, data analysis, and visualization.',
  location: 'Delhi NCR, India',
  email: 'vivekrajput7468@gmail.com',
  phone: '+91-9835028847',
  links: {
    linkedin: 'https://www.linkedin.com/in/vsrajput45',
    github: 'https://github.com/vsrajput45',
  },
  resumePdf: '/assets/Vivek_Kumar_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Vivek Kumar',
  },
  interests: ['Security Monitoring', 'Threat Detection', 'Data Analysis & Visualization'],
};

export const education = [
  {
    school: 'Noida International University',
    place: 'Uttar Pradesh',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2025 – 2028',
    score: 'BCA Scholar',
  },
];

export const experience = [
  {
    company: 'CyberHeviX Technology',
    role: 'Tech Lead',
    place: 'India',
    period: '2025 – Present',
    points: [
      'Serving as Tech Lead overseeing security architectures, technical prototypes, and implementation workflows.',
      'Guiding development of threat reconnaissance tooling and security monitoring pipelines.',
      'Leading engineering efforts for scalable digital defense applications and system security.',
    ],
  },
  {
    company: 'Smart India Hackathon / Academic Innovation Projects',
    role: 'Project Innovator & Lead',
    place: 'India',
    period: '2026',
    points: [
      'Worked on problem statements across cybersecurity, blockchain, digital twins, and data-driven systems.',
      'Prepared technical architectures, dashboards, prototypes, demonstrations, and judge-oriented project explanations.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'trustchain-id',
    title: 'TrustChain-ID',
    year: '2026',
    genre: 'Blockchain • Digital Trust • Smart Contracts',
    logline: 'Decentralized identity and access management with DIDs, smart-contract RBAC, and ERC-721 asset tokenization.',
    stack: ['Solidity', 'ethers.js', 'React', 'Node.js', 'PostgreSQL'],
    build: [
      'Decentralized identity and access management: DIDs, smart-contract RBAC, ERC-721 asset tokenization, immutable audit trail; QR-based asset verification with unauthorized-access simulation demos.',
      'HackCOSMIC 2026, Cybersecurity & Digital Trust track (team of four); ran a prior-art review to scope the differentiation honestly.',
    ],
    features: [
      'Decentralized identity and access management (DIDs)',
      'Smart-contract RBAC & ERC-721 asset tokenization',
      'Immutable audit trail on-chain',
      'QR-based asset verification',
      'Unauthorized-access simulation demos',
    ],
    metrics: [
      { value: 'ERC-721', label: 'asset tokenization' },
      { value: 'Zero Trust', label: 'smart-contract RBAC' },
      { value: 'HackCOSMIC', label: 'Cybersecurity track' },
      { value: 'Team of 4', label: 'collaborative engineering' },
    ],
    github: 'https://github.com/vsrajput45',
    palette: { from: '#021826', via: '#034b6b', to: '#020912', accent: '#00e5ff' },
    motif: 'shield',
  },
  {
    id: 'ai-cyber-attack-detection',
    title: 'AI Cyber Attack Detection',
    year: '2026',
    genre: 'Cybersecurity • Threat Analysis • Network IDS',
    logline: 'Concept project for identifying suspicious network and attack patterns and surfacing real-time security alerts.',
    stack: ['Python', 'SQL', 'Linux', 'Kali Linux', 'EDA'],
    build: [
      'Concept project for identifying suspicious network/attack patterns and surfacing security alerts through a monitoring interface.',
      'Applied data-oriented analysis to security events to support detection, investigation, and visualization of potentially malicious activity.',
    ],
    features: [
      'Suspicious network & attack pattern recognition',
      'Real-time security alert monitoring interface',
      'Data-oriented security event investigation',
      'Malicious activity visualization dashboards',
    ],
    metrics: [
      { value: 'Real-time', label: 'security alerts' },
      { value: 'Kali/Linux', label: 'investigation environment' },
      { value: 'EDA', label: 'security telemetry analysis' },
      { value: 'IDS', label: 'anomaly detection' },
    ],
    github: 'https://github.com/vsrajput45',
    palette: { from: '#1c0529', via: '#581c87', to: '#090310', accent: '#c084fc' },
    motif: 'tenants',
  },
  {
    id: 'checkmybill',
    title: 'CheckMyBill',
    year: '2026',
    genre: 'HealthTech • OCR • Rules Engine',
    logline: 'Patient-side healthcare cost transparency with pre-admission symptom triage and post-discharge OCR bill audit.',
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    build: [
      'Patient-side healthcare cost transparency: pre-admission symptom triage with CGHS/PM-JAY fair-price estimates, plus post-discharge OCR bill audit flagging duplicates, upcoding, and arithmetic errors via a deterministic rules engine.',
      'VibeCon 2.0, HealthTech track; authored the Round 1 submission and phased 8-hour build plan.',
    ],
    features: [
      'Pre-admission symptom triage with CGHS / PM-JAY estimates',
      'Post-discharge OCR medical bill audit',
      'Deterministic rules engine flagging duplicate charges & upcoding',
      'Arithmetic validation & fair-price transparency',
    ],
    metrics: [
      { value: 'CGHS/PM-JAY', label: 'fair-price estimates' },
      { value: 'OCR', label: 'automated bill audit' },
      { value: 'VibeCon 2.0', label: 'HealthTech track entry' },
      { value: 'Rules Engine', label: 'error & upcoding check' },
    ],
    github: 'https://github.com/vsrajput45',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'urjamitra',
    title: 'UrjaMitra',
    year: '2026',
    genre: 'EnergyTech • Hash Ledger • Python Simulation',
    logline: 'Hash-chained tamper-evident M&V ledger for industrial energy decisions and deterministic telemetry generation.',
    stack: ['Python', 'Data Simulation', 'Cryptography'],
    build: [
      'Hash-chained tamper-evident M&V ledger for industrial energy decisions; deterministic 7-day compressor dataset generator (672 rows) plus a 3-minute demo runbook.',
      'Yuva Yodha Energy Tech Hackathon entry with Team NyiSoch2.0 (pitch deck + working prototype).',
    ],
    features: [
      'Hash-chained tamper-evident M&V ledger',
      'Deterministic 7-day compressor dataset generator (672 rows)',
      'Industrial energy decision telemetry',
      '3-minute demo runbook & verifiable data integrity',
    ],
    metrics: [
      { value: '672', label: 'compressor telemetry rows' },
      { value: 'Hash-chain', label: 'tamper-evident audit' },
      { value: 'Yuva Yodha', label: 'Energy Tech Hackathon' },
      { value: 'NyiSoch2.0', label: 'working prototype team' },
    ],
    github: 'https://github.com/vsrajput45',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'sih-academic',
    title: 'Smart India Hackathon',
    org: 'SIH / Academic Innovation',
    detail: 'Worked on problem statements across cybersecurity, blockchain, digital twins, and data-driven systems.',
    laurel: 'National Hackathon',
  },
  {
    id: 'hackcosmic',
    title: 'HackCOSMIC 2026 Entry',
    org: 'Cybersecurity & Digital Trust Track',
    detail: 'Team of four entry with TrustChain-ID decentralized identity and access management system.',
    laurel: 'Digital Trust Track',
  },
  {
    id: 'vibecon-healthtech',
    title: 'VibeCon 2.0 Submission',
    org: 'HealthTech Track',
    detail: 'Authored Round 1 submission and phased 8-hour build plan for CheckMyBill transparent billing.',
    laurel: 'HealthTech Track',
  },
  {
    id: 'yuva-yodha',
    title: 'Yuva Yodha Hackathon',
    org: 'Energy Tech (Team NyiSoch2.0)',
    detail: 'Engineered UrjaMitra hash-chained tamper-evident industrial energy ledger and prototype.',
    laurel: 'Energy Tech Entry',
  },
  {
    id: 'cyberhevix-tech-lead',
    title: 'Tech Lead',
    org: 'CyberHeviX Technology',
    detail: 'Technical leadership overseeing security architectures, threat reconnaissance, and software prototyping.',
    laurel: 'Technical Leadership',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Google Cloud', name: 'Generative AI', link: '#' },
  { issuer: 'Deloitte', name: 'Data Analytics', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    subtitle: 'Security monitoring & threat analysis',
    skills: [
      { name: 'Network Security', mono: 'Ns', note: 'Core' },
      { name: 'Firewalls', mono: 'Fw' },
      { name: 'IDS', mono: 'Id' },
      { name: 'Cryptography', mono: 'Cr' },
      { name: 'Vulnerabilities', mono: 'Vu' },
      { name: 'Threat Analysis', mono: 'Ta' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Databases',
    subtitle: 'EDA, cleaning & visualization',
    skills: [
      { name: 'SQL', mono: 'Sq' },
      { name: 'MySQL', mono: 'My' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Data Cleaning', mono: 'Dc' },
      { name: 'EDA & Visualization', mono: 'Ed' },
      { name: 'Excel', mono: 'Xl' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Core application logic',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'C / C++', mono: 'C+' },
      { name: 'Java', mono: 'Jv' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Solidity', mono: 'So' },
      { name: 'ethers.js', mono: 'Et' },
    ],
  },
  {
    id: 'web-tools',
    title: 'Web & Tools',
    subtitle: 'Modern frameworks & environment',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Linux / Kali', mono: 'Lx' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'VS Code & Vercel', mono: 'Vc' },
    ],
  },
  {
    id: 'focus-areas',
    title: 'Key Focus Areas',
    subtitle: 'Specialized interest',
    skills: [
      { name: 'Security Monitoring', mono: 'Sm' },
      { name: 'Threat Detection', mono: 'Td' },
      { name: 'Data Analysis', mono: 'Da' },
      { name: 'Digital Trust', mono: 'Dt' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Solidity: ['TrustChain-ID'],
  'ethers.js': ['TrustChain-ID'],
  Python: ['AI Cyber Attack Detection', 'UrjaMitra'],
  React: ['TrustChain-ID'],
  'Next.js': ['CheckMyBill'],
  FastAPI: ['CheckMyBill'],
  'Node.js': ['TrustChain-ID'],
  PostgreSQL: ['TrustChain-ID', 'CheckMyBill'],
  SQL: ['AI Cyber Attack Detection'],
  'Linux / Kali': ['AI Cyber Attack Detection'],
  'Tailwind CSS': ['CheckMyBill'],
  Cryptography: ['TrustChain-ID', 'UrjaMitra'],
  'Data Analytics': ['Deloitte Certified', 'AI Attack Detection'],
  'Generative AI': ['Google Cloud Certified'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons = [
  {
    number: 1,
    title: 'Academic Foundation',
    period: '2025 – 2028',
    synopsis: 'Bachelor of Computer Applications (BCA) at Noida International University, Uttar Pradesh — focusing on cybersecurity, SQL/DBMS, and software development.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The University Arc',
        description: 'BCA student at Noida International University, building foundational competence across computing architectures and algorithms.',
        tags: ['BCA', 'Noida International University'],
        runtime: '2025 – 2028',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Blockchain & Digital Trust',
    period: '2026',
    synopsis: 'TrustChain-ID — decentralized identity, smart-contract RBAC, ERC-721 asset tokenization, and HackCOSMIC 2026 entry.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'TrustChain-ID',
        description: 'Engineered decentralized identity and access management with DIDs, smart-contract RBAC, and QR asset verification.',
        tags: ['Solidity', 'ethers.js', 'React', 'HackCOSMIC'],
        runtime: 'HackCOSMIC 2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Cyber Attack Detection & Defense',
    period: '2026',
    synopsis: 'AI-Based Cyber Attack Detection System — identifying suspicious network patterns and analyzing security telemetry in Linux/Kali environments.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Cyber Defense Lab',
        description: 'Concept project for identifying suspicious network/attack patterns and surfacing real-time alerts through an investigation dashboard.',
        tags: ['Python', 'SQL', 'Linux', 'Kali Linux'],
        runtime: 'Security Prototyping',
        palette: violet,
      },
      {
        code: 'S03 E02',
        title: 'Tech Lead at CyberHeviX',
        description: 'Serving as Tech Lead at CyberHeviX Technology, directing technical prototypes and security implementations.',
        tags: ['CyberHeviX', 'Tech Lead'],
        runtime: 'Active Role',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'HealthTech & EnergyTech Innovations',
    period: '2026',
    synopsis: 'CheckMyBill at VibeCon 2.0 (OCR medical bill audit) and UrjaMitra at Yuva Yodha Hackathon (tamper-evident hash ledger).',
    episodes: [
      {
        code: 'S04 E01',
        title: 'CheckMyBill (VibeCon 2.0)',
        description: 'Patient-side healthcare cost transparency: pre-admission symptom triage with CGHS/PM-JAY estimates and post-discharge OCR bill audit.',
        tags: ['Next.js', 'TypeScript', 'FastAPI', 'VibeCon 2.0'],
        runtime: 'Round 1 Submission',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'UrjaMitra (Yuva Yodha)',
        description: 'Hash-chained tamper-evident M&V ledger for industrial energy decisions with a deterministic 7-day dataset generator.',
        tags: ['Python', 'EnergyTech', 'Team NyiSoch2.0'],
        runtime: 'Yuva Yodha 2026',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Smart India Hackathon initiatives, advanced threat detection modeling, and scalable full-stack software development.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Hackathon Horizon',
        description: 'Innovating across cybersecurity, blockchain, digital twins, and data-driven systems.',
        tags: ['SIH 2026', 'Cybersecurity', 'Data Analytics'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Blockchain Original', title: 'TrustChain-ID', detail: 'DIDs, smart-contract RBAC & ERC-721 • HackCOSMIC 2026', palette: ocean },
  { label: 'Cyber Defense', title: 'AI Attack Detection', detail: 'Suspicious network pattern recognition & alert UI', palette: violet },
  { label: 'HealthTech', title: 'CheckMyBill', detail: 'OCR medical bill audit & CGHS/PM-JAY transparency', palette: amber },
  { label: 'EnergyTech', title: 'UrjaMitra', detail: 'Hash-chained tamper-evident energy decision ledger', palette: jade },
  { label: 'Cloud Credential', title: 'Google Cloud', detail: 'Generative AI Certified', palette: crimson },
  { label: 'Data Credential', title: 'Deloitte', detail: 'Data Analytics Certified', palette: ocean },
  { label: 'Technical Role', title: 'Tech Lead', detail: 'CyberHeviX Technology', palette: jade },
  { label: 'Academic Track', title: 'BCA (2025–2028)', detail: 'Noida International University, UP', palette: amber },
  { label: 'National Stage', title: 'Smart India Hackathon', detail: 'Cybersecurity, blockchain & data systems innovator', palette: violet },
  { label: 'Primary Language', title: 'Python', detail: 'with Solidity, TypeScript, JavaScript, C/C++, Java', palette: crimson },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'BCA · Noida International Univ.',
    lines: ['Noida International University, Uttar Pradesh', '2025 – 2028 · Bachelor of Computer Applications'],
    chips: ['BCA', 'Delhi NCR'],
  },
  {
    kicker: 'Core Domains',
    title: 'Security, Data & Code.',
    lines: ['Cybersecurity: Firewalls, IDS, Cryptography, Threat Analysis', 'Data: SQL, PostgreSQL, DBMS, EDA, Visualization', 'Programming: Python, Solidity, TypeScript, React, Next.js'],
    chips: ['Cybersecurity', 'Data Analytics', 'Python', 'Solidity', 'React'],
  },
  {
    kicker: 'Leadership',
    title: 'Tech Lead at CyberHeviX',
    lines: ['Directing technical prototypes, security architecture, and system implementation', 'Focus on threat reconnaissance and digital trust'],
    chips: ['Tech Lead', 'CyberHeviX'],
  },
  {
    kicker: 'Projects',
    title: 'Four Flagship Productions',
    lines: [
      'TrustChain-ID — Decentralized identity & RBAC (HackCOSMIC 2026)',
      'AI Cyber Attack Detection — Suspicious pattern recognition & alert UI',
      'CheckMyBill — HealthTech OCR bill audit (VibeCon 2.0)',
      'UrjaMitra — Hash-chained tamper-evident ledger (Yuva Yodha)',
    ],
  },
  {
    kicker: 'Certified',
    title: 'Industry Credentials',
    lines: ['Google Cloud — Generative AI', 'Deloitte — Data Analytics'],
  },
  {
    kicker: 'Hackathons',
    title: 'SIH & Innovation Stages',
    lines: ['Smart India Hackathon · HackCOSMIC 2026 · VibeCon 2.0 · Yuva Yodha'],
  },
  {
    kicker: 'Current Mission',
    title: 'Now Exploring',
    lines: ['Security Monitoring · Threat Detection · Data Analysis & Visualization'],
  },
];

export type ProfileId = 'vivek' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
    {
      id: 'vivek',
      name: 'Vivek',
      blurb: 'The full series, in order',
      color: '#e5132b',
      order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
    },
    {
      id: 'recruiter',
      name: 'Recruiter',
      blurb: 'Resume, achievements & skills first',
      color: '#4cc9ff',
      order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
    },
    {
      id: 'developer',
      name: 'Developer',
      blurb: 'Projects, stack & GitHub first',
      color: '#46e3a8',
      order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
    },
    {
      id: 'creative',
      name: 'Creative',
      blurb: 'The story arc & highlights first',
      color: '#ffb547',
      order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
    },
  ];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • BCA & domains', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
