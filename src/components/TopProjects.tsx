import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Badge from './Badge'
import ButtonIcon from './ButtonIcon'
import { features } from '../utils/projects'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { Project } from '../utils/projects'
import SingleFeature from '../components/SingleFeature'

type FeatureProps = {
    featureInView: Project
}

type ContentProps = {
    setFeatureInView: (feature: Project) => void
    featureInView: Project
    isMouseOver: boolean
}

const TopProjects = () => {
    return (
        <div className="">
            <SwapColumnFeatures />
        </div>
    )
}

const firstThree = features.slice(0, 3)

// Get the last element
const lastOne = features[features.length - 1]

// Combine them into a new array
const combinedArray = [...firstThree, lastOne]

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
            className="scr relative mx-auto -mt-[50px] h-screen w-full max-w-6xl bg-slate-600/0 md:-mt-[0px] lg:-mt-[100px] xl:-mt-[250px]"
        >
            <SlidingFeatureDisplay featureInView={featureInView} />
            {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
            <div className="-mt-[100vh] hidden md:block" />
            <div className="scroll-container">
                <div className="align-items-start flex flex-col justify-start">
                    {combinedArray.map((feature, index) => (
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

const SlidingFeatureDisplay = ({ featureInView }: FeatureProps) => {
    return (
        <div
            style={{
                justifyContent:
                    featureInView.contentPosition === 'l'
                        ? 'flex-end'
                        : 'flex-start',
            }}
            className="ERASE pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
        >
            <motion.div
                layout
                transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 80,
                }}
                className="hidden h-fit w-[50%] rounded-xl p-8 md:w-[100%] lg:flex lg:w-[50%] xl:w-1/2"
            >
                {' '}
                {/* Left side project details */}
                <ExampleFeature featureInView={featureInView} />
            </motion.div>
        </div>
    )
}

const Content = ({
    setFeatureInView,
    featureInView,
    isMouseOver,
}: ContentProps) => {
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
            className="relative z-0 flex h-fit justify-center bg-pink-400/0 md:h-screen md:px-8"
            style={{
                justifyContent:
                    featureInView.contentPosition === 'l'
                        ? 'flex-start'
                        : 'flex-end',
            }}
        >
            {' '}
            {/* Projects total section */}
            <div className="grid h-full w-full place-content-center px-4 py-12 md:w-[80%] md:px-8 md:py-8 lg:w-[50%] xl:w-[50%]">
                {' '}
                {/* Right side projects */}
                <div className="hidden lg:flex">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <div className="relative h-fit w-full rounded-xl bg-slate-800 shadow-xl dark:bg-slate-200">
                            <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3 dark:bg-slate-200">
                                <div className="h-3 w-3 rounded-full bg-red-500" />
                                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                <div className="h-3 w-3 rounded-full bg-green-500" />
                            </div>
                            <div className="flex flex-col gap-4 p-0">
                                <a
                                    target="_blank"
                                    href={featureInView.deployLink}
                                >
                                    <img
                                        src={featureInView.projectScreenShot}
                                        alt={featureInView.title}
                                        className="h-full w-full rounded-b-xl object-cover shadow-xl"
                                    />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="mt-8 block lg:hidden"
                >
                    <ExampleFeature featureInView={featureInView} />
                </motion.div>
            </div>
        </section>
    )
}

const ExampleFeature = ({ featureInView }: FeatureProps) => {
    return (
        <div className="relative h-full w-full rounded-xl bg-slate-800 shadow-xl dark:bg-slate-200">
            <div className="lg:hidden">
                <SingleFeature featureInView={featureInView} />
            </div>
            <div className="hidden lg:block">
                <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3 dark:bg-slate-300">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="flex flex-col gap-6 p-6 text-slate-300 dark:text-slate-500">
                    <h3 className="text-3xl">{featureInView.title}</h3>
                    <div className="flex flex-col gap-2 font-mono text-sm text-slate-200">
                        <div className="only-txt-reverse">
                            <span className="text-green-300 dark:text-slate-500">
                                ~{' '}
                            </span>
                            Project description:
                        </div>
                        <span className="only-txt-reverse inline-block rounded px-1 font-semibold">
                            {featureInView.description}{' '}
                        </span>{' '}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {featureInView.techStack.map((tech) => (
                            <Badge key={tech} txt={tech} />
                        ))}
                    </div>
                    <div className="only-txt-reverse pointer-events-auto flex gap-4">
                        {featureInView.type === 'moreProjects' ? (
                            <Link to="projects">
                                <ButtonIcon icon="repo" txt="More projects" />
                            </Link>
                        ) : featureInView.type === 'public' ? (
                            <a
                                target="_blank"
                                href={featureInView.repoLink}
                                className="text-xs"
                            >
                                <ButtonIcon icon="repo" txt="View Repo" />
                            </a>
                        ) : (
                            <ButtonIcon icon="privateRepo" txt="Private Repo" />
                        )}

                        {featureInView.type === 'public' ||
                        featureInView.type === 'private' ? (
                            <>
                                <a
                                    target="_blank"
                                    href={featureInView.deployLink}
                                    className="text-xs "
                                >
                                    <ButtonIcon icon={'deploy'} txt="App" />
                                </a>
                                <Link
                                    to={`/projects/${featureInView.urlTitle}`}
                                    key={featureInView.id}
                                >
                                    <ButtonIcon
                                        icon={'project'}
                                        txt="Project page"
                                    />
                                </Link>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopProjects
