import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FiEye, FiPlay, FiSearch } from 'react-icons/fi'
import Badge from '../../components/Badge'
import ButtonIcon from '../ButtonIcon'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Projects = () => {
    return (
        <div className="">
            <SwapColumnFeatures />
        </div>
    )
}

gsap.registerPlugin(ScrollTrigger)

const SwapColumnFeatures = () => {
    const [featureInView, setFeatureInView] = useState(features[0])
    const [isMouseOver, setIsMouseOver] = useState(false)

    const handleMouseEnter = () => {
        setIsMouseOver(true)
    }

    const handleMouseLeave = () => {
        setIsMouseOver(false)
    }

    return (
        <section
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="scr relative mx-auto -mt-[250px] h-screen w-screen max-w-7xl bg-slate-600/0"
        >
            <SlidingFeatureDisplay featureInView={featureInView} />
            {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
            <div className="-mt-[100vh] hidden md:block" />
            <div className="scroll-container">
                <div className="align-items-start flex flex-col justify-start">
                    {features.map((feature, index) => (
                        <div key={index} className="snap-element">
                            <Content
                                key={feature.id}
                                featureInView={feature}
                                setFeatureInView={setFeatureInView}
                                isMouseOver={isMouseOver}
                                {...feature}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const SlidingFeatureDisplay = ({ featureInView }) => {
    return (
        <div
            style={{
                justifyContent:
                    featureInView.contentPosition === 'l'
                        ? 'flex-end'
                        : 'flex-start',
            }}
            className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
        >
            <motion.div
                layout
                transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 50,
                }}
                className="h-fit w-[50%] rounded-xl p-8"
            >
                {' '}
                {/* Left side project details */}
                <ExampleFeature featureInView={featureInView} />
            </motion.div>
        </div>
    )
}

const Content = ({ setFeatureInView, featureInView, isMouseOver }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: '-300px',
    })

    useEffect(() => {
        if (isInView && isMouseOver) {
            setFeatureInView(featureInView)
        }
    }, [isInView, isMouseOver])

    return (
        <section
            ref={ref}
            className="relative z-0 flex h-fit justify-center px-8 md:h-screen"
            style={{
                justifyContent:
                    featureInView.contentPosition === 'l'
                        ? 'flex-start'
                        : 'flex-end',
            }}
        >
            {' '}
            {/* Projects total section */}
            <div className="grid h-full w-full place-content-center px-4 py-12 md:w-[50%] md:px-8 md:py-8">
                {' '}
                {/* Right side projects */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <div className="relative h-fit w-full rounded-xl bg-slate-800 shadow-xl dark:bg-slate-200">
                        <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3 dark:bg-slate-400">
                            <div className="h-3 w-3 rounded-full bg-red-500" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500" />
                            <div className="h-3 w-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex flex-col gap-4 p-0">
                            <a target="_blank" href={featureInView.deployLink}>
                                <img
                                    src={featureInView.projectScreenShot}
                                    alt={featureInView.title}
                                    className="h-full w-full rounded-b-xl object-cover shadow-xl"
                                />
                            </a>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="mt-8 block md:hidden"
                >
                    <ExampleFeature featureInView={featureInView} />
                </motion.div>
            </div>
        </section>
    )
}

const ExampleFeature = ({ featureInView }) => {
    return (
        <div className="relative h-full w-full rounded-xl bg-slate-800 shadow-xl dark:bg-slate-200">
            <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3 dark:bg-slate-400">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="flex flex-col gap-4 p-6">
                <h3 className="text-3xl">{featureInView.title}</h3>
                <div className="flex flex-col gap-6 font-mono text-sm text-slate-200">
                    <div>
                        <span className="text-green-300">~</span> Project
                        description:{' '}
                    </div>
                    <span className="inline-block rounded px-1 font-semibold">
                        {featureInView.description}{' '}
                    </span>{' '}
                </div>
                <div className="flex flex-wrap gap-2">
                    {featureInView.techStack.map((tech) => (
                        <Badge key={tech} txt={tech} />
                    ))}
                </div>
                <div className="pointer-events-auto flex gap-4">
                    <a
                        target="_blank"
                        href={featureInView.repoLink}
                        className="text-xs text-slate-200 hover:text-slate-300"
                    >
                        <ButtonIcon icon={'repo'} txt="View Repo" />
                    </a>
                    <a
                        target="_blank"
                        href={featureInView.deployLink}
                        className="text-xs text-slate-200 hover:text-slate-300"
                    >
                        <ButtonIcon icon={'deploy'} txt="App" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects

const features = [
    {
        id: 1,
        callout: 'Find people',
        title: 'Anomalie Web App (Next.js)',
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
        projectScreenShot:
            'https://raw.githubusercontent.com/0xNordian/0xNordian/main/assets/sw.jpeg',
        repoLink: 'https://github.com/0xNordian/sprint8',
        deployLink: 'https://sw-sprint8.vercel.app/',
        techStack: [
            'React',
            'HTML',
            'TailwindCSS',
            'Typescript',
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
        title: 'More projects',
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
