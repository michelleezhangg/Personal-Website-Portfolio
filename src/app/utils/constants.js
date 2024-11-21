/* Hero Section Constants */
export const PERSONAL = {
  name: "Michelle Zhang",
  role: "Software Engineer",
  phone_number: "(949) 466-3855",
  email: "mz@michellezhangdev.com",
  intro: `Hey there! My name is Michelle Zhang and I am a software engineer!
  I graduated from Chapman University in May 2024 with a B.S. in Computer Science and a minor in Data Analytics.`,
  background:
    "I have a background in Full-Stack Development, Web Development, and Data Analytics.",
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/michelleezhangg",
  instagram: "https://www.instagram.com/michellee.zhangg/",
  github: "https://github.com/michelleezhangg",
};

export const SOCIAL_ICONS = {
  linkedin: "/icons/linkedin-icon.svg",
  linkedinLight: "/icons/linkedin-icon-dark.svg",
  github: "/icons/github-icon.svg",
  githubLight: "/icons/github-icon-light.svg",
  instagram: "/icons/instagram-icon.svg",
  instagramLight: "/icons/instagram-icon-light.svg",
  phone: "/icons/phone-icon.svg",
  phoneLight: "/icons/phone-icon-light.svg",
  email: "/icons/email-icon.png",
  emailLight: "/icons/email-icon-light.png",
};

export const NAV_LINKS = [
  {
    title: "home",
    path: "home",
  },
  {
    title: "background",
    path: "background",
  },
  {
    title: "experience",
    path: "experience",
  },
  {
    title: "projects",
    path: "projects",
  },
  {
    title: "contact me",
    path: "contact-me",
  },
];

/* About Me Constants */
export const EDUCATION = {
  university: "Chapman University",
  major: "B.S. in Computer Science",
  minor: "Data Analytics Minor",
  scholarship: "Hesperian Scholarship",
  graduation: "May 2024",
  gpa: "3.7",
  logo: "/logos/chapman-logo.png",
  relevant_coursework: [
    "Data Structures and Algorithms",
    "Data Communications and Computer Networks",
    "Object-Oriented Programming",
    "Intro to Unix/Linux",
    "Operating Systems",
    "Web Engineering",
    "Digital Logic Design",
    "Blockchain Technology and Smart Contracts",
    "Programming Languages",
    "Computer Architecture",
    "Algorithm Analysis",
    "Computer Graphics",
    "Scientific Computing",
    "Software Product Management",
    "Artificial Intelligence",
    "Intro to Data Science",
    "Statistical Methods in Business Analytics",
    "Econometrics",
    "Machine Learning",
    "Applied Business Analytics",
  ],
  organizations: [
    "Alpha Kappa Psi (Professional Business Fraternity)",
    "SPIRE Mentorship Program",
    "Gamma Beta Phi Honors Society",
    "National Society of Collegiate Scholars (NSCS)",
  ],
  programming_languages: {
    proficient: [
      {
        name: "Python",
        path: "/icons/python-icon.svg",
      },
      {
        name: "C/C++",
        path: "/icons/c++-icon.svg",
      },
      {
        name: "Java",
        path: "/icons/java-icon.svg",
      },
      {
        name: "HTML, CSS",
        path: "/icons/html-icon.svg",
      },
    ],
    familiar: [
      {
        name: "Javascript, Typescript",
        path: "/icons/javascript-icon.svg",
      },
      {
        name: "React.js",
        path: "/icons/react-icon.svg",
      },
      {
        name: "SQL",
        path: "/icons/sql-icon.png",
      },
      {
        name: "R, RStudio",
        path: "/icons/r-icon.svg",
      },
      {
        name: "PHP",
        path: "/icons/php-icon.svg",
      },
    ],
  },
  frameworks: {
    frontend: [
      {
        name: "React.js",
        path: "/icons/react-icon.svg",
      },
      {
        name: "Tailwind CSS",
        path: "/icons/tailwind-icon.svg",
      },
    ],
    backend: [
      {
        name: "Node.js",
        path: "/icons/node-icon.svg",
      },
      {
        name: "Spring Boot",
        path: "/icons/spring-boot-icon.svg",
      },
    ],
    fullStack: [
      {
        name: "Next.js",
        path: "/icons/next-icon.svg",
      },
    ],
  },
  technical_skills: [
    {
      name: "Git",
      path: "/icons/git-icon.svg",
    },
    {
      name: "GitHub",
      path: "/icons/github-icon.svg",
    },
    {
      name: "Unix/Linux",
      path: "/icons/linux-icon.png",
    },
    {
      name: "Docker",
      path: "/icons/docker-icon.svg",
    },
    {
      name: "AWS",
      path: "/icons/aws-icon.svg",
    },
    {
      name: "Postman",
      path: "/icons/postman-icon.svg",
    },

    {
      name: "Figma",
      path: "/icons/figma-icon.svg",
    },
    {
      name: "Jira",
      path: "/icons/jira-icon.svg",
    },
  ],
};

export const LANGUAGES = [
  {
    language: "English",
    fluency: "Native, fluent",
  },
  {
    language: "Mandarin Chinese",
    fluency: "Native, fluent",
  },
];

export const INTERESTS = [
  "Music (Piano, Guitar, Singing)",
  "Film/Television",
  "Fitness",
  "Writing",
  "Traveling",
];

export const PROFESSIONAL_EXPERIENCE = [
  {
    company: "Warner Bros. Discovery",
    position: "Software Engineer",
    location: "Burbank, CA",
    type: "Hybrid",
    date: {
      startMonth: "Jul",
      startYear: "2024",
    },
    team: "Trust and Safety (TAZ)",
    logo: "/logos/warner-bros-discovery-logo.png",
  },
  {
    company: "Warner Bros. Discovery",
    position: "Software Engineering Intern",
    location: "Bellevue, WA",
    type: "Hybrid",
    date: {
      startMonth: "Jun",
      startYear: "2023",
      endMonth: "Aug",
      endYear: "2023",
    },
    team: "Global Live Orchestration (GLO)",
    logo: "/logos/warner-bros-discovery-logo.png",
    bullet_points: [
      "Developed a full-stack dashboard for TNT Sports developers to effectively monitor the health of 11 TNT channels",
      "Worked cross-functionally with the Live Streaming team and 10+ engineers to constantly improve the dashboard design",
      "Utilized technologies such as React.js for frontend, TypeScript for backend, AWS, and Figma for wireframing",
      "Increased efficiency for engineers and provided Technology Operations Center (ToC) with clear steps for mitigation",
    ],
  },
  {
    company: "Fu11 Mart",
    position: "Full-Stack Software Engineering Intern",
    location: "Frisco, TX",
    type: "Remote",
    date: {
      startMonth: "Jul",
      startYear: "2022",
      endMonth: "Nov",
      endYear: "2022",
    },
    logo: "/logos/fu11-mart-logo.png",
    bullet_points: [
      "Developed a full-stack ecommerce and company website to increase company revenue and expand customer target audience to national and international scales",
      "Led and worked alongside a 5-member engineering team to produce, modify, and debug software",
      "Collaborated with product management, development, and design teams, other engineering departments, and business teams to ensure technical responsibilities and future projected goals are met",
    ],
  },
  {
    company: "TheCoderSchool",
    position: "Code Coach",
    location: "La Palma, CA",
    type: "In Person",
    date: {
      startMonth: "Feb",
      startYear: "2022",
      endMonth: "Jul",
      endYear: "2022",
    },
    logo: "/logos/thecoderschool-logo.png",
    bullet_points: [
      "Responsible for coaching students ages 4 to 19 in 1:1 and 2:1 formatted sessions and coached over 30 students",
      "Guided students through personalized coding projects, coding competition preparation, and offer programming advice",
      "Responsible for creating curriculums to help teach kids a variety of languages such as Scratch, Python, and Java",
    ],
  },
];

/* Projects Constants */
export const PROJECTS = [
  {
    title: "Personal Website Portfolio",
    date: {
      startMonth: "Sep",
      startYear: "2024",
    },
    location: "West Covina, CA",
    logo: "/images/profile.png",
    links: [
      {
        link_name: "GitHub Link",
        url: "https://github.com/michelleezhangg/Personal-Portfolio-Website",
      },
    ],
    bio: `Designed and developed a modern, responsive personal portfolio to showcase my education background, skills, professional experience, and projects as a software engineer.
      This single-paged application serves as a dynamic interactive resume and portfolio that demonstrates my proficiencies in frontend development and web design.`,
    bullet_points: [
      "Developing a single-paged site to showcase my background, skills, professional experience, and projects as a software engineer",
      "Utilizing React.js, Next.js, and Tailwind CSS for frontend development, JavaScript for backend, and Vercel for deployment",
      "Implementing a custom navbar and menu overlay for responsive web functionality and mobile-friendly user experience",
      "Created custom submission form enabling recruiters, clients, and peers to easily reach me",
    ],
  },
  {
    title: "Brain Tumor MRI Scan Classification",
    date: {
      startMonth: "Nov",
      startYear: "2023",
      endMonth: "Dec",
      endYear: "2023",
    },
    location: "Orange, CA",
    logo: "/logos/chapman-logo.png",
    links: [
      {
        link_name: "GitHub Link",
        url: "https://github.com/michelleezhangg/CPSC393Final",
      },
      {
        link_name: "Slide Deck",
        url: "https://www.canva.com/design/DAF2JXwDYDI/fe_uXG5Yz6O0jrhUjmiTRQ/edit?utm_content=DAF2JXwDYDI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
    ],
    bio: `Implemented a deep Convolutional Neural Network (CNN) model to classify MRI scans of four categories of brain tumors:
      no tumor, Glioma tumors, Meningioma tumors, and Pituitary tumors and utilized two pre-trained models,
      VGG16 Transfer Learning Model and EfficientNetB7 Transfer Learning Model to compare with the first and derived meaningful results from all models`,
    bullet_points: [
      "Trained and evaluated multiple CNN models, including VGG16, EfficientNetB7, and ResNet50, to classify brain MRI scans",
      "Utilized Keras and TensorFlow libraries in Python for model development and evaluation",
      "Implemented data augmentation techniques, such as rotation, zooming, and horizontal flipping, to improve model performance",
      "Evaluated model performance using accuracy, precision, recall, and F1-score metrics, abd provided insights into the classification results through real-world applications and practical usage",
    ],
  },
  {
    title: "Rosetta Stone Subscriber Optimizer",
    date: {
      startMonth: "Nov",
      startYear: "2023",
      endMonth: "Dec",
      endYear: "2023",
    },
    location: "Orange, CA",
    logo: "/logos/chapman-logo.png",
    links: [
      {
        link_name: "Slide Deck",
        url: "https://www.canva.com/design/DAF1g78GE40/R0xVlhGvUOICpNBDmb70zA/view?",
      },
    ],
    bio: `Analyzed thousands of lines of subscription data with a team of colleagues for Rosetta Stone to derive subscriber segments in order to categorize subscribers
      and understand the data more thoroughly. The goal was to determine the most valuable subscribers and least valuable subscribers.
      These observations were used to determine the barriers of renewal for subscribers, suggestions, and business opportunities, and an executive summary.`,
    bullet_points: [
      "Analyzed thousands of lines of data to derive subscriber segments to identify the most and least valuable subscribers, factors preventing renewals, suggestions and business opportunities, and an executive summary",
      "Performed extensive data cleaning, feature engineering, Random Forest modeling and EM Clustering with data visualizations to explain key findings and insights",
      "Derived business growth goals and further engagement incentives from the subscriber segments and models",
      "Presented our findings in a professional slide deck to share with our colleagues and professor",
    ],
  },
  {
    title: "College Admissions Data Analysis",
    date: {
      startMonth: "May",
      startYear: "2023",
      endMonth: "May",
      endYear: "2023",
    },
    location: "Orange, CA",
    logo: "/logos/chapman-logo.png",
    links: [
      {
        link_name: "GitHub Link",
        url: "https://github.com/michelleezhangg/College-Admissions-Data-Analysis",
      },
    ],
    bio: `Utilized multiple machine learning models and exploratory data analysis (EDA) to explore and analyze college admissions data from thousands of colleges with 100+ features.
      Explored using supervised models, clustering, and dimensionality reduction and focused on data visualization to make the data more understandable and applicable.`,
    bullet_points: [
      "Analyzed thousands of colleges with 100+ features to explore, analyze, and compare machine learning model performance on college admissions data",
      "Utilized supervised machine learning models, clustering, and dimensionality reduction techniques to identify patterns and insights in the data",
      "Produced data visualizations and key metrics to compare the effectiveness of the models and identify key differences between their performances and usages",
      "Performed exploratory data analysis (EDA) to understand and contextualize the data before performing analysis and running machine learning models",
    ],
  },
  {
    title: "Film Data Analysis",
    date: {
      startMonth: "May",
      startYear: "2023",
      endMonth: "May",
      endYear: "2023",
    },
    location: "Orange, CA",
    logo: "/logos/chapman-logo.png",
    links: [
      {
        link_name: "GitHub Link",
        url: "https://github.com/michelleezhangg/Film-Data-Analytics",
      },
      {
        link_name: "Final Report Paper",
        url: "/assets/Film-Analysis-Document.pdf",
      },
      {
        link_name: "Slide Deck",
        url: "https://www.canva.com/design/DAFh_iQUcJA/_sO7FPWGq6mVhwd5ALUPGQ/edit?utm_content=DAFh_iQUcJA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
    ],
    bio: `Analyzed data from TMDB from Kaggle on over 3,000 movies and 8 features using multiple machine learning and analytical models coded in R/RStudio to effectively predict the profit based on the other feature variables.
      Utilized data overview examination, feature transformation, data cleaning, and included data visualizations to display model results and apply our findings to business use cases and real-world applications.`,
    bullet_points: [
      "Analyzed data from TMDB from Kaggle on 3,000+ movies and 8 features by building two statistical models to predict a film's revenue and profit",
      "Included data visualization graphs and charts to display the model results and communicate effectively and support our findings",
      "Derived real-world applications by applying the model results to assist producers and production companies to identify key predictors that generate the most profit for a film",
      "Collaborated with three peers, coding the project in R/RStudio and composing a final report and slide deck to concisely condense our findings and explanations",
    ],
  },
  {
    title: "3D Printing Research Project",
    date: {
      startMonth: "Feb",
      startYear: "2020",
      endMonth: "May",
      endYear: "2022",
    },
    location: "Orange CA",
    logo: "/logos/chapman-logo.png",
    links: [
      {
        link_name: "Research Poster",
        url: "/assets/3D-Printing-Project-Poster.pdf",
      },
    ],
    bio: `Conducted research with three colleagues over 4 semesters to find environmentally-friendly 3D printing filament alternatives to counteract
      the harmful byproducts of current popular 3D printing filaments by incorporating spent coffee grounds (SCG) into resin. My team created 3D printing
      prototypes in various forms and shapes and met with industry professionals to conduct tensile strenght and durability material tests.`,
    bullet_points: [
      "Conducted research to find environmentally-friendly 3D printing filament alternatives by incorporating spent coffee grounds (SCG) into resin",
      "Created various 3D printing prototypes in various forms and shapes with different filament ratios and conducted tensile strength and durability material tests",
      "Worked closely with a team of 4 colleagues over an 8-month period and learned from industry professionals and professors",
      "Presented our scientific findings and discoveries at the Chapman Grand Challenges Initiative Spring 2022 End-of-Semester Showcase",
    ],
  },
  {
    title: "University Student-Faculty Database",
    date: {
      startMonth: "Apr",
      startYear: "2022",
      endMonth: "Apr",
      endYear: "2022",
    },
    location: "Orange, CA",
    logo: "/logos/chapman-logo.png",
    links: [
      {
        link_name: "GitHub Link",
        url: "https://github.com/michelleezhangg/Student-Faculty-BST-Database",
      },
    ],
    bio: `Simulated a university database by storing, removing, and maintaining student and faculty data in a Binary Search Tree data structure
      implemented in C++ including Object Serialization and Rollback features with capabilities of storing 10,000+ data entries.`,
    bullet_points: [
      "Simulated a university database by storing, removing, and maintaining all data in a Binary Search Tree data structure",
      "Implemented a Binary Search Tree Abstract Data Structure in C++ and explored Object Serialization and Rollback features using Stacks with capabilities of storing 10,000+ student and faculty data entries",
      "Worked extensively with a fellow classmate on code design and implementation and used Git/GitHub for source control",
    ],
  },
  {
    title: "Scientific Computing Project",
    date: {
      startMonth: "Sep",
      startYear: "2020",
      endMonth: "Dec",
      endYear: "2020",
    },
    location: "Orange, CA",
    logo: "/logos/chapman-logo.png",
    links: [
      {
        link_name: "GitHub Link",
        url: "https://github.com/michelleezhangg/Scientific-Computing-Project",
      },
    ],
    bio: `Through careful design and collaboration, four colleagues and I designed code to explore and display the equilibrium configurations of systems of masses through the minimization of the system's potential energies.
      We conducted research on real-world applications of our project and the feasibility of the geometric shapes produced. We presented our findings in an 80-minute presentation and discussion with other colleagues and professor.`,
    bullet_points: [
      "Explored the effects of altering certain physical values on a controlled system of masses through the minimization of the system's potential energies",
      "Designed code to simulate real-world scenarios and diplayed equilibrium configurations of a system",
      "Conducted extensive research and experimentation of the results and applied our findings to the fields of material science, physics, and engineering",
      "Led an 80-minute scientific presentation and discussion on the different scenarios, results, and project applications with other colleagues and professor",
    ],
  },
];

/* Contact Me Constants */
export const CONTACT = {
  bio: "Feel free to reach out to me through my socials, email or this contact form!",
  placeholders: {
    first_name: "First Name",
    last_name: "Last Name",
    email: "name@gmail.com",
    subject: "Just saying hi...",
    message: "Let's talk about...",
  },
  user_confirmation_email: {
    subject: "Thank you for Contacting Michelle Zhang",
    body: `\nThank you for reaching out to us!
      We've received your message and will get back to your shortly.
      Below are the details of your submission:\n`,
    closing:
      "We appreciate your patience and will respond as soon as possible.",
    signoff: "Best regards,",
  },
  submission_responses: {
    success: "Email sent successfully!",
    submission_confirmation: "New message submitted!",
  },
};

/* Helper Constants */
export const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const monthToNumber = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

/* Responsive Design */
const CUSTOM_MD = "1076px";
export const MD_QUERY = `(min-width: ${CUSTOM_MD})`;
