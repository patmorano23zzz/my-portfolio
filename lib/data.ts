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

export interface Experience {
  place: string;
  description: string;
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
  url: string;
}

export const projects: Project[] = [
  {
    title: "BatangBibo",
    description:
      "A full-stack web system built and deployed for real users, with its own database and live hosting.",
    category: "Web App / Full-Stack",
    url: "https://batangbibo.great-site.net",
  },
  {
    title: "Donma-ATS",
    description:
      "An automated attendance tracking system designed for faster, more reliable daily record-keeping.",
    category: "Web App / School",
    url: "https://donma-ats.site.je",
  },
];


export const profile = {
  name: "Patrick Morano",
  initials: "PM",
  title: "BS Computer Science",
  bio: "A creative and detail-oriented Computer Science student who builds clean, efficient, and purposeful web solutions. With hands-on experience in PHP, JavaScript and database management, I approach every project with a balance of technical precision and creative problem-solving. I thrive in collaborative environments, communicate clearly with my team, and take ownership of every task I am given. Outside of coding, I recharge through gaming and drawing and carry that same strategic and creative mindset into everything I do professionally.",
  contact: {
    phone: "09913123145",
    email: "patmorano23@gmail.com",
    address: "Brgy. Gama Sta. Cruz, Zambales",
    github: "https://github.com/patmorano23zzz",
  },
};

export const education: Education[] = [
  {
    level: "Tertiary",
    school: "PRMSU Sta. Cruz — BS Computer Science",
    detail: "Currently enrolled",
    years: "2023 - Present",
  },
  {
    level: "Senior High School",
    school: "TVL-ICT (CSS), Cato National High School",
    detail: "Graduated with honors",
    years: "2020 - 2022",
  },
  {
    level: "Junior High School",
    school: "Cato National High School",
    detail: "Consistent with honors",
    years: "2016 - 2020",
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
    category: "Soft Skills",
    items: [
      "Management Skills",
      "Creativity",
      "Time Management",
      "Collaborative Mindset",
      "Critical Thinking",
      "Leadership",
    ],
  },
  {
    category: "Languages, Frameworks & Tools",
    items: [
      "HTML / CSS / JavaScript",
      "PHP",
      "VB.NET",
      "Visual Studio Code",
      "MySQL",
      "Infinity Free / Hostinger / XAMPP",
      "Git / GitHub",
    ],
  },
  {
    category: "Computer Skills",
    items: [
      "Troubleshooting, hardware and software installation, and networking",
      "Efficient in Microsoft Word, Excel, and PowerPoint",
    ],
  },
];

export const experience: Experience[] = [
  {
    place: "Cato National High School",
    description:
      "Experienced in diagnosing, repairing, and maintaining computer hardware, software systems, and office printers to ensure smooth daily operations.",
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
