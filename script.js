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
      { code: "GE3172", name: "English Laboratory", credits: 1 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
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
      { code: "GE3272", name: "Communication Laboratory", credits: 2 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
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
      { code: "GE3361", name: "Professional Development", credits: 1 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    4: [
      { code: "CS3452", name: "Theory of Computation", credits: 3 },
      { code: "CS3491", name: "Artificial Intelligence and Machine Learning", credits: 4 },
      { code: "CS3492", name: "Database Management Systems", credits: 3 },
      { code: "CS3401", name: "Algorithms", credits: 4 },
      { code: "CS3451", name: "Introduction to Operating Systems", credits: 3 },
      { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
      { code: "CS3461", name: "Operating Systems Laboratory", credits: 1.5 },
      { code: "CS3481", name: "Database Management Systems Laboratory", credits: 1.5 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    5: [
      { code: "CS3591", name: "Computer Networks", credits: 4 },
      { code: "CS3501", name: "Compiler Design", credits: 4 },
      { code: "CB3491", name: "Cryptography and Cyber Security", credits: 3 },
      { code: "CS3551", name: "Distributed Computing", credits: 3 },
      { code: "PEC-I", name: "Professional Elective I", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-II", name: "Professional Elective II", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    6: [
      { code: "CCS356", name: "Object Oriented Software Engineering", credits: 4 },
      { code: "CS3691", name: "Embedded Systems and IoT", credits: 4 },
      { code: "OEC-I", name: "Open Elective I", credits: 3, isElective: true, electiveType: "OEC-I" },
      { code: "PEC-III", name: "Professional Elective III", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-IV", name: "Professional Elective IV", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-V", name: "Professional Elective V", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-VI", name: "Professional Elective VI", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    7: [
      { code: "GE3791", name: "Human Values and Ethics", credits: 2 },
      { code: "MGT", name: "Management Elective", credits: 3, isElective: true, electiveType: "MGT" },
      { code: "OEC-II", name: "Open Elective II", credits: 3, isElective: true, electiveType: "OEC-II" },
      { code: "OEC-III", name: "Open Elective III", credits: 3, isElective: true, electiveType: "OEC-III" },
      { code: "OEC-IV", name: "Open Elective IV", credits: 3, isElective: true, electiveType: "OEC-IV" },
      { code: "CS3711", name: "Summer Internship", credits: 2 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
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
      { code: "GE3172", name: "English Laboratory", credits: 1 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
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
      { code: "GE3272", name: "Communication Laboratory / Foreign Language", credits: 2 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
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
      { code: "GE3361", name: "Professional Development", credits: 1 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    4: [
      { code: "CS3452", name: "Theory of Computation", credits: 3 },
      { code: "CS3491", name: "Artificial Intelligence and Machine Learning", credits: 4 },
      { code: "CB3401", name: "Database Management Systems and Security", credits: 3 },
      { code: "CB3402", name: "Operating Systems and Security", credits: 4 },
      { code: "CB3491", name: "Cryptography and Cyber Security", credits: 3 },
      { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
      { code: "CB3411", name: "Cryptography and Cyber Security Laboratory", credits: 1.5 },
      { code: "CB3412", name: "Database Management Systems and Security Laboratory", credits: 2 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    5: [
      { code: "CS3551", name: "Distributed Computing", credits: 3 },
      { code: "CB3591", name: "Engineering Secure Software Systems", credits: 3 },
      { code: "CS3691", name: "Embedded Systems and IoT", credits: 4 },
      { code: "CS3591", name: "Computer Networks", credits: 4 },
      { code: "PEC-I", name: "Professional Elective I", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-II", name: "Professional Elective II", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "MC-I", name: "Mandatory Course I (Non-Credit)", credits: 0, isElective: true, electiveType: "MC-I" },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    6: [
      { code: "CB3601", name: "Cyber Forensics", credits: 4 },
      { code: "CB3602", name: "Network Security", credits: 4 },
      { code: "OEC-I", name: "Open Elective I", credits: 3, isElective: true, electiveType: "OEC-I" },
      { code: "PEC-III", name: "Professional Elective III", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-IV", name: "Professional Elective IV", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-V", name: "Professional Elective V", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-VI", name: "Professional Elective VI", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "MC-II", name: "Mandatory Course II (Non-Credit)", credits: 0, isElective: true, electiveType: "MC-II" },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    7: [
      { code: "GE3791", name: "Human Values and Ethics", credits: 2 },
      { code: "MGT", name: "Management Elective", credits: 3, isElective: true, electiveType: "MGT" },
      { code: "OEC-II", name: "Open Elective II", credits: 3, isElective: true, electiveType: "OEC-II" },
      { code: "OEC-III", name: "Open Elective III", credits: 3, isElective: true, electiveType: "OEC-III" },
      { code: "OEC-IV", name: "Open Elective IV", credits: 3, isElective: true, electiveType: "OEC-IV" },
      { code: "CB3711", name: "Summer Internship", credits: 2 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
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
      { code: "GE3172", name: "English Laboratory", credits: 1 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
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
      { code: "GE3272", name: "Communication Laboratory / Foreign Language", credits: 2 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
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
      { code: "GE3361", name: "Professional Development", credits: 1 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    4: [
      { code: "MA3391", name: "Probability and Statistics", credits: 4 },
      { code: "AL3452", name: "Operating Systems", credits: 4 },
      { code: "AL3451", name: "Machine Learning", credits: 3 },
      { code: "AD3491", name: "Fundamentals of Data Science and Analytics", credits: 3 },
      { code: "CS3591", name: "Computer Networks", credits: 4 },
      { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
      { code: "AD3411", name: "Data Science and Analytics Laboratory", credits: 2 },
      { code: "AD3461", name: "Machine Learning Laboratory", credits: 2 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    5: [
      { code: "AD3501", name: "Deep Learning", credits: 3 },
      { code: "CW3551", name: "Data and Information Security", credits: 3 },
      { code: "CS3551", name: "Distributed Computing", credits: 3 },
      { code: "CCS334", name: "Big Data Analytics", credits: 3 },
      { code: "PEC-I", name: "Professional Elective I", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-II", name: "Professional Elective II", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "AD3511", name: "Deep Learning Laboratory", credits: 2 },
      { code: "AD3512", name: "Summer Internship", credits: 2 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    6: [
      { code: "CS3691", name: "Embedded Systems and IoT", credits: 4 },
      { code: "OEC-I", name: "Open Elective I", credits: 3, isElective: true, electiveType: "OEC-I" },
      { code: "PEC-III", name: "Professional Elective III", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-IV", name: "Professional Elective IV", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-V", name: "Professional Elective V", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-VI", name: "Professional Elective VI", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    7: [
      { code: "GE3791", name: "Human Values and Ethics", credits: 2 },
      { code: "MGT", name: "Management Elective", credits: 3, isElective: true, electiveType: "MGT" },
      { code: "OEC-II", name: "Open Elective II", credits: 3, isElective: true, electiveType: "OEC-II" },
      { code: "OEC-III", name: "Open Elective III", credits: 3, isElective: true, electiveType: "OEC-III" },
      { code: "OEC-IV", name: "Open Elective IV", credits: 3, isElective: true, electiveType: "OEC-IV" },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    8: [
      { code: "AD3811", name: "Project Work / Internship", credits: 10 }
    ]
  },
  aiml: {
    1: [
      { code: "HS3152", name: "Professional English I", credits: 3 },
      { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
      { code: "PH3151", name: "Engineering Physics", credits: 3 },
      { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
      { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
      { code: "GE3152", name: "Heritage of Tamils", credits: 1 },
      { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
      { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
      { code: "GE3172", name: "English Laboratory", credits: 1 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
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
      { code: "GE3272", name: "Communication Laboratory / Foreign Language", credits: 2 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
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
      { code: "GE3361", name: "Professional Development", credits: 1 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    4: [
      { code: "CS3452", name: "Theory of Computation", credits: 3 },
      { code: "AL3452", name: "Operating Systems", credits: 4 },
      { code: "AD3391", name: "Database Design and Management", credits: 3 },
      { code: "AL3451", name: "Machine Learning", credits: 3 },
      { code: "AL3391", name: "Artificial Intelligence", credits: 3 },
      { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
      { code: "AL3411", name: "Artificial Intelligence & Machine Learning Laboratory", credits: 2 },
      { code: "AD3381", name: "Database Design and Management Laboratory", credits: 1.5 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    5: [
      { code: "AL3501", name: "Natural Language Processing", credits: 4 },
      { code: "AL3502", name: "Deep Learning for Vision", credits: 4 },
      { code: "CB3491", name: "Cryptography and Cyber Security", credits: 3 },
      { code: "CS3551", name: "Distributed Computing", credits: 3 },
      { code: "PEC-I", name: "Professional Elective I", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-II", name: "Professional Elective II", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "MC-I", name: "Mandatory Course I (Non-Credit)", credits: 0, isElective: true, electiveType: "MC-I" },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    6: [
      { code: "CCS356", name: "Object Oriented Software Engineering", credits: 4 },
      { code: "CS3691", name: "Embedded Systems and IoT", credits: 4 },
      { code: "OEC-I", name: "Open Elective I", credits: 3, isElective: true, electiveType: "OEC-I" },
      { code: "PEC-III", name: "Professional Elective III", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-IV", name: "Professional Elective IV", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-V", name: "Professional Elective V", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-VI", name: "Professional Elective VI", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "MC-II", name: "Mandatory Course II (Non-Credit)", credits: 0, isElective: true, electiveType: "MC-II" },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    7: [
      { code: "GE3791", name: "Human Values and Ethics", credits: 2 },
      { code: "MGT", name: "Management Elective", credits: 3, isElective: true, electiveType: "MGT" },
      { code: "OEC-II", name: "Open Elective II", credits: 3, isElective: true, electiveType: "OEC-II" },
      { code: "OEC-III", name: "Open Elective III", credits: 3, isElective: true, electiveType: "OEC-III" },
      { code: "OEC-IV", name: "Open Elective IV", credits: 3, isElective: true, electiveType: "OEC-IV" },
      { code: "AL3711", name: "Summer Internship", credits: 2 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    8: [
      { code: "AL3811", name: "Project Work / Internship", credits: 10 }
    ]
  },
  eee: {
    1: [
      { code: "IP3151", name: "Induction Programme", credits: 0 },
      { code: "HS3152", name: "Professional English I", credits: 3 },
      { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
      { code: "PH3151", name: "Engineering Physics", credits: 3 },
      { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
      { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
      { code: "GE3152", name: "Heritage of Tamils", credits: 1 },
      { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
      { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
      { code: "GE3172", name: "English Laboratory", credits: 1 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    2: [
      { code: "HS3252", name: "Professional English II", credits: 2 },
      { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
      { code: "PH3202", name: "Physics for Electrical Engineering", credits: 3 },
      { code: "BE3255", name: "Basic Civil and Mechanical Engineering", credits: 3 },
      { code: "GE3251", name: "Engineering Graphics", credits: 4 },
      { code: "EE3251", name: "Electric Circuit Analysis", credits: 4 },
      { code: "GE3252", name: "Tamils and Technology", credits: 1 },
      { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 },
      { code: "EE3271", name: "Electric Circuits Laboratory", credits: 2 },
      { code: "GE3272", name: "Communication Laboratory / Foreign Language", credits: 2 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    3: [
      { code: "MA3303", name: "Probability and Complex Functions", credits: 4 },
      { code: "EE3301", name: "Electromagnetic Fields", credits: 4 },
      { code: "EE3302", name: "Digital Logic Circuits", credits: 3 },
      { code: "EC3301", name: "Electronic Devices and Circuits", credits: 3 },
      { code: "EE3303", name: "Electrical Machines – I", credits: 3 },
      { code: "CS3353", name: "C Programming and Data Structures", credits: 3 },
      { code: "EC3311", name: "Electronic Devices and Circuits Laboratory", credits: 1.5 },
      { code: "EE3311", name: "Electrical Machines Laboratory – I", credits: 1.5 },
      { code: "CS3362", name: "C Programming and Data Structures Laboratory", credits: 1.5 },
      { code: "GE3361", name: "Professional Development", credits: 1 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    4: [
      { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
      { code: "EE3401", name: "Transmission and Distribution", credits: 3 },
      { code: "EE3402", name: "Linear Integrated Circuits", credits: 3 },
      { code: "EE3403", name: "Measurements and Instrumentation", credits: 3 },
      { code: "EE3404", name: "Microprocessor and Microcontroller", credits: 3 },
      { code: "EE3405", name: "Electrical Machines – II", credits: 3 },
      { code: "EE3411", name: "Electrical Machines Laboratory – II", credits: 1.5 },
      { code: "EE3412", name: "Linear and Digital Circuits Laboratory", credits: 1.5 },
      { code: "EE3413", name: "Microprocessor and Microcontroller Laboratory", credits: 1.5 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    5: [
      { code: "EE3501", name: "Power System Analysis", credits: 3 },
      { code: "EE3591", name: "Power Electronics", credits: 3 },
      { code: "EE3503", name: "Control Systems", credits: 3 },
      { code: "PEC-I", name: "Professional Elective I", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-II", name: "Professional Elective II", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-III", name: "Professional Elective III", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "MC-I", name: "Mandatory Course I (Non-Credit)", credits: 0, isElective: true, electiveType: "MC-I" },
      { code: "EE3511", name: "Power Electronics Laboratory", credits: 1.5 },
      { code: "EE3512", name: "Control and Instrumentation Laboratory", credits: 2 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    6: [
      { code: "EE3601", name: "Protection and Switchgear", credits: 3 },
      { code: "EE3602", name: "Power System Operation and Control", credits: 3 },
      { code: "OEC-I", name: "Open Elective I", credits: 3, isElective: true, electiveType: "OEC-I" },
      { code: "PEC-IV", name: "Professional Elective IV", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-V", name: "Professional Elective V", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-VI", name: "Professional Elective VI", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "MC-II", name: "Mandatory Course II (Non-Credit)", credits: 0, isElective: true, electiveType: "MC-II" },
      { code: "EE3611", name: "Power System Laboratory", credits: 1.5 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    7: [
      { code: "EE3701", name: "High Voltage Engineering", credits: 3 },
      { code: "GE3791", name: "Human Values and Ethics", credits: 2 },
      { code: "MGT", name: "Management Elective", credits: 3, isElective: true, electiveType: "MGT" },
      { code: "OEC-II", name: "Open Elective II", credits: 3, isElective: true, electiveType: "OEC-II" },
      { code: "OEC-III", name: "Open Elective III", credits: 3, isElective: true, electiveType: "OEC-III" },
      { code: "OEC-IV", name: "Open Elective IV", credits: 3, isElective: true, electiveType: "OEC-IV" },
      { code: "PEC-VII", name: "Professional Elective VII", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    8: [
      { code: "EE3811", name: "Project Work / Internship", credits: 10 }
    ]
  },
  ece: {
    1: [
      { code: "HS3152", name: "Professional English I", credits: 3 },
      { code: "MA3151", name: "Matrices and Calculus", credits: 4 },
      { code: "PH3151", name: "Engineering Physics", credits: 3 },
      { code: "CY3151", name: "Engineering Chemistry", credits: 3 },
      { code: "GE3151", name: "Problem Solving and Python Programming", credits: 3 },
      { code: "GE3152", name: "Heritage of Tamils", credits: 1 },
      { code: "GE3171", name: "Problem Solving and Python Programming Laboratory", credits: 2 },
      { code: "BS3171", name: "Physics and Chemistry Laboratory", credits: 2 },
      { code: "GE3172", name: "English Laboratory", credits: 1 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    2: [
      { code: "HS3252", name: "Professional English II", credits: 2 },
      { code: "MA3251", name: "Statistics and Numerical Methods", credits: 4 },
      { code: "PH3254", name: "Physics for Electronics Engineering", credits: 3 },
      { code: "BE3254", name: "Electrical and Instrumentation Engineering", credits: 3 },
      { code: "GE3251", name: "Engineering Graphics", credits: 4 },
      { code: "EC3251", name: "Circuit Analysis", credits: 4 },
      { code: "GE3252", name: "Tamils and Technology", credits: 1 },
      { code: "GE3271", name: "Engineering Practices Laboratory", credits: 2 },
      { code: "EC3271", name: "Circuits Analysis Laboratory", credits: 1 },
      { code: "GE3272", name: "Communication Laboratory / Foreign Language", credits: 2 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    3: [
      { code: "MA3355", name: "Random Processes and Linear Algebra", credits: 4 },
      { code: "CS3353", name: "C Programming and Data Structures", credits: 3 },
      { code: "EC3354", name: "Signals and Systems", credits: 4 },
      { code: "EC3353", name: "Electronic Devices and Circuits", credits: 3 },
      { code: "EC3351", name: "Control Systems", credits: 3 },
      { code: "EC3352", name: "Digital Systems Design", credits: 4 },
      { code: "EC3361", name: "Electronic Devices and Circuits Laboratory", credits: 1.5 },
      { code: "CS3362", name: "C Programming and Data Structures Laboratory", credits: 1.5 },
      { code: "GE3361", name: "Professional Development", credits: 1 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    4: [
      { code: "EC3452", name: "Electromagnetic Fields", credits: 3 },
      { code: "EC3401", name: "Networks and Security", credits: 4 },
      { code: "EC3451", name: "Linear Integrated Circuits", credits: 3 },
      { code: "EC3492", name: "Digital Signal Processing", credits: 4 },
      { code: "EC3491", name: "Communication Systems", credits: 3 },
      { code: "GE3451", name: "Environmental Sciences and Sustainability", credits: 2 },
      { code: "EC3461", name: "Communication Systems Laboratory", credits: 1.5 },
      { code: "EC3462", name: "Linear Integrated Circuits Laboratory", credits: 1.5 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    5: [
      { code: "EC3501", name: "Wireless Communication", credits: 4 },
      { code: "EC3552", name: "VLSI and Chip Design", credits: 3 },
      { code: "EC3551", name: "Transmission Lines and RF Systems", credits: 3 },
      { code: "PEC-I", name: "Professional Elective I", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-II", name: "Professional Elective II", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-III", name: "Professional Elective III", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "EC3561", name: "VLSI Laboratory", credits: 2 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    6: [
      { code: "ET3491", name: "Embedded Systems and IoT Design", credits: 4 },
      { code: "CS3491", name: "Artificial Intelligence and Machine Learning", credits: 4 },
      { code: "OEC-I", name: "Open Elective I", credits: 3, isElective: true, electiveType: "OEC-I" },
      { code: "PEC-IV", name: "Professional Elective IV", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-V", name: "Professional Elective V", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "PEC-VI", name: "Professional Elective VI", credits: 3, isElective: true, electiveType: "PEC" },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    7: [
      { code: "GE3791", name: "Human Values and Ethics", credits: 2 },
      { code: "MGT", name: "Management Elective", credits: 3, isElective: true, electiveType: "MGT" },
      { code: "OEC-II", name: "Open Elective II", credits: 3, isElective: true, electiveType: "OEC-II" },
      { code: "OEC-III", name: "Open Elective III", credits: 3, isElective: true, electiveType: "OEC-III" },
      { code: "OEC-IV", name: "Open Elective IV", credits: 3, isElective: true, electiveType: "OEC-IV" },
      { code: "EC3711", name: "Summer Internship", credits: 2 },
      { code: "NM", name: "Naan Mudhalvan – Skill Course", credits: 2 }
    ],
    8: [
      { code: "EC3811", name: "Project Work / Internship", credits: 10 }
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
    ],
    aiml: [
      // Data Science
      { code: "CCS346", name: "Exploratory Data Analysis" },
      { code: "CCS360", name: "Recommender Systems" },
      { code: "CCS355", name: "Neural Networks and Deep Learning" },
      { code: "CCS369", name: "Text and Speech Analysis" },
      { code: "CCW331", name: "Business Analytics" },
      { code: "CCS349", name: "Image and Video Analytics" },
      { code: "CCS338", name: "Computer Vision" },
      { code: "CCS334", name: "Big Data Analytics" },
      // Full Stack Development
      { code: "CCS375", name: "Web Technologies" },
      { code: "CCS332", name: "App Development" },
      { code: "CCS336", name: "Cloud Services Management" },
      { code: "CCS370", name: "UI and UX Design" },
      { code: "CCS366", name: "Software Testing and Automation" },
      { code: "CCS374", name: "Web Application Security" },
      { code: "CCS342", name: "DevOps" },
      { code: "CCS358", name: "Principles of Programming Languages" },
      // Cloud Computing and Data Center Technologies
      { code: "CCS335", name: "Cloud Computing" },
      { code: "CCS372", name: "Virtualization" },
      { code: "CCS341", name: "Data Warehousing" },
      { code: "CCS367", name: "Storage Technologies" },
      { code: "CCS365", name: "Software Defined Networks" },
      { code: "CCS368", name: "Stream Processing" },
      { code: "CCS362", name: "Security and Privacy in Cloud" },
      // Cyber Security and Data Privacy
      { code: "CCS344", name: "Ethical Hacking" },
      { code: "CCS343", name: "Digital and Mobile Forensics" },
      { code: "CCS363", name: "Social Network Security" },
      { code: "CCS351", name: "Modern Cryptography" },
      { code: "CB3591", name: "Engineering Secure Software Systems" },
      { code: "CCS339", name: "Cryptocurrency and Blockchain Technologies" },
      { code: "CCS354", name: "Network Security" },
      // Creative Media
      { code: "CCS333", name: "Augmented Reality / Virtual Reality" },
      { code: "CCS352", name: "Multimedia and Animation" },
      { code: "CCS371", name: "Video Creation and Editing" },
      { code: "CCS370", name: "UI and UX Design" },
      { code: "CCW332", name: "Digital Marketing" },
      { code: "CCS373", name: "Visual Effects" },
      { code: "CCS347", name: "Game Development" },
      { code: "CCS353", name: "Multimedia Data Compression and Storage" },
      // Emerging Technologies
      { code: "CCS361", name: "Robotic Process Automation" },
      { code: "CCS340", name: "Cyber Security" },
      { code: "CCS359", name: "Quantum Computing" },
      { code: "CCS331", name: "3D Printing and Design" },
      // Artificial Intelligence and Machine Learning
      { code: "CCS350", name: "Knowledge Engineering" },
      { code: "CCS364", name: "Soft Computing" },
      { code: "CCS357", name: "Optimization Techniques" },
      { code: "CCS348", name: "Game Theory" },
      { code: "CCS337", name: "Cognitive Science" },
      { code: "CCS345", name: "Ethics and AI" }
    ],
    eee: [
      // Vertical I – Power Engineering
      { code: "EE3001", name: "Utilization and Conservation of Electrical Energy" },
      { code: "EE3002", name: "Under Ground Cable Engineering" },
      { code: "EE3003", name: "Substation Engineering and Automation" },
      { code: "EE3004", name: "HVDC and FACTS" },
      { code: "EE3005", name: "Energy Management and Auditing" },
      { code: "EE3006", name: "Power Quality" },
      { code: "EE3007", name: "Smart Grid" },
      { code: "EE3008", name: "Restructured Power Market" },
      // Vertical II – Converters and Drives
      { code: "EE3009", name: "Special Electrical Machines" },
      { code: "EE3010", name: "Analysis of Electrical Machines" },
      { code: "EE3011", name: "Multilevel Power Converters" },
      { code: "EE3012", name: "Electrical Drives" },
      { code: "EE3013", name: "SMPS and UPS" },
      { code: "EE3014", name: "Power Electronics for Renewable Energy Systems" },
      { code: "EE3015", name: "Control of Power Electronics Circuits" },
      // Vertical III – Embedded Systems
      { code: "EE3016", name: "Embedded System Design" },
      { code: "EE3017", name: "Embedded C Programming" },
      { code: "EE3018", name: "Embedded Processors" },
      { code: "EE3019", name: "Embedded Control for Electric Drives" },
      { code: "EE3020", name: "Smart System Automation" },
      { code: "EE3021", name: "Embedded System for Automotive Applications" },
      { code: "EE3022", name: "VLSI Design" },
      { code: "EE3023", name: "MEMS and NEMS" },
      { code: "EE3024", name: "Digital Signal Processing System Design" },
      // Vertical IV – Electric Vehicle Technology
      { code: "EE3025", name: "Electric Vehicle Architecture" },
      { code: "EE3026", name: "Design of Motor and Power Converters for Electric Vehicles" },
      { code: "EE3027", name: "Electric Vehicle Design, Mechanics and Control" },
      { code: "EE3028", name: "Design of Electric Vehicle Charging System" },
      { code: "EE3029", name: "Testing of Electric Vehicles" },
      { code: "EE3030", name: "Grid Integration of Electric Vehicles" },
      { code: "EE3031", name: "Intelligent Control of Electric Vehicles" },
      // Vertical V – Advanced Control
      { code: "CIC331", name: "Process Modeling and Simulation" },
      { code: "CIC332", name: "Computer Control of Processes" },
      { code: "CIC333", name: "System Identification" },
      { code: "CIC336", name: "Model Based Control" },
      { code: "CIC334", name: "Non Linear Control" },
      { code: "CIC337", name: "Optimal Control" },
      { code: "CIC335", name: "Adaptive Control" },
      { code: "CIC338", name: "Machine Monitoring System" },
      // Vertical VI – Diversified Courses
      { code: "EE3032", name: "Energy Storage Systems" },
      { code: "EE3033", name: "Hybrid Energy Technology" },
      { code: "EE3034", name: "Design and Modeling of Renewable Energy Systems" },
      { code: "EE3035", name: "Grid Integrating Techniques and Challenges" },
      { code: "EE3036", name: "Sustainable and Environmental Friendly HV Insulation System" },
      { code: "EE3037", name: "Power System Transients" },
      { code: "CEI331", name: "PLC Programming" },
      { code: "CCS334", name: "Big Data Analytics" }
    ],
    ece: [
      { code: "CEC363", name: "Wide Bandgap Devices" },
      { code: "CEC361", name: "Validation and Testing Technology" },
      { code: "CEC370", name: "Low Power IC Design" },
      { code: "CEC362", name: "VLSI Testing and Design For Testability" },
      { code: "CEC342", name: "Mixed Signal IC Design Testing" },
      { code: "CEC334", name: "Analog IC Design" },
      { code: "CEC332", name: "Advanced Digital Signal Processing" },
      { code: "CEC366", name: "Image Processing" },
      { code: "CEC356", name: "Speech Processing" },
      { code: "CEC355", name: "Software Defined Radio" },
      { code: "CEC337", name: "DSP Architecture and Programming" },
      { code: "CCS338", name: "Computer Vision" },
      { code: "CEC350", name: "RF Transceivers" },
      { code: "CEC353", name: "Signal Integrity" },
      { code: "CEC335", name: "Antenna Design" },
      { code: "CEC341", name: "MICs and RF System Design" },
      { code: "CEC338", name: "EMI/EMC Pre Compliance Testing" },
      { code: "CEC349", name: "RFID System Design and Testing" },
      { code: "CBM370", name: "Wearable Devices" },
      { code: "CBM352", name: "Human Assist Devices" },
      { code: "CBM368", name: "Therapeutic Equipment" },
      { code: "CBM355", name: "Medical Imaging Systems" },
      { code: "CBM342", name: "Brain Computer Interface and Applications" },
      { code: "CBM341", name: "Body Area Networks" },
      { code: "CEC359", name: "Underwater Instrumentation System" },
      { code: "CEC358", name: "Underwater Imaging Systems and Image Processing" },
      { code: "CEC357", name: "Underwater Communication" },
      { code: "CEC344", name: "Ocean Observation Systems" },
      { code: "CEC360", name: "Underwater Navigation Systems" },
      { code: "CEC343", name: "Ocean Acoustics" },
      { code: "CEC369", name: "IoT Processors" },
      { code: "CEC368", name: "IoT Based Systems Design" },
      { code: "CEC365", name: "Wireless Sensor Network Design" },
      { code: "CEC367", name: "Industrial IoT and Industry 4.0" },
      { code: "CEC340", name: "MEMS Design" },
      { code: "CEC339", name: "Fundamentals of Nanoelectronics" },
      { code: "CEC347", name: "Radar Technologies" },
      { code: "CEC336", name: "Avionics Systems" },
      { code: "CEC346", name: "Positioning and Navigation Systems" },
      { code: "CEC352", name: "Satellite Communication" },
      { code: "CEC348", name: "Remote Sensing" },
      { code: "CEC351", name: "Rocketry and Space Mechanics" },
      { code: "CEC345", name: "Optical Communication & Networks" },
      { code: "CEC364", name: "Wireless Broad Band Networks" },
      { code: "CEC331", name: "4G/5G Communication Networks" },
      { code: "CEC354", name: "Software Defined Networks" },
      { code: "CEC371", name: "Massive MIMO Networks" },
      { code: "CEC333", name: "Advanced Wireless Communication Techniques" }
    ]
  },
  "OEC-I": [
    { code: "OCS351", name: "Artificial Intelligence and Machine Learning Fundamentals" },
    { code: "OCS352", name: "IoT Concepts and Applications" },
    { code: "OCS353", name: "Data Science Fundamentals" },
    { code: "CCS333", name: "Augmented Reality / Virtual Reality" },
    { code: "OAS351", name: "Space Science" },
    { code: "OIE351", name: "Introduction to Industrial Engineering" },
    { code: "OBT351", name: "Food, Nutrition and Health" },
    { code: "OCE351", name: "Environmental and Social Impact Assessment" },
    { code: "OEE351", name: "Renewable Energy System" },
    { code: "OEI351", name: "Introduction to Industrial Instrumentation and Control" },
    { code: "OMA351", name: "Graph Theory" }
  ],
  "OEC-II": [
    { code: "OCS351", name: "Artificial Intelligence and Machine Learning Fundamentals" },
    { code: "OCS352", name: "IoT Concepts and Applications" },
    { code: "OCS353", name: "Data Science Fundamentals" },
    { code: "CCS333", name: "Augmented Reality / Virtual Reality" },
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
    { code: "GE3753", name: "Engineering Economics and Financial Accounting" },
    { code: "GE3754", name: "Human Resource Management" },
    { code: "GE3755", name: "Knowledge Management" },
    { code: "GE3792", name: "Industrial Management" }
  ],
  "MC-I": [
    { code: "MX3081", name: "Introduction to Women and Gender Studies" },
    { code: "MX3082", name: "Elements of Literature" },
    { code: "MX3083", name: "Film Appreciation" },
    { code: "MX3084", name: "Disaster Risk Reduction and Management" }
  ],
  "MC-II": [
    { code: "MX3085", name: "Well Being with Traditional Practices – Yoga, Ayurveda and Siddha" },
    { code: "MX3086", name: "History of Science and Technology in India" },
    { code: "MX3087", name: "Political and Economic Thought for a Humane Society" },
    { code: "MX3088", name: "State, Nation Building and Politics in India" },
    { code: "MX3089", name: "Industrial Safety" }
  ]
};
 
// --- Grade Points Mapping ---
const GRADE_POINTS = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "C": 5,
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
 
// Screenshot Import (OCR) elements
const ocrImportBtn = document.getElementById('ocr-import-btn');
const ocrFileInput = document.getElementById('ocr-file-input');
const ocrModalOverlay = document.getElementById('ocr-modal-overlay');
const ocrModalClose = document.getElementById('ocr-modal-close');
const ocrStatusSection = document.getElementById('ocr-status-section');
const ocrStatusText = document.getElementById('ocr-status-text');
const ocrProgressFill = document.getElementById('ocr-progress-fill');
const ocrResultsSection = document.getElementById('ocr-results-section');
const ocrPreviewTable = document.getElementById('ocr-preview-table');
const ocrPreviewTableBody = document.getElementById('ocr-preview-table-body');
const ocrEmptyMessage = document.getElementById('ocr-empty-message');
const ocrToggleRawTextBtn = document.getElementById('ocr-toggle-raw-text');
const ocrRawText = document.getElementById('ocr-raw-text');
const ocrCancelBtn = document.getElementById('ocr-cancel-btn');
const ocrConfirmBtn = document.getElementById('ocr-confirm-btn');
 
let activeOcrWorker = null;
let tesseractLoadPromise = null;
let lastOcrRawText = '';
 
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
      handlePresetChange({ target: semesterPresetDropdown }, { forceConfirm: true });
    }
  });
 
  exportPdfBtn.addEventListener('click', generatePdfTranscript);
 
  // Screenshot import (OCR)
  ocrImportBtn.addEventListener('click', () => ocrFileInput.click());
  ocrFileInput.addEventListener('change', handleScreenshotUpload);
  ocrModalClose.addEventListener('click', closeOcrModal);
  ocrCancelBtn.addEventListener('click', closeOcrModal);
  ocrConfirmBtn.addEventListener('click', handleOcrConfirm);
  ocrModalOverlay.addEventListener('click', (e) => {
    if (e.target === ocrModalOverlay) closeOcrModal();
  });
  ocrToggleRawTextBtn.addEventListener('click', () => {
    const showing = ocrRawText.style.display !== 'none';
    ocrRawText.style.display = showing ? 'none' : 'block';
    ocrToggleRawTextBtn.textContent = showing ? 'Show What Was Read From The Image' : 'Hide Raw Text';
  });
 
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
function addGpaRow(code = "", name = "", credits = "", isElective = false, electiveType = "", grade = "") {
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
        <option value="C">C (Pass)</option>
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
 
  // Prefill grade if one was supplied (e.g. GRADE_POINTS-validated value from OCR import)
  if (grade && GRADE_POINTS.hasOwnProperty(grade)) {
    tr.querySelector('.gpa-grade-select').value = grade;
  }
 
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
// opts.forceConfirm: pass true when calling this programmatically (e.g. a department
// switch) so an already-filled table always prompts before being overwritten.
function handlePresetChange(e, opts = {}) {
  const semNum = e.target.value;
  const currentDept = studentDeptSelect.value || 'cse';
 
  const presetCourses = SYLLABUS_PRESETS[currentDept] ? SYLLABUS_PRESETS[currentDept][semNum] : null;
 
  if (!presetCourses) return;
 
  // If there are rows already, always ask for confirmation before overwriting them
  if (gpaTableBody.children.length > 0) {
    if (!confirm(`Do you want to load preset for Semester ${semNum}? This will overwrite the current GPA calculator table.`)) {
      if (!opts.forceConfirm) e.target.value = "";
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
      const cells = [code || "N/A", name || "N/A", credits.toFixed(1), grade];
      cells.forEach((val, i) => {
        const td = document.createElement('td');
        td.textContent = val;
        if (i === 3) td.style.fontWeight = '700';
        pdfTr.appendChild(td);
      });
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
      [sem || "N/A", gpa.toFixed(2), credits.toFixed(1)].forEach(val => {
        const td = document.createElement('td');
        td.textContent = val;
        pdfTr.appendChild(td);
      });
      pdfCgpaBody.appendChild(pdfTr);
    }
  });
 
  const finalCgpaVal = cgpaTotalCredits > 0 ? (cgpaTotalPoints / cgpaTotalCredits) : 0;
  document.getElementById('pdf-cgpa-val').textContent = finalCgpaVal.toFixed(2);
 
  const pdfCgpaSection = document.getElementById('pdf-cgpa-section');
  pdfCgpaSection.style.display = cgpaRows.length === 0 ? 'none' : 'block';
 
  const printElement = document.getElementById('print-transcript-template');
 
  const opt = {
    margin: [12, 12, 12, 12],
    filename: `${sName.replace(/\s+/g, '_')}_Transcript_Report.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
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
 
// --- Screenshot Import (OCR) ---
// Lets a student upload a screenshot of their university result page and
// auto-fills the GPA table by running client-side OCR (Tesseract.js, loaded
// on demand) and parsing subject code / name / credits / grade out of the
// recognized text. Because OCR is never perfect, detected rows are always
// shown in a review step (with every field editable, and a checkbox to skip
// rows) before anything is written into the real GPA table.
 
const OCR_CDN_URL = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
 
// Load the Tesseract.js library from CDN the first time it's needed, instead
// of on every page load, to keep the app's normal startup light.
function ensureTesseractLoaded() {
  if (window.Tesseract) return Promise.resolve();
  if (tesseractLoadPromise) return tesseractLoadPromise;
 
  tesseractLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = OCR_CDN_URL;
    script.onload = () => resolve();
    script.onerror = () => {
      tesseractLoadPromise = null;
      reject(new Error('Could not load the OCR engine. Please check your internet connection and try again.'));
    };
    document.head.appendChild(script);
  });
 
  return tesseractLoadPromise;
}
 
function openOcrModal() {
  ocrModalOverlay.style.display = 'flex';
}
 
function closeOcrModal() {
  ocrModalOverlay.style.display = 'none';
  ocrFileInput.value = ''; // allow re-selecting the same file next time
  ocrRawText.style.display = 'none';
  ocrToggleRawTextBtn.textContent = 'Show What Was Read From The Image';
 
  if (activeOcrWorker) {
    activeOcrWorker.terminate().catch(() => {});
    activeOcrWorker = null;
  }
}
 
function setOcrStatus(text, progressPercent) {
  ocrStatusText.textContent = text;
  ocrProgressFill.style.width = Math.min(Math.max(progressPercent, 0), 100) + '%';
}
 
async function handleScreenshotUpload(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
 
  openOcrModal();
  ocrStatusSection.style.display = 'flex';
  ocrResultsSection.style.display = 'none';
  ocrConfirmBtn.style.display = 'none';
  ocrRawText.style.display = 'none';
  ocrToggleRawTextBtn.textContent = 'Show What Was Read From The Image';
  setOcrStatus('Loading OCR engine\u2026', 0);
 
  try {
    await ensureTesseractLoaded();
    setOcrStatus('Warming up the OCR engine\u2026', 8);
 
    let currentAttemptStatusText = 'Reading the screenshot\u2026';
    let currentAttemptBaseProgress = 10;
 
    activeOcrWorker = await Tesseract.createWorker('eng', 1, {
      logger: (m) => {
        if (m.status === 'recognizing text' && typeof m.progress === 'number') {
          setOcrStatus(currentAttemptStatusText, currentAttemptBaseProgress + m.progress * 25);
        }
      }
    });
 
    // Bordered/grid-line tables (like a university result page) are a known
    // weak spot for Tesseract's default automatic page-layout analysis - it
    // can misjudge the table as a non-text region and skip every row inside
    // it while still reading the plain text around it fine. If the default
    // pass finds nothing, retry with segmentation modes built for exactly
    // this kind of dense, gridded content before giving up.
    const psm = (window.Tesseract && window.Tesseract.PSM) || {};
    const attempts = [
      { label: 'Reading the screenshot\u2026', params: null },
      { label: 'Trying an alternate reading mode\u2026', params: { tessedit_pageseg_mode: psm.SINGLE_BLOCK !== undefined ? psm.SINGLE_BLOCK : 6 } },
      { label: 'Trying one more reading mode\u2026', params: { tessedit_pageseg_mode: psm.SPARSE_TEXT !== undefined ? psm.SPARSE_TEXT : 11 } }
    ];
 
    let bestRows = [];
    let bestText = '';
 
    for (let i = 0; i < attempts.length; i++) {
      currentAttemptStatusText = attempts[i].label;
      currentAttemptBaseProgress = 10 + i * 28;
      setOcrStatus(currentAttemptStatusText, currentAttemptBaseProgress);
 
      if (attempts[i].params) {
        await activeOcrWorker.setParameters(attempts[i].params);
      }
      const { data: { text } } = await activeOcrWorker.recognize(file);
      const rows = parseResultScreenshotText(text);
 
      // Keep whichever attempt produced the most substantial raw text, even
      // if it didn't parse into rows - that's what the "Show What Was Read"
      // fallback needs when every mode strikes out.
      if (text && text.length > bestText.length) {
        bestText = text;
      }
      if (rows.length > bestRows.length) {
        bestRows = rows;
      }
      if (bestRows.length > 0) break; // good enough - no need to try further modes
    }
 
    await activeOcrWorker.terminate();
    activeOcrWorker = null;
 
    setOcrStatus('Parsing detected subjects\u2026', 98);
 
    lastOcrRawText = bestText;
    ocrRawText.textContent = bestText.trim() || '(No text was recognized in that image.)';
 
    ocrStatusSection.style.display = 'none';
    ocrResultsSection.style.display = 'block';
    renderOcrPreviewRows(bestRows);
  } catch (err) {
    console.error('OCR failed:', err);
    activeOcrWorker = null;
    setOcrStatus(err.message || "Something went wrong reading that image. Try a clearer screenshot, or add subjects manually.", 0);
  }
}
 
// Builds a { CODE: { name, credits } } lookup from the app's own curriculum
// data (core courses in SYLLABUS_PRESETS + elective catalogs in ELECTIVES),
// so a code detected on a result page can be auto-filled with its name and
// credit value even when the page itself doesn't show them - which is the
// normal case for Anna University's own result portal.
function buildCourseInfoMap() {
  const map = {};
 
  Object.values(SYLLABUS_PRESETS).forEach(deptPresets => {
    Object.values(deptPresets).forEach(semList => {
      semList.forEach(course => {
        if (!course.isElective && course.code && !map[course.code]) {
          map[course.code] = { name: course.name, credits: course.credits };
        }
      });
    });
  });
 
  // Elective catalogs only store {code, name} - credit value follows the
  // fixed convention for that slot type (matches SYLLABUS_PRESETS slots above)
  const electiveCredits = {
    PEC: 3, 'OEC-I': 3, 'OEC-II': 3, 'OEC-III': 3, 'OEC-IV': 3, MGT: 3, 'MC-I': 0, 'MC-II': 0
  };
  Object.entries(ELECTIVES).forEach(([type, entry]) => {
    const credits = electiveCredits[type] !== undefined ? electiveCredits[type] : 3;
    const addAll = (list) => list.forEach(course => {
      if (course.code && !map[course.code]) {
        map[course.code] = { name: course.name, credits };
      }
    });
    if (Array.isArray(entry)) {
      addAll(entry);
    } else if (entry && typeof entry === 'object') {
      Object.values(entry).forEach(addAll);
    }
  });
 
  return map;
}
 
// Heuristic parser for a university result-page screenshot. Deliberately
// does NOT require a credits or subject-name column in the text, because
// Anna University's own result portal only shows Semester | Subject Code |
// Grade | Result - no name, no credits. Per line: find a known grade token,
// then scan the tokens before it for anything code-shaped, then fill in the
// name/credits either from the text itself (if present) or by looking the
// code up in the app's own curriculum data. A code with no text-based name/
// credits and no catalog match still gets included, just blank, so the
// student can fill it in during review instead of the row silently vanishing.
function parseResultScreenshotText(text) {
  const knownGrades = Object.keys(GRADE_POINTS); // O, A+, A, B+, B, C, RA
  const courseInfoMap = buildCourseInfoMap();
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const rows = [];
 
  lines.forEach(line => {
    const tokens = line.split(/\s+/).filter(Boolean);
    if (tokens.length < 2) return; // too short to plausibly be a subject row
 
    // 1) Find the grade — check the last few tokens on the line for an exact match
    let gradeIdx = -1;
    for (let i = tokens.length - 1; i >= 0 && i >= tokens.length - 3; i--) {
      const cleaned = tokens[i].toUpperCase().replace(/[^A-Z+]/g, '');
      if (knownGrades.includes(cleaned)) {
        gradeIdx = i;
        break;
      }
    }
    if (gradeIdx === -1) return;
    const grade = tokens[gradeIdx].toUpperCase().replace(/[^A-Z+]/g, '');
 
    // 2) Find the subject code — scan every token before the grade (this also
    // naturally skips a leading S.No / semester-number column, since plain
    // numbers don't match the code shape)
    let codeIdx = -1;
    for (let i = 0; i < gradeIdx; i++) {
      if (/^[A-Z]{2,4}\d{3,5}[A-Z]?$/i.test(tokens[i])) {
        codeIdx = i;
        break;
      }
    }
    if (codeIdx === -1) return; // no recognizable course code on this line
    const code = tokens[codeIdx].toUpperCase();
 
    // 3) Credits, if the page happens to show them — a standalone 0-10 number
    // between the code and the grade
    let creditsTokenIdx = -1;
    for (let i = gradeIdx - 1; i > codeIdx; i--) {
      const raw = tokens[i].replace(',', '.');
      if (/^\d+(\.\d+)?$/.test(raw)) {
        const num = parseFloat(raw);
        if (num >= 0 && num <= 10) {
          creditsTokenIdx = i;
          break;
        }
      }
    }
    const textCredits = creditsTokenIdx !== -1 ? parseFloat(tokens[creditsTokenIdx].replace(',', '.')) : null;
 
    // 4) Subject name, if the page happens to show it — whatever text sits
    // between the code and the credits/grade column
    const nameEndIdx = creditsTokenIdx !== -1 ? creditsTokenIdx : gradeIdx;
    const textName = tokens.slice(codeIdx + 1, nameEndIdx).join(' ').trim();
 
    // 5) Fall back to the app's own curriculum data for whatever the page didn't show
    const known = courseInfoMap[code];
    const name = textName || (known ? known.name : '');
    const credits = textCredits !== null ? textCredits : (known ? known.credits : '');
 
    rows.push({ code, name, credits, grade });
  });
 
  return rows;
}
 
function renderOcrPreviewRows(rows) {
  ocrPreviewTableBody.innerHTML = '';
 
  if (rows.length === 0) {
    ocrPreviewTable.style.display = 'none';
    ocrEmptyMessage.style.display = 'block';
    ocrConfirmBtn.style.display = 'none';
    return;
  }
 
  ocrPreviewTable.style.display = '';
  ocrEmptyMessage.style.display = 'none';
  ocrConfirmBtn.style.display = '';
 
  rows.forEach(row => {
    const tr = document.createElement('tr');
 
    const includeTd = document.createElement('td');
    const includeCb = document.createElement('input');
    includeCb.type = 'checkbox';
    includeCb.className = 'ocr-row-include';
    includeCb.checked = true;
    includeCb.addEventListener('change', () => {
      tr.classList.toggle('ocr-row-excluded', !includeCb.checked);
    });
    includeTd.appendChild(includeCb);
 
    const codeTd = document.createElement('td');
    const codeInput = document.createElement('input');
    codeInput.type = 'text';
    codeInput.className = 'ocr-code-input';
    codeInput.value = row.code;
    codeTd.appendChild(codeInput);
 
    const nameTd = document.createElement('td');
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.className = 'ocr-name-input';
    nameInput.value = row.name;
    nameTd.appendChild(nameInput);
 
    const creditsTd = document.createElement('td');
    const creditsInput = document.createElement('input');
    creditsInput.type = 'number';
    creditsInput.min = '0';
    creditsInput.max = '10';
    creditsInput.step = '0.5';
    creditsInput.className = 'ocr-credits-input';
    creditsInput.value = row.credits;
    creditsTd.appendChild(creditsInput);
 
    const gradeTd = document.createElement('td');
    const gradeSelect = document.createElement('select');
    gradeSelect.className = 'ocr-grade-select';
    Object.keys(GRADE_POINTS).forEach(g => {
      const opt = document.createElement('option');
      opt.value = g;
      opt.textContent = g;
      if (g === row.grade) opt.selected = true;
      gradeSelect.appendChild(opt);
    });
    gradeTd.appendChild(gradeSelect);
 
    tr.append(includeTd, codeTd, nameTd, creditsTd, gradeTd);
    ocrPreviewTableBody.appendChild(tr);
  });
}
 
function handleOcrConfirm() {
  const rows = ocrPreviewTableBody.querySelectorAll('tr');
  let addedCount = 0;
 
  rows.forEach(tr => {
    if (!tr.querySelector('.ocr-row-include').checked) return;
 
    const code = tr.querySelector('.ocr-code-input').value.trim();
    const name = tr.querySelector('.ocr-name-input').value.trim();
    const credits = tr.querySelector('.ocr-credits-input').value;
    const grade = tr.querySelector('.ocr-grade-select').value;
 
    if (!name && !code) return;
 
    addGpaRow(code, name, credits, false, "", grade);
    addedCount++;
  });
 
  if (addedCount > 0) {
    calculateGpa();
  }
 
  closeOcrModal();
}
 
