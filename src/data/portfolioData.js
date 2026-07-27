import roboticsCarImg from '../assets/images/robotics_car.jpg';
import bankChurnImg from '../assets/images/bank_churn.jpg';
import miniCrmImg from '../assets/images/mini_crm.jpg';
import lostFoundImg from '../assets/images/lost_found.jpg';
import velvetCafeImg from '../assets/images/velvet_cafe.jpg';

export const personalData = {
  name: "Lakshay Agrawal",
  role: "Full Stack Developer & Data Analytics Enthusiast",
  subRole: "MBA Tech (Computer Engineering) Student",
  location: "Mumbai / Indore, India",
  status: "Available for Full Stack & AI Engineering Opportunities",
  bio: "MBA Tech Computer Engineering student combining software development, data analytics, and embedded systems engineering. Driven to build AI-powered applications, scalable full-stack web platforms, and intelligent problem-solving tools.",
  email: "lakshyaagrawal709@gmail.com",
  github: "https://github.com/lakshayagrawal",
  linkedin: "https://linkedin.com/in/lakshayagrawal",
  leetcode: "https://leetcode.com/lakshayagrawal",
  resumeUrl: "#",
  careerGoal: "Become a Senior Full Stack Developer creating AI-powered software products while continuously pushing technical excellence.",
  stats: {
    projectsCompleted: 10,
    githubCommits: 520,
    technologiesMastered: 16,
    codingHours: 1400,
    coffeeCups: 380,
    tabsOpened: 45
  }
};

export const projectsData = [
  {
    id: "robotics-car",
    title: "WiFi Controlled Robotic Car",
    category: "Embedded & IoT",
    tagline: "Wireless Microcontroller Robotic Vehicle",
    description: "Designed and engineered a WiFi-controlled robotic car capable of real-time remote movement and directional telemetry using embedded wireless microcontrollers.",
    fullDescription: "Built during an intensive Robotics Workshop. Configured ESP8266/ESP32 Wi-Fi modules and motor drivers (L298N) to translate HTTP/WebSocket packet signals into motor control pulses. Implemented a mobile-friendly web remote interface for smooth omnidirectional movement.",
    techStack: ["Embedded Systems", "Robotics", "Wireless Communication", "C++", "ESP8266", "IoT"],
    image: roboticsCarImg,
    github: "https://github.com/lakshayagrawal/wifi-controlled-robotic-car",
    liveDemo: "https://github.com/lakshayagrawal/wifi-controlled-robotic-car",
    featured: true,
    challenges: [
      "Minimizing signal packet latency over local Wi-Fi networks for instant motor response.",
      "Managing power distribution between high-draw DC motors and sensitive microcontroller logic."
    ],
    features: [
      "Real-time WebSocket directional remote control.",
      "Omnidirectional movement (Forward, Reverse, Spin, Speed adjustment).",
      "Fail-safe auto-stop mechanism upon Wi-Fi connection loss."
    ],
    metrics: "<50ms Wireless Signal Latency"
  },
  {
    id: "airbnb-clone",
    title: "Airbnb Full Stack Clone",
    category: "Full Stack",
    tagline: "Property Rental & Vacation Booking Web App",
    description: "Responsive Airbnb-inspired web application featuring property search filters, user authentication, reservation booking, and interactive listing creation.",
    fullDescription: "Built using the MERN stack with RESTful API endpoints, MongoDB document validation, date picker reservation calculations, and responsive Tailwind glass components.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: bankChurnImg,
    github: "https://github.com/lakshayagrawal/airbnb-clone",
    liveDemo: "https://airbnb-clone-lakshay.vercel.app",
    featured: true,
    challenges: [
      "Handling complex date range overlap validations during property booking requests.",
      "Optimizing image upload pipelines with client-side compression."
    ],
    features: [
      "Interactive property search and category filter pills.",
      "Host listing creation wizard.",
      "Instant reservation cost breakdown."
    ],
    metrics: "Full MERN Stack CRUD Architecture"
  },
  {
    id: "bank-churn",
    title: "Bank Customer Churn Prediction Dashboard",
    category: "Data & ML",
    tagline: "Machine Learning Analytics & Interactive Dashboard",
    description: "Predictive ML application modeling customer attrition risk in banking with Streamlit and Power BI interactive reports.",
    fullDescription: "Engineered a machine learning pipeline using Python (Scikit-Learn & XGBoost) to classify churn probability across 10,000+ customer records. Visualized churn risk factors like credit score, account balance, and activity index.",
    techStack: ["Python", "Machine Learning", "Streamlit", "Power BI", "Scikit-Learn", "Pandas"],
    image: bankChurnImg,
    github: "https://github.com/lakshayagrawal/bank-customer-churn-prediction",
    liveDemo: "https://bank-churn-predict.streamlit.app",
    featured: true,
    challenges: [
      "Handling severe class imbalance using synthetic oversampling (SMOTE).",
      "Translating complex feature importance weights into intuitive Power BI charts."
    ],
    features: [
      "Real-time customer churn probability estimator.",
      "Feature importance ranking visualization.",
      "Embedded executive Power BI report dashboard."
    ],
    metrics: "94.2% Predictive Accuracy"
  },
  {
    id: "smoke-detector",
    title: "Smart Smoke Detector System",
    category: "Embedded & IoT",
    tagline: "EEW Lab Fire Safety Monitoring System",
    description: "Hardware smoke detection system built as part of the EEW Lab project using gas sensors and threshold triggers for environmental safety.",
    fullDescription: "Designed an embedded safety monitoring circuit incorporating MQ-2 gas/smoke sensors, audio buzzers, LED alert indicators, and automated threshold detection logic.",
    techStack: ["Embedded Electronics", "Sensors", "Arduino / C++", "Circuit Design"],
    image: roboticsCarImg,
    github: "https://github.com/lakshayagrawal/smoke-detector-system",
    liveDemo: "https://github.com/lakshayagrawal/smoke-detector-system",
    featured: false,
    challenges: [
      "Calibrating sensor threshold values to prevent false alarms from ambient air variation."
    ],
    features: [
      "Instant audio-visual alert triggers.",
      "Analog sensor signal smoothing algorithm."
    ],
    metrics: "Sub-Second Fire Hazard Detection"
  },
  {
    id: "3d-printing",
    title: "3D Printing & Defect Analysis Project",
    category: "Engineering",
    tagline: "Additive Manufacturing & Thermal Analysis",
    description: "Engineering research project focused on 3D CAD design, additive manufacturing optimization, and structural defect analysis.",
    fullDescription: "Designed CAD models, optimized slicing parameters (infill density, layer height, nozzle temperature), and analyzed structural failure points across test prints.",
    techStack: ["CAD Design", "3D Printing", "Manufacturing Analysis", "Structural Testing"],
    image: velvetCafeImg,
    github: "https://github.com/lakshayagrawal/3d-printing-defect-analysis",
    liveDemo: "https://github.com/lakshayagrawal/3d-printing-defect-analysis",
    featured: false,
    challenges: [
      "Identifying root causes of layer warping and thermal shrinkage in complex geometries."
    ],
    features: [
      "Defect classification taxonomy.",
      "Optimal slicing parameter profiles."
    ],
    metrics: "30% Thermal Warping Reduction"
  },
  {
    id: "criminal-record-web",
    title: "Criminal Record Management System (Web)",
    category: "Full Stack",
    tagline: "Responsive Administrative Police Record Portal",
    description: "Web application designed for law enforcement agencies to maintain, update, and search criminal profiles securely.",
    fullDescription: "Created a structured administrative web interface for cataloging offense records, suspect photos, incident dates, and status verification flags.",
    techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "UI/UX Design"],
    image: lostFoundImg,
    github: "https://github.com/lakshayagrawal/criminal-record-management-web",
    liveDemo: "https://lakshayagrawal.github.io/criminal-record-management-web",
    featured: true,
    challenges: [
      "Designing clean data table layouts for high-density record viewing with quick client-side search filtering."
    ],
    features: [
      "Instant multi-column search filter.",
      "Suspect dossier view cards.",
      "Responsive glass table UI."
    ],
    metrics: "Instant Client-Side Table Filtering"
  },
  {
    id: "criminal-record-db",
    title: "Criminal Record Management Database",
    category: "Software & DB",
    tagline: "Relational MySQL Database Architecture",
    description: "Complete relational database system for criminal records featuring foreign key constraints, indexes, and full CRUD query scripts.",
    fullDescription: "Architected a normalized MySQL relational database schema (Entities: Suspects, Crimes, Officers, Evidence, Verdicts) with stored procedures and optimized JOIN queries.",
    techStack: ["MySQL", "SQL", "Database Design", "Relational Modeling"],
    image: miniCrmImg,
    github: "https://github.com/lakshayagrawal/criminal-record-db-mysql",
    liveDemo: "https://github.com/lakshayagrawal/criminal-record-db-mysql",
    featured: false,
    challenges: [
      "Enforcing referential integrity across complex multi-table relationships."
    ],
    features: [
      "Normalized 3NF relational schema.",
      "Complex SQL JOIN queries and views.",
      "Stored procedures for quick record insertion."
    ],
    metrics: "100% Normalized 3NF Database"
  },
  {
    id: "betting-game",
    title: "Java OOP Betting Game Engine",
    category: "Software & DB",
    tagline: "Object-Oriented Java Simulation Game",
    description: "Object-oriented desktop betting game demonstrating Java OOP principles, custom exception handling, and file persistence.",
    fullDescription: "Built using core Java to demonstrate inheritance (Player vs VIP Player), polymorphism, encapsulation, thread safety, and file I/O for saving player balance state.",
    techStack: ["Java", "OOP Principles", "File I/O", "Data Structures"],
    image: miniCrmImg,
    github: "https://github.com/lakshayagrawal/java-betting-game-oop",
    liveDemo: "https://github.com/lakshayagrawal/java-betting-game-oop",
    featured: false,
    challenges: [
      "Implementing thread-safe player balance transactions and persistent file state recovery."
    ],
    features: [
      "Inheritance and polymorphic payout rules.",
      "File handling transaction logs.",
      "Console & GUI interactive game loop."
    ],
    metrics: "Clean Modular Java OOP Architecture"
  },
  {
    id: "dsa-calculator",
    title: "DSA Calculator Engine",
    category: "Software & DB",
    tagline: "C++ Data Structures Expression Evaluator",
    description: "High-performance evaluation calculator applying Stacks, Queues, and Shunting-Yard expression parsing algorithms in C++.",
    fullDescription: "Implemented infix to postfix expression parsing using custom stack implementations, handling nested parentheses, operator precedence, and memory management.",
    techStack: ["C++", "Data Structures", "Algorithms", "Stack / Queue"],
    image: bankChurnImg,
    github: "https://github.com/lakshayagrawal/dsa-calculator-cpp",
    liveDemo: "https://github.com/lakshayagrawal/dsa-calculator-cpp",
    featured: false,
    challenges: [
      "Managing memory allocation without leaks during complex expression tokenization."
    ],
    features: [
      "Dijkstra's Shunting-yard algorithm.",
      "Support for trigonometric and exponential evaluation.",
      "Detailed step-by-step stack visualization."
    ],
    metrics: "O(N) Linear Time Evaluation"
  },
  {
    id: "street-light",
    title: "MPMC Smart Street Light Control System",
    category: "Embedded & IoT",
    tagline: "Microprocessor Automated Energy Control System",
    description: "Smart automated street light control system designed for energy efficiency, traffic density adaptation, and micro-controller automation.",
    fullDescription: "Developed an intelligent lighting system using LDR light sensors and PIR motion detectors to automatically adjust street light brightness based on natural light and vehicle presence.",
    techStack: ["Microprocessors", "Microcontrollers", "Automation", "Energy Systems"],
    image: roboticsCarImg,
    github: "https://github.com/lakshayagrawal/mpmc-street-light-control",
    liveDemo: "https://github.com/lakshayagrawal/mpmc-street-light-control",
    featured: false,
    challenges: [
      "Optimizing sensor polling cycles to reduce standby power consumption."
    ],
    features: [
      "Dynamic dimming based on ambient light.",
      "PIR motion-activated high brightness surge.",
      "Over 40% simulated municipal energy savings."
    ],
    metrics: "40%+ Municipal Energy Savings"
  }
];

export const skillsCategories = [
  { id: "all", label: "All Technologies" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "backend", label: "Backend & DB" },
  { id: "languages", label: "Core Languages" },
  { id: "analytics", label: "Data & ML" },
  { id: "embedded", label: "Embedded & Tools" }
];

export const skillsData = [
  { name: "C++", category: "languages", level: 88, highlight: "STL, Data Structures, Memory Control" },
  { name: "Java", category: "languages", level: 85, highlight: "OOP, Multithreading, Polymorphism" },
  { name: "Python", category: "languages", level: 90, highlight: "Pandas, Scikit-Learn, Streamlit" },
  { name: "JavaScript (ES6+)", category: "languages", level: 92, highlight: "Async/Await, ES6, DOM Manipulation" },
  { name: "SQL", category: "languages", level: 86, highlight: "Complex Queries, Relational Joins" },
  { name: "HTML5 & CSS3", category: "frontend", level: 95, highlight: "Responsive Layouts, Glassmorphism" },
  { name: "React.js", category: "frontend", level: 90, highlight: "Hooks, Context, Performance" },
  { name: "Tailwind CSS", category: "frontend", level: 92, highlight: "Custom Design Tokens, Utility Styling" },
  { name: "Node.js", category: "backend", level: 85, highlight: "REST APIs, Event Loop" },
  { name: "Express.js", category: "backend", level: 88, highlight: "Routing, Middleware, JWT Security" },
  { name: "MongoDB", category: "backend", level: 84, highlight: "Mongoose, Aggregations" },
  { name: "MySQL", category: "backend", level: 85, highlight: "Normalized 3NF, Indexing" },
  { name: "Git & GitHub", category: "embedded", level: 90, highlight: "Version Control, Branching" },
  { name: "Streamlit", category: "analytics", level: 86, highlight: "ML Interactive Web Apps" },
  { name: "Power BI", category: "analytics", level: 82, highlight: "Executive Dashboards, DAX" }
];

export const timelineData = [
  {
    type: "education",
    year: "2022 - Present",
    title: "MBA Tech (Computer Engineering)",
    institution: "Mukesh Patel School of Technology Management & Engineering",
    description: "Pursuing an integrated 5-year dual degree combining Computer Engineering technical foundation with strategic business management. Focused on full-stack web applications, algorithms, data analytics, and product management.",
    badges: ["Dual Degree", "Computer Engineering", "Business Management"]
  },
  {
    type: "internship",
    year: "2024",
    title: "Full Stack & Embedded Systems Projects",
    institution: "Academic Engineering Workshops",
    description: "Designed and implemented end-to-end applications including WiFi-controlled robotics, MERN stack web clones, ML churn prediction dashboards, and smart micro-controller systems.",
    badges: ["React.js", "Python ML", "Node.js", "Embedded Systems"]
  },
  {
    type: "achievement",
    year: "2024",
    title: "Robotics & Innovation Workshop Lead",
    institution: "Technical Competition",
    description: "Successfully built and demonstrated a WiFi-controlled robotic car with sub-50ms latency response during technical workshops.",
    badges: ["Robotics", "ESP8266", "Embedded C++"]
  },
  {
    type: "certification",
    year: "2023 - 2024",
    title: "Certifications in Full Stack & Machine Learning",
    institution: "Coursera / Udemy / HackerRank",
    description: "Completed certified tracks in React Web Development, Python for Data Science & ML, Relational SQL Database Architecture, and Advanced C++ Algorithms.",
    badges: ["Python Certified", "React Developer", "SQL Advanced"]
  }
];

export const funFacts = [
  { label: "Lines of Code Written", value: "95,000+", icon: "Code" },
  { label: "Coffee Cups Brewed", value: "380+", icon: "Coffee" },
  { label: "LeetCode Problems Solved", value: "180+", icon: "Zap" },
  { label: "Favorite Tech Stack", value: "React + C++ / Python", icon: "Layers" },
  { label: "Currently Learning", value: "AI Agents & LLM Integration", icon: "BookOpen" }
];

export const testimonialsData = [
  {
    quote: "Lakshay Agrawal brings a rare combination of hardware-level curiosity and polished full-stack software craftsmanship. His WiFi robotic car and MERN projects demonstrate real engineering breadth.",
    author: "Computer Engineering Professor",
    role: "Department Lead",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "Lakshay's Bank Churn ML dashboard and Criminal Record DB systems were remarkably structured. Clean code, clear relational schemas, and an eye for intuitive UI design.",
    author: "Project Mentor",
    role: "Senior Software Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  }
];

export const blogPosts = [
  {
    title: "Building a WiFi Controlled Robotic Car with ESP8266 & C++",
    excerpt: "How I engineered sub-50ms wireless control signal pipelines for microcontrollers.",
    date: "July 2024",
    readTime: "5 min read",
    tags: ["Robotics", "C++", "IoT"]
  },
  {
    title: "Predicting Bank Customer Churn with Python & Streamlit",
    excerpt: "Building an XGBoost machine learning model and publishing an interactive web dashboard.",
    date: "June 2024",
    readTime: "4 min read",
    tags: ["Machine Learning", "Python", "Streamlit"]
  },
  {
    title: "Why MBA Tech Engineers Build Better SaaS Products",
    excerpt: "Bridging business strategy with technical clean code for modern software teams.",
    date: "May 2024",
    readTime: "6 min read",
    tags: ["Career", "Full Stack", "Product"]
  }
];
