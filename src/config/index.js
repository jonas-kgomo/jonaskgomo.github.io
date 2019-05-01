module.exports = {
  siteTitle: 'Jonas Kgomo | Software Engineer',
  siteDescription:
    'Jonas Kgomo is a software developer working in quantum computing',
  siteKeywords:
    'Jonas, Kgomo, Jonas, quantum developer, software engineer,qiskit, web developer, javascript, Istanbul',
  siteUrl: 'https://jonaskgomo.github.io',
  siteLanguage: 'en_US',

  googleVerification: 'v45gEXrlqmdCSjmEvzuvfJfEZ4y3R7onGfXG7tvxBBc',

  name: 'Jonas Kgomo',
  location: 'Istanbul, TR',
  email: 'jonaskgmoo@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/jonas-kgomo/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jonas-kgomo/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/jonas-kgomo/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/viberian.sun/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/MarkovianRegime',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Blog',
      url: '#blog',
    },
    {
      name: 'Work',
      url: '#projects',
    },
  ],

  twitterHandle: '@MarkovianRegime',
  googleAnalyticsID: 'UA-96477171-2',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
