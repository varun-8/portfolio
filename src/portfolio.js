/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Varun",
  logo_name: "Varun.p()",
  nickname: "",
  full_name: "Varun S",
  subTitle:
    "Full Stack Developer,  Cyber Security Enthusiast. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1kcvW8P65jWZFeKR6Jopf3nrQLA1qJCwn/view?usp=sharing",
  mail: "mailto:varunsiva88@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/varun-8 ",
  linkedin: "www.linkedin.com/in/varuns2003",
  gmail: "varunsiva88@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://twitter.com/hrishi_55",
  instagram: "https://www.instagram.com/ft.varuuun/",
};

const skills = {
  data: [
    {
      title: "Full Stack Devolopment",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and Angular",
        "⚡ Developing mobile applications using Flutter and native Android",
        "⚡ Backend development using NodeJS, ExpressJS and Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
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
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
      
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        
   
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Certified AWS Developer Associate and Cloud Practioner",
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing web apps on GCP and AWS",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },

      ],
    },
    {
      title: "CyberSecurity",
      fileName: "DataScienceImg",
      skills: [
        "⚡Knowledge in basic penetration testing using tools like Nmap and Burp Suite.",
        "⚡ Certifications by  Google and Zscalar",
        "⚡ Familiar with log monitoring and threat detection using SIEM tools like Splunk.",
      ],
      softwareSkills: [
     
        {
          skillName: "Wireshark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
      
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Kalilinux",
          fontAwesomeClassname: "simple-icons:kalilinux",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
        {
          skillName: "Burpsuite",
          fontAwesomeClassname: "simple-icons:burpsuite",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Kumaraguru College of Technology",
      subtitle: "Masters of Computer Applications",
      logo_path: "kum.jpg",
      alt_name: "DAL",
      duration: "2024 - 2026",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts, Data Management & Warehousing",
        "⚡ Learn Advanced Topics in Cloud Computing, Cloud Architecture along with Serverless Computing",
        "⚡ Worked on projects on courses like Cybersecurity and Web Technologies.",
      ],
      website_link: "https://kct.ac.in/",
    },
    {
      title: "Kongu Engineering College",
      subtitle: "B.Sc Information Systems",
      logo_path: "sal.jpg",
      alt_name: "SETI",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for ML/DL, Web Development, Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://kongu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cybersecurity Certification",
      subtitle: "2023 - 2024",
      logo_path: "google_logo.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/specialization/UBTSWC93SQ7H",
      alt_name: "Google",
      color_code: "#ffc475",
    },
    {
      title: "Google AI Essentials Certification",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/certificate/Q87N3DMRLHJB",
      alt_name: "Google",
      color_code: "#ffc475",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1I6zHFJTaHjgUmZmoQC9CNRQmOHsYbUJC/view",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "SQL injection Attack",
      subtitle: "EC-Council",
      logo_path: "Ec-council.png",
      certificate_link:
        "https://codered.eccouncil.org/certificate/77885ab5-3c0a-4641-b4cd-6df1c1c5ea5c?logged=true",
      alt_name: "EC-Council",
      color_code: "#ffc475",
    },
    {
      title: "Computer Hardware Basics",
      subtitle: "2023",
      logo_path: "cisco.png",
      certificate_link: "https://www.credly.com/badges/d193aeda-cce0-4409-a96c-e4d073f99f14/linked_in_profile",
      alt_name: "Cisco",
      color_code: "#ffbfae",
    },
    {
      title: "Become an IT Security Specialist",
      subtitle: "Linkedin Learning",
      logo_path: "linkedin-learning.png",
      certificate_link: " ",
      alt_name: "Linkedin Learning",
      color_code: "#b190b0",
    },
    {
      title: "Cybersecurity Analyst Job Simulation",
      subtitle: "Forage",
      logo_path: "forage.png",
      certificate_link:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_Q4BzHaBLB2ggPfH2C_1738043755898_completion_certificate.pdf",
      alt_name: "forage",
      color_code: "#47A048",
    },
   /*  {
      title: "Sequence Models",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
      alt_name: "deeplearning.ai",
      color_code: "#F6B808",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    }, */

  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Fresher",
          company: "Actively searching for jobs", 
          company_url: "https://www.linkedin.com/in/varuns2003/",
          logo_path: "fresher.png",
          duration: "Present",
          location: "Erode",
          description:
            "I am an aspiring Security Analyst and System Administrator with hands-on experience in cybersecurity tools, vulnerability management, and endpoint security. Passionate about threat detection, network security, and Zero Trust Architecture, I have a strong foundation in penetration testing, cloud security, and security automation. Additionally, I possess expertise in system administration and DevOps, aiming to safeguard digital assets, enhance IT infrastructure, and drive cybersecurity resilience.",
          color: "#f10000",
        },
       /* {
          title: "Full Stack Developer - Part-time Contract",
          company: "SpatialCut",
          company_url: "",
          logo_path: "spatialcut.png",
          duration: "April 2024 - Present",
          location: "Remote",
          description:
            "• Architected AWS cloud infrastructure, reducing complexity by 40% and improving scalability\n" +
            "• Developed microservices using AWS SageMaker, ECS, and EC2 Mac Instances for Apple Vision Pro platform\n" +
            "• Optimized video processing pipeline, reducing rendering time by 25%",
          color: "#2962FF",
        },
        {
          title: "Full Stack Developer",
          company: "Quicko",
          company_url: "https://quicko.com/",
          logo_path: "quicko.jpg",
          duration: "June 2021 - October 2021",
          location: "Ahmedabad",
          description:
            "• Developed PWA with Flutter serving 50,000+ customers\n" +
            "• Integrated 5+ brokerages including Zerodha, Upstox, Groww\n" +
            "• Implemented backend APIs using Node.js and Spring Boot, reducing operational costs by 20%\n" +
            "• Created responsive frontend using Angular and Vue.js",
          color: "#2962FF",
        },
        {
          title: "Python Developer",
          company: "Google Summer of Code - Sugar Labs",
          company_url: "https://sugarlabs.org/",
          logo_path: "google_logo.png",
          duration: "May 2019 - August 2019",
          location: "Remote",
          description:
            "• Implemented Dashboard functionality using Python and GTK3 for Sugar OS\n" +
            "• Created interactive widget for Sugar Desktop environment\n" +
            "• Contributed to Python 2 to 3 migration and Music Blocks features",
          color: "#ee3c26",*/
        
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Zscaler zero trust vitual internship",
          company: "Zscalar",
          company_url: "https://www.zscaler.com/",
          logo_path: "Zscaler.jpeg",
          duration: "Jan 2025 - Feb 2025 ",
          location: "Virtual",
          description: "Zscaler Zero Trust Architecture Virtual Internship, Gained hands-on experience in Zero Trust Security, ZIA, ZPA, and ZTNA ,Learned cloud security, access control, and policy enforcement for enterprise security.",
          color: "#ee3c26",
        },
       /* {
          title: "Android App Developer Intern",
          company: "IAS4Sure",
          company_url: " ",
          logo_path: "buld.jpg",
          duration: "December 2019 - February 2020",
          location: "Work From Home",
          description:
            "Internship task was to make a native Android application. ",
          color: "#0071C5",
        },
        {
          title: "Web Developer",
          company: "Wrighter Writing Solutions",
          company_url: " ",
          logo_path: "wrighter.jpg",
          duration: "August 2020",
          location: "",
          description: "Develop a website using PHP and jQuery.",
          color: "#56A4D3",
        },
        {
          title: "Front-End Developer",
          company: "VJ TechServe",
          company_url: " ",
          logo_path: "vjt.png",
          duration: "September 2020",
          location: "",
          description: "Develop a portfolio website using ReactJS",
          color: "#800000",
        }, */
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Documentation Co-ordinator of MCA Department",
          company: "Kumaraguru College of Technology",
          company_url: "https://kct.ac.in/",
          logo_path: "dal.png",
          duration: "2024 - 2026",
          location: " ",
          description:
            "Documentation Coordinator – MCA Department (2024 – Present)Responsible for maintaining official records, reports, and event documentation.Ensure accurate documentation of meetings, decisions, and departmental activities. Collaborate with teams to organize and manage essential documents efficiently.",
          color: "#4285F4",
        },
        {
          title: "System Administrator of Cultural and music club",
          company: "Kongu Engineering College",
          company_url: "https://kongu.ac.in/",
          logo_path: "sal.jpg",
          duration: "2022 - 2024",
          location: " ",
          description:
            "Managed audio-visual systems and ensured smooth technical operations during events.Handled equipment setup, troubleshooting, and coordination for live performances.Collaborated with teams to optimize sound, lighting, and multimedia presentations.",
          color: "#D83B01",
        },
        /*{
          title: "Board Member at Codeuino",
          company: " ",
          company_url: " ",
          logo_path: "codeuino.jpg",
          duration: "2018 - 2019",
          location: " ",
          description: "Previous Board during early days of Codeuino",
          color: "#D83B01",
        },
        {
          title: "BluWings Club",
          company: " ",
          company_url: " ",
          logo_path: "b.png",
          duration: "2018 - On Going",
          location: " ",
          description:
            "Co-Founder and President of the programming club called BluWings. Have organized several workshops which introduced programming and related tools to freshers.",
          color: "#D83B01",
        },*/
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Cyber Security, Machine learning and Full Stack projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "varun.JPG",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Privacy Datasharing App",
      url: "https://github.com/varun-8/Privacy-data-sharing-app",
      description:
        "Developed a Privacy Data Sharing App enabling secure transfer of encrypted messages and data. Implemented robust encryption and group-based sharing for enhanced security. Designed with a focus on privacy preservation and user-controlled access.",
      languages: [
        {
          name: "Python",
          iconifyClass: "devicon-python",
        },
        {
          name: "React",
          iconifyClass: "devicon-react",
        },
        {
          name: "Mongo",
          iconifyClass: "devicon-mongodb",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
      ],
    },
    {
      name: "Risk Assessment of Construction workers using Machine learning",
      url: "https://colab.research.google.com/drive/1Haqvf2EWBvjq3rWQarEdrGsV0VN1h-6C?usp=sharing",
      description: "Developed a machine learning model using the ARIMA algorithm to assess and predict risk levels among construction workers based on historical incident data. Enabled proactive safety management by forecasting potential hazards and trends.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
   /* {
      name: "Journalify",
      url: "https://play.google.com/store/apps/details?id=com.picle.journalify",
      description:
        "You personal journaling companion, goals & daily challenges! About 5k+ downloads on Play Store.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "RecipesAPI",
      url: "https://rapidapi.com/Hrishi1999/api/recipesapi2",
      description: "Get recipes for hundreds and thousands of dishes",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "opPortfolio",
      url: "https://github.com/Hrishi1999/opPortfolio",
      description: "(This) A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      name: "Cab Security System",
      url: " ",
      description:
        "Driver drowsiness detection, profanity detection, violence detection, SMS alerts, cab driver tracking.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      name: "Lensinator",
      url: " ",
      description:
        "Published on Play Store back in 2017, crossed 55K downloads. Performed object detection, image captioning, OCR, handwritten OCR, barcode and QR code scanning with product information.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "Doorbell.io",
      url: "https://github.com/Hrishi1999/Doorbell.io",
      description:
        "A sound-classifier webapp made with ReactJS + TensorflowJS.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "TensorflowJS",
          iconifyClass: "logos-tensorflow",
        },
      ],
    },
    {
      name: "Video Summarization",
      url: "https://github.com/Hrishi1999/Video-Summarization",
      description:
        "A video summarization webapp. A Flask-based backend which servers the Tensorflow model and a frontend made in ReactJS.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
      ],
    },
    {
      name: "Dashboard Activity",
      url: "https://github.com/Hrishi1999/Dashboard.activity",
      description:
        "Google Summer of Code project. A Dashboard activity for Sugar OS which tracks user activity so user can know where they use their most time and where they create most files.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: "Project Pickle",
      url: " ",
      description:
        "An app similar to Uber Eats but targeted for Gruhudhyogs (homemade pickles and products). Order management, live order tracking, rating and reviews system, etc.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },*/
   
  ],
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
};
