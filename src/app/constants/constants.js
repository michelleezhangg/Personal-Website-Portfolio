/* Global Constants */
export const NAME = 'Michelle Zhang';
export const ROLE = 'Software Engineer';
export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/michelleezhangg',
  instagram: 'https://www.instagram.com/michellee.zhangg/',
  github: 'https://github.com/michelleezhangg',
};
export const COPYRIGHT = 'All rights reserved.';

/* Hero Section Constants */
export const BIO_INTRO = `Hey there! My name is Michelle Zhang and I am a software engineer!
I graduated from Chapman University in May 2024 with a B.S. in Computer Science and a minor in Data Analytics.`;
export const BIO_BACKGROUND = 'I have a background in Full-Stack Developing, Web Development, and Data Analytics.';
export const PHONE_NUMBER = '(949) 466-3855';
export const EMAIL = 'michelleeeezhangggg@gmail.com';

export const NAV_LINKS = [
  {
    title: 'home',
    path: 'home',
  },
  {
    title: 'about me',
    path: 'about-me',
  },
  {
    title: 'projects',
    path: 'projects',
  },
  {
    title: 'contact me',
    path: 'contact-me',
  },
];

/* About Me Constants */
export const EDUCATION = {
  university: 'Chapman University',
  major: 'B.S. in Computer Science',
  minor: 'Data Analytics Minor',
  scholarship: 'Hesperian Scholarship',
  graduation: 'May 2024',
  gpa: '3.7',
  icon_link: '/', // TODO: Chapman logo
  relevant_coursework: [
    'Data Structures and Algorithms',
    'Data Communications and Computer Networks',
    'Object-Oriented Programming',
    'Intro to Unix/Linux',
    'Operating Systems',
    'Web Engineering',
    'Digital Logic Design',
    'Blockchain Technology and Smart Contracts',
    'Programming Languages',
    'Computer Architecture',
    'Algorithm Analysis',
    'Computer Graphics',
    'Scientific Computing',
    'Software Product Management',
    'Artificial Intelligence',
    'Intro to Data Science',
    'Statistical Methods in Business Analytics',
    'Econometrics',
    'Machine Learning',
    'Applied Business Analytics',
  ],
  organizations: [
    'Alpha Kappa Psi (Professional Business Fraternity)',
    'SPIRE Mentorship Program',
    'Gamma Beta Phi Honors Society',
    'National Soceity of Collegiate Scholars (NSCS)',
  ],
  programming_languages: { // TODO: update with icons
    proficient: [
      {
        name: 'Python',
        path: '/assets/python-icon.svg',
      },
      {
        name: 'C/C++',
        path: '/assets/c++-icon.svg',
      },
      {
        name: 'Java',
        path: '/assets/java-icon.svg',
      },
      {
        name: 'HTML5/CSS3',
        path: '/assets/html-icon.svg',
      },
    ],
    familiar: [
      {
        name: 'Javascript/Typescript',
        path: '/assets/javascript-icon.svg',
      },
      {
        name: 'React.js',
        path: '/assets/react-icon.svg',
      },
      {
        name: 'SQL',
        path: '/images/sql-icon.png',
      },
      {
        name: 'PHP',
        path: '/assets/php-icon.svg',
      }
    ],
  },
  technical_skills: [ // TODO: update with icons
    {
      name: 'Git',
      path: '/assets/git-icon.svg',
    },
    {
      name: 'GitHub',
      path: '/assets/github-icon.svg',
    },
    {
      name: 'Jupyter Notebook',
      path: '/assets/jupyter-icon.svg',
    },
    {
      name: 'Unix/Linux',
      path: '/images/linux-icon.png',
    },
    {
      name: 'Docker',
      path: '/assets/docker-icon.svg',
    },
    {
      name: 'Firebase',
      path: '/assets/firebase-icon.svg',
    },
    {
      name: 'AWS',
      path: '/assets/aws-icon.svg',
    },
  ],
};

export const LANGUAGES = [
  {
    language: 'English',
    fluency: 'Native, fluent',
  },
  {
    language: 'Mandarin Chinese',
    fluency: 'Native, fluent',
  },
  {
    language: 'Spanish',
    fluency: 'Intermediate',
  },
];

export const INTERESTS = [
  'Music (Piano, Guitar, Singing)',
  'Film/Television',
  'Fitness',
  'Writing',
  'Traveling',
  'Artificial Intelligence (AI)',
];

export const PROFESSIONAL_EXPERIENCE = [
  {
    company: 'Warner Bros. Discovery',
    position: 'Software Engineering Intern',
    location: 'Bellevue, WA',
    date: 'Jun 2023 - Aug 2023',
    logo: '/images/warner-bros-discovery-logo.png',
    bullet_points: [
      'Developed a full-stack dashboard for TNT Sports developers to effectively monitor the health of 11 TNT channels',
      'Worked cross-functionally with the Live Streaming team and 10+ engineers to constantly improve the dashboard design',
      'Utilized technologies such as React.js for frontend, TypeScript for backend, AWS, and Figma for wireframing',
      'Increased efficiency for engineers and provided Technology Operations Center (ToC) with clear steps for mitigation',
    ],
  },
  {
    company: 'Fu11 Mart Inc.',
    position: 'Full-Stack Software Engineering Intern',
    location: 'Frisco, TX',
    date: 'Jul 2022 - Nov 2022',
    logo: '/images/fu11-mart-logo.png',
    bullet_points: [
      'Developed a full-stack ecommerce and company website to increase company revenue and expand customer target audience to national and international scales',
      'Led and worked alongside a 5-member engineering team to produce, modify, and debug software',
      'Collaborated with product management, development, and design teams, other engineering departments, and business teams to ensure technical responsibilities and future projected goals are met',
    ],
  },
  {
    company: 'TheCoderSchool',
    position: 'Code Coach',
    location: 'La Palma',
    date: 'Feb 2022 - Jul 2022',
    logo: '/images/thecoderschool-logo.png',
    bullet_points: [
      'Responsible for coaching students ages 4 to 19 in 1:1 and 2:1 formatted sessions and coached over 30 students',
      'Guided students through personalized coding projects, coding competition preparation, and offer programming advice',
      'Responsible for creating curriculums to help teach kids a variety of languages such as Scratch, Python, and Java',
    ],
  },
];

/* Projects Constants */
// TODO: finish filling in all projects data
export const PROJECTS = [
  {
    title: 'Personal Website Portfolio',
    date: 'Sep 2024 - Present',
    location: 'West Covina, CA',
    links: [
      {
        link_name: 'GitHub Link',
        url: 'https://github.com/michelleezhangg/Personal-Portfolio-Website',
      },
    ],
    bio: ``,
    bullet_points: [],
  },
  {
    title: 'Brain Tumor MRI Scan Classification',
    date: 'Nov 2023 - Dec 2023',
    location: 'Chapman University, Orange, CA',
    links: [
      {
        link_name: 'GitHub Link',
        url: 'https://github.com/michelleezhangg/CPSC393Final',
      },
    ],
    bio: `Implemented a deep Convolutional Neural Network (CNN) model to classify MRI scans of four categories of brain tumors:
      no tumor, Glioma tumors, Meningioma tumors, and Pituitary tumors. Utilized two pre-trained models, VGG16 Transfer Learning Model
      and EfficientNetB7 Trasfer Learning Model, to compare with the first model and derive meaningful results from all models`,
    bullet_points: [], // TODO: write bullet points
  },
  {
    title: 'Rosetta Stone Subscriber Optimizer',
    date: 'Nov 2023 - Dec 2023',
    location: 'Chapman University, Orange, CA',
    links: [
      {
        link_name: 'Slide Deck',
        url: 'https://www.canva.com/design/DAF1g78GE40/R0xVlhGvUOICpNBDmb70zA/view?',
      },
    ],
    bio: `Analyzed thousands of lines of subscription data for Rosetta Stone to derive subscriber segments in order to categorize subscribers
      and understand the data more thoroughly. The goal was to determine the most valuable subscribers and least valuable subscribers.
      These observations were used to determine the barriers of renewal for subscribers, suggestions, and business opportunities, and finally an executive summary.
      Completed this project with a team of colleagues. Presented our findings in a professional slide deck.`,
    bullet_points: [], // TODO: write bullet points
  },
  {
    title: 'College Admissions Data Analysis',
    date: 'May 2023',
    location: 'Chapman University, Orange, CA',
    links: [
      {
        link_name: 'Notebook Link',
        url: '',
      },
    ],
    bio: `Utilized multiple machine learning models and EDA to explore and analyze college admissions data from thousands of colleges with 100+ features.
      Explored using supervised models, clustering, and dimensionality reduction and focused on data visualization to make the data more understandable and applicable.`,
    bullet_points: [], // TODO: write bullet points
  },
  {
    title: 'Film Data Analysis',
    date: 'May 2023',
    location: 'Chapman University, Orange, CA',
    links: [
      {
        link_name: 'GitHub Link',
        url: 'https://github.com/michelleezhangg/Film-Data-Analytics',
      },
      {
        link_name: 'Final Report Paper',
        url: 'https://www.linkedin.com/in/michelleezhangg/details/projects/598345334/multiple-media-viewer/?profileId=ACoAADb2FekBRaQk5wier9UvTIYEnf1Xbs83p7Y&treasuryMediaId=1635528518386',
      },
    ],
    bio: `Analyzed data from TMDB from Kaggle on over 3,000 movies and 8 features.
      Used multiple machine learning and analytical models to effectively predict the profit based on the other feature variables.
      Data overview examination, feature transformation, data cleaning, and modeling were used in all processes.
      Included data visualization graphs and charts to display the model results and applied our findings to business use cases and real-world applications.
      Coded in R/RStudio and a Final Report was written to concisely condense our findings.`,
    bullet_points: [], // TODO: write bullet points
  },
  {
    title: '3D Printing Research Project',
    date: 'Feb 2020 - May 2022',
    location: 'Chapman University, Orange CA',
    links: [
      {
        link_name: 'Research Poster',
        url: 'https://www.linkedin.com/in/michelleezhangg/details/projects/1635528520237/single-media-viewer/?profileId=ACoAADb2FekBRaQk5wier9UvTIYEnf1Xbs83p7Y',
      },
    ],
    bio: ``,
    bullet_points: [], // TODO: write bullet points
  },
  {
    title: 'University Student-Faculty Database',
    date: 'April 2022',
    location: 'Chapman University, Orange, CA',
    links: [
      {
        link_name: 'GitHub Link',
        url: 'https://github.com/michelleezhangg/Student-Faculty-BST-Database',
      },
    ],
    bullet_points: [
      'Simulated a university database by storing, removing, and maintaining all data in a Binary Search Tree data structure',
      `Implemented a Binary Search Tree Abstract Data Structure in C++ and explored Object Serialization and Rollback features using Stacks with
      capabilities of storing 10,000+ student and faculty data entries`,
      'Worked extensively with a fellow classmate on code design and implementation and used Git/GitHub for source control',
    ],
  },
  {
    title: 'Scientific Computing Project',
    date: 'Sep 2020 - Dec 2020',
    location: 'Chapman University, Orange, CA',
    links: [
      {
        link_name: 'GitHub Link',
        url: 'https://github.com/michelleezhangg/Scientific-Computing-Project',
      },
    ],
    bio: `Through careful design and collaboration, four other colleagues and I designed code to explore and display the equilibrium configurations
      of a system of masses through the minimization of the system's potential energies. We conducted research on real-world applications of our project
      and the feasibility of the geometric shapes produced and presented our findings in a 80-minute presentation and discussion with our other colleagues and professor.`,
    bullet_points: [],
  },
];

/* Contact Me Constants */
export const CONNECT_BIO = 'Feel free to reach out to me through my socials or this contact form!';
export const EMAIL_PLACEHOLDER = 'michelle@google.com';
export const SUBJECT_PLACEHOLDER = 'Just saying hi';
export const MESSAGE_PLACEHOLDER = "Let's talk about...";
export const THANK_YOU_MESSAGE = 'Thank you for contacting me!';
export const SUBMISSION_CONFIRMATION = 'New message submitted!';
