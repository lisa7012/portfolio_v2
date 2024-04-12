const data = {
  // Home
  name: 'Lisa',
  fullName: 'Lisa Duong',
  intro:
    "I'm a recent graduate and I majored in Computer Science. I strive to improve my technical skills as a developer and deepen my knowledge about various technologies.",

  // About Me
  aboutMePara1: `Hello! I'm Lisa and I graduated from Concordia University with a Bachelor's in Computer Science. My interests lies in various areas such as 
  front-end development and web development.`,
  workplaces: [
    {
      company: 'a bank',
      link: 'https://www.nbc.ca/',
    },
    {
      company: 'an enterprise software company',
      link: 'https://www.coveo.com/en',
    },
  ],
  aboutMePara2: {
    pieces: [
      'Regarding my previous experiences, I have had the opportunity to intern as a software developer at ',
      ' and at ',
      ', both based in Canada.',
    ],
  },

  technologies: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux-Saga',
    'Java',
    'Python',
    'C++',
  ],

  // Projects
  projects: [
    {
      id: 1,
      name: 'eGreet',
      description:
        'A web app where users can create and send a free eCard to anyone. Start by selecting a photo, filling in information, card customization, and then send! Recipients will receive their card via email including a link to view and download in browser.',
      tech: 'Next.js • Tailwind CSS • TypeScript • Figma • React Email',
      link: 'https://egreet.vercel.app/',
    },
    {
      id: 2,
      name: 'This Portfolio',
      description:
        'My small personal portfolio that I designed using Figma and coded in React and CSS.',
      tech: 'React • CSS',
      link: 'https://github.com/lisa7012/portfolio_v2',
      figma:
        'https://www.figma.com/proto/MCCeCEj3kMWsJzoroQQQwf/portfolio_v2?type=design&node-id=1035-67&t=B4LaMejjmuvfQMms-1&scaling=min-zoom&page-id=802%3A2&mode=design',
    },
    {
      id: 3,
      name: 'Poll System',
      description:
        'A web app that allows users to create, delete, and manage polls as an admin or vote as a participant. Users may display and download the results. Course project.',
      tech: 'React • Java Servlets',
      link: 'https://github.com/laila-chammaa/poll-system',
    },
    {
      id: 4,
      name: 'Butterfly Effect Editor',
      description:
        'A smart text editor web app that allows the user to save, group, and apply edits. Course project.',
      tech: 'HTML • CSS • JavaScript • React',
      link: 'https://github.com/Butterfly354/ButterflyEffectEditor',
    },
    {
      id: 5,
      name: 'Covid Web App',
      description:
        'A web app that allows employees to view/add/edit/delete patient, region, groupzone, etc. data from the database. Course project.',
      tech: 'HTML • CSS • PHP • MySQL',
      link: 'https://github.com/lisa7012/Covid_Web_App',
    },
    {
      id: 6,
      name: 'Warzone Game',
      description:
        'A game simulating https://www.warzone.com/ that is played using the terminal. Course project.',
      tech: 'C++',
      link: 'https://github.com/lisa7012/Warzone_Game',
    },
    {
      id: 7,
      name: 'Bistro Otto',
      description:
        'A restaurant website created for my Intro to Web Programming course project. Course project.',
      tech: 'HTML • CSS • JavaScript • PHP',
      link: 'https://github.com/lisa7012/Restaurant_Website',
    },
    {
      id: 8,
      name: 'Panic App',
      description:
        'An Android app that aims to help calm people during a panic attack. User can upload recordings and sounds that soothes them. Assisted a friend on their personal project.',
      tech: 'Kotlin • XML',
      link: 'https://github.com/LLA-panic/panic-button',
    },
  ],

  // Contact - Socials
  socials: [
    {
      name: 'Github',
      username: 'lisa7012',
      link: 'https://github.com/lisa7012',
    },
    {
      name: 'Email',
      link: 'mailto:lisa_gd28@hotmail.com',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/lisa-duong-763b33203/',
    },
  ],
};

export default data;
