import { ProjectDetailsProps } from '../components/technicalDescriptions/TemplateProjectDetails'

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
    category:
        | 'social network'
        | 'e-commerce'
        | 'blog'
        | 'portfolio'
        | 'gallery'
        | 'productivity'
        | 'landing page'
        | 'product/service'
        | 'web app'
        | 'other'
    projectDetailDescription: string
    technicalDescription: ProjectDetailsProps
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
        category: 'social network',
        projectDetailDescription: `Deverso.io is a decentralized social media platform built ontop of the Deso protocol. Designed with a user experience and interface reminiscent of the renowned X (formerly known as Twitter), it offers an intuitive and familiar environment for users. At its core, Deverso.io boasts robust features including comprehensive authentication capabilities, full-fledged CRUD (Create, Read, Update, Delete) operations, advanced monetization mechanisms, and integrated NFT (Non-Fungible Token) functionalities.
        
        As the pioneering endeavor of Deverso Labs, this platform not only stands as a testament to our innovative spirit but also serves as a dynamic testing ground for our upcoming products. Deverso.io is more than just a social media site; its a hub of future-forward technologies converging to redefine the digital social experience, leveraging blockchain to ensure security, authenticity, and user empowerment. This project is a cornerstone in our mission to revolutionize the landscape of social media, making it more decentralized, user-centric, and financially rewarding for content creators and users alike.`,
        technicalDescription: {
            title: 'Deverso.io',
            objective: '',
            keyFunctionalities: [''],
            frontendFramework: 'Angular',
            stateManagement: '',
            routing: '',
            apiIntegration: [''],
            uiUx: '',
            database: '',
            authentication: '',
            crudOperations: '',
            keyComponents: [],
            testingFrameworks: [''],
            codeQualityTools: [''],
            conclusion: '',
            projScreenshotAlt: true,
            AppAltScreenShot: '/images/deverso-io-alt.png'
        },
        title: 'Deverso.io (Angular)',
        urlTitle: 'deverso.io',
        projectScreenShot: '/images/deverso-io.jpeg',
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
        category: 'social network',
        projectDetailDescription: 'Find people',
        technicalDescription: {
            title: 'Anomalie App',
            objective:
                'Develop a dynamic, responsive web application using Next.js and TypeScript, integrating Supabase for backend functionalities.',
            keyFunctionalities: [
                'Interactive user interfaces with React and responsive designs.',
                'Real-time database interactions and authentication using Supabase.',
                'State management with Zustand for scalable and efficient state handling.',
                'Smooth animations and transitions using Framer Motion.',
                'Integration of iconic visuals with React Icons.',
            ],
            frontendFramework:
                'Next.js (TypeScript) for SSR and static generation',
            stateManagement: 'Zustand for simplified global state management',
            routing: '', // No specific routing mentioned in the provided data
            apiIntegration: [], // No specific API integration mentioned in the provided data
            uiUx: 'Framer Motion for engaging motion design and React Icons for enhancing UI design',
            database: 'Supabase for backend services including database',
            authentication: 'Supabase for authentication',
            crudOperations: '', // No specific CRUD operations mentioned in the provided data
            keyComponents: [], // No specific key components mentioned in the provided data
            testingFrameworks: [], // No specific testing frameworks mentioned in the provided data
            codeQualityTools: [
                'ESLint',
                'Prettier for consistent code formatting and linting',
            ],
            conclusion:
                'This project showcases a comprehensive implementation of modern web development practices, combining Next.js, Supabase, and state-of-the-art libraries to create a robust, scalable, and engaging web application.',
        },
        title: 'Anomalie Web App (Next.js)',
        urlTitle: 'anomalie-app',
        projectScreenShot: '/images/anomalie-app.png',
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
        category: 'gallery',
        projectDetailDescription:
            'In this engaging project, I had the exciting opportunity to bring the world of Star Wars into a dynamic web application. The core objective was to create a user-friendly platform that fetches and displays detailed information about various Star Wars starships. Drawing inspiration from a technical challenge by a leading e-commerce company, this project was an adventure into the realm of API consumption and front-end development. Visitors to the site can enjoy browsing through a list of starships, diving into the specifics of each, and feeling the essence of the Star Wars universe through this interactive experience.',
        technicalDescription: {
            title: 'Star Wars Starship Explorer',
            objective:
                'Develop a web application to display a list of Star Wars starships with detailed views of each starship.',
            keyFunctionalities: [
                'Fetch and display a list of starships using the Star Wars API (SWAPI).',
                'Implement pagination to manage and navigate through large datasets.',
                'Enable detailed views of each starship, including images and specific data.',
            ],
            frontendFramework: 'React (TypeScript)',
            stateManagement:
                'Zustand for efficient and scalable state handling',
            routing: 'React Router Dom for seamless navigation',
            apiIntegration: [
                'Axios for API calls to SWAPI',
                'Axios for API calls to starwars-visualguide.com',
            ],
            uiUx: 'Responsive design with interactive elements for an engaging user experience',
            database: '', // No specific database mentioned in the provided data
            authentication: '', // No specific authentication method mentioned in the provided data
            crudOperations: '', // No specific CRUD operations mentioned in the provided data
            keyComponents: [
                {
                    name: 'Home.tsx',
                    description:
                        'The landing page with an overview of the project.',
                        link: 'https://github.com/0xNordian/sprint8/blob/main/src/pages/Home.tsx'
                },
                {
                    name: 'SignIn.tsx',
                    description: 'User authentication interface.',
                    link: 'https://github.com/0xNordian/sprint8/blob/main/src/pages/SignIn.tsx'
                },
                {
                    name: 'Starships.tsx',
                    description: 'Component for listing starships.',
                    link: 'https://github.com/0xNordian/sprint8/blob/main/src/pages/Starships.tsx'
                },
                {
                    name: 'StarshipDetails.tsx',
                    description: 'Component for displaying starship details.',
                    link: 'https://github.com/0xNordian/sprint8/blob/main/src/pages/StarshipDetails.tsx'
                },
                {
                    name: 'NotFoundPage.tsx',
                    description: 'A custom 404 page for unhandled routes.',
                    link: 'https://github.com/0xNordian/sprint8/blob/main/src/pages/NotFoundPage.tsx'
                },
                {
                    name: 'useAuthStore.ts',
                    description: 'Custom hook for managing authentication.',
                    link: 'https://github.com/0xNordian/sprint8/blob/main/src/stores/useAuthStore.ts'
                },
                {
                    name: 'useStarshipStore.ts',
                    description: 'Custom hook for managing starship data.',
                    link: 'https://github.com/0xNordian/sprint8/blob/main/src/stores/useStarshipStore.ts'
                },
            ],
            testingFrameworks: ['Vitest', 'Jest for robust unit testing'],
            codeQualityTools: [
                'ESLint',
                'Prettier for code linting and formatting',
            ],
            conclusion:
                'This project was a deep dive into the technicalities of front-end development, particularly in the context of API consumption and data presentation. The Star Wars Starship Explorer stands as a testament to my growing capabilities in web development, showcasing both technical proficiency and a creative approach to problem-solving.',
        },
        title: 'StarWars Starships (React)',
        urlTitle: 'starWars-starships',
        projectScreenShot: '/images/sw.jpg',
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
        category: 'productivity',
        projectDetailDescription: 'Have fun',
        technicalDescription: {
            title: 'Task Management System',
            objective:
                'To create a Vue.js-based web application for efficient task management, with user authentication and real-time data handling using Supabase.',
            keyFunctionalities: [
                'Task creation, editing, and deletion with a user-friendly interface.',
                'User registration, login, and management.',
                'Real-time task updates and synchronization using Supabase.',
            ],
            frontendFramework: 'Vue.js',
            stateManagement: "Pinia",
            routing: 'Vue Router',
            apiIntegration: ['Supabase'],
            uiUx: 'Tailwind CSS for styling and responsive design',
            database:
                'Supabase for data storage, retrieval, and real-time updates',
            authentication: 'Supabase Authentication',
            crudOperations:
                'Implemented for task management within the Vue.js application',
            keyComponents: [
                {
                    name: 'App.vue',
                    description: 'The main application component.',
                    link: 'https://github.com/0xNordian/doyt/blob/main/src/App.vue'
                },
                {
                    name: 'CreateTask.vue',
                    description: 'Component for creating new tasks.',
                    link: 'https://github.com/0xNordian/doyt/blob/main/src/components/CreateTask.vue'
                },
                {
                    name: 'TaskCart.vue',
                    description:
                        'Component for displaying and managing individual tasks.',
                        link: 'https://github.com/0xNordian/doyt/blob/main/src/components/TaskCart.vue'
                },
                {
                    name: 'task.js (Pinia store)',
                    description:
                        'Pinia store to fetch tasks from supabase',
                        link: 'https://github.com/0xNordian/doyt/blob/main/src/stores/task.js'
                },
                {
                    name: 'user.js (Pinia store)',
                    description:
                        'Pinia store to fetch users from supabase',
                        link: 'https://github.com/0xNordian/doyt/blob/main/src/stores/user.js'
                },
            ],
            testingFrameworks: ['Jest'],
            codeQualityTools: ['ESLint', 'Prettier'],
            conclusion:
                'This project demonstrates the integration of Vue.js with Supabase to build a real-time task management system, focusing on a smooth user experience and efficient data handling.',
        },
        title: 'Doyt (Vue)',
        urlTitle: 'doyt-app',
        projectScreenShot: '/images/doyt2.png',
        repoLink: 'https://github.com/0xNordian/doyt',
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
        category: 'gallery',
        projectDetailDescription:
            'Dive into the universe of Rick and Morty with this interactive web application. Built using a stack of cutting-edge technologies and libraries such as React, Next UI, Framer Motion, React Router, Tailwind CSS, TypeScript, and Vite, this project is a testament to modern web development practices. It leverages the Rick and Morty API to fetch and display character details, locations, and episodes from the beloved series.',
        technicalDescription: {
            title: 'Jump2Digital Hackathon Admissions Project',
            objective: 'A web application to consult the Rick & Morty API to display the characters, locations and episodes of the TV serie.',
            keyFunctionalities: [
            'Fetch and display a list of characters, locations and episodes using the Rick & Morty API.',
            'Implement pagination to manage and navigate through large datasets.',
            'Search feature to filter characters by name',
            'Creative CSS designs'],
            frontendFramework: 'React',
            stateManagement: 'none',
            routing: 'React Router',
            apiIntegration: ['Fetch API'],
            uiUx: 'Responsive design with interactive elements for an engaging user experience',
            database: 'None',
            authentication: 'None',
            crudOperations: 'None',
            keyComponents: [
                {
                    name: 'Home.tsx',
                    description:
                        'The landing page with an overview of the project.',
                        link: 'https://github.com/0xNordian/rickyandmorty-j2d-hackaton/blob/main/src/pages/Home.tsx',
                },
                {
                    name: 'Characters.tsx',
                    description:
                        'Component for listing characters. The component use pagination and it has a search capabilty to let the user type the name of a character and filter the displayed list.',
                    link: 'https://github.com/0xNordian/rickyandmorty-j2d-hackaton/blob/main/src/pages/Characters.tsx',
                },
                {
                    name: 'Episodes.tsx',
                    description:
                        'The landing page with an overview of the project.',
                        link: 'https://github.com/0xNordian/rickyandmorty-j2d-hackaton/blob/main/src/pages/Episodes.tsx',
                },
                {
                    name: 'Locations.tsx',
                    description:
                        'The landing page with an overview of the project.',
                        link: 'https://github.com/0xNordian/rickyandmorty-j2d-hackaton/blob/main/src/pages/Locations.tsx',
                },
            ],
            testingFrameworks: [''],
            codeQualityTools: [''],
            conclusion: '',
        },
        title: 'Jump2Digital Hackathon (React)',
        urlTitle: 'wubba-app',
        projectScreenShot: '/images/rickandmorty.png',
        repoLink: 'https://github.com/0xNordian/rickyandmorty-j2d-hackaton',
        deployLink: 'https://wubba.netlify.app/',
        techStack: [
            'React',
            'HTML',
            'CSS',
            'TypeScript',
            'React Router',
            'Vite',
            'REST API',
            'TailwindCSS',
        ],
        description:
            'Dive into the universe of Rick and Morty with this interactive web application. It leverages the Rick and Morty API to fetch and display character details, locations, and episodes from the beloved series.',
        contentPosition: 'r',
    },
    {
        id: crypto.randomUUID(),
        type: 'public',
        category: 'product/service',
        projectDetailDescription: 'Have fun',
        technicalDescription: {
            title: '',
            objective: '',
            keyFunctionalities: [''],
            frontendFramework: '',
            stateManagement: '',
            routing: '',
            apiIntegration: [''],
            uiUx: '',
            database: '',
            authentication: '',
            crudOperations: '',
            keyComponents: [],
            testingFrameworks: [''],
            codeQualityTools: [''],
            conclusion: '',
        },
        title: 'Cercle Web (Vanilla JS)',
        urlTitle: 'cercle-app',
        projectScreenShot: '/images/circl3.png',
        repoLink:
            'https://github.com/0xNordian/IronHack-MidTerm-Rpoject-Circle',
        deployLink: 'https://circl3.netlify.app/',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        description:
            'My first project in IronHack using only Vanilla JS. It is a responsive web app with different dynamic sections.',
        contentPosition: 'l',
    },
    {
        id: crypto.randomUUID(),
        type: 'public',
        category: 'gallery',
        projectDetailDescription: 'Have fun',
        technicalDescription: {
            title: '',
            objective: '',
            keyFunctionalities: [''],
            frontendFramework: '',
            stateManagement: '',
            routing: '',
            apiIntegration: [''],
            uiUx: '',
            database: '',
            authentication: '',
            crudOperations: '',
            keyComponents: [],
            testingFrameworks: [''],
            codeQualityTools: [''],
            conclusion: '',
        },
        title: 'CloutPunk Rare (Vue)',
        urlTitle: 'cloutpunk-app',
        projectScreenShot: '/images/cloutpunk.jpeg',
        repoLink: 'https://github.com/0xNordian/CloutPunkRare',
        deployLink: 'https://cloutpunkrare.netlify.app/',
        techStack: [
            'Vue',
            'HTML',
            'CSS',
            'TypeScript',
            'TailwindCSS',
            'Vite',
            'Axios',
            'REST API',
            'Pinia',
        ],
        description:
            'NFT gallery built with Vue, TailwindCSS and Pinia. The class information is not existing in the API, so I created an algorythm to categorize the classes after fetching the API with axios. I cretes on CSS the rainbow effect on the background.',
        contentPosition: 'r',
    },
    {
        id: crypto.randomUUID(),
        type: 'public',
        category: 'e-commerce',
        projectDetailDescription: 'Have fun',
        technicalDescription: {
            title: '',
            objective: '',
            keyFunctionalities: [''],
            frontendFramework: '',
            stateManagement: '',
            routing: '',
            apiIntegration: [''],
            uiUx: '',
            database: '',
            authentication: '',
            crudOperations: '',
            keyComponents: [],
            testingFrameworks: [''],
            codeQualityTools: [''],
            conclusion: '',
        },
        title: 'Kings League Shop (Vanilla JS)',
        urlTitle: 'kings-shop-app',
        projectScreenShot: '/images/kingsShop.jpeg',
        repoLink: 'https://github.com/0xNordian/Sprint-3/tree/main',
        deployLink: 'https://kings-shop.netlify.app/',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        description:
            'A Kings League Shop clone built with Vanilla JS. It has a shopping cart and a dedicated product page for the t-shirts.',
        contentPosition: 'l',
    },
    {
        id: crypto.randomUUID(),
        type: 'public',
        category: 'web app',
        projectDetailDescription: 'Have fun',
        technicalDescription: {
            title: '',
            objective: '',
            keyFunctionalities: [''],
            frontendFramework: '',
            stateManagement: '',
            routing: '',
            apiIntegration: [''],
            uiUx: '',
            database: '',
            authentication: '',
            crudOperations: '',
            keyComponents: [],
            testingFrameworks: [''],
            codeQualityTools: [''],
            conclusion: '',
        },
        title: 'Inprocode (React)',
        urlTitle: 'inprocode-app',
        projectScreenShot: '/images/inprocode.jpeg',
        repoLink: 'https://github.com/0xNordian/sprint8.2',
        deployLink: 'https://inprocode.netlify.app/',
        techStack: [
            'React',
            'HTML',
            'CSS',
            'TypeScript',
            'i18n',
            'Redux',
            'Chart.js',
            'Jest',
        ],
        description:
            'Multi-language web app built with React, TypeScript, Redux, i18n and Chart.js. It allows to track the expenses over time using Chart.js and Redux. It has a dark mode and a light mode.',
        contentPosition: 'l',
    },
    {
        id: crypto.randomUUID(),
        type: 'public',
        category: 'landing page',
        projectDetailDescription: 'Have fun',
        technicalDescription: {
            title: '',
            objective: '',
            keyFunctionalities: [''],
            frontendFramework: '',
            stateManagement: '',
            routing: '',
            apiIntegration: [''],
            uiUx: '',
            database: '',
            authentication: '',
            crudOperations: '',
            keyComponents: [],
            testingFrameworks: [''],
            codeQualityTools: [''],
            conclusion: '',
        },
        title: 'Acudits (TypeScript)',
        urlTitle: 'acudits-app',
        projectScreenShot: '/images/acudits.jpeg',
        repoLink: 'https://github.com/0xNordian/sprint-5.1',
        deployLink: 'https://acudits.netlify.app/',
        techStack: ['HTML', 'CSS', 'TypeScript', 'REST API', 'Vite'],
        description: 'Jokes web app built with TypeScript and REST API.',
        contentPosition: 'r',
    },
    {
        id: crypto.randomUUID(),
        type: 'moreProjects',
        category: 'other',
        projectDetailDescription: 'Have fun',
        technicalDescription: {
            title: '',
            objective: '',
            keyFunctionalities: [''],
            frontendFramework: '',
            stateManagement: '',
            routing: '',
            apiIntegration: [''],
            uiUx: '',
            database: '',
            authentication: '',
            crudOperations: '',
            keyComponents: [],
            testingFrameworks: [''],
            codeQualityTools: [''],
            conclusion: '',
        },
        title: 'More projects',
        urlTitle: '',
        projectScreenShot: '/images/moreProjects.jpg',
        repoLink: '/projects',
        deployLink: '',
        techStack: [],
        description: 'Discover the rest of my projects in here',
        contentPosition: 'r',
    },
]
