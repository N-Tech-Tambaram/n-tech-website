const CourseDetails = [
  {
    id: 1,
    courseTitle: "AI & Machine Learning",
    content:
      "Learn AI and Machine Learning fundamentals, algorithms, model building, and real-world applications.",
    bgImage: "/ai.jpeg",
    popupContents: {
      mainContent:
        "AI and ML help machines learn from data, make predictions, and automate decision-making across industries.",
      basicPoints: {
        p1: "AI & Machine Learning Course",
        p2: "Natural Language Processing (NLP)",
      },
      advPoints: {
        p1: "Deep Learning & Neural Networks",
        p2: "AI Models",
      },
    },
  },
  {
    id: 2,
    courseTitle: "Prompt Engineering",
    content:
      "Master how to design high-quality prompts for ChatGPT, Gemini, Claude, and other AI tools.",
    bgImage: "/prompt.jpeg",
    popupContents: {
      mainContent:
        "Prompt Engineering focuses on structuring effective instructions to maximize accuracy, creativity, and performance in AI outputs.",
      basicPoints: {
        p1: "Types of Prompts",
        p2: "Prompt Structure & Formatting",
      },
      advPoints: {
        p1: "Role-based & Multi-step Prompts",
        p2: "Prompts for Coding, Writing & Data Tasks",
      },
    },
  },
  {
    id: 3,
    courseTitle: "Data Science & AI",
    content:
      "Learn data science fundamentals, Python programming, analysis, visualization, and ML models.",
    bgImage: "/datascience.jpeg",
    popupContents: {
      mainContent:
        "Data Science involves collecting, cleaning, analyzing, and modeling data to uncover insights and predictions.",
      basicPoints: {
        p1: "Python for Data Science",
        p2: "NLP ",
      },
      advPoints: {
        p1: "Machine Learning Algorithms",
        p2: "Deep Learning using TensorFlow",
      },
    },
  },
  {
    id: 4,
    courseTitle: "MERN Stack Fullstack Development",
    content:
      "Learn to build fullstack web applications using MongoDB, Express.js, React.js, and Node.js.",
    bgImage: "/mern.jpg",
    popupContents: {
      mainContent:
        "Build modern fullstack applications using MERN: frontend (React), backend (Node/Express), and database (MongoDB).",
      basicPoints: {
        p1: "MongoDB",
        p2: "React.js ",
      },
      advPoints: {
        p1: "Node.js ",
        p2: "Express.js & RestApi",
      },
    },
  },
  {
    id: 5,
    courseTitle: "Cloud & DevOps",
    content:
      "Master cloud platforms, CI/CD pipelines, Docker, Kubernetes, and automation tools.",
    bgImage: "/cloud%20and%20devops.webp",
    popupContents: {
      mainContent:
        "Learn AWS/Azure/GCP basics, CI/CD setup, containerization, and cloud-native deployment.",
      basicPoints: {
        p1: "Lunix for Cloud",
        p2: "Version Control with Git",
      },
      advPoints: {
        p1: "AWS",
        p2: "Docker & Kubernetes",
      },
    },
  },
  {
    id: 6,
    courseTitle: "AWS Cloud Architect",
    content:
      "Learn to design, deploy, secure, and scale cloud infrastructure on AWS.",
    bgImage: "/AWS.jpg",
    popupContents: {
      mainContent:
        "AWS Architecture includes EC2, S3, VPC, IAM, Lambda, RDS, CloudWatch, and cloud security best practices.",
      basicPoints: {
        p1: "AWS Core Services",
        p2: "Identity & Access Management",
      },
      advPoints: {
        p1: "High Availability Architecture",
        p2: "Cost Optimization & Scaling",
      },
    },
  },
  {
    id: 7,
    courseTitle: "DevOps Engineering",
    content:
      "Master DevOps tools like Git, Jenkins, Docker, Kubernetes, Ansible, and CI/CD pipelines.",
    bgImage: "/devops.png",
    popupContents: {
      mainContent:
        "DevOps integrates development and operations for faster deployment and automation.",
      basicPoints: {
        p1: "Linux & Shell Scripting",
        p2: "Git & Jenkins",
      },
      advPoints: {
        p1: "Docker & Kubernetes",
        p2: "Monitoring & Automation Tools",
      },
    },
  },
  {
    id: 8,
    courseTitle: "DevOps with Terraform",
    content:
      "Learn Infrastructure as Code using Terraform for automated cloud provisioning.",
    bgImage: "/terraform.webp",
    popupContents: {
      mainContent:
        "Terraform allows provisioning infrastructure across AWS, Azure, and GCP using declarative configuration files.",
      basicPoints: {
        p1: "Terraform Basics",
        p2: "Providers & Modules",
      },
      advPoints: {
        p1: "IaC Automation",
        p2: "Terraform Cloud & Workspaces",
      },
    },
  },
  {
    id: 9,
    courseTitle: "Flutter App Development",
    content:
      "Learn to build cross-platform mobile apps for Android & iOS using Flutter and Dart.",
    bgImage: "/flutter.png",
    popupContents: {
      mainContent:
        "Flutter enables fast mobile app development with a single codebase using Dart.",
      basicPoints: {
        p1: "Dart Programming",
        p2: "Flutter Widgets",
      },
      advPoints: {
        p1: "API Integration",
        p2: "App Deployment",
      },
    },
  },
  {
    id: 10,
    courseTitle: "Data Analytics",
    content:
      "Learn data collection, cleaning, visualization, reporting, and insights generation.",
    bgImage: "/data_analysis.jpg",
    popupContents: {
      mainContent:
        "Data Analytics transforms raw data into insights using tools like Excel, Python, and BI dashboards.",
      basicPoints: {
        p1: "Data Cleaning",
        p2: "Exploratory Data Analysis",
      },
      advPoints: {
        p1: "Visualization Tools",
        p2: "Statistical Insights",
      },
    },
  },
  {
    id: 11,
    courseTitle: "Python Programming",
    content:
      "Learn Python fundamentals, problem solving, OOP, and data handling.",
    bgImage: "/Python.jpeg",
    popupContents: {
      mainContent:
        "Python is widely used for automation, data science, backend development, and scripting.",
      basicPoints: {
        p1: "Python Programming",
        p2: "Functions & OOPs",
      },
      advPoints: {
        p1: "File Handling & APIs",
        p2: "Mini Projects",
      },
    },
  },
  {
    id: 12,
    courseTitle: "Power BI – Data Analysis & Visualization",
    content:
      "Learn Power BI dashboards, DAX, data modeling, and BI reporting.",
    bgImage: "/Power-BI.webp",
    popupContents: {
      mainContent:
        "Power BI helps visualize data and create interactive dashboards for business decisions.",
      basicPoints: {
        p1: "Power BI ",
        p2: "Reports & Dashboards",
      },
      advPoints: {
        p1: "DAX Measures",
        p2: "Workspace Publishing",
      },
    },
  },
  {
    id: 13,
    courseTitle: "Java Fullstack",
    content:
      "Learn Java, Spring Boot backend, and React.js frontend to build modern fullstack applications.",
    bgImage: "/javafullstack.webp",
    popupContents: {
      mainContent:
        "Combines Java backend + React frontend for fullstack web development.",
      basicPoints: {
        p1: "Core Java & OOP",
        p2: "Spring Boot",
      },
      advPoints: {
        p1: "React.js",
        p2: "API Integration",
      },
    },
  },
  {
    id: 14,
    courseTitle: "Java Programming",
    content:
      "Learn Java fundamentals, OOP, collections, JDBC, and application building.",
    bgImage: "/javaa.webp",
    popupContents: {
      mainContent:
        "Java is widely used for backend development, Android apps, enterprise systems, and automation.",
      basicPoints: {
        p1: "Java Programming",
        p2: "OOP Concepts",
      },
      advPoints: {
        p1: "JDBC & MySQL",
        p2: "Java Applications",
      },
    },
  },
  {
    id: 15,
    courseTitle: "Software Testing",
    content:
      "Learn manual testing, SDLC, STLC, test cases, and automation with Selenium.",
    bgImage: "/Software-Testing.jpg",
    popupContents: {
      mainContent:
        "Software Testing ensures applications are bug-free and meet quality standards.",
      basicPoints: {
        p1: "Manual Testing, SDLC & STLC ",
        p2: "API Testing using Postman",
      },
      advPoints: {
        p1: "Selenium Automation",
        p2: "Bug Tracking Tools",
      },
    },
  },
  {
    id: 16,
    courseTitle: "Data Structures and Algorithms (DSA)",
    content:
      "Learn arrays, linked lists, trees, graphs, searching, sorting, and algorithms.",
    bgImage: "/ds.jpeg",
    popupContents: {
      mainContent:
        "DSA is essential for coding interviews, problem solving, and writing efficient programs.",
      basicPoints: {
        p1: "Linear & Non-linear Structures",
        p2: "Sorting & Searching",
      },
      advPoints: {
        p1: "Graph Algorithms",
        p2: "Hashing & Optimization",
      },
    },
  },
  {
    id: 17,
    courseTitle: "UI / UX Designing",
    content:
      "Learn UI/UX fundamentals, wireframing, prototyping, color theory, and user research.",
    bgImage: "/uiux.jpg",
    popupContents: {
      mainContent:
        "UI/UX focuses on improving user experience and designing visually appealing interfaces.",
      basicPoints: {
        p1: "Visual Design",
        p2: "Responsive Layouts",
      },
      advPoints: {
        p1: "User Research",
        p2: "Interactive Prototyping",
      },
    },
  },
  {
    id: 18,
    courseTitle: "Web Designing",
    content:
      "Learn HTML, CSS, Figma, layouts, and designing attractive websites.",
    bgImage: "/web%20designing.webp",
    popupContents: {
      mainContent:
        "Web Designing focuses on layout, styling, color theory, and UI components.",
      basicPoints: {
        p1: "Figma Tools",
        p2: "Design Formats",
      },
      advPoints: {
        p1: "HTML & CSS",
        p2: "Responsive Design",
      },
    },
  },
  {
    id: 19,
    courseTitle: "C & C++ Programming",
    content:
      "Learn C and C++ programming fundamentals, memory handling, OOP, and application development.",
    bgImage: "/c%20and%20c++.webp",
    popupContents: {
      mainContent:
        "C/C++ are core programming languages used in system programming, gaming, and embedded systems.",
      basicPoints: {
        p1: "Procedural Programming",
        p2: "Pointers & Memory",
      },
      advPoints: {
        p1: "OOP in C++",
        p2: "Applications & Projects",
      },
    },
  },
  {
    id: 20,
    courseTitle: ".NET (MVC)",
    content:
      "Learn .NET framework, MVC architecture, routing, validation, and API development.",
    bgImage: "/net.png",
    popupContents: {
      mainContent:
        ".NET MVC helps build scalable enterprise-level web applications.",
      basicPoints: {
        p1: "MVC Architecture",
        p2: "Routing & Controllers",
      },
      advPoints: {
        p1: "Model Validation",
        p2: "Web API Development",
      },
    },
  },
  {
    id: 21,
    courseTitle: "Tally ERP 9 with GST",
    content:
      "Learn accounting, billing, GST, finance management, and inventories using Tally.",
    bgImage: "/Tally-Erp.png",
    popupContents: {
      mainContent:
        "Tally ERP 9 manages accounting, taxation, payroll, and business operations.",
      basicPoints: {
        p1: "Accounting ",
        p2: "Billing & Inventory",
      },
      advPoints: {
        p1: "GST & Taxation",
        p2: "Banking & Reports",
      },
    },
  },
  {
    id: 22,
    courseTitle: "MS Office",
    content:
      "Learn Word, Excel, PowerPoint, and professional document creation.",
    bgImage: "/ms_office.webp",
    popupContents: {
      mainContent:
        "Microsoft Office includes essential productivity tools used in every industry.",
      basicPoints: {
        p1: "MS Word",
        p2: "MS Excel",
      },
      advPoints: {
        p1: "PowerPoint",
        p2: "Outlook & Office Tools",
      },
    },
  },
  {
    id: 23,
    courseTitle: "Digital Marketing",
    content:
      "Learn social media marketing, branding, advertising, and online promotions.",
    bgImage: "/digetal-mark.jpg",
    popupContents: {
      mainContent:
        "Digital marketing helps promote businesses using social media, SEO, paid ads, and content strategies.",
      basicPoints: {
        p1: "Affiliate & Freelance Marketing",
        p2: "Social Media Campaigns",
      },
      advPoints: {
        p1: "Digital Ads Strategy skVANy4aZ",
        p2: "Brand Growth Techniques",
      },
    },
  }
];

export default CourseDetails;
