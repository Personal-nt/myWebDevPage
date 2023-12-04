import { FiEye, FiPlay, FiSearch } from 'react-icons/fi'

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

type Project = {
    id: number
    callout: string
    title: string
    urlTitle: string
    projectScreenShot: string
    repoLink: string
    deployLink: string
    techStack: Technology[]
    description: string
    contentPosition: 'r' | 'l'
    Icon: typeof FiEye | typeof FiPlay | typeof FiSearch // Specify the icon types correctly
}

export const features: Project[] = [
    {
        id: 1,
        callout: 'Find people',
        title: 'Anomalie Web App (Next.js)',
        urlTitle: 'anomalie-app',
        projectScreenShot:
            'https://raw.githubusercontent.com/0xNordian/0xNordian/main/assets/anomalie-app.png',
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
        Icon: FiSearch,
    },
    {
        id: 2,
        callout: 'Get noticed',
        title: 'StarWars Starships (React)',
        urlTitle: 'starWars-starships',
        projectScreenShot:
            'https://raw.githubusercontent.com/0xNordian/0xNordian/main/assets/sw.jpeg',
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
        Icon: FiEye,
    },
    {
        id: 3,
        callout: 'Have fun',
        title: 'Doyt (Vue)',
        urlTitle: 'doyt-app',
        projectScreenShot:
            'https://raw.githubusercontent.com/0xNordian/0xNordian/main/assets/doyt2.png',
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
        Icon: FiPlay,
    },
    {
        id: 4,
        callout: 'Have fun',
        title: 'TEST',
        urlTitle: 'test-app-1',
        projectScreenShot:
            'https://www.reactjsindia.com/blog/wp-content/uploads/2021/05/Everything-to-know-about-ReactJs-Web-App-Development.jpg',
        repoLink: 'https://github.com/0xNordian/you-do',
        deployLink: 'https://doyt.netlify.app/',
        techStack: ['Vue', 'HTML', 'CSS', 'JavaScript'],
        description: 'TEST',
        contentPosition: 'l',
        Icon: FiPlay,
    },
    {
        id: 5,
        callout: 'Have fun',
        title: 'TEST',
        urlTitle: 'test-app-2',
        projectScreenShot:
            'https://www.reactjsindia.com/blog/wp-content/uploads/2021/05/Everything-to-know-about-ReactJs-Web-App-Development.jpg',
        repoLink: 'https://github.com/0xNordian/you-do',
        deployLink: 'https://doyt.netlify.app/',
        techStack: ['Vue', 'HTML', 'CSS', 'JavaScript'],
        description: 'TEST',
        contentPosition: 'l',
        Icon: FiPlay,
    },
    {
        id: 9999,
        callout: 'Have fun',
        title: 'More projects',
        urlTitle: '',
        projectScreenShot:
            'https://raw.githubusercontent.com/0xNordian/0xNordian/main/assets/sw.jpeg',
        repoLink: 'https://github.com/0xNordian/sprint8',
        deployLink: 'https://sw-sprint8.vercel.app/',
        techStack: [],
        description: 'Discover the rest of my projects in here',
        contentPosition: 'l',
        Icon: FiPlay,
    },
]
