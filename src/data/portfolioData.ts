import { Project, WorkExperience, EducationItem, CertificateItem, OrganizationItem, TechSkillCategory } from '../types';

export const HERO_DATA = {
  name: "Nadira",
  middleName: "Khumaira",
  lastName: "Putri",
  badge: "AVAILABLE FOR NEW PROJECTS",
  tagline: "6th-semester Computer Science student specializing in Data Science. Passionate about transforming data into meaningful insights and building beautiful digital experiences.",
  avatarUrl: "https://lh3.googleusercontent.com/aida/AP1WRLt9rsGecruFUUKVH_UYbkc_DWIqqrdrHcVN5zajPe9jUmTAzFm6sw3EU8rHNo_LpxWjKHUXbZt-7_3U9-Mm0KhlYWClAKDd7oOoF7-YokQloi1-BTSXw-Os5WXom-0sJchackLO7LHytpcYVi4G6ZcWMeXKDRe3pEU24o1NwerCs2HyDUT-DjGFmUZxfv9a-6neGs6z2HcZnvk_cEW8bknAeWjZHn6woC-Tz4zhXBEYltm9zxR11Ao7Sk3jC_6g2_t6MkDW5mUm0uw",
  heroImageUrl: "images/nadira-no-logo-pu-no-bg.png",
  aboutImageUrl: "images/foto cantik nadira.jpeg",
  cvPdfUrl: "pdf/NADIRA KHUMAIRA PUTRI_CV.pdf"
};

export const ABOUT_DATA = {
  subtitle: "THE STORY SO FAR",
  title: "Hello! I'm Nadira Khumaira Putri",
  bio: "A passionate Data Science enthusiast and Web Developer. I love exploring the world of data, uncovering insights, analyze the system & business process, and creating interactive web applications. My journey in tech has been fueled by curiosity and a desire to solve real-world problems through technology. When I'm not coding or analyzing data, you can find me exercising, reading, or enjoying nature. Let's connect and create something amazing together!",
  yearsExperience: "2+",
  yearsLabel: "YEARS OF TECH & SYSTEMS",
  pillars: [
    { label: "Data Analysis & Viz", icon: "analytics", color: "text-[#a73453]" },
    { label: "AI & Machine Learning", icon: "psychology", color: "text-[#006c4c]" },
    { label: "Web Development", icon: "terminal", color: "text-[#6c49b3]" },
    { label: "Business & System Analyst", icon: "query_stats", color: "text-[#003724]" },
    { label: "UI/UX Design", icon: "brush", color: "text-[#ef6b8a]" }
  ]
};

export const SKILL_CATEGORIES: TechSkillCategory[] = [
  {
    title: "Data & Business Analysis",
    icon: "insights",
    accentColor: "#a73453",
    skills: ["Python", "SQL", "Tableau", "Power BI", "Looker Studio", "BigQuery", "Excel", "Jupyter Notebook", "Pandas", "Scikit-Learn", "R", "Orange", "Rational Rose"]
  },
  {
    title: "Web Development",
    icon: "terminal",
    accentColor: "#6c49b3",
    skills: ["HTML5/CSS3", "CSS", "JavaScript", "React", "Next.js", "Node.js", "TypeScript", "REST APIs", "Streamlit", "PHP", "Laravel", "Django"]
  },
  {
    title: "Design Tools",
    icon: "palette",
    accentColor: "#006c4c",
    skills: ["Figma", "Canva", "Draw.io", "Prototyping", "Design Systems", "User Research", "Wireframing"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "Data Analyst Portfolio at KarirNex Bootcamp",
    title: "Data Analyst Portfolio at KarirNex Bootcamp",
    subtitle: "Business Insights & Dashboard Visualization",
    category: "Data Analysis",
    tags: ["Python", "Scikit-Learn", "Looker Studio", "Excel", "Google BigQuery"],
    description: "Built an end-to-end data processing, from cleaning and aggregation to visualization and strategic recommendation.",
    fullStory: "During the Data Analyst with AI bootcamp, I analyzed a furniture retail dataset (10.000 rows data) to transform raw data into actionable business insights. The project focused on end-to-end data processing, from cleaning and aggregation to visualization and strategic recommendation.",
    image: "projects/dashboard-karirnex.png",
    metrics: [
      { label: "Total Sales", value: "$5.27B"},
      { label: "Total Orders", value: "10.040"},
      { label: "Percentage Rate", value: "89.72%"}
    ],
    keyInsights: [
      "Performance Tracking: Achieved an 89.72% order completion rate with a total revenue of $5.27 billion.",
      "Market Insight: Identified the Cooking Tools category as the top revenue driver (79.5% of total income) and pinpointed Jakarta as the highest-performing region.",
      "Strategy: Developed actionable recommendations for inventory optimization and Q4 marketing strategies to mitigate end-of-year sales slumps."
    ],
    toolsUsed: ["Python", "Scikit-Learn", "Looker Studio", "Excel", "Google BigQuery"],
    featured: true,
    liveUrl: "https://datastudio.google.com/reporting/2f5b0158-c6e7-4ad3-a938-ff562dab269d",
    githubUrl: "https://github.com/nadiraaa123/Data-Analyst-Portfolio-at-KarirNex-Bootcamp",
  },
 {
    id: "Dagster Multi-Container Data Pipeline Workshop",
    title: "Dagster Multi-Container Data Pipeline Workshop",
    subtitle: "Docker-Based Data Orchestration & Cross-Pipeline Analytics",
    category: "Data Engineering",
    tags: ["Docker", "Dagster", "Python", "PostgreSQL", "Pandas"],
    description: "Built and extended a multi-container Dagster orchestration system, culminating in a custom cross-pipeline reporting pipeline built from scratch.",
    fullStory: "In this Big Data course workshop, I worked with a multi-container Dagster and Docker architecture where each data pipeline (product catalog, currency exchange rates, ML predictions) runs as an independent container, all converging into a shared PostgreSQL warehouse. Beyond completing the core exercises (building derived assets, cross-container data reads, and data quality checks), I designed and built a custom capstone pipeline, pipeline_reporting, from scratch: a fourth independent container that combines ML-predicted high-value orders with EUR-converted order totals into a single analytics report, complete with its own Dagster asset check for data quality validation.",
    image: "projects/docker.png",
    metrics: [
      { label: "Pipeline Containers", value: "4" },
      { label: "Data Quality Checks", value: "2 Passed" },
      { label: "High-Value Orders Flagged", value: "19" }
    ],
    keyInsights: [
      "Architecture: Designed a new independent pipeline container (pipeline_reporting) that reads directly from a shared warehouse, following production-grade multi-container orchestration patterns.",
      "Cross-Pipeline Analytics: Combined ML model predictions with real-time currency conversion logic to surface high-value orders without creating direct dependencies between containers.",
      "Data Quality: Implemented a custom Dagster asset check to validate report integrity, ensuring zero invalid (negative or zero) currency-converted values before data reaches downstream consumers."
    ],
    toolsUsed: ["Docker", "Dagster", "Python", "Pandas", "PostgreSQL", "SQLAlchemy", "Pytest"],
    featured: true,
    liveUrl: "pdf/BIG DATA REPORT - NADIRA KHUMAIRA PUTRI - WORKSHOP FROM MATTEL.pdf",
    githubUrl: "https://github.com/nadiraaa123/dagster-workshop-multi",
  },
  {
    id: "Machine Learning Project: Breast Cancer Diagnostic Analysis",
    title: "Machine Learning Project: Breast Cancer Diagnostic Analysis",
    subtitle: "Breast Cancer Classifications",
    category: "Data Science",
    tags: ["Python", "Pandas", "Numpy", "Matplotlib", "Scikit-learn", "Seaborn"],
    description: "This project focuses on building a machine learning model to classify breast tumors as benign or malignant using the Wisconsin Diagnostic Breast Cancer dataset.",
    fullStory: "Breast cancer remains one of the most significant health challenges worldwide, making early and accurate diagnosis essential for improving patient outcomes. This project focuses on building a machine learning model to classify breast tumors as benign or malignant using the Wisconsin Diagnostic Breast Cancer dataset. The goal is to explore how data science can support medical decision-making through predictive and data-driven approaches.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
    metrics: [
      { label: "Logistic Regression", value: "0.9649 Accuracy"},
      { label: "Decision Tree", value: "0.9211 Accuracy"},
      { label: "Random Forest", value: "	0.9737 Accuracy"}
    ],
    keyInsights: [
      "Random Forest achieved the best overall performance with perfect precision — no benign case was ever misclassified as malignant.",
      "Logistic Regression had the highest ROC AUC and remains a strong, more interpretable alternative.",
      "Decision Tree lagged behind, particularly on recall, meaning it missed more malignant cases than the other two.",
      "Top predictive features: worst_area, worst_concave_points, worst_radius, mean_concave_points, worst_perimeter."
    ],
    toolsUsed: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
    featured: true,
    githubUrl: "https://github.com/nadiraaa123/Machine-Learning-Project-Breast-Cancer-Diagnostic-Analysis-",
  },
  {
    id: "E-Commerce Customer Behavior Analysis",
    title: "E-Commerce Customer Behavior Analysis",
    subtitle: "Analyzing Purchase Patterns & Demographic Trends in E-Commerce",
    category: "Data Analysis",
    tags: ["Python", "Power BI", "PostgreSQL"],
    description: "The business faces a challenge in understanding customer shopping patterns from 3,900 transaction records. The goal is to analyze purchase patterns, identify key customer segments, and provide actionable insights for marketing and product strategy.",
    fullStory: "The business faces a challenge in understanding customer shopping patterns from 3,900 transaction records. Without deep insights into top-selling categories, subscription behavior, and demographic preferences, it is difficult to optimize business growth. Therefore, this project analyzes e-commerce shopping data to provide actionable, data-driven insights that can support and drive more effective marketing and operational strategies.",
    image: "projects/customer-behavior.png",
    metrics: [
      { label: "Total Customer", value: "3.9K"},
      { label: "Average Purchase Amount", value: "$59.76"},
      { label: "Average Review Rating", value: "3.75"}
    ],
    keyInsights: [
      "Seasonal & Regional Peaks: Spring leads overall orders (999), while Montana drives the highest revenue ($5,780), closely followed by California ($5,605) and Fall orders (975).",
      "Customer Behavior & Demographics: Non-subscribers represent a strong conversion opportunity with an identical $59.81 average spend (despite only 27% current subscription), alongside a distinct middle-aged preference for PayPal."
    ],
    toolsUsed: ["Python", "Power BI", "PostgreSQL"],
    featured: true,
    liveUrl: "https://drive.google.com/file/d/1gizB7hVuyTundmld0FOAJEc9d4NJPKSb/view?usp=sharing",
    githubUrl: "https://github.com/nadiraaa123/E-Commerce-Customer-Behavior-Analysis"
  },
  {
    id: "DVD Rental Analytics Dashboard",
    title: "DVD Rental Analytics Dashboard",
    subtitle: "Analyze Movie Rental",
    category: "Data Analysis",
    tags: ["Python", "Numpy", "Django", "PostgreSQL", "Llama 3"],
    description: "The project combines data analysis, web development, and artificial intelligence in one interactive platform.",
    fullStory: "This project is a collaborative portfolio project developed by our group, focusing on building a full-stack web dashboard to analyze a DVD rental database. As Information Systems students, we were interested in exploring how data can be transformed into meaningful business insights. The project combines data analysis, web development, and artificial intelligence in one interactive platform.",
    image: "projects/dvd.png",
    keyInsights: [
      "Catalog Optimization & Profitability: The platform identifies key revenue-driving genres (such as Sports, Sci-Fi, and Animation) while pinpointing critical inefficiencies like 'Dead Stock' (films with zero rentals) to optimize inventory health.",
      "Interactive AI-Driven Intelligence: The integration of an AI Analyst (powered by Llama 3) enables users to query live data, dynamically update charts using natural language, and track executive KPIs and revenue forecasts across 16K+ total rentals."
    ],
    toolsUsed: ["Python", "Numpy", "Django", "PostgreSQL", "Llama 3"],
    featured: true,
    liveUrl: "https://youtu.be/MpyMVi__OPQ?si=JF2KU5fK2zqy6ada"
  },
  {
    id: "Data Analytics Project Codveda Technologies",
    title: "Data Analytics Project Codveda Technologies",
    subtitle: "Project Intern @Codveda Technologies",
    category: "Data Analysis",
    tags: ["Python", "Scikit-Learn", "Numpy", "Pandas", "Matplotlib", "Seaborn", "NLP Tools"],
    description: "This project is part of my hands-on experience at Codveda Technologies, where I worked on several data analytics and machine learning tasks covering the full workflow from data cleaning to model building and insight generation.",
    fullStory: "This project is part of my hands-on experience at Codveda Technologies, where I worked on several data analytics and machine learning tasks covering the full workflow from data cleaning to model building and insight generation. The experience helped me strengthen my ability to turn raw data into meaningful results that support data-driven decision-making.",
    image: "projects/codveda.png",
    keyInsights: [
      "End-to-End Data Workflow Mastery: The portfolio successfully covers a complete data analytics pipeline, beginning with data cleaning and exploratory data analysis (EDA) before advancing into predictive modeling and natural language processing (NLP).",
      "Robust Machine Learning Performance: The supervised learning models yield strong predictive outcomes, highlighted by a Random Forest churn classification model achieving an AUC of 0.90 alongside a high accuracy rate.",
      "Actionable Business Intelligence: Through structured analysis—such as evaluating house price variance via linear regression and analyzing customer sentiment distributions. The project transforms raw datasets into clear, data-driven insights."
    ],
    toolsUsed: ["Python", "Scikit-Learn", "Numpy", "Pandas", "Matplotlib", "Seaborn", "NLP Tools"],
    featured: true,
    liveUrl: "https://github.com/nadiraaa123/CodvedaTech"
  },
  {
    id: "Apotek K-34 Management Case Study",
    title: "Apotek K-34 Management Case Study",
    subtitle: "Management and Organizational Behaviour Final Exam",
    category: "Business & System Analysis",
    tags: ["Management", "Organizational Behavior"],
    description: "This document is an online movie ticket booking system case study completed as an assignment for the Information Systems Analysis and Design course at the Faculty of Computer Science, President University",
    fullStory: "This document outlines an online movie ticket booking system case study prepared as a group assignment for the Information Systems Analysis and Design course at the Faculty of Computer Science, President University, under the guidance of Prof. Dr. Ir. Wiranto Herry Utomo, M.Kom by team members Nadira Khumaira Putri, Nor Umayah, Rachma Nur, and Shonia Maudina in 2026. The documentation thoroughly details the system through comprehensive diagrams and structural designs including use case, activity, class, and sequence diagrams alongside software architecture, database design schemas, component and deployment views, and user interface mockups. ",
    image: "images/apotek.png",
    keyInsights: [
      "Strategic Management Principles: Examines core operational and managerial practices applied by Apotek K-24, including staff involvement, consumer focus, leadership, and evidence-based decision-making to boost productivity and customer satisfaction.",
      "Organizational Behavior Dynamics: Analyzes workplace culture elements within the organization, such as team commitment, inspirational leadership, diversity values, cooperation, and continuous self-development.",
      "Social Media Performance Metrics: Evaluates digital marketing effectiveness by detailing ten crucial metrics, including engagement rate, conversion rate, reach and impressions, cost per click (CPC), click-through rate (CTR), and audience growth rate."
    ],
    toolsUsed: ["Qualitative Research", "Social Media Analytics"],
    featured: false,
    liveUrl: "pdf/MOB Final Exam – Nadira Khumaira Putri.pdf"
  },
  {
    id: "Janji Jiwa Business Process Analysis",
    title: "Janji Jiwa Business Process Analysis",
    subtitle: "Business Process Analysis Final Exam",
    category: "Business & System Analysis",
    tags: ["Business Process", "Workflow Optimization"],
    description: "This document is a comprehensive business process analysis and improvement case study for Janji Jiwa, completed as a final exam project for the Business Process Analysis course at President University",
    fullStory: "This document outlines a business process analysis of Janji Jiwa prepared as a final exam project for the Business Process Analysis course at the Faculty of Computer Science, President University, under the guidance of Ir. Adi Saptari, M.Sc., Ph.D. by team members Aisyah Putri, Nadira Khumaira Putri, and Pinka Ratna. The study thoroughly evaluates core operational functions specifically in HR, Production, and Purchasing to identifying critical bottlenecks and proposing technology-driven solutions such as Applicant Tracking Systems (ATS), Learning Management Systems (LMS), and automated workflow integrations",
    image: "images/janjiw.png",
    keyInsights: [
      "HR Process Transformation: Identifies critical inefficiencies in manual recruitment, scheduling, and payroll, proposing automated solutions like ATS for candidate screening, digital shift scheduling, and an integrated HR chatbot.",
      "Production and Inventory Optimization: Evaluates taste consistency, waste management, and peak-hour handling at Janji Jiwa outlets, recommending structured weekly waste audits and demand-based shift scheduling.",
      "Purchasing and Fulfillment Automation: Analyzes procurement bottlenecks such as manual Purchase Order (PO) approvals and inventory checks, introducing automated approval workflows, real-time shipment tracking, and vendor performance evaluation systems."
    ],
    toolsUsed: ["BPMN", "Process Mapping", "Workflow Analysis"],
    featured: false,
    liveUrl: "pdf/BUSINESS PROCESS ANALYSIS FINAL EXAM.pdf"
  },
  {
    id: "Online Booking Ticket System",
    title: "Online Booking Ticket System",
    subtitle: "Information System Analysis & Design Course",
    category: "Business & System Analysis",
    tags: ["Rational Rose"],
    description: "This document is an online movie ticket booking system case study completed as an assignment for the Information Systems Analysis and Design course at the Faculty of Computer Science, President University",
    fullStory: "This document outlines an online movie ticket booking system case study prepared as a group assignment for the Information Systems Analysis and Design course at the Faculty of Computer Science, President University, under the guidance of Prof. Dr. Ir. Wiranto Herry Utomo, M.Kom by team members Nadira Khumaira Putri, Nor Umayah, Rachma Nur, and Shonia Maudina in 2026. The documentation thoroughly details the system through comprehensive diagrams and structural designs including use case, activity, class, and sequence diagrams alongside software architecture, database design schemas, component and deployment views, and user interface mockups. ",
    image: "images/isad.png",
    keyInsights: [
      "Comprehensive System Modeling: The project applies rigorous object-oriented analysis and design methodologies, utilizing UML diagrams (Use Case, Activity, Class, and Sequence) to clearly map out user-system interactions and backend logic.",
      "Robust 3-Tier Architecture: The software architecture cleanly separates concerns across a client-side web browser UI, an Apache application server, and a MySQL database server linked with structured database schemas and component views.",
      "End-to-End Workflow Coverage: The design successfully models the entire ticketing lifecycle from customer registration, movie selection, schedule scheduling, and seat choosing to payment processing and ticket issuance."
    ],
    toolsUsed: ["Rational Rose"],
    featured: false,
    liveUrl: "pdf/Online Booking Ticket System_Information System Analysis & Design.pdf"
  },
  {
    id: "KATA WEBSITE",
    title: "KATA WEBSITE",
    subtitle: "Group Project for Multimedia Course",
    category: "Web Dev",
    tags: ["HTML", "CSS", "Javascript", "Generative AI"],
    description: "Website KATA is an interactive educational platform designed to revitalize and preserve Indonesia’s diverse regional languages.",
    fullStory: "Website KATA is an interactive educational platform designed to revitalize and preserve Indonesia’s diverse regional languages. Developed by Diva, Nadira, and Rachma, this project addresses the declining accessibility and interest in local languages among younger generations by turning language learning into a more immersive and modern digital experience. Through interactive storytelling, cultural map visualizations, and gamified content, the platform connects cultural heritage with contemporary education.",
    image: "images/KATA.png",
    keyInsights: [
      "Created a digital platform that makes learning regional languages more interesting and interactive.",
      "Helped increase awareness of the importance of preserving local languages and culture.",
      "Combined education, storytelling, and technology to provide a more meaningful learning experience."
    ],
    toolsUsed: ["HTML", "CSS", "Javascript", "Generative AI"],
    featured: false,
    liveUrl: "https://youtu.be/c9OKLmomnSo?si=CmOSFnhAaqLJLu3V"
  },
  {
    id: "ZENMON",
    title: "ZENMON",
    subtitle: "The best software technology at Exhibition Economic Survival",
    category: "Web Dev",
    tags: ["JSP", "pgAdmin", "Generative AI"],
    description: "Health-focused application designed to help detect the calorie content of food and beverages. Additionally, the app recommends healthy meal options through an AI chatbot feature that simplifies the process of making healthy food choices. ",
    fullStory: "This project began as a midterm assignment for the Economic Survival course under the name Zenmon. It is a health-focused application designed to help detect the calorie content of food and beverages. Additionally, the app recommends healthy meal options through an AI chatbot feature that simplifies the process of making healthy food choices. It won first place at the Economic Survival exhibition, earning the title of Best Software Technology.",
    image: "images/zenmon.png",
    keyInsights: [
      "Developed an AI-powered platform that simplifies healthy living.",
      "To educating a more mindful lifestyle through accessible digital tools.",
    ],
    toolsUsed: ["JSP", "pgAdmin", "Generative AI"],
    featured: false,
    liveUrl: "https://drive.google.com/file/d/1KVNi6z4Q5M9wIZZt34zljwXbP8LUIbD1/view?usp=sharing"
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: "exp-1",
    role: "Data Analyst Intern",
    company: "Codveda Technologies",
    period: "March 2026 - April 2026",
    type: "Internship",
    location: "India (Remote)",
    description: "This project is part of my hands-on experience at Codveda Technologies, where I worked on several data analytics and machine learning tasks covering the full workflow from data cleaning to model building and insight generation. The experience helped me strengthen my ability to turn raw data into meaningful results that support data-driven decision-making.",
    achievements: [
      "Enginereed the end-to-end data analytics process, including data cleaning and preprocessing.",
      "Perform exploratory data analysis to uncover patterns and insights from datasets.",
      "Build and evaluate machine learning models for regression and classification tasks.",
      "Explore NLP-based sentiment analysis to understand user behavior and opinions.",
    ],
    skills: ["Python", "Scikit-Learn", "Numpy", "Pandas", "Matplotlib", "Seaborn", "NLP Tools"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Computer Science in Information Systems with Data Science Concentration",
    institution: "President University",
    period: "2024 – 2027 (Expected)",
    location: "Indonesia",
    gpa: "3.78 / 4.00",
    honors: "Jababeka Scholarship",
    description: "Focusing on data mining, statistical modeling, database design, software engineering, and business process analysis.",
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Data Visualization",
      "Big Data Analytics / Cloud Computing",
      "Data Mining / Business Analytics",
      "Systems Analysis and Design",
      "Database Management Systems (SQL)",
      "Applied Machine Learning",
      "Business Intelligence & Data Warehousing",
      "Web Application Development",
      "Statistical Inference & Probability"
    ]
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Data Analyst with Expert Certified",
    issuer: "KarirNex by PT Ebiz Karisma Internasional",
    date: "July 2026",
    credentialId: "0637/B-17/KBT.DA.6/KRX/VII/2026",
    skills: ["Data Analysis", "Excel", "Python", "Looker Studio", "Google BigQuery"],
    badgeColor: "bg-[#a73453]/10 text-[#a73453]",
    verifyUrl: "pdf/Karirnex - Nadira Khumaira Putri - Sertifikat Data Analyst Batch 6.pdf",
    certificateImageUrl: "certificates/karirnex.png",
    summary: "Through 20 hours of training, I strengthened my technical stack to bridge business problems with data-driven solutions using Excel, SQL (Google BigQuery), Python (Google Colab), and Google Looker Studio. This hands-on program provided end-to-end expertise spanning data analytics fundamentals, cleansing, systematic workflows, and advanced data visualization with interactive dashboards through a practical mini project."
  },
  {
    id: "cert-2",
    title: "Junior Web Developer (Pengembang Web Pratama)",
    issuer: "LSP BPPTIK - Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "Dec 2025",
    credentialId: "62010 2513 4 0011536 2025",
    skills: ["HTML", "CSS", "Javascript", "PHP", "User Interface"],
    badgeColor: "bg-[#6c49b3]/10 text-[#6c49b3]",
    verifyUrl: "pdf/Sertifikat BPPTIK.pdf",
    certificateImageUrl: "certificates/bpptik.png",
    summary: "Official Certificate of Competence issued by BNSP through LSP BPPTIK in Programming and Software Development, validating competency as a Junior Web Developer covering user interface implementation, structured programming, and code best practices"
  },
  {
    id: "cert-3",
    title: "UI-UX RESEARCH AND DESIGN: FULLSTACK INTENSIVE BOOTCAMP",
    issuer: "MySkill by PT LINIMUDA INSPIRASI NEGERI",
    date: "Feb 2025",
    credentialId: "MS-26/2/2025-mbfuH1TGKBNUhMTYRsW",
    skills: ["Figma", "User Interface", "UX Writer", "Prototype"],
    badgeColor: "bg-[#006c4c]/10 text-[#006c4c]",
    verifyUrl: "pdf/MYSKILL BOOTCAMP UI UX CERTIFICATE.pdf",
    certificateImageUrl: "certificates/uiux.png",
    summary: "MySkill UI-UX Research and Design: Fullstack Intensive Bootcamp (Batch 19) from January 14 to February 20, 2025. The program covered comprehensive topics including fundamental UI-UX design, user research, wireframing, advanced Figma prototyping, UX writing, and usability testing."
  },
  {
    id: "cert-4",
    title: "Data Science Project: Machine Learning",
    issuer: "Skill Academy by Ruangguru",
    date: "July 2026",
    credentialId: "6CLGSTDOQ377FY",
    skills: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "Numpy"],
    badgeColor: "bg-[#006c4c]/10 text-[#006c4c]",
    verifyUrl: "CERTIFICATE OF COMPLETION_DS PROJECT MACHINE LEARNING - SKILL ACADEMY.pdf",
    certificateImageUrl: "certificates/CERTIFICATE OF COMPLETION_DS PROJECT MACHINE LEARNING - SKILL ACADEMY.jpg",
    summary: "This document is my Certificate of Completion for the Machine Learning course at Skill Academy by Ruangguru. This comprehensive program solidified my understanding of predictive modeling, from raw data processing to evaluating algorithm performance. A key highlight was building a diagnostic classification model, proving my capability to derive actionable insights from complex datasets."
  },
  {
    id: "cert-5",
    title: "AI Fundamentals Certification",
    issuer: "Dicoding Indonesia",
    date: "Oct 2025",
    credentialId: "N9ZO29MERPG5",
    skills: ["Artificial Intelligence", "Data Science"],
    badgeColor: "bg-[#006c4c]/10 text-[#006c4c]",
    verifyUrl: "pdf/sertifikat_course_653_BELAJAR DASAR AI.pdf",
    certificateImageUrl: "certificates/dicoding-ai.png",
    summary: "A foundational course designed for beginners to build a career foundation in Artificial Intelligence (AI) and understand its concepts and applications."
  },
  {
    id: "cert-6",
    title: "The Best Group Technology Software",
    issuer: "President University",
    date: "May 2025",
    credentialId: "-",
    skills: ["JSP", "Java", "AI Studio"],
    badgeColor: "bg-[#a73453]/10 text-[#a73453]",
    certificateImageUrl: "certificates/ZENMON WINNER.jpg",
    summary: "Award for best innovation in AI-based application development to support public health."
  }
];

export const ORGANIZATIONS_DATA: OrganizationItem[] = [
  {
    id: "org-1",
    role: "Active Community Contributor",
    organization: "Google",
    type: "Community & Tech",
    period: "Dec 2024 – Present",
    description: "Consistently engaged in advanced technical bootcamps, workshops, and collaborative innovation challenges, bridging academic learning with industry-standard practices.",
    keyContributions: [
      "Engaged in hands-on technical sessions focused on modern software development, data analytics, and cloud technologies.",
      "Collaborated with peers in coding workshops and collaborative hackathons to build practical, scalable tech solutions."
    ],
    images: [
      "images/devfest.jpeg",
      "images/devfest3.jpeg",
      "images/devfest2.jpeg"
    ]
  },
  {
    id: "org-6",
    role: "Participant / Industry Exposure Attendee",
    organization: "PUMA Information System President University",
    type: "Student Organization",
    period: "July 2026",
    description: "Selected participant in an exclusive corporate visit and industry immersion program at OPPO Indonesia (Tangerang), gaining direct exposure to large-scale enterprise technology operations and professional workflows.",
    keyContributions: [
      "Engaged in an exclusive industry immersion at OPPO Indonesia, exploring enterprise-level tech infrastructure and corporate operations.",
      "Gained cross-functional insights into corporate technology integration and professional environment standards."
    ],
    images: [
      "images/oppo2.JPG",
      "images/oppo3.jpg",
      "images/oppo4.png"
    ]
  },
  {
    id: "org-2",
    role: "Active Organization Member",
    organization: "President University Developer Club (PUDC)",
    type: "Student Organization",
    period: "Dec 2024 – 2025",
    description: "Engaged in a vibrant student developer community focused on software engineering, technology trends, and collaborative project building.",
    keyContributions: [
      "Participated actively in technical workshops, tech talks, and collaborative skill-building sessions to stay up to date with modern development practices.",
      "Collaborated with peers on community-driven tech initiatives and shared insights to foster a growth-oriented learning environment."
    ],
    images: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "org-4",
    role: "MTDD (Multimedia & Documentation Division)",
    organization: "Ecoblox Adventure President University",
    type: "Group Project",
    period: "July 2025",
    description: "Ecoblox Adventure is a social project aimed at providing education on waste management. Its activities include waste-related education through the game Roblox, as well as seminars and workshops held at MAN 9 Jakarta.",
    keyContributions: [
      "Handled multimedia and documentation tasks for the Ecoblox Adventure event, including content creation, editing, and coordination with other teams."
    ],
    images: [
      "images/ecoblox.jpeg",
      "images/ecoblox2.jpeg",
      "images/mtdd-ecoblox.jpeg"
    ]
  },
  {
    id: "org-3",
    role: "MTDD (Multimedia & Documentation Division)",
    organization: "Zahirul Maa'la President University",
    type: "Volunteer Activity",
    period: "May 2025",
    description: "Insightful Journey is a comparative study activity organized by Zahirul Maala, the Islamic organization at President University in collaboration with GAMAIS ITB. The initiative aims to enhance the quality of learning and organizational systems within these Islamic groups while strengthening bonds among the students.",
    keyContributions: [
      "Handled multimedia and documentation tasks for the Comparative Study event, including content creation, editing, and coordination with other teams."
    ],
    images: [
      "images/comstud.jpeg",
      "images/comstud2.jpeg"
    ]
  },
  {
    id: "org-5",
    role: "Volunteer at Panti Asuhan Mizan Amanah Kalisari",
    organization: "Yayasan Vidya Karya Ananda Pertama",
    type: "Volunteer Activity",
    period: "July 2025",
    description: "Brought smiles and created a joyful play space for children at Mizan Amanah Kalisari Orphanage through creative drawing, active play, and engaging trivia games. This experience focused on fostering a cheerful, welcoming environment through interactive and collaborative activities.",
    keyContributions: [
      "Brought smiles and created a joyful play space for children at Mizan Amanah Kalisari Orphanage through creative drawing, active play, and engaging trivia games."
    ],
    images: [
      "images/volunteer2.png",
      "images/volunteer1.png",
      "images/volunteer3.png"
    ]
  }
  
];
