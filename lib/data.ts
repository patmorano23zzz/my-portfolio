export interface Education {
  level: string;
  school: string;
  detail: string;
  years: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Seminar {
  year: string;
  title: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export const certificates: Certificate[] = [
  {
    title:
      "Smarter & Greener Future: Inclusive Computer Literacy Training for All Through Environmental Sustainability, Climate Change Awareness, and Gender-Responsive Development",
    issuer: "President Ramon Magsaysay State University — Sta. Cruz Campus",
    date: "May 11, 2026",
    image: "/certificate1.jpg",
  },
];

export interface Achievement {
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  category: string;
  url?: string;
  period: string;
}

export const projects: Project[] = [
  {
    title: "BatangBibo",
    description:
      "Built a PHP/MySQL learning platform for teachers to manage students, classes, and learning activities. Includes adaptive student missions, progress tracking, hints, achievements, role-based dashboards, reporting, notifications, and mobile-friendly problem reporting.",
    category: "PHP / MySQL / Education",
    url: "https://batangbibo.great-site.net",
    period: "Jan 2026 – Present",
  },
  {
    title: "Donma Automated Attendance System",
    description:
      "Developed a modular PHP/MySQL attendance system for Don Marcelo C. Marty Elementary School, with role-based admin, teacher, student, authentication, and attendance modules. Uses PDO, automatic schema migrations, and WebRTC signaling and messaging for kiosk and teacher communication.",
    category: "PHP / MySQL / WebRTC",
    url: "https://donma-ats.site.je",
    period: "Jul 2026 – Present",
  },
  {
    title: "EduVault",
    description:
      "Built a school records and document management system for Atel-Batang Elementary School using React, Tailwind CSS, PHP, and MySQL. Includes admin and teacher portals, secure document storage and audit logging, plus reference-code document requests with registrar review and approval.",
    category: "React / Tailwind / PHP / MySQL",
    url: "https://abes-eduvault.com/",
    period: "Aug 2026 – Present",
  },
];


export const profile = {
  name: "Patrick Morano",
  initials: "PM",
  title: "Web Developer · BS Computer Science Student",
  bio: "A creative and detail-oriented Computer Science student who builds clean, efficient, and purposeful web solutions. With hands-on experience in PHP, JavaScript and database management, I approach every project with a balance of technical precision and creative problem-solving. I thrive in collaborative environments, communicate clearly with my team, and take ownership of every task I am given. Outside of coding, I recharge through gaming and drawing and carry that same strategic and creative mindset into everything I do professionally.",
  contact: {
    phone: "09913123145",
    email: "patmorano23@gmail.com",
    address: "Sitio Balza, Brgy. Gama, Sta. Cruz, Zambales",
    github: "https://github.com/patmorano23zzz",
  },
};

export const education: Education[] = [
  {
    level: "Tertiary",
    school: "President Ramon Magsaysay State University – Sta. Cruz Campus",
    detail: "Bachelor of Science in Computer Science",
    years: "2023 - Present",
  },
  {
    level: "Secondary",
    school: "Cato National High School",
    detail: "TVL-ICT (CSS); graduated with honors",
    years: "2018 - 2022",
  },
  {
    level: "Secondary",
    school: "Sisters of Mary School-Adlas, Inc.",
    detail: "Consistent with honors",
    years: "2016 - 2018",
  },
  {
    level: "Primary",
    school: "Atel-Batang Elementary School",
    detail: "Graduated as Salutatorian",
    years: "2010 - 2016",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "Visual Basic .NET",
    ],
  },
  {
    category: "Frameworks",
    items: [
      "Laravel",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Database",
    items: ["MySQL"],
  },
  {
    category: "Development Tools",
    items: ["Git", "GitHub", "XAMPP", "Vercel", "Hostinger"],
  },
  {
    category: "AI-Assisted Development",
    items: ["GitHub Copilot", "Cline", "Kiro", "Claude AI", "ChatGPT"],
  },
  {
    category: "Technical Skills",
    items: [
      "Web Development",
      "Database Management",
      "System Development",
      "Basic Networking",
    ],
  },
];

export const seminars: Seminar[] = [
  {
    year: "2026",
    title:
      "Smarter & Greener Future: Inclusive Computer Literacy Training for All Through Environmental Sustainability, Climate Change Awareness, and Gender-Responsive Development — President Ramon Magsaysay State University, Sta. Cruz Campus, May 11, 2026",
  },
];

export const achievements: Achievement[] = [
  {
    period: "2025 - 2026",
    description:
      "Successfully completed 25+ academic and technical projects within the school year",
  },
];
