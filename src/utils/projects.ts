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

type Project = {
    id: string
    type: 'public' | 'private'
    callout: string
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
        callout: 'Find people',
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
        callout: 'Find people',
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
        callout: 'Get noticed',
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
        callout: 'Have fun',
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
        callout: 'Have fun',
        title: 'TEST',
        urlTitle: 'test-app-1',
        projectScreenShot:
            '/images/Everything-to-know-about-ReactJs-Web-App-Development.jpg',
        repoLink: 'https://github.com/0xNordian/you-do',
        deployLink: 'https://doyt.netlify.app/',
        techStack: ['Vue', 'HTML', 'CSS', 'JavaScript'],
        description: 'TEST',
        contentPosition: 'l',
    },
    {
        id: crypto.randomUUID(),
        type: 'public',
        callout: 'Have fun',
        title: 'TEST',
        urlTitle: 'test-app-2',
        projectScreenShot:
            '/images/Everything-to-know-about-ReactJs-Web-App-Development.jpg',
        repoLink: 'https://github.com/0xNordian/you-do',
        deployLink: 'https://doyt.netlify.app/',
        techStack: ['Vue', 'HTML', 'CSS', 'JavaScript'],
        description: 'TEST',
        contentPosition: 'r',
    },
    {
        id: crypto.randomUUID(),
        type: 'public',
        callout: 'Have fun',
        title: 'More projects',
        urlTitle: '',
        projectScreenShot:
            '/images/sw.jpg',
        repoLink: 'https://github.com/0xNordian/sprint8',
        deployLink: 'https://sw-sprint8.vercel.app/',
        techStack: [],
        description: 'Discover the rest of my projects in here',
        contentPosition: 'r',
    },
]