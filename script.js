// --- Anna University Regulation 2021 Syllabus Presets Database ---
const SYLLABUS_PRESETS = {
  cse: {
    1: [
      { code: "HS3152", name: "Professional English I", credits: 3 },
      { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
      { code: "PH3151", name: "Engineering Physics", credits: 3 },
      { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
      { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
      { code: "GE3152", name: "Heritage of Tamils", credits: 1 },
      { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
      { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
      { code: "GE3172", name: "English Laboratory", credits: 1 }
    ],
    2: [
      { code: "HS3252", name: "Professional English II", credits: 2 },
      { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
      { code: "PH3256", name: "Physics for Information Science", credits: 3 },
      { code: "BE3251", name: "Basic Electrical and Electronics Engineering", credits: 3 },
      { code: "GE3251", name: "Engineering Graphics", credits: 4 },
      { code: "CS3251", name: "Programming in C", credits: 3 },
      { code: "GE3252", name: "Tamils and Technology", credits: 1 },
      { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 },
      { code: "CS3271", name: "Programming in C Laboratory", credits: 2 },
      { code: "GE3272", name: "Communication Laboratory", credits: 2 }
    ],
    3: [
      { code: "MA3354", name: "Discrete Mathematics", credits: 4 },
      { code: "CS3351", name: "Digital Principles and Computer Organization", credits: 4 },
      { code: "CS3352", name: "Foundations of Data Science", credits: 3 },
      { code: "CS3301", name: "Data Structures", credits: 3 },
      { code: "CS3391", name: "Object Oriented Programming", credits: 3 },
      { code: "CS3311", name: "Data Structures Laboratory", credits: 1.5 },
      { code: "CS3381", name: "Object Oriented Programming Laboratory", credits: 1.5 },
      { code: "CS3361", name: "Data Science Laboratory", credits: 2 },
      { code: "GE3361", name: "Professional Development", credits: 1 }
    ],
    4: [
      { code: "CS3452", name: "Theory of Computation", credits: 3 },
      { code: "CS3491", name: "Artificial Intelligence and Machine Learning", credits: 4 },
      { code: "CS3492", name: "Database Management Systems", credits: 3 },
      { code: "CS3401", name: "Algorithms", credits: 4 },
      { code: "CS3451", name: "Introduction to Operating Systems", credits: 3 },
      { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
      { code: "CS3461", name: "Operating Systems Laboratory", credits: 1.5 },
      { code: "CS3481", name: "Database Management Systems Laboratory", credits: 1.5 }
    ],
    5: [
      { code: "CS3591", name: "Computer Networks", credits: 4 },
      { code: "CS3501", name: "Compiler Design", credits: 4 },
      { code: "CB3491", name: "Cryptography and Cyber Security", credits: 3 },
      { code: "CS3551", name: "Distributed Computing", credits: 3 },
      { code: "PEC-I", name: "Professional Elective I", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-II", name: "Professional Elective II", credits: 3, isElective: true, electiveType: "PEC" }
    ],
    6: [
      { code: "CCS356", name: "Object Oriented Software Engineering", credits: 4 },
      { code: "CS3691", name: "Embedded Systems and IoT", credits: 4 },
      { code: "OEC-I", name: "Open Elective I", credits: 3, isElective: true, electiveType: "OEC-I" },
      { code: "PEC-III", name: "Professional Elective III", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-IV", name: "Professional Elective IV", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-V", name: "Professional Elective V", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-VI", name: "Professional Elective VI", credits: 3, isElective: true, electiveType: "PEC" }
    ],
    7: [
      { code: "GE3791", name: "Human Values and Ethics", credits: 2 },
      { code: "MGT", name: "Management Elective", credits: 3, isElective: true, electiveType: "MGT" },
      { code: "OEC-II", name: "Open Elective II", credits: 3, isElective: true, electiveType: "OEC-II" },
      { code: "OEC-III", name: "Open Elective III", credits: 3, isElective: true, electiveType: "OEC-III" },
      { code: "OEC-IV", name: "Open Elective IV", credits: 3, isElective: true, electiveType: "OEC-IV" },
      { code: "CS3711", name: "Summer Internship", credits: 2 }
    ],
    8: [
      { code: "CS3811", name: "Project Work / Internship", credits: 10 }
    ]
  },
  cyber: {
    1: [
      { code: "HS3152", name: "Professional English I", credits: 3 },
      { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
      { code: "PH3151", name: "Engineering Physics", credits: 3 },
      { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
      { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
      { code: "GE3152", name: "Heritage of Tamils", credits: 1 },
      { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
      { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
      { code: "GE3172", name: "English Laboratory", credits: 1 }
    ],
    2: [
      { code: "HS3252", name: "Professional English II", credits: 2 },
      { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
      { code: "PH3256", name: "Physics for Information Science", credits: 3 },
      { code: "BE3251", name: "Basic Electrical and Electronics Engineering", credits: 3 },
      { code: "GE3251", name: "Engineering Graphics", credits: 4 },
      { code: "CS3251", name: "Programming in C", credits: 3 },
      { code: "GE3252", name: "Tamils and Technology", credits: 1 },
      { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 },
      { code: "CS3271", name: "Programming in C Laboratory", credits: 2 },
      { code: "GE3272", name: "Communication Laboratory / Foreign Language", credits: 2 }
    ],
    3: [
      { code: "MA3354", name: "Discrete Mathematics", credits: 4 },
      { code: "CS3351", name: "Digital Principles and Computer Organization", credits: 4 },
      { code: "CS3352", name: "Foundations of Data Science", credits: 3 },
      { code: "CD3291", name: "Data Structures and Algorithms", credits: 3 },
      { code: "CS3391", name: "Object Oriented Programming", credits: 3 },
      { code: "CD3281", name: "Data Structures and Algorithms Laboratory", credits: 2 },
      { code: "CS3381", name: "Object Oriented Programming Laboratory", credits: 1.5 },
      { code: "CS3361", name: "Data Science Laboratory", credits: 2 },
      { code: "GE3361", name: "Professional Development", credits: 1 }
    ],
    4: [
      { code: "CS3452", name: "Theory of Computation", credits: 3 },
      { code: "CS3491", name: "Artificial Intelligence and Machine Learning", credits: 4 },
      { code: "CB3401", name: "Database Management Systems and Security", credits: 3 },
      { code: "CB3402", name: "Operating Systems and Security", credits: 4 },
      { code: "CB3491", name: "Cryptography and Cyber Security", credits: 3 },
      { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
      { code: "CB3411", name: "Cryptography and Cyber Security Laboratory", credits: 1.5 },
      { code: "CB3412", name: "Database Management Systems and Security Laboratory", credits: 2 }
    ],
    5: [
      { code: "CS3551", name: "Distributed Computing", credits: 3 },
      { code: "CB3591", name: "Engineering Secure Software Systems", credits: 3 },
      { code: "CS3691", name: "Embedded Systems and IoT", credits: 4 },
      { code: "CS3591", name: "Computer Networks", credits: 4 },
      { code: "PEC-I", name: "Professional Elective I", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-II", name: "Professional Elective II", credits: 3, isElective: true, electiveType: "PEC" }
    ],
    6: [
      { code: "CB3601", name: "Cyber Forensics", credits: 4 },
      { code: "CB3602", name: "Network Security", credits: 4 },
      { code: "OEC-I", name: "Open Elective I", credits: 3, isElective: true, electiveType: "OEC-I" },
      { code: "PEC-III", name: "Professional Elective III", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-IV", name: "Professional Elective IV", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-V", name: "Professional Elective V", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-VI", name: "Professional Elective VI", credits: 3, isElective: true, electiveType: "PEC" }
    ],
    7: [
      { code: "GE3791", name: "Human Values and Ethics", credits: 2 },
      { code: "MGT", name: "Management Elective", credits: 3, isElective: true, electiveType: "MGT" },
      { code: "OEC-II", name: "Open Elective II", credits: 3, isElective: true, electiveType: "OEC-II" },
      { code: "OEC-III", name: "Open Elective III", credits: 3, isElective: true, electiveType: "OEC-III" },
      { code: "OEC-IV", name: "Open Elective IV", credits: 3, isElective: true, electiveType: "OEC-IV" },
      { code: "CB3711", name: "Summer Internship", credits: 2 }
    ],
    8: [
      { code: "CB3811", name: "Project Work / Internship", credits: 10 }
    ]
  },
  aids: {
    1: [
      { code: "HS3152", name: "Professional English I", credits: 3 },
      { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
      { code: "PH3151", name: "Engineering Physics", credits: 3 },
      { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
      { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
      { code: "GE3152", name: "Heritage of Tamils", credits: 1 },
      { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
      { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
      { code: "GE3172", name: "English Laboratory", credits: 1 }
    ],
    2: [
      { code: "HS3252", name: "Professional English II", credits: 2 },
      { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
      { code: "PH3256", name: "Physics for Information Science", credits: 3 },
      { code: "BE3251", name: "Basic Electrical and Electronics Engineering", credits: 3 },
      { code: "GE3251", name: "Engineering Graphics", credits: 4 },
      { code: "AD3251", name: "Data Structures Design", credits: 3 },
      { code: "GE3252", name: "Tamils and Technology", credits: 1 },
      { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 },
      { code: "AD3271", name: "Data Structures Design Laboratory", credits: 2 },
      { code: "GE3272", name: "Communication Laboratory / Foreign Language", credits: 2 }
    ],
    3: [
      { code: "MA3354", name: "Discrete Mathematics", credits: 4 },
      { code: "CS3351", name: "Digital Principles and Computer Organization", credits: 4 },
      { code: "AD3391", name: "Database Design and Management", credits: 3 },
      { code: "AD3351", name: "Design and Analysis of Algorithms", credits: 4 },
      { code: "AD3301", name: "Data Exploration and Visualization", credits: 4 },
      { code: "AL3391", name: "Artificial Intelligence", credits: 3 },
      { code: "AD3381", name: "Database Design and Management Laboratory", credits: 1.5 },
      { code: "AD3311", name: "Artificial Intelligence Laboratory", credits: 1.5 },
      { code: "GE3361", name: "Professional Development", credits: 1 }
    ],
    4: [
      { code: "MA3391", name: "Probability and Statistics", credits: 4 },
      { code: "AL3452", name: "Operating Systems", credits: 4 },
      { code: "AL3451", name: "Machine Learning", credits: 3 },
      { code: "AD3491", name: "Fundamentals of Data Science and Analytics", credits: 3 },
      { code: "CS3591", name: "Computer Networks", credits: 4 },
      { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
      { code: "AD3411", name: "Data Science and Analytics Laboratory", credits: 2 },
      { code: "AD3461", name: "Machine Learning Laboratory", credits: 2 }
    ],
    5: [
      { code: "AD3501", name: "Deep Learning", credits: 3 },
      { code: "CW3551", name: "Data and Information Security", credits: 3 },
      { code: "CS3551", name: "Distributed Computing", credits: 3 },
      { code: "CCS334", name: "Big Data Analytics", credits: 3 },
      { code: "PEC-I", name: "Professional Elective I", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-II", name: "Professional Elective II", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "AD3511", name: "Deep Learning Laboratory", credits: 2 },
      { code: "AD3512", name: "Summer Internship", credits: 2 }
    ],
    6: [
      { code: "CS3691", name: "Embedded Systems and IoT", credits: 4 },
      { code: "OEC-I", name: "Open Elective I", credits: 3, isElective: true, electiveType: "OEC-I" },
      { code: "PEC-III", name: "Professional Elective III", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-IV", name: "Professional Elective IV", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-V", name: "Professional Elective V", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-VI", name: "Professional Elective VI", credits: 3, isElective: true, electiveType: "PEC" }
    ],
    7: [
      { code: "GE3791", name: "Human Values and Ethics", credits: 2 },
      { code: "MGT", name: "Management Elective", credits: 3, isElective: true, electiveType: "MGT" },
      { code: "OEC-II", name: "Open Elective II", credits: 3, isElective: true, electiveType: "OEC-II" },
      { code: "OEC-III", name: "Open Elective III", credits: 3, isElective: true, electiveType: "OEC-III" },
      { code: "OEC-IV", name: "Open Elective IV", credits: 3, isElective: true, electiveType: "OEC-IV" }
    ],
    8: [
      { code: "AD3811", name: "Project Work / Internship", credits: 10 }
    ]
  }
};

// --- Electives Lists ---
const ELECTIVES = {
  PEC: {
    cse: [
      { code: "CCS346", name: "Exploratory Data Analysis" },
      { code: "CCS360", name: "Recommender Systems" },
      { code: "CCS355", name: "Neural Networks and Deep Learning" },
      { code: "CCS369", name: "Text and Speech Analysis" },
      { code: "CCW331", name: "Business Analytics" },
      { code: "CCS349", name: "Image and Video Analytics" },
      { code: "CCS338", name: "Computer Vision" },
      { code: "CCS334", name: "Big Data Analytics" },
      { code: "CCS375", name: "Web Technologies" },
      { code: "CCS332", name: "App Development" },
      { code: "CCS336", name: "Cloud Services Management" },
      { code: "CCS370", name: "UI and UX Design" },
      { code: "CCS366", name: "Software Testing and Automation" },
      { code: "CCS374", name: "Web Application Security" },
      { code: "CCS342", name: "DevOps" },
      { code: "CCS358", name: "Principles of Programming Languages" },
      { code: "CCS335", name: "Cloud Computing" },
      { code: "CCS372", name: "Virtualization" },
      { code: "CCS341", name: "Data Warehousing" },
      { code: "CCS367", name: "Storage Technologies" },
      { code: "CCS365", name: "Software Defined Networks" },
      { code: "CCS368", name: "Stream Processing" },
      { code: "CCS362", name: "Security and Privacy in Cloud" },
      { code: "CCS344", name: "Ethical Hacking" },
      { code: "CCS343", name: "Digital and Mobile Forensics" },
      { code: "CCS363", name: "Social Network Security" },
      { code: "CCS351", name: "Modern Cryptography" },
      { code: "CB3591", name: "Engineering Secure Software Systems" },
      { code: "CCS339", name: "Cryptocurrency & Blockchain Technologies" },
      { code: "CCS354", name: "Network Security" },
      { code: "CCS333", name: "Augmented Reality / Virtual Reality" },
      { code: "CCS361", name: "Robotic Process Automation" },
      { code: "CCS340", name: "Cyber Security" },
      { code: "CCS359", name: "Quantum Computing" },
      { code: "CCS347", name: "Game Development" },
      { code: "CCS331", name: "3D Printing and Design" },
      { code: "CCS350", name: "Knowledge Engineering" },
      { code: "CCS364", name: "Soft Computing" },
      { code: "CCS357", name: "Optimization Techniques" },
      { code: "CCS348", name: "Game Theory" },
      { code: "CCS337", name: "Cognitive Science" },
      { code: "CCS345", name: "Ethics and AI" }
    ],
    cyber: [
      // Vertical 1: Full Stack Development
      { code: "CCS375", name: "Web Technologies" },
      { code: "CCS332", name: "App Development" },
      { code: "CCS336", name: "Cloud Services Management" },
      { code: "CCS370", name: "UI and UX Design" },
      { code: "CCS366", name: "Software Testing and Automation" },
      { code: "CCS358", name: "Principles of Programming Languages" },
      { code: "CCS342", name: "DevOps" },
      { code: "CCS374", name: "Web Application Security" },
      // Vertical 2: Cloud Computing and Data Center Technologies
      { code: "CCS335", name: "Cloud Computing" },
      { code: "CCS372", name: "Virtualization" },
      { code: "CCS341", name: "Data Warehousing" },
      { code: "CCS367", name: "Storage Technologies" },
      { code: "CCS365", name: "Software Defined Networks" },
      { code: "CCS362", name: "Security and Privacy in Cloud" },
      { code: "CCS368", name: "Stream Processing" },
      // Vertical 3: Cyber Security and Data Privacy
      { code: "CCS344", name: "Ethical Hacking" },
      { code: "CB3001", name: "Malware Analysis" },
      { code: "CCS363", name: "Social Network Security" },
      { code: "CCS351", name: "Modern Cryptography" },
      { code: "CCS343", name: "Digital and Mobile Forensics" },
      { code: "CCS339", name: "Cryptocurrency and Blockchain Technologies" },
      // Vertical 4: Emerging Technologies
      { code: "CCS333", name: "Augmented Reality / Virtual Reality" },
      { code: "CCS361", name: "Robotic Process Automation" },
      { code: "CCS355", name: "Neural Networks and Deep Learning" },
      { code: "CCS340", name: "Cyber Security" },
      { code: "CCS359", name: "Quantum Computing" },
      { code: "CCS347", name: "Game Development" },
      { code: "CCS331", name: "3D Printing and Design" }
    ],
    aids: [
      // Verticals combined
      { code: "AD3001", name: "Bio-Inspired Optimization Techniques" },
      { code: "CCS332", name: "App Development" },
      { code: "AD3002", name: "Health Care Analytics" },
      { code: "CCS340", name: "Cyber Security" },
      { code: "CCS357", name: "Optimization Techniques" },
      { code: "CCS348", name: "Game Theory" },
      { code: "CCS337", name: "Cognitive Science" },
      { code: "CCS345", name: "Ethics and AI" },
      { code: "CCS333", name: "Augmented Reality/Virtual Reality" },
      { code: "CCS361", name: "Robotic Process Automation" },
      { code: "CCS355", name: "Neural Networks and Deep Learning" },
      { code: "CCS359", name: "Quantum Computing" },
      { code: "CCS339", name: "Cryptocurrency and Blockchain Technologies" },
      { code: "CCS347", name: "Game Development" },
      { code: "CCS331", name: "3D Printing and Design" },
      { code: "CCS352", name: "Multimedia and Animation" },
      { code: "CCS371", name: "Video Creation and Editing" },
      { code: "CCS370", name: "UI and UX Design" },
      { code: "CCW332", name: "Digital Marketing" },
      { code: "CCS353", name: "Multimedia Data Compression and Storage" },
      { code: "CCS373", name: "Visual Effects" },
      { code: "CCS344", name: "Ethical Hacking" },
      { code: "CCS343", name: "Digital and Mobile Forensics" },
      { code: "CCS363", name: "Social Network Security" },
      { code: "CCS351", name: "Modern Cryptography" },
      { code: "CB3591", name: "Engineering Secure Software Systems" },
      { code: "CCS354", name: "Network Security" },
      { code: "CCS362", name: "Security and Privacy in Cloud" },
      { code: "CCS335", name: "Cloud Computing" },
      { code: "CCS372", name: "Virtualization" },
      { code: "CCS336", name: "Cloud Services Management" },
      { code: "CCS341", name: "Data Warehousing" },
      { code: "CCS367", name: "Storage Technologies" },
      { code: "CCS365", name: "Software Defined Networks" },
      { code: "CCS368", name: "Stream Processing" },
      { code: "CCS366", name: "Software Testing and Automation" },
      { code: "CCS374", name: "Web Application Security" },
      { code: "CCS342", name: "DevOps" },
      { code: "CCS358", name: "Principles of Programming Languages" },
      { code: "CCS350", name: "Knowledge Engineering" },
      { code: "CCS360", name: "Recommender Systems" },
      { code: "CCS364", name: "Soft Computing" },
      { code: "CCS369", name: "Text and Speech Analysis" },
      { code: "CCW331", name: "Business Analytics" },
      { code: "CCS349", name: "Image and Video Analytics" },
      { code: "CCS338", name: "Computer Vision" }
    ]
  },
  "OEC-I": [
    { code: "OAS351", name: "Space Science" },
    { code: "OIE351", name: "Introduction to Industrial Engineering" },
    { code: "OBT351", name: "Food, Nutrition and Health" },
    { code: "OCE351", name: "Environmental and Social Impact Assessment" },
    { code: "OEE351", name: "Renewable Energy System" },
    { code: "OEI351", name: "Introduction to Industrial Instrumentation and Control" },
    { code: "OMA351", name: "Graph Theory" }
  ],
  "OEC-II": [
    { code: "OIE352", name: "Resource Management Techniques" },
    { code: "OMG351", name: "Fintech Regulation" },
    { code: "OFD351", name: "Holistic Nutrition" },
    { code: "AI3021", name: "IT in Agricultural System" },
    { code: "OEI352", name: "Introduction to Control Engineering" },
    { code: "OPY351", name: "Pharmaceutical Nanotechnology" },
    { code: "OAE351", name: "Aviation Management" }
  ],
  "OEC-III": [
    { code: "OHS351", name: "English for Competitive Examinations" },
    { code: "OMG352", name: "NGOs and Sustainable Development" },
    { code: "OMG353", name: "Democracy and Good Governance" },
    { code: "CME365", name: "Renewable Energy Technologies" },
    { code: "OME354", name: "Applied Design Thinking" },
    { code: "MF3003", name: "Reverse Engineering" },
    { code: "OPR351", name: "Sustainable Manufacturing" },
    { code: "AU3791", name: "Electric and Hybrid Vehicles" },
    { code: "OAS352", name: "Space Engineering" },
    { code: "OIM351", name: "Industrial Management" },
    { code: "OIE354", name: "Quality Engineering" },
    { code: "OSF351", name: "Fire Safety Engineering" },
    { code: "OML351", name: "Introduction to Non-destructive Testing" },
    { code: "OMR351", name: "Mechatronics" },
    { code: "ORA351", name: "Foundation of Robotics" },
    { code: "OAE352", name: "Fundamentals of Aeronautical Engineering" },
    { code: "OGI351", name: "Remote Sensing Concepts" },
    { code: "OAI351", name: "Urban Agriculture" },
    { code: "OEN351", name: "Drinking Water Supply and Treatment" },
    { code: "OEE352", name: "Electric Vehicle Technology" },
    { code: "OEI353", name: "Introduction to PLC Programming" },
    { code: "OCH351", name: "Nano Technology" },
    { code: "OCH352", name: "Functional Materials" },
    { code: "OFD352", name: "Traditional Indian Foods" },
    { code: "OFD353", name: "Introduction to Food Processing" },
    { code: "OPY352", name: "IPR for Pharma Industry" },
    { code: "OTT351", name: "Basics of Textile Finishing" },
    { code: "OTT352", name: "Industrial Engineering for Garment Industry" },
    { code: "OTT353", name: "Basics of Textile Manufacture" },
    { code: "OPE351", name: "Introduction to Petroleum Refining and Petrochemicals" },
    { code: "CPE334", name: "Energy Conservation and Management" },
    { code: "OPT351", name: "Basics of Plastics Processing" },
    { code: "OEC351", name: "Signals and Systems" },
    { code: "OEC352", name: "Fundamentals of Electronic Devices and Circuits" },
    { code: "CBM348", name: "Foundation Skills in Integrated Product Development" },
    { code: "CBM333", name: "Assistive Technology" },
    { code: "OMA352", name: "Operations Research" },
    { code: "OMA353", name: "Algebra and Number Theory" },
    { code: "OMA354", name: "Linear Algebra" },
    { code: "OCE353", name: "Lean Concepts, Tools and Practices" },
    { code: "OBT352", name: "Basics of Microbial Technology" },
    { code: "OBT353", name: "Basics of Biomolecules" },
    { code: "OBT354", name: "Fundamentals of Cell and Molecular Biology" }
  ],
  "OEC-IV": [
    { code: "OHS352", name: "Project Report Writing" },
    { code: "OMA355", name: "Advanced Numerical Methods" },
    { code: "OMA356", name: "Random Processes" },
    { code: "OMA357", name: "Queuing and Reliability Modelling" },
    { code: "OMG354", name: "Production and Operations Management for Entrepreneurs" },
    { code: "OMG355", name: "Multivariate Data Analysis" },
    { code: "OME352", name: "Additive Manufacturing" },
    { code: "CME343", name: "New Product Development" },
    { code: "OME355", name: "Industrial Design and Rapid Prototyping Techniques" },
    { code: "MF3010", name: "Micro and Precision Engineering" },
    { code: "OMF354", name: "Cost Management of Engineering Projects" },
    { code: "AU3002", name: "Batteries and Management System" },
    { code: "AU3008", name: "Sensors and Actuators" },
    { code: "OAS353", name: "Space Vehicles" },
    { code: "OIM352", name: "Management Science" },
    { code: "OIM353", name: "Production Planning and Control" },
    { code: "OIE353", name: "Operations Management" },
    { code: "OSF352", name: "Industrial Hygiene" },
    { code: "OSF353", name: "Chemical Process Safety" },
    { code: "OML352", name: "Electrical, Electronic and Magnetic Materials" },
    { code: "OML353", name: "Nanomaterials and Applications" },
    { code: "OMR352", name: "Hydraulics and Pneumatics" },
    { code: "OMR353", name: "Sensors" },
    { code: "ORA352", name: "Concepts in Mobile Robots" },
    { code: "MV3501", name: "Marine Propulsion" },
    { code: "OMV351", name: "Marine Merchant Vessels" },
    { code: "OMV352", name: "Elements of Marine Engineering" },
    { code: "CRA332", name: "Drone Technologies" },
    { code: "OGI352", name: "Geographical Information System" },
    { code: "OAI352", name: "Agriculture Entrepreneurship Development" },
    { code: "OEN352", name: "Biodiversity Conservation" },
    { code: "OEE353", name: "Introduction to Control Systems" },
    { code: "OEI354", name: "Introduction to Industrial Automation Systems" },
    { code: "OCH353", name: "Energy Technology" },
    { code: "OCH354", name: "Surface Science" },
    { code: "OFD354", name: "Fundamentals of Food Engineering" },
    { code: "OFD355", name: "Food Safety and Quality Regulations" },
    { code: "OPY353", name: "Nutraceuticals" },
    { code: "OTT354", name: "Basics of Dyeing and Printing" },
    { code: "FT3201", name: "Fibre Science" },
    { code: "OTT355", name: "Garment Manufacturing Technology" },
    { code: "OPE353", name: "Industrial Safety" },
    { code: "OPE354", name: "Unit Operations in Petro Chemical Industries" },
    { code: "OPT352", name: "Plastic Materials for Engineers" },
    { code: "OPT353", name: "Properties and Testing of Plastics" },
    { code: "OEC353", name: "VLSI Design" },
    { code: "CBM370", name: "Wearable Devices" },
    { code: "CBM356", name: "Medical Informatics" },
    { code: "OCE354", name: "Basics of Integrated Water Resources Management" },
    { code: "OBT355", name: "Biotechnology for Waste Management" },
    { code: "OBT356", name: "Lifestyle Diseases" },
    { code: "OBT357", name: "Biotechnology in Health Care" }
  ],
  MGT: [
    { code: "GE3751", name: "Principles of Management" },
    { code: "GE3752", name: "Total Quality Management" },
    { code: "GE3753", name: "Engineering Economics & Financial Accounting" },
    { code: "GE3754", name: "Human Resource Management" },
    { code: "GE3755", name: "Knowledge Management" },
    { code: "GE3792", name: "Industrial Management" }
  ]
};

// --- Grade Points Mapping ---
const GRADE_POINTS = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "RA": 0
};

// --- Active State Variables ---
let activeTab = 'gpa'; // 'gpa' or 'cgpa'
let currentGpaValue = 0;
let currentGpaCredits = 0;
let currentCgpaValue = 0;

// --- DOM Cache ---
const themeToggle = document.getElementById('theme-toggle');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
const tabIndicator = document.querySelector('.tab-indicator');

// GPA elements
const gpaTableBody = document.getElementById('gpa-table-body');
const gpaAddRowBtn = document.getElementById('gpa-add-row');
const gpaResetBtn = document.getElementById('gpa-reset');
const gpaSendToCgpaBtn = document.getElementById('gpa-send-to-cgpa');
const semesterPresetDropdown = document.getElementById('semester-preset');

// CGPA elements
const cgpaTableBody = document.getElementById('cgpa-table-body');
const cgpaAddRowBtn = document.getElementById('cgpa-add-row');
const cgpaResetBtn = document.getElementById('cgpa-reset');

// Dashboard Elements
const dashboardMetricTitle = document.getElementById('dashboard-metric-title');
const dashboardMetricValue = document.getElementById('dashboard-metric-value');
const radialProgressBar = document.getElementById('radial-progress-bar');
const metricTotalCredits = document.getElementById('metric-total-credits');
const metricEarnedCredits = document.getElementById('metric-earned-credits');
const metricGradePoints = document.getElementById('metric-grade-points');
const metricCgpaScore = document.getElementById('metric-cgpa-score');

// PDF export elements
const exportPdfBtn = document.getElementById('export-pdf-btn');
const studentNameInput = document.getElementById('student-name');
const studentRollInput = document.getElementById('student-roll');
const studentRegSelect = document.getElementById('student-reg');
const studentDeptSelect = document.getElementById('student-dept');
const studentCollegeInput = document.getElementById('student-college');

// --- Initialization & Theme Setup ---
document.addEventListener('DOMContentLoaded', () => {
  setupTheme();
  setupTabListeners();
  setupInitialRows();
  setupProfileCache();
  
  // Attach event listeners
  gpaAddRowBtn.addEventListener('click', () => addGpaRow());
  cgpaAddRowBtn.addEventListener('click', () => addCgpaRow());
  
  gpaResetBtn.addEventListener('click', resetGpaTable);
  cgpaResetBtn.addEventListener('click', resetCgpaTable);
  
  gpaSendToCgpaBtn.addEventListener('click', sendGpaToCgpa);
  semesterPresetDropdown.addEventListener('change', handlePresetChange);
  
  // Reload presets automatically if the user changes the department from the profile card
  studentDeptSelect.addEventListener('change', () => {
    if (semesterPresetDropdown.value) {
      handlePresetChange({ target: semesterPresetDropdown });
    }
  });
  
  exportPdfBtn.addEventListener('click', generatePdfTranscript);
  
  // Real-time calculation triggers
  gpaTableBody.addEventListener('input', calculateGpa);
  gpaTableBody.addEventListener('change', calculateGpa);
  cgpaTableBody.addEventListener('input', calculateCgpa);
  cgpaTableBody.addEventListener('change', calculateCgpa);
});

// Setup Dark/Light Theme
function setupTheme() {
  const cachedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (cachedTheme === 'dark' || (!cachedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Setup Student Profile Caching (handles text fields and select inputs)
function setupProfileCache() {
  const fields = ['student-name', 'student-roll', 'student-reg', 'student-dept', 'student-college'];
  fields.forEach(fieldId => {
    const el = document.getElementById(fieldId);
    if (!el) return;
    
    const cachedVal = localStorage.getItem(fieldId);
    if (cachedVal !== null) el.value = cachedVal;
    
    el.addEventListener('change', (e) => {
      localStorage.setItem(fieldId, e.target.value);
    });
    el.addEventListener('input', (e) => {
      localStorage.setItem(fieldId, e.target.value);
    });
  });
}

// Tab navigation control
function setupTabListeners() {
  alignTabIndicator();
  
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      
      btn.classList.add('active');
      const tabName = btn.getAttribute('data-tab');
      document.getElementById(`${tabName}-pane`).classList.add('active');
      activeTab = tabName;
      
      alignTabIndicator();
      updateDashboardValues();
    });
  });
  
  window.addEventListener('resize', alignTabIndicator);
}

function alignTabIndicator() {
  const activeBtn = document.querySelector('.tab-btn.active');
  if (activeBtn && tabIndicator) {
    tabIndicator.style.width = `${activeBtn.offsetWidth}px`;
    tabIndicator.style.left = `${activeBtn.offsetLeft}px`;
  }
}

// Setup standard starting rows based on the default selected department (CSE) Semester 1
function setupInitialRows() {
  // GPA Table Defaults (CSE Semester 1 core subjects)
  addGpaRow("HS3152", "Professional English I", 3);
  addGpaRow("MA3151", "Matrices and Calculus", 4);
  addGpaRow("PH3151", "Engineering Physics", 3);
  
  // CGPA Table Defaults
  addCgpaRow("Semester 1", "", "");
  addCgpaRow("Semester 2", "", "");
  
  calculateGpa();
  calculateCgpa();
}

// --- GPA Calculator Functions ---

// Add Row in GPA Table
function addGpaRow(code = "", name = "", credits = "", isElective = false, electiveType = "") {
  const tr = document.createElement('tr');
  tr.className = 'row-entry';
  
  const rowId = 'gpa-row-' + Math.random().toString(36).substr(2, 9);
  tr.id = rowId;
  
  // Subject Code HTML
  let codeHtml = `<input type="text" placeholder="E.g., CS3301" value="${code}" class="gpa-code-input" />`;
  if (isElective) {
    codeHtml = `<input type="text" placeholder="Select Subject" value="${code}" class="gpa-code-input" readonly />`;
  }
  
  // Subject Name HTML (supports Elective lists dropdown)
  let nameHtml = `<input type="text" placeholder="E.g., Data Structures" value="${name}" class="gpa-name-input" />`;
  if (isElective) {
    let options = [];
    if (electiveType === 'PEC') {
      const currentDept = studentDeptSelect.value || 'cse';
      options = ELECTIVES.PEC[currentDept] || [];
    } else {
      options = ELECTIVES[electiveType] || [];
    }
    
    let optionsHtml = `<option value="" disabled selected>-- Select ${electiveType} --</option>`;
    options.forEach(opt => {
      const isSelected = (opt.name === name || opt.code === code) ? 'selected' : '';
      optionsHtml += `<option value="${opt.code}|${opt.name}" ${isSelected}>${opt.code} - ${opt.name}</option>`;
    });
    
    nameHtml = `
      <select class="gpa-name-input elective-select">
        ${optionsHtml}
      </select>
    `;
  }
  
  tr.innerHTML = `
    <td>${codeHtml}</td>
    <td>${nameHtml}</td>
    <td><input type="number" placeholder="Credits" value="${credits}" min="0" max="10" step="0.5" class="gpa-credit-input" /></td>
    <td>
      <select class="gpa-grade-select">
        <option value="" disabled selected>Grade</option>
        <option value="O">O (Outstanding)</option>
        <option value="A+">A+ (Excellent)</option>
        <option value="A">A (Very Good)</option>
        <option value="B+">B+ (Good)</option>
        <option value="B">B (Average)</option>
        <option value="RA">RA (Re-Appearance)</option>
      </select>
    </td>
    <td>
      <button class="btn-delete" title="Remove Course">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
          <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/>
        </svg>
      </button>
    </td>
  `;
  
  gpaTableBody.appendChild(tr);
  
  // Wire dynamic events
  const deleteBtn = tr.querySelector('.btn-delete');
  deleteBtn.addEventListener('click', () => removeGpaRow(rowId));
  
  const creditInput = tr.querySelector('.gpa-credit-input');
  creditInput.addEventListener('input', () => validateNumberField(creditInput, 0, 10));
  
  // Handle elective selection dropdown updates
  if (isElective) {
    const nameSelect = tr.querySelector('.gpa-name-input');
    const codeInput = tr.querySelector('.gpa-code-input');
    
    nameSelect.addEventListener('change', (e) => {
      const val = e.target.value;
      if (val) {
        const [optCode, optName] = val.split('|');
        codeInput.value = optCode;
        codeInput.classList.remove('validation-error');
        calculateGpa();
      }
    });
  }
}

// Remove GPA Row with exit animation
function removeGpaRow(rowId) {
  const tr = document.getElementById(rowId);
  if (tr) {
    tr.classList.add('row-exit');
    setTimeout(() => {
      tr.remove();
      calculateGpa();
    }, 300);
  }
}

// Reset GPA Calculator
function resetGpaTable() {
  if (gpaTableBody.children.length === 0 || confirm("Are you sure you want to reset the GPA table? All entries will be removed.")) {
    gpaTableBody.innerHTML = "";
    semesterPresetDropdown.value = "";
    calculateGpa();
  }
}

// Handle preset syllabus load (combines selected Department & Semester)
function handlePresetChange(e) {
  const semNum = e.target.value;
  const currentDept = studentDeptSelect.value || 'cse';
  
  const presetCourses = SYLLABUS_PRESETS[currentDept] ? SYLLABUS_PRESETS[currentDept][semNum] : null;
  
  if (!presetCourses) return;
  
  // If there are rows already, ask for confirmation
  const isTriggeredBySelect = e.stopPropagation !== undefined;
  if (isTriggeredBySelect && gpaTableBody.children.length > 0) {
    if (!confirm(`Do you want to load preset for Semester ${semNum}? This will overwrite the current GPA calculator table.`)) {
      e.target.value = "";
      return;
    }
  }
  
  gpaTableBody.innerHTML = "";
  
  presetCourses.forEach(c => {
    addGpaRow(c.code, c.name, c.credits, c.isElective, c.electiveType);
  });
  
  calculateGpa();
}

// --- CGPA Calculator Functions ---

// Add Row in CGPA Table
function addCgpaRow(semLabel = "", gpa = "", credits = "") {
  const tr = document.createElement('tr');
  tr.className = 'row-entry';
  
  const rowId = 'cgpa-row-' + Math.random().toString(36).substr(2, 9);
  tr.id = rowId;
  
  if (!semLabel) {
    const semIndex = cgpaTableBody.children.length + 1;
    semLabel = `Semester ${semIndex}`;
  }
  
  tr.innerHTML = `
    <td><input type="text" placeholder="E.g., Semester 1" value="${semLabel}" class="cgpa-sem-input" /></td>
    <td><input type="number" placeholder="GPA (0.00-10.00)" value="${gpa}" min="0" max="10" step="0.01" class="cgpa-gpa-input" /></td>
    <td><input type="number" placeholder="Credits Earned" value="${credits}" min="1" max="50" step="0.5" class="cgpa-credits-input" /></td>
    <td>
      <button class="btn-delete" title="Remove Semester">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
          <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/>
        </svg>
      </button>
    </td>
  `;
  
  cgpaTableBody.appendChild(tr);
  
  // Wire dynamic events
  const deleteBtn = tr.querySelector('.btn-delete');
  deleteBtn.addEventListener('click', () => removeCgpaRow(rowId));
  
  const gpaInput = tr.querySelector('.cgpa-gpa-input');
  gpaInput.addEventListener('input', () => validateNumberField(gpaInput, 0, 10));
  
  const creditsInput = tr.querySelector('.cgpa-credits-input');
  creditsInput.addEventListener('input', () => validateNumberField(creditsInput, 1, 50));
}

// Remove CGPA Row with exit animation
function removeCgpaRow(rowId) {
  const tr = document.getElementById(rowId);
  if (tr) {
    tr.classList.add('row-exit');
    setTimeout(() => {
      tr.remove();
      calculateCgpa();
    }, 300);
  }
}

// Reset CGPA Calculator
function resetCgpaTable() {
  if (cgpaTableBody.children.length === 0 || confirm("Are you sure you want to reset the CGPA table? All entries will be removed.")) {
    cgpaTableBody.innerHTML = "";
    calculateCgpa();
  }
}

// Bridge: Send current GPA table result to CGPA table
function sendGpaToCgpa() {
  const isValid = validateGpaTable(true);
  
  if (!isValid) {
    alert("Please fix empty credits or grade fields before transferring!");
    return;
  }
  
  if (currentGpaValue <= 0 || currentGpaCredits <= 0) {
    alert("Please input grades and credits to obtain a valid GPA before transferring.");
    return;
  }
  
  let semLabel = "";
  const selectedSem = semesterPresetDropdown.value;
  if (selectedSem) {
    semLabel = `Semester ${selectedSem}`;
  } else {
    const index = cgpaTableBody.children.length + 1;
    semLabel = `Semester ${index}`;
  }
  
  let rowToUpdate = null;
  const semInputs = cgpaTableBody.querySelectorAll('.cgpa-sem-input');
  semInputs.forEach(input => {
    if (input.value.trim().toLowerCase() === semLabel.toLowerCase()) {
      rowToUpdate = input.closest('tr');
    }
  });
  
  if (rowToUpdate) {
    if (confirm(`${semLabel} already exists in your CGPA table. Do you want to update it with GPA: ${currentGpaValue.toFixed(2)} and Credits: ${currentGpaCredits}?`)) {
      rowToUpdate.querySelector('.cgpa-gpa-input').value = currentGpaValue.toFixed(2);
      rowToUpdate.querySelector('.cgpa-credits-input').value = currentGpaCredits;
      rowToUpdate.querySelector('.cgpa-gpa-input').classList.remove('validation-error');
      rowToUpdate.querySelector('.cgpa-credits-input').classList.remove('validation-error');
      calculateCgpa();
      highlightPaneTransition('cgpa');
    }
  } else {
    addCgpaRow(semLabel, currentGpaValue.toFixed(2), currentGpaCredits);
    calculateCgpa();
    highlightPaneTransition('cgpa');
  }
}

function highlightPaneTransition(targetTab) {
  const targetBtn = document.querySelector(`.tab-btn[data-tab="${targetTab}"]`);
  if (targetBtn) {
    targetBtn.click();
    const pane = document.getElementById(`${targetTab}-pane`);
    pane.style.transform = 'scale(0.99)';
    setTimeout(() => {
      pane.style.transition = 'transform 0.3s ease';
      pane.style.transform = 'scale(1)';
    }, 50);
  }
}

// --- Validation Handlers ---

function validateNumberField(input, min, max) {
  const val = parseFloat(input.value);
  if (isNaN(val)) {
    input.classList.add('validation-error');
  } else if (val < min || val > max) {
    input.classList.add('validation-error');
    if (val < min) input.value = min;
    if (val > max) input.value = max;
  } else {
    input.classList.remove('validation-error');
  }
}

function validateGpaTable(highlight = false) {
  let isValid = true;
  const rows = gpaTableBody.querySelectorAll('tr');
  
  rows.forEach(tr => {
    const creditInput = tr.querySelector('.gpa-credit-input');
    const gradeSelect = tr.querySelector('.gpa-grade-select');
    const nameInput = tr.querySelector('.gpa-name-input');
    
    // Check credit field
    const creditVal = parseFloat(creditInput.value);
    if (isNaN(creditVal) || creditVal < 0) {
      isValid = false;
      if (highlight) {
        creditInput.classList.add('validation-error');
        shakeElement(creditInput);
      }
    } else {
      creditInput.classList.remove('validation-error');
    }
    
    // Check grade selector
    if (!gradeSelect.value) {
      isValid = false;
      if (highlight) {
        gradeSelect.classList.add('validation-error');
        shakeElement(gradeSelect);
      }
    } else {
      gradeSelect.classList.remove('validation-error');
    }
    
    // Check elective dropdown completion
    if (nameInput.classList.contains('elective-select') && !nameInput.value) {
      isValid = false;
      if (highlight) {
        nameInput.classList.add('validation-error');
        shakeElement(nameInput);
      }
    } else if (nameInput.classList.contains('elective-select')) {
      nameInput.classList.remove('validation-error');
    }
  });
  
  return isValid;
}

function validateCgpaTable(highlight = false) {
  let isValid = true;
  const rows = cgpaTableBody.querySelectorAll('tr');
  
  rows.forEach(tr => {
    const gpaInput = tr.querySelector('.cgpa-gpa-input');
    const creditsInput = tr.querySelector('.cgpa-credits-input');
    
    // Validate GPA
    const gpaVal = parseFloat(gpaInput.value);
    if (isNaN(gpaVal) || gpaVal < 0 || gpaVal > 10) {
      isValid = false;
      if (highlight) {
        gpaInput.classList.add('validation-error');
        shakeElement(gpaInput);
      }
    } else {
      gpaInput.classList.remove('validation-error');
    }
    
    // Validate Credits
    const creditsVal = parseFloat(creditsInput.value);
    if (isNaN(creditsVal) || creditsVal <= 0) {
      isValid = false;
      if (highlight) {
        creditsInput.classList.add('validation-error');
        shakeElement(creditsInput);
      }
    } else {
      creditsInput.classList.remove('validation-error');
    }
  });
  
  return isValid;
}

function shakeElement(el) {
  el.classList.remove('validation-error');
  void el.offsetWidth; 
  el.classList.add('validation-error');
}

// --- Calculation Math ---

function calculateGpa() {
  const rows = gpaTableBody.querySelectorAll('tr');
  let totalCredits = 0;
  let earnedCredits = 0;
  let totalGradePoints = 0;
  
  rows.forEach(tr => {
    const creditInput = tr.querySelector('.gpa-credit-input');
    const gradeSelect = tr.querySelector('.gpa-grade-select');
    
    const credits = parseFloat(creditInput.value);
    const grade = gradeSelect.value;
    
    if (!isNaN(credits) && credits >= 0 && grade) {
      totalCredits += credits;
      const pt = GRADE_POINTS[grade];
      totalGradePoints += (credits * pt);
      
      // Earned credits exclude RA subjects and subjects with 0 credits
      if (grade !== "RA" && pt >= 0) {
        earnedCredits += credits;
      }
    }
  });
  
  currentGpaCredits = earnedCredits;
  currentGpaValue = totalCredits > 0 ? (totalGradePoints / totalCredits) : 0;
  
  if (activeTab === 'gpa') {
    updateDashboardValues();
  }
}

function calculateCgpa() {
  const rows = cgpaTableBody.querySelectorAll('tr');
  let totalCredits = 0;
  let totalPoints = 0;
  
  rows.forEach(tr => {
    const gpaInput = tr.querySelector('.cgpa-gpa-input');
    const creditsInput = tr.querySelector('.cgpa-credits-input');
    
    const gpa = parseFloat(gpaInput.value);
    const credits = parseFloat(creditsInput.value);
    
    if (!isNaN(gpa) && gpa >= 0 && !isNaN(credits) && credits > 0) {
      totalCredits += credits;
      totalPoints += (gpa * credits);
    }
  });
  
  currentCgpaValue = totalCredits > 0 ? (totalPoints / totalCredits) : 0;
  
  if (activeTab === 'cgpa') {
    updateDashboardValues();
  }
}

function updateDashboardValues() {
  let score = 0;
  let scoreText = "0.00";
  
  // Fetch active summary for GPA
  const gpaRows = gpaTableBody.querySelectorAll('tr');
  let gpaTotalCredits = 0;
  let gpaEarnedCredits = 0;
  let gpaTotalGradePoints = 0;
  
  gpaRows.forEach(tr => {
    const cr = parseFloat(tr.querySelector('.gpa-credit-input').value);
    const gr = tr.querySelector('.gpa-grade-select').value;
    if (!isNaN(cr) && cr >= 0 && gr) {
      gpaTotalCredits += cr;
      gpaTotalGradePoints += (cr * GRADE_POINTS[gr]);
      if (gr !== "RA") gpaEarnedCredits += cr;
    }
  });
  
  // Fetch active summary for CGPA
  const cgpaRows = cgpaTableBody.querySelectorAll('tr');
  let cgpaTotalCredits = 0;
  let cgpaWeightedPoints = 0;
  
  cgpaRows.forEach(tr => {
    const gp = parseFloat(tr.querySelector('.cgpa-gpa-input').value);
    const cr = parseFloat(tr.querySelector('.cgpa-credits-input').value);
    if (!isNaN(gp) && gp >= 0 && !isNaN(cr) && cr > 0) {
      cgpaTotalCredits += cr;
      cgpaWeightedPoints += (gp * cr);
    }
  });
  
  const computedCgpa = cgpaTotalCredits > 0 ? (cgpaWeightedPoints / cgpaTotalCredits) : 0;
  
  metricTotalCredits.textContent = activeTab === 'gpa' ? gpaTotalCredits.toFixed(1) : cgpaTotalCredits.toFixed(1);
  metricEarnedCredits.textContent = activeTab === 'gpa' ? gpaEarnedCredits.toFixed(1) : cgpaTotalCredits.toFixed(1);
  metricGradePoints.textContent = activeTab === 'gpa' ? gpaTotalGradePoints.toFixed(1) : cgpaWeightedPoints.toFixed(1);
  metricCgpaScore.textContent = computedCgpa.toFixed(2);
  
  if (activeTab === 'gpa') {
    dashboardMetricTitle.textContent = "GPA";
    score = gpaTotalCredits > 0 ? (gpaTotalGradePoints / gpaTotalCredits) : 0;
    scoreText = score.toFixed(2);
  } else {
    dashboardMetricTitle.textContent = "CGPA";
    score = computedCgpa;
    scoreText = score.toFixed(2);
  }
  
  dashboardMetricValue.textContent = scoreText;
  
  // Update circle gauge progress ring
  const progressPercent = Math.min(Math.max(score / 10, 0), 1);
  const offset = 264 - (progressPercent * 264);
  radialProgressBar.style.strokeDashoffset = offset;
}

// --- PDF Generation & Transcript Construction ---

function generatePdfTranscript() {
  const isGpaValid = validateGpaTable(true);
  const isCgpaValid = validateCgpaTable(true);
  
  if (!isGpaValid || !isCgpaValid) {
    alert("Please fix validation errors (highlighted in red) in the tables before exporting!");
    return;
  }
  
  const sName = studentNameInput.value.trim() || "John Doe";
  const sRoll = studentRollInput.value.trim() || "N/A";
  const sCollege = studentCollegeInput.value.trim() || "N/A";
  
  // Retrieve display labels for Department and Regulation select options
  const sDeptText = studentDeptSelect.options[studentDeptSelect.selectedIndex].text;
  const sRegText = studentRegSelect.options[studentRegSelect.selectedIndex].text;
  
  // Populate student details into template
  document.getElementById('pdf-student-name').textContent = sName;
  document.getElementById('pdf-student-roll').textContent = sRoll;
  document.getElementById('pdf-student-reg').textContent = sRegText;
  document.getElementById('pdf-student-dept').textContent = sDeptText;
  document.getElementById('pdf-student-college').textContent = sCollege;
  
  const now = new Date();
  document.getElementById('pdf-gen-date').textContent = "Date Generated: " + now.toLocaleDateString() + " " + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  // Load and calculate final metrics for the PDF top boxes
  const gpaRows = gpaTableBody.querySelectorAll('tr');
  let gpaTotalCredits = 0;
  let gpaEarnedCredits = 0;
  let gpaTotalGradePoints = 0;
  
  const pdfGpaBody = document.getElementById('pdf-gpa-table-body');
  pdfGpaBody.innerHTML = "";
  
  gpaRows.forEach(tr => {
    let code = tr.querySelector('.gpa-code-input').value.trim();
    let name = "";
    
    const nameEl = tr.querySelector('.gpa-name-input');
    if (nameEl.tagName === 'SELECT') {
      const selectVal = nameEl.value;
      if (selectVal) {
        const parts = selectVal.split('|');
        code = parts[0];
        name = parts[1];
      } else {
        name = "Unselected Elective";
      }
    } else {
      name = nameEl.value.trim();
    }
    
    const credits = parseFloat(tr.querySelector('.gpa-credit-input').value);
    const grade = tr.querySelector('.gpa-grade-select').value;
    
    if (!isNaN(credits) && credits >= 0 && grade) {
      gpaTotalCredits += credits;
      gpaTotalGradePoints += (credits * GRADE_POINTS[grade]);
      if (grade !== "RA") gpaEarnedCredits += credits;
      
      const pdfTr = document.createElement('tr');
      pdfTr.innerHTML = `
        <td>${code || "N/A"}</td>
        <td>${name || "N/A"}</td>
        <td>${credits.toFixed(1)}</td>
        <td style="font-weight: 700;">${grade}</td>
      `;
      pdfGpaBody.appendChild(pdfTr);
    }
  });
  
  const finalGpaVal = gpaTotalCredits > 0 ? (gpaTotalGradePoints / gpaTotalCredits) : 0;
  document.getElementById('pdf-gpa-val').textContent = finalGpaVal.toFixed(2);
  document.getElementById('pdf-total-credits-val').textContent = gpaTotalCredits.toFixed(1);
  document.getElementById('pdf-earned-credits-val').textContent = gpaEarnedCredits.toFixed(1);
  
  const pdfGpaSection = document.getElementById('pdf-gpa-section');
  pdfGpaSection.style.display = gpaRows.length === 0 ? 'none' : 'block';
  
  // Populate CGPA records
  const cgpaRows = cgpaTableBody.querySelectorAll('tr');
  let cgpaTotalCredits = 0;
  let cgpaTotalPoints = 0;
  
  const pdfCgpaBody = document.getElementById('pdf-cgpa-table-body');
  pdfCgpaBody.innerHTML = "";
  
  cgpaRows.forEach(tr => {
    const sem = tr.querySelector('.cgpa-sem-input').value.trim();
    const gpa = parseFloat(tr.querySelector('.cgpa-gpa-input').value);
    const credits = parseFloat(tr.querySelector('.cgpa-credits-input').value);
    
    if (!isNaN(gpa) && gpa >= 0 && !isNaN(credits) && credits > 0) {
      cgpaTotalCredits += credits;
      cgpaTotalPoints += (gpa * credits);
      
      const pdfTr = document.createElement('tr');
      pdfTr.innerHTML = `
        <td>${sem || "N/A"}</td>
        <td>${gpa.toFixed(2)}</td>
        <td>${credits.toFixed(1)}</td>
      `;
      pdfCgpaBody.appendChild(pdfTr);
    }
  });
  
  const finalCgpaVal = cgpaTotalCredits > 0 ? (cgpaTotalPoints / cgpaTotalCredits) : 0;
  document.getElementById('pdf-cgpa-val').textContent = finalCgpaVal.toFixed(2);
  
  const pdfCgpaSection = document.getElementById('pdf-cgpa-section');
  pdfCgpaSection.style.display = cgpaRows.length === 0 ? 'none' : 'block';
  
  const printElement = document.getElementById('print-transcript-template');
  
  const opt = {
    margin:       [12, 12, 12, 12],
    filename:     `${sName.replace(/\s+/g, '_')}_Transcript_Report.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true, logging: false },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  
  printElement.style.display = 'block';
  
  html2pdf()
    .from(printElement)
    .set(opt)
    .save()
    .then(() => {
      printElement.style.display = 'none';
    })
    .catch((err) => {
      console.error("PDF generation failed:", err);
      printElement.style.display = 'none';
      alert("Failed to export PDF. Please check that your input data is valid and try again.");
    });
}
