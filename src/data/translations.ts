export type Language = 'en' | 'id';

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/nadirakputri',
  github: 'https://github.com/nadirakputri',
  email: 'mailto:nadirakp06@gmail.com',
  emailAddress: 'nadirakp06@gmail.com',
  instagram: 'https://instagram.com/nadirakputri'
};

const ENGLISH_STRINGS = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    certifications: 'Certifications',
    contact: 'Contact',
    resume: 'Resume',
    hireMe: 'Hire Me'
  },
  hero: {
    badge: 'AVAILABLE FOR NEW PROJECTS',
    greeting: 'Data Science Enthusiast & Web Developer',
    tagline: '6th-semester Computer Science student specializing in Data Science. Passionate about transforming data into meaningful insights and building beautiful digital experiences.',
    getInTouch: 'Get in Touch',
    viewWork: 'View My Work'
  },
  about: {
    subtitle: 'THE STORY SO FAR',
    title: 'Hello! I\'m Nadira Khumaira Putri',
    bio: 'A passionate Data Science enthusiast and Web Developer. I love exploring the world of data, uncovering insights, analyze the system & business process, and creating interactive web applications. My journey in tech has been fueled by curiosity and a desire to solve real-world problems through technology. When I\'m not coding or analyzing data, you can find me exercising, reading, or enjoying nature. Let\'s connect and create something amazing together!',
    yearsLabel: 'YEARS OF TECH & SYSTEMS',
    downloadCv: 'Download CV'
  },
  tools: {
    subtitle: 'TECHNICAL PROFICIENCY',
    title: 'Tools & Technologies',
    description: 'The modern stack I use to transform raw data into actionable business insights and web experiences.',
    learnMore: 'Learn more about my process'
  },
  projects: {
    subtitle: 'PORTFOLIO HIGHLIGHTS',
    title: 'Featured Projects & Case Studies',
    description: 'Explore real-world data science pipelines, analytics dashboards, and custom web applications.',
    filterAll: 'All',
    viewLive: 'Live Demo / Report',
    viewGithub: 'GitHub Repo',
    viewCaseStudy: 'Case Study',
    loadMore: 'Load More Projects',
    showLess: 'Show Less'
  },
  work: {
    subtitle: 'CAREER PATH',
    title: 'Work Experience',
    description: 'My journey through tech internships, research, and collaborative project execution.'
  },
  education: {
    subtitle: 'ACADEMIC BACKGROUND',
    title: 'Education & Honors',
    description: 'Formal academic background and key concentrations in Data Science and Systems Analysis.'
  },
  certifications: {
    subtitle: 'VERIFIED CREDENTIALS',
    title: 'Certificates & Competencies',
    description: 'Industry certifications validating my skills across Data Analytics, Machine Learning, Web Development, and UI/UX.',
    searchPlaceholder: 'Search certifications by title, issuer, or skill...',
    viewDoc: 'View Document',
    verifyCert: 'Verify Credential'
  },
  organizations: {
    subtitle: 'LEADERSHIP & ACTIVITIES',
    title: 'Organizational Experience',
    description: 'Active participation in developer communities, leadership initiatives, and social impact projects.'
  },
  cta: {
    title: 'Have a Project in Mind or Want to Collaborate?',
    subtitle: 'I am always open to discussing new data science projects, web development opportunities, or data analyst roles.',
    getInTouch: 'Get in Touch',
    downloadCv: 'Download CV'
  },
  footer: {
    quickLinks: 'Quick Links',
    connect: 'Connect',
    contactMe: 'Contact Me',
    rights: 'All rights reserved.',
    sharePortfolio: 'Share Portfolio'
  },
  contactModal: {
    tag: 'GET IN TOUCH',
    title: 'Let\'s Connect & Collaborate',
    fullName: 'Your Full Name',
    email: 'Email Address',
    subject: 'Inquiry Topic',
    message: 'Your Message',
    sendBtn: 'Send Message',
    openInEmailApp: 'Open Direct in Email App (Gmail/Mail)',
    receivedTitle: 'Message Received!',
    receivedDesc: 'Thank you for reaching out! Your message will be delivered directly to nadirakp06@gmail.com.',
    emailInfo: 'Messages sent through this form or clicking direct email will open your email client addressed directly to nadirakp06@gmail.com.'
  },
  certModal: {
    title: 'Certificate Document Viewer',
    issuedBy: 'Issued by',
    credentialId: 'Credential ID',
    skillsCovered: 'Skills & Topics Covered',
    summary: 'Certificate Overview',
    downloadPdf: 'Download Certificate PDF',
    close: 'Close Preview'
  }
};

export const TRANSLATIONS: Record<string, typeof ENGLISH_STRINGS> = new Proxy({
  en: ENGLISH_STRINGS,
  id: ENGLISH_STRINGS
}, {
  get: (target, prop) => {
    if (typeof prop === 'string' && prop in target) {
      return target[prop as keyof typeof target];
    }
    return ENGLISH_STRINGS;
  }
});