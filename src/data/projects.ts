const projects = [
  {
    id: 6,
    url: 'www.factorygame.org',
    banner: '/projects/FactoryGame/factorygame.PNG',
    img: '/projects/FactoryGame/factorygame.PNG',
    title: 'FactoryGame',
    type: 'Website',
    web: 'https://www.factorygame.org /',
    description:
      'Factory is a game asset creation platform based on NFT technology. The platform allows users to create new, higher-level NFTs, known as "Products," by staking existing digital assets (such as ERC-20, ERC-721, and ERC-1155 tokens). ',
    tags: [
      {name: 'Blockchain Projects'},
    ],
    tech: [
      { name: 'Solidity', icon: '/icons/solidity.png' },
      { name: 'TypeScript', icon: '/icons/TS.png'},
      { name: 'React', icon: '/icons/react.svg'},
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
      { name: 'TailwindCSS', icon: '/icons/tailwindcss.svg' },
      { name: 'MongoDB', icon: '/icons/mongodb.svg' },
      { name: 'Git', icon: '/icons/git.png' }
    ],
   
  },
  {
    id: 5,
    url: 'www.mimic.fi',
    banner: '/projects/Mimic/Mimicfinance.PNG',
    img: '/projects/Mimic/Mimicfinance.PNG',
    title: 'MimicFinance',
    type: 'Website',
    web: 'https://www.mimic.fi',
    description:
      'Mimic is a decentralized platform to model and automate DeFi operations. At its core, Mimic empowers users to define and execute tasks seamlessly within the DeFi ecosystem. These tasks encompass a wide range of operations, including yield farming, liquidity provision, token swaps, bridging assets, portfolio rebalancing, and more.',
    tags: [
      {name: 'Blockchain Projects'}
    ],

    tech: [
      { name: 'Solidity', icon: '/icons/solidity.png' },
      { name: 'TypeScript', icon: '/icons/TS.png'},
      { name: 'Polygon', icon: '/icons/polygon.png' },
      { name: 'Next', icon: '/icons/nextjs.png' },
      { name: 'Hardhat', icon: '/icons/hardhat.png' },
      { name: 'Git', icon: '/icons/git.png' }
    ],

  },
  {
    id: 4,
    url: 'https://www.voidz.app',
    banner: '/projects/voidz/voidz.PNG',
    img: '/projects/voidz/voidz.PNG',
    title: 'VoidZ',
    type: 'Website',
    web: 'https://www.voidz.app',
    description:
      'VoidZ is a Synthetic Liquidity Protocol designed to transform in-game assets into real-world, tradeable tokens through cross-chain tokenization. It unlocks the financial potential of gaming assets by allowing players and developers to tokenize and trade these assets on the blockchain.',
    tags: [
      {name: 'Blockchain Projects'},
    ],

    tech: [
      { name: 'Solidity', icon: '/icons/solidity.png' },
      { name: 'TypeScript', icon: '/icons/TS.png'},
      { name: 'Ethereum', icon: '/icons/ethereum.png' },
      { name: 'Web3', icon: '/icons/web3.png' },
      { name: 'Next', icon: '/icons/nextjs.png' },
      { name: 'Hardhat', icon: '/icons/hardhat.png' },
      { name: 'Git', icon: '/icons/git.png' }
    ],
  },
  {
    id: 3,
    url: 'https://mukul-beach-resort.vercel.app/',
    banner: '/projects/HotelRoomBookingSystem/hotelbooking.png',
    img: '/projects/HotelRoomBookingSystem/hotelbooking.png',
    title: 'Hotel Room Booking System',
    type: 'Website',
    web: 'https://mukul-beach-resort.vercel.app/',
    description:
      'This project is a Beach Resort | Hotel Room Booking System. Frontend (Client Side) has developed by Next.js and Admin Panel has developed by React. And Backend has developed by Express.js. ',
    tags: [
      {name: 'React'},
      {name: 'Next.js'}
    ],
    tech: [
      { name: 'JavaScript', icon: '/icons/JS.png'},
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'Next.js', icon: '/icons/nextjs.png' },
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
      { name: 'express.js', icon: '/icons/expressjs.png' },
      { name: 'MongoDB', icon: '/icons/mongodb.svg' },
      { name: 'TailwindCSS', icon: '/icons/tailwindcss.svg' },
      { name: 'Git', icon: '/icons/git.png' }
    ],

  },
  {
    id: 2,
    url: 'https://job-portal-teal.vercel.app/',
    banner: '/projects/EmpowerKids/EKBG.png',
    img: '/projects/EmpowerKids/EKBG.png',
    title: 'EmpowerKids',
    type: 'Website',
    icon: '/projects/EmpowerKids/EKlogo.jpg',
    github: 'https://github.com/cryptovecom/EmpowerKids',
    blog: 'https://saravanakumar2003.hashnode.dev/empowerkids-complaint-portal',
    web: 'https://empowerkids.netlify.app/',
    description:
      'Empowerkids is a platform that allows children to file complaints regarding issues that affect them. ',
    tags: [
      {name: 'Hackathon Projects'},
    ],

    tech: [
      {
        name: 'HTML',
        icon: '/icons/HTML.png',
        color: '#FFFFFF',
        rgb: '255, 255, 255'
      },
      {
        name: 'Firebase',
        icon: '/icons/Firebase.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'JavaScript',
        icon: '/icons/JS.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'CSS',
        icon: '/icons/CSS.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
    ],

    print: [
      {
        name: 'Home Page',
        description:
          'It is the home page of our website with basic information. It features a Notification / Circulars section with the latest updates from Officers.',
        img: '/projects/EmpowerKids/EK1.jpeg'
      },
      {
        name: 'Student Dashboard',
        description:
          'Student can Raise a New Complaint by entering "Complaint Type" and "Complaint Description". Students can see the "My Complaints" section with all complaints lodged by him/her in the Data Table. Info icon opens dialog box for additional information like Issued To, Remarks etc.',
        img: '/projects/EmpowerKids/EKStudent.jpeg'
      },
      {
        name: 'Officer Dashboard',
        description:
          'Features the same UI for three different officers - EmpowerKids Team, Legal Expert, and Government Official. Officer can add/delete Notification / Circulars from the dashboard which is shown on the Home Page.',
        img: '/projects/EmpowerKids/EKOfficial.jpeg'
      },
      {
        name: 'Admin Dashboard',
        description:
          'Admin Data Table features all account details. Admin can change any account type to - Student, EmpowerKids Team, Legal Expert, Government Official, Admin.',
        img: '/projects/EmpowerKids/EKAdmin.jpeg'
      },
      {
        name: 'Contact Us Page',
        description:
          'Contact Us Page features about us, contact details, and a email ID for any queries.',
        img: '/projects/EmpowerKids/EkComplaint.jpeg'
      },
    ],
    status: 'Completed',
    year: 'November 2023',
    gif: '/projects/Portfolio/Cool.mp4',
    backgroundImage: '/projects/Background.png',
    video:
      'https://youtu.be/oh0n2WFNn5U'
  },
  {
    id: 1,
    url: 'Personal Portfolio',
    banner: '/projects/Portfolio/Portfolio.png',
    img: '/projects/Portfolio/Portfolio.png',
    title: 'Personal Portfolio',
    type: 'Website',
    icon: '/Logo1.png',
    github: 'https://github.com/cryptovecom/Portfolio',
    blog: 'https://saravanakumar2003.hashnode.dev/how-i-built-my-portfolio',
    web: 'https://saravana.vercel.app/',
    description:
      'It is built using Next.js, a React framework that enables server-side rendering and other powerful features. The website is designed to showcase my skills, projects, and other relevant information.',
    tags: [
      {name: 'Personal Projects'},
    ],

    tech: [
      {
        name: 'Next.js',
        icon: '/icons/nextjs.png',
        color: '#FFFFFF',
        rgb: '255, 255, 255'
      },
      {
        name: 'Vercel',
        icon: '/icons/vercel.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'TypeScript',
        icon: '/icons/TS.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'React',
        icon: '/icons/react.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
    ],

    print: [
      {
        name: 'Home Page',
        description:
          'The home page features a brief introduction about me, my skills, and my projects. It also features a link contact form and to my resume. The home page also features a music toggle button that allows the user to play a bgm while viewing my portfolio.',
        img: '/projects/Portfolio/Home.png'
      },
      {
        name: 'Top Skills',
        description:
          'The top skills section features my top skills with a stunning. The top skills is animated using Framer Motion. It is also responsive and changes its width and number of skills to be displayed in single row according to the screen size.',
        img: '/projects/Portfolio/Skills.png'
      },
      {
        name: 'Instagram Feed',
        description:
          'The Instagram feed section features my latest Instagram posts. It is built using the Instagram Widgets by Behold.so (third-part provider).',
        img: '/projects/Portfolio/IG.png'
      },
      {
        name: 'Github Contributions',
        description:
          'Integration with GitHub allows dynamic fetching and display of GitHub-related data, such as followers, following, total stars and contributions.',
        img: '/projects/Portfolio/github.png'
      },
      {
        name: 'Contact Page',
        description:
          'The contact page features a contact form that allows the user to send me a message. The contact form is built using Emailjs, a third-party provider.',
        img: '/projects/Portfolio/contact.png'
      },
      {
        name: 'Calendly Integration',
        description:
          'Integration with Calendly allows the user to schedule a meeting with me. The Calendly widget is embedded in the website.',
        img: '/projects/Portfolio/calendy.png'
      }
    ],
    status: 'Completed',
    year: 'October 2023',
    gif: '/projects/Portfolio/Cool.mp4',
    backgroundImage: '/projects/Background.png',
    video:
      'https://youtu.be/WzlVRtlzjSM'
  },
]

export default projects
