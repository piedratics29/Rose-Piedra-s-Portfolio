const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const wordpressProjects = [
  {
    title: 'ShopSmart - Local Marketplace Website',
    desc: 'Digital marketplace for local businesses, built in Elementor with custom CSS/JS for tighter layouts and UX. Currently in development, preparing for launch.',
    stack: 'WordPress · Elementor · Custom CSS · JavaScript · Theme Customization',
    image: withBase('/shopsmart.png'),
    action: { label: 'View Demo', href: 'https://shopsmart.net.ph/', type: 'demo' },
  },
  {
    title: 'Jagna Tourism & Community Website',
    desc: 'WordPress site showcasing Jagna, Bohol with tourism highlights and community content for residents and visitors. The website is not publicly accessible yet and requires a password to enter.',
    stack: 'WordPress · Elementor · CSS · JavaScript',
    image: withBase('/jagna.png'),
    action: { label: 'View Demo', href: 'https://qrn.zkq.temporary.site/website_4cec4bca/', type: 'demo' },
  },
];

export const frontendProjects = [
  {
    title: 'Cariton - Ordering System + Kiosk Version',
    desc: 'Web-based ordering system with kiosk flow for smooth on-site purchases. Screenshots will show the UI and ordering journey.',
    stack: 'HTML · CSS · JavaScript · Bootstrap · Django · Python',
    image: withBase('/kiosk.png'),
    screenshots: [
      {
        src: withBase('/cariton-1.png'),
        label: 'Kiosk light mode screen',
      },
      {
        src: withBase('/cariton-2.png'),
        label: 'Order placed confirmation screen',
      },
      {
        src: withBase('/cariton-3.png'),
        label: 'Kiosk landing page',
      },
      {
        src: withBase('/cariton-4.png'),
        label: 'Cariton ordering system preview',
      },
    ],
    action: { label: 'View Screenshots', href: '#', type: 'screens' },
  },
  {
    title: 'PresencePro - Executive Presence Platform',
    desc: 'Platform that helps executives build visibility, consistency, and authentic leadership presence; supports leaders and HR teams alike.',
    stack: 'HTML/CSS · JavaScript · Bootstrap · SASS',
    image: withBase('/presencepro.png'),
    action: { label: 'View Link', href: 'https://presencepro.ai/', type: 'demo' },
  },
  {
    title: 'SOOKE - Reward Mobile App',
    desc: 'Reward-based mobile app where users earn points through engagement and convert them into rewards. Screenshots will highlight the flow.',
    stack: 'Frontend/UI Development',
    image: withBase('/sooke.png'),
    screenshots: [
      {
        src: withBase('/sooke-1.png'),
        label: 'Rewards app preview',
      },
      {
        src: withBase('/sooke-2.png'),
        label: 'Rewards app preview',
      },
      {
        src: withBase('/sooke-3.png'),
        label: 'Rewards app preview',
      },
    ],
    action: { label: 'View Screenshots', href: '#', type: 'screens' },
  },
  {
    title: 'Kabrita - Learning & Rewards Platform',
    desc: 'Learning platform with quizzes, video tutorials, and a points-based reward system.',
    stack: 'Frontend Development · Django · Python',
    image: withBase('/kabrita.png'),
    screenshots: [
      {
        src: withBase('/kabrita-1.png'),
        label: 'Learning platform preview',
      },
      {
        src: withBase('/kabrita-2.png'),
        label: 'Learning platform preview',
      },
      {
        src: withBase('/kabrita-3.png'),
        label: 'Learning platform preview',
      },
    ],
    action: { label: 'View Screenshots', href: '#', type: 'screens' },
  },
];
