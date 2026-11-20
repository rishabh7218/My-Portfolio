// Portfolio data for Rishabh Patel
export const portfolioData = {
  // Personal Info
  name: 'Rishabh Patel',
  title: 'Data Analyst | Power BI • SQL • Excel • Python | MIS Reporting & Dashboards',
  email: 'rp331695@gmail.com',
  phone: '+91-9294536015',
  location: 'Jabalpur, Madhya Pradesh, India',
  bio: 'B.Tech CSE graduate (CGPA: 7.29, First Division) passionate about transforming raw data into actionable business insights. Proficient in Power BI, Advanced Excel, SQL, and Python for exploratory data analysis. Completed industry simulations with Tata, Deloitte, and Microsoft. Open to Data Analyst, MIS Executive, and Reporting Analyst roles.',
  
  // Links
  linkedin: 'https://www.linkedin.com/in/rishabh-patel-703673275/',
  github: 'https://github.com',
  
  // Education
  education: [
    {
      id: 1,
      school: 'Shri Ram Institute of Technology, Jabalpur',
      degree: 'B.Tech - Computer Science & Engineering',
      university: 'RGPV, Bhopal',
      year: '2022 - 2026',
      gpa: '7.29',
      honors: 'First Division',
      details: 'Enrollment: 0205CO221066'
    },
    {
      id: 2,
      school: 'Model Higher Secondary School, Maihar',
      degree: '12th - Mathematics',
      year: '2022',
      gpa: '66%',
      details: 'Madhya Pradesh'
    }
  ],

  // Skills
  skills: [
    {
      id: 1,
      category: 'Data & BI',
      items: [
        'Advanced Excel (Pivot Tables, Power Query, VLOOKUP, XLOOKUP, MIS Dashboards)',
        'Power BI (DAX, Data Modeling, KPI Cards, Slicers)',
        'SQL (Joins, Aggregations, Subqueries, Group By)'
      ]
    },
    {
      id: 2,
      category: 'Data Science / AI',
      items: [
        'Exploratory Data Analysis (EDA)',
        'Risk Profiling',
        'Delinquency Prediction',
        'Data Storytelling',
        'GenAI-powered Analytics'
      ]
    },
    {
      id: 3,
      category: 'Programming',
      items: [
        'Python (Pandas, data cleaning, scripting)',
        'Bash / Linux CLI',
        'Git & GitHub'
      ]
    },
    {
      id: 4,
      category: 'MIS & Reporting',
      items: [
        'MIS Reporting',
        'Dashboard Design',
        'Business Reporting',
        'KPI Tracking'
      ]
    },
    {
      id: 5,
      category: 'Cloud & Networking',
      items: [
        'Microsoft Azure (Architecture, Networking, IAM, Security)',
        'Linux',
        'Cisco Networking Fundamentals'
      ]
    }
  ],

  // Experience & Internships
  experience: [
    {
      id: 1,
      title: 'Data Analytics Virtual Intern',
      company: 'Tata (via Forage)',
      date: 'July 2026',
      description: 'GenAI Powered Data Analytics Job Simulation',
      bullets: [
        'Conducted exploratory data analysis and credit risk profiling on real-world financial datasets',
        'Developed AI models to predict loan delinquency, achieving measurable improvement in classification accuracy',
        'Designed a business report and data storytelling deck to communicate collections strategy to stakeholders',
        'Implemented an end-to-end AI-driven collections strategy aligned with business KPIs'
      ]
    },
    {
      id: 2,
      title: 'AI Virtual Intern',
      company: 'Microsoft / Edunet Foundation / AICTE',
      date: 'April - May 2025',
      description: 'Foundations of AI Internship',
      bullets: [
        'Completed a structured 4-week program covering AI and ML fundamentals',
        'Applied Python-based techniques for data preprocessing and exploratory analysis',
        'Practised model evaluation and data preparation pipelines'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Analyst Virtual Intern',
      company: 'Tata (via Forage)',
      date: 'July 2025',
      description: 'Cybersecurity Analyst Job Simulation',
      bullets: [
        'Gained hands-on experience in Identity and Access Management (IAM) fundamentals',
        'Assessed IAM strategy and crafted custom IAM solutions',
        'Managed platform integration to meet enterprise security requirements'
      ]
    },
    {
      id: 4,
      title: 'Cybersecurity Virtual Intern',
      company: 'Deloitte (via Forage)',
      date: 'July 2025',
      description: 'Cyber Job Simulation',
      bullets: [
        'Completed practical cybersecurity tasks simulating the role of a Deloitte analyst'
      ]
    },
    {
      id: 5,
      title: 'Cybersecurity Virtual Intern',
      company: 'Cisco / AICTE / Skill India',
      date: 'May - July 2024',
      description: 'Cisco Virtual Internship',
      bullets: [
        'Completed a government-backed virtual cybersecurity internship through Cisco Networking Academy',
        'Studied network security fundamentals and threat identification'
      ]
    }
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: 'COVID-19 Statewise Analytics Dashboard',
      description: 'Interactive Power BI dashboard visualizing statewise COVID-19 data with dynamic filtering and drill-down capabilities',
      technologies: ['Power BI', 'Excel', 'Data Modeling', 'DAX'],
      achievements: [
        'Built an interactive Power BI dashboard with KPI cards, slicers, and drill-down charts',
        'Enabled dynamic state-level filtering to support comparative analysis',
        'Visualized confirmed, recovered, and deceased cases with trend analysis'
      ],
      github: 'https://github.com',
      image: '/projects/covid-dashboard.png',
      features: ['Real-time data visualization', 'Multi-level drill-through', 'Custom DAX measures']
    },
    {
      id: 2,
      title: 'Sales Data Analysis Dashboard',
      description: 'Comprehensive Power BI and Excel solution for analyzing 10,000+ sales records and identifying business trends',
      technologies: ['Power BI', 'Excel', 'SQL', 'Data Analysis'],
      achievements: [
        'Analysed a 10,000+ record sales dataset using SQL queries and Power BI',
        'Identified top-performing regions and product categories',
        'Delivered an interactive dashboard with DAX measures and executive-level summary visuals'
      ],
      github: 'https://github.com',
      image: '/projects/sales-dashboard.png',
      features: ['SQL queries', 'Trend analysis', 'Executive summaries', 'Performance metrics']
    }
  ],

  // Certifications
  certifications: [
    {
      id: 1,
      title: 'GenAI Powered Data Analytics Job Simulation',
      issuer: 'Tata / Forage',
      date: 'July 2026',
      category: 'Data Analytics'
    },
    {
      id: 2,
      title: 'Describe Core Architectural Components of Azure',
      issuer: 'Microsoft Learn',
      date: 'June 2026',
      category: 'Cloud'
    },
    {
      id: 3,
      title: 'Describe Azure Identity, Access & Security',
      issuer: 'Microsoft Learn',
      date: 'June 2026',
      category: 'Cloud'
    },
    {
      id: 4,
      title: 'Describe Azure Networking Services',
      issuer: 'Microsoft Learn',
      date: 'June 2026',
      category: 'Cloud'
    },
    {
      id: 5,
      title: 'Foundations of AI Internship',
      issuer: 'Microsoft / Edunet / AICTE',
      date: 'May 2025',
      category: 'AI & Data'
    },
    {
      id: 6,
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco Networking Academy',
      date: 'May 2024',
      category: 'Cybersecurity'
    },
    {
      id: 7,
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: 'May 2025',
      category: 'Cybersecurity'
    },
    {
      id: 8,
      title: 'Exploring Networking with Cisco Packet Tracer',
      issuer: 'Cisco Networking Academy',
      date: 'October 2025',
      category: 'Networking'
    },
    {
      id: 9,
      title: 'NDG Linux Unhatched',
      issuer: 'Cisco Networking Academy',
      date: 'May 2024',
      category: 'Linux'
    },
    {
      id: 10,
      title: 'Cybersecurity Analyst Job Simulation',
      issuer: 'Tata / Forage',
      date: 'July 2025',
      category: 'Cybersecurity'
    },
    {
      id: 11,
      title: 'Cyber Job Simulation',
      issuer: 'Deloitte / Forage',
      date: 'July 2025',
      category: 'Cybersecurity'
    },
    {
      id: 12,
      title: 'Cisco AICTE Virtual Internship – Cybersecurity',
      issuer: 'Cisco / AICTE',
      date: 'July 2024',
      category: 'Cybersecurity'
    },
    {
      id: 13,
      title: 'CCNA: Enterprise Networking, Security and Automation',
      issuer: 'Cisco',
      date: 'In Progress',
      category: 'Networking'
    }
  ]
}
