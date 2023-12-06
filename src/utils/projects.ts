export type Technology =
    | 'Next.js'
    | 'HTML'
    | 'CSS'
    | 'TailwindCSS'
    | 'TypeScript'
    | 'PostgreSQL'
    | 'Supabase'
    | 'Framer Motion'
    | 'React'
    | 'Axios'
    | 'Vite'
    | 'Jest'
    | 'React Router'
    | 'Zustand'
    | 'Vue'
    | 'JavaScript'
    | 'Pinia'
    | 'Angular'
    | 'REST API'
    | 'i18n'
    | 'Redux'
    | 'Chart.js'

export type Project = {
    id: string
    type: 'public' | 'private' | 'moreProjects'
    projectDetailDescription: string
    title: string
    urlTitle: string
    projectScreenShot: string
    repoLink: string
    deployLink: string
    techStack: Technology[]
    description: string
    contentPosition: 'r' | 'l'
}

export const features: Project[] = [
    {
        id: crypto.randomUUID(),
        type: 'private',
        projectDetailDescription: 'Find people',
        title: 'Deverso.io (Angular)',
        urlTitle: 'deverso.io',
        projectScreenShot:
            '/images/deverso-io.jpeg',
        repoLink: '',
        deployLink: 'https://deverso.io',
        techStack: [
            'Angular',
            'HTML',
            'CSS',
            'TailwindCSS',
            'TypeScript',
            'PostgreSQL',
            'Supabase',
            'Framer Motion',
        ],
        description:
            'A decentrilized social network built with Angular and TypeScript. Its a Fullstack app with CRUD operations, using the DeSo blockchain technology. Is our first project in Deverso Labs.',
        contentPosition: 'l',
    },
    {
        id: crypto.randomUUID(),
        type: 'public',
        projectDetailDescription: 'Find people',
        title: 'Anomalie Web App (Next.js)',
        urlTitle: 'anomalie-app',
        projectScreenShot:
            '/images/anomalie-app.png',
        repoLink: 'https://github.com/0xNordian/anomalie-app-supabase',
        deployLink: 'https://anomalie.vercel.app/',
        techStack: [
            'Next.js',
            'HTML',
            'CSS',
            'TailwindCSS',
            'TypeScript',
            'PostgreSQL',
            'Supabase',
            'Framer Motion',
        ],
        description:
            'A twitter clone built with Next.js, TypeScript, TailwindCSS and Framer Motion. Its a Fullstack app with CRUD operations, authentication and authorization.',
        contentPosition: 'r',
    },
    {
        id: crypto.randomUUID(),
        type: 'public',
        projectDetailDescription: 'Get noticed',
        title: 'StarWars Starships (React)',
        urlTitle: 'starWars-starships',
        projectScreenShot:
            '/images/sw.jpg',
        repoLink: 'https://github.com/0xNordian/sprint8',
        deployLink: 'https://sw-sprint8.vercel.app/',
        techStack: [
            'React',
            'HTML',
            'TailwindCSS',
            'TypeScript',
            'Axios',
            'Vite',
            'Jest',
            'React Router',
            'Zustand',
        ],
        description:
            'React app to consult the StarWars starships API. It has a search bar to filter the results and a pagination system to navigate through the results.',
        contentPosition: 'l',
    },
    {
        id: crypto.randomUUID(),
        type: 'public',
        projectDetailDescription: 'Have fun',
        title: 'Doyt (Vue)',
        urlTitle: 'doyt-app',
        projectScreenShot:
            '/images/doyt2.png',
        repoLink: 'https://github.com/0xNordian/you-do',
        deployLink: 'https://doyt.netlify.app/',
        techStack: [
            'Vue',
            'HTML',
            'CSS',
            'JavaScript',
            'Pinia',
            'TailwindCSS',
            'Vite',
        ],
        description:
            'To-do app built with Vue, TailwindCSS and Pinia. It has CRUD operations, authentication and authorization.',
        contentPosition: 'r',
    },
    {
        id: crypto.randomUUID(),
        type: 'public',
        projectDetailDescription: 'Dive into the universe of Rick and Morty with this interactive web application. Built using a stack of cutting-edge technologies and libraries such as React, Next UI, Framer Motion, React Router, Tailwind CSS, TypeScript, and Vite, this project is a testament to modern web development practices. It leverages the Rick and Morty API to fetch and display character details, locations, and episodes from the beloved series.',
        title: 'Jump2Digital Hackathon (React)',
        urlTitle: 'wubba-app',
        projectScreenShot:
            '/images/rickandmorty.png',
        repoLink: 'https://github.com/0xNordian/rickyandmorty-j2d-hackaton',
        deployLink: 'https://wubba.netlify.app/',
        techStack: ['React', 'HTML', 'CSS', 'TypeScript', 'React Router', 'Vite', 'REST API', 'TailwindCSS'],
        description: 'Dive into the universe of Rick and Morty with this interactive web application. It leverages the Rick and Morty API to fetch and display character details, locations, and episodes from the beloved series.',
        contentPosition: 'r',
    },
    {
        id: crypto.randomUUID(),
        type: 'public',
        projectDetailDescription: 'Have fun',
        title: 'Cercle Web (Vanilla JS)',
        urlTitle: 'cercle-app',
        projectScreenShot:
            '/images/circl3.png',
        repoLink: 'https://github.com/0xNordian/IronHack-MidTerm-Rpoject-Circle',
        deployLink: 'https://circl3.netlify.app/',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        description: 'My first project in IronHack using only Vanilla JS. It is a responsive web app with different dynamic sections.',
        contentPosition: 'l',
    },
    {
        id: crypto.randomUUID(),
        type: 'public',
        projectDetailDescription: 'Have fun',
        title: 'CloutPunk Rare (Vue)',
        urlTitle: 'cloutpunk-app',
        projectScreenShot:
            '/images/cloutpunk.jpeg',
        repoLink: 'https://github.com/0xNordian/CloutPunkRare',
        deployLink: 'https://cloutpunkrare.netlify.app/',
        techStack: ['Vue', 'HTML', 'CSS', 'TypeScript', 'TailwindCSS', 'Vite', 'Axios', 'REST API', 'Pinia'],
        description: 'NFT gallery built with Vue, TailwindCSS and Pinia. The class information is not existing in the API, so I created an algorythm to categorize the classes after fetching the API with axios. I cretes on CSS the rainbow effect on the background.',
        contentPosition: 'r',
    },
    {
        id: crypto.randomUUID(),
        type: 'public',
        projectDetailDescription: 'Have fun',
        title: 'Kings League Shop (Vanilla JS)',
        urlTitle: 'kings-shop-app',
        projectScreenShot:
            '/images/kingsShop.jpeg',
        repoLink: 'https://github.com/0xNordian/Sprint-3/tree/main',
        deployLink: 'https://kings-shop.netlify.app/',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        description: 'A Kings League Shop clone built with Vanilla JS. It has a shopping cart and a dedicated product page for the t-shirts.',
        contentPosition: 'l',
    },
    {
        id: crypto.randomUUID(),
        type: 'public',
        projectDetailDescription: 'Have fun',
        title: 'Inprocode (React)',
        urlTitle: 'inprocode-app',
        projectScreenShot:
            '/images/inprocode.jpeg',
        repoLink: 'https://github.com/0xNordian/sprint8.2',
        deployLink: 'https://inprocode.netlify.app/',
        techStack: ['React', 'HTML', 'CSS', 'TypeScript', 'i18n', 'Redux', 'Chart.js', 'Jest'],
        description: 'Multi-language web app built with React, TypeScript, Redux, i18n and Chart.js. It allows to track the expenses over time using Chart.js and Redux. It has a dark mode and a light mode.',
        contentPosition: 'l',
    },
    {
        id: crypto.randomUUID(),
        type: 'public',
        projectDetailDescription: 'Have fun',
        title: 'Acudits (TypeScript)',
        urlTitle: 'acudits-app',
        projectScreenShot:
            '/images/acudits.jpeg',
        repoLink: 'https://github.com/0xNordian/sprint-5.1',
        deployLink: 'https://acudits.netlify.app/',
        techStack: ['HTML', 'CSS', 'TypeScript', 'REST API', 'Vite'],
        description: 'Jokes web app built with TypeScript and REST API.',
        contentPosition: 'r',
    },
    {
        id: crypto.randomUUID(),
        type: 'moreProjects',
        projectDetailDescription: 'Have fun',
        title: 'More projects',
        urlTitle: '',
        projectScreenShot:
            '/images/Everything-to-know-about-ReactJs-Web-App-Development.jpg',
        repoLink: '/projects',
        deployLink: '',
        techStack: [],
        description: 'Discover the rest of my projects in here',
        contentPosition: 'r',
    },
]