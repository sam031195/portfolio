import React from 'react';
import { PersonalInfo, Project, Skill, Experience, Education, Award, Membership, TechStackItem, ResearchProject, SkillCategory, BlogPost } from '../types';
import { MdAccessTime, MdVisibility, MdMenuBook } from 'react-icons/md';

// Import project images
import airbnbAnalyticsWarehouse from '../assets/images/projects/4.jpg';
import airlineDelayAnalytics from '../assets/images/projects/5.jpg';
import microsoftWellBQ from '../assets/images/projects/6.jpg';
import medScribeAI from '../assets/images/projects/7.jpg';
import flightFarePrediction from '../assets/images/projects/8.jpg';

// Import blog post images
import howDesignersDevelopersCollaborate from '../assets/images/blog/10.jpg';
import whyFasterIsntAlwaysBetter from '../assets/images/blog/11.jpg';
import designingForHumanConnection from '../assets/images/blog/12.jpg';
import beyondMinimalismWebDesign from '../assets/images/blog/13.jpg';
import whenToRebrandSigns from '../assets/images/blog/14.jpg';
import LedgerLens from '../assets/images/blog/15.jpg';
import whyXGBoostWins from '../assets/images/blog/16.jpg';

// Import lifestyle images
import designPhilosophyImage from '../assets/images/lifestyle/17.jpg';

// Import profile image
import profileImage from '../assets/images/profile/sm_2.jpeg';

export const personalInfo: PersonalInfo = {
  name: "Surbhi Meena",
  title: "Senior Product Manager",
  email: "surbhim@uw.edu",
  location: "Seattle, WA",
  bio: "Product Manager and Data Scientist with expertise in building user-centric digital experiences, ML/AI systems, and data-driven products. Passionate about leveraging technology to solve complex problems.",
  aboutMe: "I'm a Senior Product Manager with experience in supplier platforms, buyer experience, and PLM/ERP workflows. My background spans product management, data science, and UX design, with a focus on building scalable systems and AI-powered solutions. I'm actively involved in research at the University of Washington, working on GNNs, RAG systems, and explainable AI.",
  summary: "Product Manager and Data Scientist building user-centric digital experiences that delight and perform.",
  github: "https://github.com/surbhimeena",
  linkedin: "https://linkedin.com/in/surbhimeena",
  twitter: "https://twitter.com/surbhimeena",
  profileImage: profileImage,
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Airbnb Analytics Warehouse",
    description: "Designed a Snowflake-based analytics warehouse to analyze pricing, occupancy, and host performance, enabling scalable market insights.",
    technologies: ["Data Engineering", "Snowflake", "BI"],
    liveUrl: "#",
    imageUrl: airbnbAnalyticsWarehouse,
    embedInModal: true,
    websiteUrl: "https://trusting-overlays-194271.framer.app/",
  },
  {
    id: "2",
    title: "Airline Delay Analytics & Prediction",
    description: "Designed an end-to-end data science pipeline to analyze airline delays and predict on-time performance using operational and temporal features.",
    technologies: ["Data Science", "Classification", "Analytics"],
    liveUrl: "#",
    imageUrl: airlineDelayAnalytics,
    embedInModal: true,
    websiteUrl: "https://remarkable-cues-594356.framer.app/",
  },
  {
    id: "3",
    title: "Microsoft WellBQ",
    description: "A Privacy-First Wellness Scorecard for Hybrid Work: Turning WellBQ into Weekly, Actionable Signals. Designed for employee wellness tracking with privacy-first approach.",
    technologies: ["Data Science", "Classification", "Analytics"],
    liveUrl: "#",
    imageUrl: microsoftWellBQ,
    websiteUrl: "/portfolio/wellness/employee-wellness-dashboard.html",
    embedInModal: true,
  },
  {
    id: "4",
    title: "MedScribe AI",
    description: "Built a privacy-first AI medical scribe that transcribes and summarizes doctor–patient conversations, generates structured EHR notes, and suggests potential diagnoses using medical-context-aware LLMs.",
    technologies: ["Generative AI", "Healthcare", "NLP"],
    liveUrl: "#",
    imageUrl: medScribeAI,
    embedInModal: true,
    websiteUrl: "https://humorous-career-125783.framer.app/",
  },
  {
    id: "5",
    title: "Flight Fare Prediction (US Domestic Routes)",
    description: "Built ML models to predict airfare trends across US domestic routes (2022–2024), analyzing seasonality, demand patterns, and price volatility.",
    technologies: ["Machine Learning", "Time Series", "Forecasting"],
    liveUrl: "#",
    imageUrl: flightFarePrediction,
    embedInModal: true,
    websiteUrl: "https://expanded-click-219757.framer.app/",
  },
];

export const skills: Skill[] = [
  { name: "JavaScript", level: "Expert" },
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "Python", level: "Intermediate" },
  { name: "HTML/CSS", level: "Expert" },
];

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Senior Product Manager",
    company: "Supplier & Buying Platforms",
    duration: "2023 – 2025",
    location: "Full Time",
    description: [
      "Leading product strategy and execution for supplier and buying platforms, driving platform growth and user engagement.",
    ],
    technologies: ["Product Management", "Strategy", "Platform Development"],
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Buyer Experience",
    duration: "2022 – 2023",
    location: "Full Time",
    description: [
      "Managed buyer experience initiatives, focusing on user journey optimization and feature development.",
    ],
    technologies: ["Product Management", "UX", "User Research"],
  },
  {
    id: "3",
    title: "Product Manager",
    company: "PLM & ERP Workflows",
    duration: "2021 – 2022",
    location: "Full Time",
    description: [
      "Led product development for PLM and ERP workflow integrations, improving operational efficiency.",
    ],
    technologies: ["Product Management", "PLM", "ERP", "Workflow Design"],
  },
  {
    id: "4",
    title: "UX Designer",
    company: "Internal Tools",
    duration: "2018 – 2020",
    location: "Full Time",
    description: [
      "Designed and improved internal tools, focusing on usability and efficiency for internal stakeholders.",
    ],
    technologies: ["UX Design", "Internal Tools", "User Research", "Prototyping"],
  },
];

export const education: Education[] = [
  {
    degree: "Master of Science in Information Systems",
    institution: "University of Washington, Seattle, WA",
    duration: "2025 - 2026",
    description: "Coursework: Machine Learning for IS; Probabilistic Modeling; Optimization for ML; NLP; Information Retrieval; Data Management & SQL; Distributed Data Systems; Experimentation & Causal Inference; Responsible & Human‑Centered AI; Programming for Data Science (Python)",
  },
  {
    degree: "Data Structures & Java Programming",
    institution: "University of Phoenix",
    duration: "Dec 2024",
    description: "Credit course in data structures and Java programming",
  },
  {
    degree: "Bachelors in Design & Technology",
    institution: "National Institute of Fashion Technology, Bengaluru, India",
    duration: "2014 - 2018",
    description: "Focused on design and technology integration",
  },
];

export const awards: Award[] = [
  {
    id: "1",
    title: "HuskyHack Finalist - LedgerLens",
    category: "Fintech · Product Engineering",
    icon: "clock",
  },
  {
    id: "2",
    title: "Ranked 1st in Graduation Collection",
    category: "NIFT Bengaluru · Systems Thinking · Execution",
    icon: "eye",
  },
  {
    id: "3",
    title: "Top 10 Finalist - Raymond Design Challenge",
    category: "Product Development · Optimization",
    icon: "book",
  },
];

export const memberships: Membership[] = [
  {
    id: "1",
    company: "Circle, Advisory Board Member",
    role: "University of Washington",
    duration: "Jun 2025 - Present",
    logoUrl: "https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/166/2024/06/06160811/circle-logos-ai-purple-2.0-2048x2048.png",
  },
  {
    id: "2",
    company: "Campus Sustainability Fund",
    role: "University of Washington",
    duration: "Oct 2025 – Present",
    logoUrl: "https://csf.uw.edu/files/media/images/csf-logo-insta.png",
  },
  {
    id: "3",
    company: "eScience Institute",
    role: "University of Washington",
    duration: "Volunteer",
    logoUrl: "data:image/jpeg;base64,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"
    },
  {
    id: "4",
    company: "Data Science Student Society",
    role: "University of Washington",
    duration: "Active Member",
    logoUrl: "https://se-images.campuslabs.com/clink/images/2516dcee-e45d-4520-a35b-143845e216f674d26755-f942-4cda-a87f-1d41619fd1ba.png?preset=med-sq",
  },
  {
    id: "5",
    company: "NIFT Student Council",
    role: "Two-term member",
    duration: "Sep 2015 - 16",
    logoUrl: "https://images.seeklogo.com/logo-png/9/1/nift-logo-png_seeklogo-99415.png",
  },
  {
    id: "6",
    company: "NCC (India) Cadet",
    role: "Leadership and service training",
    duration: "2008 - 2010",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_National_Cadet_Corps_%28India%29.png/500px-Emblem_of_National_Cadet_Corps_%28India%29.png",
  },
];

export const techStack: TechStackItem[] = [
  // Programming
  {
    id: "1",
    name: "Python",
    description: "Programming Language",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Programming",
  },
  {
    id: "2",
    name: "C++",
    description: "Programming Language",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    category: "Programming",
  },
  {
    id: "3",
    name: "Java",
    description: "Programming Language",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    category: "Programming",
  },
  {
    id: "4",
    name: "SQL",
    description: "Database Query Language",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    category: "Programming",
  },
  // Machine Learning & AI
  {
    id: "5",
    name: "PyTorch",
    description: "Deep Learning Framework",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    category: "Machine Learning & AI",
  },
  {
    id: "6",
    name: "TensorFlow",
    description: "Machine Learning Framework",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    category: "Machine Learning & AI",
  },
  {
    id: "7",
    name: "scikit-learn",
    description: "Machine Learning Library",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    category: "Machine Learning & AI",
  },
  {
    id: "8",
    name: "FAISS",
    description: "Similarity Search Library",
    logoUrl: "https://www.designveloper.com/wp-content/uploads/2025/09/what-is-faiss-1-1024x614.webp",
    category: "Machine Learning & AI",
  },
  {
    id: "9",
    name: "BM25",
    description: "Retrieval Algorithm",
    logoUrl: "https://cdn.simpleicons.org/google/4285F4",
    category: "Machine Learning & AI",
  },
  {
    id: "10",
    name: "DPR",
    description: "Dense Passage Retrieval",
    logoUrl: "https://avatars.githubusercontent.com/u/16943930?s=200&v=4",
    category: "Machine Learning & AI",
  },
  // Data & Systems
  {
    id: "11",
    name: "pandas",
    description: "Data Analysis Library",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    category: "Data & Systems",
  },
  {
    id: "12",
    name: "Apache Arrow",
    description: "In-Memory Columnar Format",
    logoUrl: "https://cdn.simpleicons.org/apache/D22128",
    category: "Data & Systems",
  },
  {
    id: "13",
    name: "MySQL",
    description: "Relational Database",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    category: "Data & Systems",
  },
  {
    id: "14",
    name: "Docker",
    description: "Containerization Platform",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "Data & Systems",
  },
  // Design & Frontend
  {
    id: "15",
    name: "Figma",
    description: "Design Tool",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    category: "Design & Frontend",
  },
  {
    id: "16",
    name: "Adobe Creative Suite",
    description: "Design Tools",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/1200px-Adobe_Creative_Cloud_rainbow_icon.svg.png",
    category: "Design & Frontend",
  },
  {
    id: "17",
    name: "HTML",
    description: "Markup Language",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "Design & Frontend",
  },
  {
    id: "18",
    name: "CSS",
    description: "Styling Language",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "Design & Frontend",
  },
  {
    id: "19",
    name: "React",
    description: "Frontend Framework",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Design & Frontend",
  },
];

export const researchProjects: ResearchProject[] = [
  {
    id: "1",
    title: "GNN for Multi-Echelon Demand Forecasting",
    description: "​​Built a message-passing GNN with a Bayesian output layer to produce risk-aware demand forecasts with calibrated uncertainty; outperformed LSTM baselines on error and coverage under distribution shift.",
    category: "Graph Neural Networks · Bayesian ML · Forecasting",
    year: "2025",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1640246944368-9738b2d1150a?w=800&h=600&fit=crop&q=80",
    researchPaperUrl: "https://docs.google.com/document/d/1CMw4o3IfY1jnMLFF6I-IsFf6pzfBWY4w/preview",
  },
  {
    id: "2",
    title: "Evidence-First RAG with Conflict Auditing",
    description:"Designed a detect-then-decode RAG pipeline with BM25 + dense retrieval, cross-encoder reranking, NLI-based contradiction checks, and citation-grounded outputs with selective abstention under weak evidence.",
    category: "LLMs · Retrieval · NLP · UW",
    year: "2025",
    featured: false,
    imageUrl: "https://plus.unsplash.com/premium_photo-1681412205724-067303630816?w=800&h=600&fit=crop&q=80",
    researchPaperUrl: "https://docs.google.com/document/d/1fPwshb6uo6Q3I-0y1NISRvDQ4TCFq_7V/preview",
  },
  {
    id: "3",
    title: "Calibration & Deferral for Long-Context QA",
    description:"Implemented temperature scaling, ensembles, and conformal prediction to guarantee risk-bounded answers or defer; analyzed calibration drift with long prompts and noisy retrieval.",
    category: "Uncertainty Estimation · LLM Evaluation · UW",
    year: "2025",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
    researchPaperUrl: "https://docs.google.com/document/d/1IVl2YTUxBwcyG7KN14OP9MSzfwlx1YKc/preview",
  },
  {
    id: "4",
    title: "Explainable Supplier Risk Modeling for SME Inclusion",
    description:"Built SHAP-based explanation pipelines on supplier risk models to generate human-readable rationales and enable fairness audits supporting SME inclusion.",
    category: "Explainable AI · Fairness · Risk Modeling · UW",
    year: "2025",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    researchPaperUrl: "https://docs.google.com/document/d/1OQigD9OdH4lHfb2qCGBvh_Vr0Oo8_dGt/preview",
  },
  {
    id: "5",
    title: "LedgerLens — Fintech Policy & Benefits Copilot",
    description:"Built a fintech Q&A copilot using evidence-first retrieval, rule-based reasoning, provenance trails, and conformal prediction to bound error and abstain under ambiguity (Sound Credit Union).",
    category: "RAG · Fintech · Risk-Aware AI",
    year: "2025",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop&q=80",
    researchPaperUrl: "https://docs.google.com/document/d/11X-a_NqiTUeWQA_ye-V7X9yd17liTe7k/preview",
  },
  {
    id: "6",
    title: "MedScribe AI",
    description:"Built a privacy-first AI medical scribe that transcribes and summarizes doctor–patient conversations, generates structured EHR notes, and suggests potential diagnoses using medical-context-aware LLMs. Designed for HIPAA compliance and EHR integration (Epic/Cerner).",
    category: "Generative AI · Healthcare · NLP",
    year: "2025",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80",
    websiteUrl: "https://final-safe-45824919.figma.site/",
    embedInModal: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Applied ML & NLP",
    skills: [
      "RAG Pipelines",
      "Prompt Engineering",
      "LLMs",
      "Model Calibration",
      "Uncertainty Quantification",
      "Graph Neural Networks",
      "Error Analysis"
    ],
  },
  {
    title: "MLOps & Production",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Docker",
      "API Development",
      "Batch Pipelines",
      "FAISS",
      "Experiment Tracking"
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      "Data Warehousing",
      "ETL Pipelines",
      "SQL",
      "pandas",
      "NumPy",
      "Feature Engineering",
      "Data Validation"
    ],
  },
  {
    title: "Product Leadership",
    skills: [
      "Product Roadmapping",
      "Stakeholder Management",
      "PRDs",
      "Agile",
      "Scrum",
      "UX Research",
      "Figma"
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "I Think, Build, and Write",
    date: "Dec 28, 2025",
    author: "Surbhi Meena",
    description: "I write about building systems that scale, the trade-offs behind technical decisions, and how teams collaborate effectively to ship reliable software. The focus is on clarity, maintainability, and outcomes.",
    category: "",
    featured: true,
    imageUrl: howDesignersDevelopersCollaborate,
  },
  {
    id: "2",
    title: "Predicting U.S. Airline Delays: What Airlines Can Actually Do",
    date: "Jan 15, 2026",
    author: "Surbhi Meena",
    description: "Flight delays are one of those problems that feel personal when you're traveling and deeply expensive when you're operating. They disrupt crews, gates, aircraft rotations, and customer trust — and they create cascading effects where one late departure becomes several late arrivals.",
    category: "Data Science",
    imageUrl: whyFasterIsntAlwaysBetter,
    url: "https://medium.com/@surbhimeena002/predicting-u-s-769f77e07d32",
  },
  {
    id: "3",
    title: "Turning WellBQ into Weekly, Actionable Signals",
    date: "Jan 10, 2026",
    author: "Surbhi Meena",
    description: "A Privacy‑First Wellness Scorecard. Flexible work expands autonomy but without measurement, it can quietly amplify strain. This project operationalizes well-being into one score, five domain drilldowns, and a dashboard leaders can actually use.",
    category: "Product Management",
    imageUrl: designingForHumanConnection,
    url: "https://medium.com/@surbhimeena002/microsoft-wellbq-employee-wellness-score-hybrid-work-scorecard-ec6ad5e1d1a8",
  },
  {
    id: "4",
    title: "A Privacy-First Medical Scribe That Restores Time to Patient Care",
    date: "Dec 20, 2025",
    author: "Surbhi Meena",
    description: "The signal is loud: clinicians spend a huge amount of time inside EHR interfaces. In our framing, the real issue isn't that doctors can't document, it's that documentation steals time from care and accelerates burnout. MedScribe is transforming clinical workflows through intelligent, AI documentation.",
    category: "Healthcare AI",
    imageUrl: beyondMinimalismWebDesign,
    url: "https://medium.com/@surbhimeena002/a-privacy-first-medical-scribe-that-gives-clinicians-their-evenings-back-19e1297031d9?postPublishedType=initial",
  },
  {
    id: "5",
    title: "Decoding Airbnb Market Dynamics in Snowflake Data Warehouse",
    date: "Dec 10, 2025",
    author: "Surbhi Meena",
    description: "If you've ever hosted or even just browsed listings, you've probably felt the same uncertainty: Should I raise prices in summer? Does adding amenities actually increase bookings? Are \"good neighborhoods\" just expensive or also consistently occupied?",
    category: "Data Engineering",
    imageUrl: whenToRebrandSigns,
    url: "https://medium.com/@surbhimeena002/from-raw-airbnb-csvs-to-a-snowflake-data-warehouse-pricing-occupancy-and-host-performance-in-9a6dbc0d4baa",
  },
  {
    id: "6",
    title: "LedgerLens",
    date: "Nov 25, 2025",
    author: "Surbhi Meena",
    description: "LedgerLens resolves the critical issue of providing answers to the employee-benefits and internal policy queries within the financial institutions where unsubstantiated answers may lead to legal, financial or compliance implications.",
    category: "Fintech",
    imageUrl: LedgerLens,
  },
  {
    id: "7",
    title: "Why XGBoost Wins at Market Level Pricing for Flight Fare Prediction",
    date: "Nov 15, 2025",
    author: "Surbhi Meena",
    description: "Demand shifts, fuel prices change, market structure evolves, and carriers apply distinct pricing strategies. For travelers, it often feels random. For analysts, the question is whether public data contains enough structure to predict flight fares reliably without proprietary airline systems or web scraping.",
    category: "Machine Learning",
    imageUrl: whyXGBoostWins,
    url: "https://medium.com/@surbhimeena002/flight-fare-prediction-using-public-u-s-data-2022-2024-why-xgboost-wins-at-market-level-pricing-d0edcc874e25",
  },
];

export const blogCategories = ["All", "Data Science", "Product Management", "Healthcare AI", "Data Engineering", "Fintech", "Machine Learning"];

// ===========================================
// ABOUT PAGE CONTENT
// ===========================================
export const aboutContent = {
  fallbackImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=face",
  fallbackSummary: "Over a decade of experience building thoughtful digital experiences that scale.",
  fallbackLocation: "Remote",
  contactHeading: ["Let's get to know", "each other"],
  copyFeedback: "Email copied!",
  sectionTitles: {
    awards: "Awards",
    membership: "Membership",
    techStack: "Tech Stack",
  },
  sectionDescriptions: {
    awards: "Earned recognition for outstanding performance and quality of deliverables.",
    membership: "Professional associations and organizations where I contribute to the community and stay connected with industry leaders.",
    techStack: "Tools and technologies I use daily to bring designs to life. From design software to development tools, these are the essentials of my workflow.",
  },
  subscribeButton: "Subscribe",
  membershipLogos: {
    pixelwave: 'PW',
    brightstudio: 'B',
    codecraft: 'C',
    solitude: 'S',
    novacreative: 'NC.',
  },
  techStackCategories: ['Programming', 'Machine Learning & AI', 'Data & Systems', 'Design & Frontend'],
  getAwardIcon: (iconType: string): React.ReactElement => {
    switch (iconType) {
      case 'clock':
        return React.createElement(MdAccessTime, { size: 24, color: "currentColor" });
      case 'eye':
        return React.createElement(MdVisibility, { size: 24, color: "currentColor" });
      default:
        return React.createElement(MdMenuBook, { size: 24, color: "currentColor" });
    }
  },
};

// ===========================================
// PROJECTS PAGE CONTENT
// ===========================================
export const projectsContent = {
  title: "Projects",
  subtitle: "Engineering user-centric digital experiences that delight and perform.",
  readMore: "Read more",
  newsletter: {
    label: "Newsletter",
    heading: ["Get the latest news", "into your inbox"],
    buttonText: "Coming Soon",
  },
};

// ===========================================
// BLOG PAGE CONTENT
// ===========================================
export const blogContent = {
  title: "MY ARTICLES & INSIGHTS",
  subtitle: "A collection of articles on problem solving, system design, technical decision-making, and practical lessons learned while building real products and collaboration informed by real-world product work.",
  byText: "By",
  readArticle: "Read article",
  searchPlaceholder: (count: number) => `Search ${count} articles`,
};

// ===========================================
// RESEARCH PAGE CONTENT
// ===========================================
export const researchContent = {
  title: "Research",
  subtitle: "Advancing AI and ML systems through innovative research.",
  viewMore: "View More",
  skills: {
    title: "Skills",
    description: "Specializing in machine learning, data science, and AI systems. From graph neural networks to RAG pipelines, I focus on building robust, explainable, and production-ready solutions.",
  },
  cta: {
    title: ["Looking forward to", "working together"],
    buttonText: "Get in touch",
  },
};

// ===========================================
// LIFESTYLE PAGE CONTENT
// ===========================================
export const lifestyleContent = {
  philosophy: {
    label: "✦ WORK PHILOSOPHY",
    words: ["Simplicity.", "Functionality.", "Balance."],
    description: "I believe great design is invisible—it works so seamlessly that users don't notice it. My approach combines simplicity with powerful functionality, always maintaining balance between aesthetics and usability. Every pixel serves a purpose, every interaction tells a story.",
    imageUrl: designPhilosophyImage,
  },
  beyondScreen: {
    title: "Beyond Screen",
    description: "Movement fuels my work. Winter sports, tennis, and hiking are my favorite ways to clear my head and find fresh perspective.",
    items: {
      reading: "I love exploring new places on foot.",
      location: "Currently Based in Seattle, WA",
      football: "Love playing Tennis on weekends",
    },
    viewAll: "View all",
  },
  infoCards: {
    feed: {
      title: "Feed",
      description: "Dive into my quick thoughts",
      buttonText: "View Feed",
    },
    services: {
      title: "Design Services",
      description: "Explore my range of design services.",
      buttonText: "View Services",
    },
  },
  cta: {
    title: "Contact for more details",
    buttonText: "Get in touch",
  },
};

// ===========================================
// HEADER CONTENT
// ===========================================
export const headerContent = {
  navItems: [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
    { id: 'blog', label: 'Blog' },
    { id: 'lifestyle', label: 'Lifestyle' },
  ],
  contactButton: "Contact",
};
