import Footer from '../components/Footer'

// const Skills = () => {
export const frontendSkills = [
    {
        title: 'HTML5',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        alt: 'html5 logo',
    },
    {
        title: 'CSS3',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        alt: 'css3 logo',
    },
    {
        title: 'JavaScript',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        alt: 'javascript logo',
    },
    {
        title: 'TypeScript',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        alt: 'typescript logo',
    },
    {
        title: 'React',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        alt: 'react logo',
    },
    {
        title: 'Vue.js',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        alt: 'vuejs logo',
    },
    {
        title: 'Angular',
        src: 'https://cdn.simpleicons.org/angular/DD0031',
        alt: 'angularjs logo',
    },
    {
        title: 'Next.js',
        src: 'https://skillicons.dev/icons?i=nextjs',
        alt: 'nextjs logo',
    },
    {
        title: 'Redux',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
        alt: 'redux logo',
    },
    {
        title: 'Jest',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
        alt: 'jest logo',
    },
    {
        title: 'Tailwind',
        src: 'https://skillicons.dev/icons?i=tailwind',
        alt: 'tailwindcss logo',
    },
    {
        title: 'Bootstrap',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        alt: 'bootstrap logo',
    },
    {
        title: 'Sass',
        src: 'https://cdn.simpleicons.org/sass/CC6699',
        alt: 'sass logo',
    },
]

export const backendSkills = [
    {
        title: 'Java',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        alt: 'java logo',
    },
    {
        title: 'Spring',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        alt: 'spring logo',
    },
    {
        title: 'MySQL',
        src: 'https://cdn.simpleicons.org/mysql/4479A1',
        alt: 'mysql logo',
    },
    {
        title: 'PostgreSQL',
        src: 'https://cdn.simpleicons.org/postgresql/4169E1',
        alt: 'postgresql logo',
    },
    {
        title: 'Supabase',
        src: 'https://cdn.simpleicons.org/supabase/3ECF8E',
        alt: 'supabase logo',
    },
]

export const otherSkills = [
    {
        title: 'Git',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        alt: 'git logo',
    },
    {
        title: 'Github',
        src: 'https://skillicons.dev/icons?i=github',
        alt: 'github logo',
    },
    {
        title: 'Gitlab',
        src: 'https://skillicons.dev/icons?i=gitlab',
        alt: 'gitlab logo',
    },
    {
        title: 'Netlify',
        src: 'https://cdn.simpleicons.org/netlify/00C7B7',
        alt: 'netlify logo',
    },
    {
        title: 'Vercel',
        src: 'https://skillicons.dev/icons?i=vercel',
        alt: 'vercel logo',
    },
    {
        title: 'NPM',
        src: 'https://cdn.simpleicons.org/npm/CB3837',
        alt: 'npm logo',
    },
    {
        title: 'Node.js',
        src: 'https://cdn.simpleicons.org/nodedotjs/339933',
        alt: 'nodejs logo',
    },
    {
        title: 'Jira',
        src: 'https://cdn.simpleicons.org/jira/0052CC',
        alt: 'jira logo',
    },
    {
        title: 'Photoshop',
        src: 'https://cdn.simpleicons.org/adobephotoshop/31A8FF',
        alt: 'adobephotoshop logo',
    },
    {
        title: 'Illustrator',
        src: 'https://cdn.simpleicons.org/adobeillustrator/FF9A00',
        alt: 'adobeillustrator logo',
    },
    {
        title: 'After Effects',
        src: 'https://cdn.simpleicons.org/adobeaftereffects/9999FF',
        alt: 'aftereffects logo',
    },
    {
        title: 'Bash',
        src: 'https://cdn.simpleicons.org/gnubash/4EAA25',
        alt: 'bash logo',
    },
    { title: 'C', src: 'https://cdn.simpleicons.org/c/A8B9CC', alt: 'c logo' },
    {
        title: 'Postman',
        src: 'https://cdn.simpleicons.org/postman/FF6C37',
        alt: 'postman logo',
    },
    {
        title: 'Salesforce',
        src: 'https://cdn.simpleicons.org/salesforce/00A1E0',
        alt: 'salesforce logo',
    },
    {
        title: 'vsCode',
        src: 'https://cdn.simpleicons.org/visualstudiocode/007ACC',
        alt: 'vscode logo',
    },
    {
        title: 'Google Cloud',
        src: 'https://skillicons.dev/icons?i=gcp',
        alt: 'googlecloud logo',
    },
    {
        title: 'IntelliJ',
        src: 'https://skillicons.dev/icons?i=idea',
        alt: 'intellijidea logo',
    },
    {
        title: 'MarkDown',
        src: 'https://skillicons.dev/icons?i=md',
        alt: 'markdown logo',
    },
    {
        title: 'Vite',
        src: 'https://skillicons.dev/icons?i=vite',
        alt: 'vite logo',
    },
]

const Skills = () => {
    return (
        <div className="only-txt flex h-fit w-full flex-col items-center justify-center gap-24 bg-slate-200 dark:bg-[#001412] md:h-fit 2xl:h-screen">
            <div className="mt-10 flex w-full flex-col gap-16 md:w-[80%] lg:flex-row">
                {/* <h1>My Skills</h1> */}
                {/* <div className="flex w-full flex-col gap-4 text-center md:text-left"> */}
                <div className="flex w-full flex-col gap-4 text-center md:text-center lg:text-left">
                    <h3>Frontend skills</h3>
                    {/* <div className="flex flex-wrap justify-center gap-3 md:justify-start"> */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 w-full gap-4 place-items-center">
                        {frontendSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="min-w-[110px] max-w-[110px] rounded-lg bg-slate-100 p-4 shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.1] dark:bg-slate-800"
                            >
                                <img
                                    src={skill.src}
                                    alt={skill.alt}
                                    className="mx-auto h-8 w-8"
                                />
                                <p className="mt-2 text-center">
                                    {skill.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex w-full flex-col gap-4 text-center md:text-left">
                    <h3>Backend skills</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 w-full gap-4 place-items-center">
                        {backendSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="min-w-[110px] max-w-[110px] rounded-lg bg-slate-100 p-4 shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.1] dark:bg-slate-800"
                            >
                                <img
                                    src={skill.src}
                                    alt={skill.alt}
                                    className="mx-auto h-8 w-8"
                                />
                                <p className="mt-2 text-center">
                                    {skill.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex w-full flex-col gap-4 text-center md:text-left">
                    <h3>Other skills</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 w-full gap-4 place-items-center">
                        {otherSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="min-w-[110px] max-w-[110px] rounded-lg bg-slate-100 p-4 shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.1] dark:bg-slate-800"
                            >
                                <img
                                    src={skill.src}
                                    alt={skill.alt}
                                    className="mx-auto h-8 w-8"
                                />
                                <p className="mt-2 text-center">
                                    {skill.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Skills
