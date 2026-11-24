/* Portfolio Data - Varun S */

// Website related settings
const settings = {
  isSplash: false, // Splash screen disabled for direct fast access
  useCustomCursor: true,
  googleTrackingID: "UA-174238252-2",
};

// Home Page / Hero
const greeting = {
  title: "Hello.",
  title2: "Varun",
  logo_name: "Varun.s()",
  nickname: "",
  full_name: "Varun S",
  subTitle: "SOC Analyst & Junior Cloud Security Engineer",
  tagline:
    "I monitor logs for threats, harden Linux and AWS infrastructure, and build secure web apps.",
  // "Open to work" status card shown on the hero illustration
  status: {
    title: "Open to work",
    roles: ["SOC Analyst", "Cloud Security", "Tech Support"],
  },
  resumeLink:
    "https://drive.google.com/file/d/1ueM_xJNMoTMnZ_drxuKmZj55jOZeyBJB/view?usp=sharing",
  mail: "mailto:varunsiva88@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/varun-8",
  linkedin: "https://www.linkedin.com/in/varrrun",
  gmail: "varunsiva88@gmail.com",
};

const skills = {
  data: [
    {
      title: "Security Operations & SIEM",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Indexing, searching, and building threat monitoring dashboards in Splunk SIEM for brute-force and anomaly detection",
        "⚡ Packet-level traffic inspection, handshake analysis, and protocol security auditing using Wireshark",
        "⚡ Network vulnerability scanning, port auditing, and service reconnaissance with Nmap, Nessus, and Burp Suite",
        "⚡ Incident triage, log review, and hands-on defense aligning with the incident response lifecycle and OWASP Top 10",
      ],
      softwareSkills: [
        {
          skillName: "Splunk",
          fontAwesomeClassname: "mdi:chevron-right-box",
          style: {
            color: "#ED2939",
          },
        },
        {
          skillName: "Wireshark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            color: "#1679A7",
          },
        },
        {
          skillName: "Kali Linux",
          fontAwesomeClassname: "simple-icons:kalilinux",
          style: {
            color: "#557C94",
          },
        },
        {
          skillName: "Burp Suite",
          fontAwesomeClassname: "simple-icons:burpsuite",
          style: {
            color: "#FF6633",
          },
        },
        {
          skillName: "Linux CLI",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: {
            color: "#4EAA25",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud, Systems & DevSecOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Cloud infrastructure deployment and security provisioning on AWS (EC2, S3, VPC, Security Groups, CloudWatch)",
        "⚡ Enforcing IAM least-privilege policies, access control boundaries, and credential hygiene",
        "⚡ Containerizing applications with Docker and establishing automated GitHub Actions CI/CD with security scanning",
        "⚡ Production Linux server hardening (Debian/Ubuntu), UFW/iptables, SSH key authentication, and SSL/TLS with Let's Encrypt",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#009639",
          },
        },
        {
          skillName: "Ubuntu",
          fontAwesomeClassname: "simple-icons:ubuntu",
          style: {
            color: "#E95420",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
    {
      title: "AI-Assisted Development & Secure Apps",
      fileName: "FullStackImg",
      skills: [
        "⚡ Rapid application development and prototyping using AI-assisted engineering workflows (Claude, Gemini, OpenAI)",
        "⚡ End-to-end security code reviews: enforcing JWT authentication, RBAC, schema validation, and bcrypt hashing",
        "⚡ Developing cross-platform solutions with React, Node.js, Express, and MongoDB",
        "⚡ Secure API integration, provider failover architecture, and strict data sanitization before and after model calls",
      ],
      softwareSkills: [
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "var(--text)",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Claude / AI",
          fontAwesomeClassname: "simple-icons:anthropic",
          style: {
            color: "#D97757",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Kumaraguru College of Technology, Coimbatore",
      subtitle: "Master of Computer Applications (MCA)",
      grade: "8.29 CGPA",
      logo_path: "kum.jpg",
      alt_name: "KCT",
      duration: "2024 - 2026",
      descriptions: [
        "⚡ Advanced coursework in Cloud Architecture, Database Management, and Enterprise Software Systems.",
        "⚡ Hands-on specialization in Network Defense, Vulnerability Assessment, and Web Application Security.",
        "⚡ Active Department Documentation Coordinator and Team Lead for the Cyberthon Hackathon.",
      ],
      website_link: "https://kct.ac.in/",
    },
    {
      title: "Kongu Engineering College, Erode",
      subtitle: "B.Sc. Information Systems",
      grade: "8.21 CGPA",
      logo_path: "sal.jpg",
      alt_name: "KEC",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ Core foundations in Computer Networks, Data Structures, Operating Systems, TCP/IP, and DBMS.",
        "⚡ Appointed System Administrator for the Cultural & Music Club: managed AV hardware, network routing, and live-streaming setups.",
        "⚡ Built foundational projects in network security, web platforms, and predictive risk analysis.",
      ],
      website_link: "https://kongu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cybersecurity Professional Certificate",
      subtitle: "Coursera · Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/UBTSWC93SQ7H",
      alt_name: "Google",
      color_code: "#ffc475",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      subtitle: "Amazon Web Services (Course Completed)",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1I6zHFJTaHjgUmZmoQC9CNRQmOHsYbUJC/view",
      alt_name: "AWS",
      color_code: "#ff9900",
    },
    {
      title: "SQL Injection Attack",
      subtitle: "EC-Council",
      logo_path: "Ec-council.png",
      certificate_link:
        "https://codered.eccouncil.org/certificate/77885ab5-3c0a-4641-b4cd-6df1c1c5ea5c?logged=true",
      alt_name: "EC-Council",
      color_code: "#ffc475",
    },
    {
      title: "Computer Hardware Basics",
      subtitle: "Cisco Networking Academy",
      logo_path: "cisco.png",
      certificate_link:
        "https://www.credly.com/badges/d193aeda-cce0-4409-a96c-e4d073f99f14/linked_in_profile",
      alt_name: "Cisco",
      color_code: "#ffbfae",
    },
    {
      title: "Cybersecurity Analyst Job Simulation",
      subtitle: "Forage",
      logo_path: "forage.png",
      certificate_link:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_Q4BzHaBLB2ggPfH2C_1738043755898_completion_certificate.pdf",
      alt_name: "Forage",
      color_code: "#47A048",
    },
    {
      title: "Google AI Essentials",
      subtitle: "Coursera · Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/Q87N3DMRLHJB",
      alt_name: "Google",
      color_code: "#4285F4",
    },
    {
      title: "Claude 101 - Anthropic",
      subtitle: "Anthropic (Course Completed)",
      logo_icon: "simple-icons:claude",
      logo_icon_color: "#D97757",
      certificate_link: "https://www.anthropic.com/",
      alt_name: "Anthropic",
      color_code: "#D97757",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internships & Leadership",
  description:
    "Production deployments, hands-on security internships, and technical leadership across collegiate and freelance initiatives.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Deployments & Work",
      icon: "fas fa-briefcase",
      experiences: [
        {
          title: "Technical Security & Server Deployment Lead",
          company: "Triveni Automobiles (Commercial Deployment)",
          company_url: "https://github.com/varun-8",
          logo_path: "dal.png",
          duration: "2026",
          location: "Production Cloud VPS",
          description:
            "• Deployed and maintained the commercial web portal on a Debian Linux cloud VPS behind an Nginx reverse proxy.\n• Conducted pre-launch security testing with Nmap, OWASP ZAP, and Burp Suite; remediated configuration weaknesses, XSS, SQL injection, and CSRF.\n• Implemented baseline hardening: SSL/TLS via Let's Encrypt/Certbot with automated renewal, HSTS, CSP, and X-Frame-Options headers, and SSH key hardening.\n• Executed load and performance tests with Apache Bench and JMeter prior to production rollout.",
          color: "#2496ED",
        },
        {
          title: "Freelance AI-Assisted Developer",
          company: "Independent Client & Product Builds",
          company_url: "https://github.com/varun-8",
          logo_path: "google_logo.png",
          duration: "2025 - Present",
          location: "Remote",
          description:
            "• Architected and built full-stack solutions including an AI-powered CRM (React/Electron desktop, React Native mobile, Node.js/Express, MongoDB) with dual-provider fallback (Google Gemini + OpenAI).\n• Conducted rigorous security code reviews on all AI-assisted code: implemented JWT sessions, RBAC, bcrypt password hashing, payload sanitization, and rate limiting.\n• Enforced data minimization: ensured only aggregated metrics are processed by external AI APIs, treating all AI outputs as untrusted data before rendering.",
          color: "#FC1056",
        },
      ],
    },
    {
      title: "Internships",
      icon: "fas fa-user-graduate",
      experiences: [
        {
          title: "Web Development & Digital Modernization Intern",
          company: "Coimbatore Medical College",
          company_url: "https://cmccbe.ac.in/",
          logo_path: "sal.jpg",
          duration: "Apr 2025 - Jun 2025",
          location: "Coimbatore, India",
          description:
            "• Rebuilt the institution's static portal into a modular CMS with custom structures for 20+ departments and 30+ core pages.\n• Optimized caching, asset compression, and queries, raising uptime from under 94% to 99.8% through admission-notice traffic peaks.\n• Hardened the platform: vetted plugins, removed redundant scripts, set up automated backups, and configured strict access control.\n• Built a validated Google Forms intake pipeline for departmental assets, cutting content retrieval effort by 80%+.\n• Cut content-update turnaround from 7-14 days to under 15 minutes; authored SOP manuals and trained internal IT staff for autonomous vendor-free operation.",
          color: "#0071C5",
        },
        {
          title: "Zscaler Zero Trust Architecture Virtual Internship",
          company: "Zscaler",
          company_url: "https://www.zscaler.com/",
          logo_path: "Zscaler.jpeg",
          duration: "Jan 2025 - Feb 2025",
          location: "Virtual",
          description:
            "• Hands-on simulation of Zero Trust Security Architecture, analyzing ZIA (Internet Access), ZPA (Private Access), and ZTNA concepts.\n• Explored cloud security, least-privilege access controls, and policy enforcement across enterprise perimeters.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Leadership & Campus Roles",
      icon: "fas fa-users",
      experiences: [
        {
          title: "Team Lead — Cyberthon Hackathon",
          company: "Kumaraguru College of Technology",
          company_url: "https://kct.ac.in/",
          logo_path: "dal.png",
          duration: "Mar 2025",
          location: "Coimbatore",
          description:
            "• Led team 'Cyber Warriors' in the Cyberthon hackathon and built a privacy-focused data sharing app.\n• The app securely transfers messages from one mobile phone to another over Wi-Fi connections, with no need for an internet connection.",
          color: "#ffc475",
        },
        {
          title: "Documentation Coordinator — MCA Department",
          company: "Kumaraguru College of Technology",
          company_url: "https://kct.ac.in/",
          logo_path: "kum.jpg",
          duration: "2024 - 2026",
          location: "Coimbatore",
          description:
            "• Secured the Best Volunteer Award in the department association.\n• Worked on the college's NAAC accreditation through documentation work.\n• Maintained official departmental records, accreditation documentation, and event reports.\n• Collaborated with faculty and student teams to keep audit logs, compliance records, and event archives accurate.",
          color: "#4285F4",
        },
        {
          title: "System Administrator — Cultural & Music Club",
          company: "Kongu Engineering College",
          company_url: "https://kongu.ac.in/",
          logo_path: "sal.jpg",
          duration: "2022 - 2024",
          location: "Erode",
          description:
            "• Managed AV systems, network setups, hardware troubleshooting, and live-stream reliability for campus events.\n• Coordinated equipment configuration and signal stability for uninterrupted live event operations.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Production deployments, security monitoring labs, and AI-assisted applications.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      name: "SIEM Deployment & Security Log Analysis",
      category: "Security Monitoring",
      url: "https://github.com/varun-8",
      description:
        "Deployed Splunk Enterprise on a Linux cloud instance to ingest and index OS and authentication logs. Configured searches, alerts, and dashboards to detect SSH brute-force attacks, unauthorized privilege escalations, and anomalous authentications with triage workflows.",
      languages: [
        {
          name: "Splunk",
          iconifyClass: "mdi:chevron-right-box",
          color: "#ED2939",
        },
        {
          name: "Linux",
          iconifyClass: "logos:linux-tux",
        },
        {
          name: "Bash",
          iconifyClass: "logos:bash-icon",
        },
        {
          name: "Syslog",
          iconifyClass: "vscode-icons:file-type-log",
        },
      ],
    },
    {
      name: "Secure Production Deployment: Triveni Automobiles",
      category: "Production Deployment",
      url: "https://github.com/varun-8",
      description:
        "Live commercial web portal deployed on a hardened Debian cloud VPS behind an Nginx reverse proxy. Conducted pre-launch vulnerability scanning with OWASP ZAP and Burp Suite to remediate XSS and SQLi; implemented SSL/TLS auto-renewal, HSTS/CSP security headers, and SSH key hardening.",
      languages: [
        {
          name: "Nginx",
          iconifyClass: "logos:nginx",
        },
        {
          name: "Debian",
          iconifyClass: "logos:debian",
        },
        {
          name: "OWASP ZAP",
          iconifyClass: "simple-icons:owasp",
          color: "#1F2328",
        },
        {
          name: "Let's Encrypt",
          iconifyClass: "logos:letsencrypt",
        },
      ],
    },
    {
      name: "AI-Powered CRM (Desktop & Mobile)",
      category: "Full-Stack · AI",
      url: "https://github.com/varun-8",
      description:
        "Cross-platform CRM featuring a dynamic JSON-schema form builder rendering across desktop and mobile, and an AI analytics service with automatic provider fallback (Gemini/OpenAI). Hardened with JWT auth, role-based access control (RBAC), input sanitization, and rate limiting.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Node.js",
          iconifyClass: "logos:nodejs-icon",
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
          color: "#1F2328",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos:mongodb-icon",
        },
      ],
    },
    {
      name: "Institutional Web Platform Revamp: CMC",
      category: "Web Platform",
      url: "https://cmccbe.ac.in/",
      description:
        "Re-engineered institutional web portal serving 20+ departments and 30+ pages. Achieved 99.8% uptime during high-volume admission traffic peaks by implementing server-level caching and query optimization. Hardened with vetted plugins, automated backups, and strict RBAC.",
      languages: [
        {
          name: "WordPress",
          iconifyClass: "logos:wordpress-icon",
        },
        {
          name: "PHP",
          iconifyClass: "logos:php",
        },
        {
          name: "MySQL",
          iconifyClass: "logos:mysql-icon",
        },
        {
          name: "Nginx",
          iconifyClass: "logos:nginx",
        },
      ],
    },
    {
      name: "Network Vulnerability Assessment & Traffic Analysis",
      category: "Network Security",
      url: "https://github.com/varun-8",
      description:
        "Performed detailed network reconnaissance and vulnerability assessments using Nmap to identify open ports, obsolete service versions, and misconfigurations. Captured and analyzed TCP handshakes and unencrypted protocol traffic using Wireshark; validated network defenses by tuning restrictive UFW and iptables rules.",
      languages: [
        {
          name: "Wireshark",
          iconifyClass: "simple-icons:wireshark",
          color: "#1679A7",
        },
        {
          name: "Kali Linux",
          iconifyClass: "simple-icons:kalilinux",
          color: "#557C94",
        },
        {
          name: "Linux",
          iconifyClass: "logos:linux-tux",
        },
        {
          name: "Bash",
          iconifyClass: "logos:bash-icon",
        },
      ],
    },
    {
      name: "Muscle-Fatigue Forecasting & Ergonomic Risk Analysis",
      category: "Data Analysis",
      url:
        "https://colab.research.google.com/drive/1Haqvf2EWBvjq3rWQarEdrGsV0VN1h-6C?usp=sharing",
      description:
        "Analyzed surface electromyography (sEMG) sensor data to assess muscle fatigue patterns. Implemented Butterworth band-pass (20-450 Hz) and 50 Hz notch filters, extracted RMS features across 250 ms windows, verified stationarity via ADF testing, and fitted ARIMA models selected by AIC to forecast fatigue thresholds.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "NumPy",
          iconifyClass: "logos:numpy",
        },
        {
          name: "Pandas",
          iconifyClass: "logos:pandas-icon",
        },
      ],
    },
  ],
};

// Hobbies (Home page, after "Here's what I do")
const hobbies = {
  title: "Beyond Work",
  subtitle: "Things I enjoy when I'm not on the clock",
  data: [
    {
      title: "Testing Open-Source Apps",
      description:
        "I like trying out open-source applications, putting their features through their paces and finding bugs and rough edges.",
      icon: "fas fa-vial",
      visual: "test",
    },
    {
      title: "Vibe Coding with AI",
      description:
        "I use AI-assisted vibe coding to build apps that solve real business problems, taking ideas to working prototypes fast.",
      icon: "fas fa-robot",
      visual: "code",
    },
    {
      title: "Listening to Music",
      description:
        "Music is how I relax and recharge, and it's always playing in the background.",
      icon: "fas fa-headphones",
      visual: "music",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "varun.JPG",
    description:
      "Have a role, project or question? Feel free to connect or drop a message below.",
    reply_time: "Replies within 48 hours",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
  hobbies,
};
