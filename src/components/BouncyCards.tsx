import React from 'react'
import { motion } from 'framer-motion'
import { frontendSkills, backendSkills, otherSkills } from '../pages/Skills'
import { Link } from 'react-router-dom'
import CtaButton from './CtaButton'

type BounceCardProps = {
    className?: string
    children: React.ReactNode
}

export const BouncyCards = () => {
    return (
        // <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
        <section className="w-full lg:w-10/12 px-4 py-12 text-slate-800 lg:h-fit xl:h-full 2xl:h-fit">
            <div className="mb-4 grid grid-cols-12 gap-4 w-full h-[400px] md:h-[200px] lg:h-fit">
                <BounceCard className="col-span-12 cursor-default shadow-lg md:col-span-4">
                    <Link to="skills" className="cursor-pointer">
                        <CardTitle>Backend</CardTitle>
                        <div className="absolute bottom-0 left-4 right-4 top-32 h-[500px] lg:h-fit rounded-t-2xl bg-gradient-to-br from-slate-900 to-slate-600 p-4 transition-transform duration-[250ms] group-hover:rotate-[2deg] translate-y-[-25px] lg:translate-y-[-50px] xl:translate-y-[-15px] xl:group-hover:translate-y-[-35px] 2xl:translate-y-8 2xl:group-hover:translate-y-10">
                            <span className="grid grid-cols-3 place-items-center gap-3 text-center font-semibold text-indigo-50">
                                {backendSkills.map((skill) => (
                                    <img
                                        src={skill.src}
                                        alt={skill.alt}
                                        className="h-12 w-12"
                                    />
                                ))}
                            </span>
                        </div>
                    </Link>
                </BounceCard>
                <BounceCard className="col-span-12 cursor-default shadow-lg md:col-span-8">
                    <Link to="skills" className="cursor-pointer">
                        <CardTitle>Frontend</CardTitle>
                        <div className="absolute bottom-0 left-4 right-4 top-32 h-fit translate-y-[-15px] rounded-t-2xl bg-gradient-to-br from-secondary to-indigo-600 p-4 transition-transform duration-[250ms] group-hover:rotate-[2.5deg] xl:group-hover:translate-y-[-25px] 2xl:translate-y-8 2xl:group-hover:translate-y-4">
                            <span className="grid grid-cols-6 place-items-center gap-3 text-center font-semibold text-indigo-50">
                                {frontendSkills.map((skill) => (
                                    <img
                                        src={skill.src}
                                        alt={skill.alt}
                                        className="h-12 w-12"
                                    />
                                ))}
                            </span>
                        </div>
                    </Link>
                </BounceCard>
            </div>
            <div className="grid grid-cols-12 gap-4 h-[400px] md:h-[200px] lg:h-fit">
                <BounceCard className="col-span-12 cursor-default shadow-lg md:col-span-8">
                    <Link to="skills" className="cursor-pointer">
                        <CardTitle>Dev Ops</CardTitle>
                        <div className="absolute bottom-0 left-4 right-4 top-32 h-fit translate-y-[-15px] rounded-t-2xl bg-gradient-to-br from-secondary to-indigo-600 p-4 transition-transform duration-[250ms] group-hover:rotate-[-2.5deg] xl:group-hover:translate-y-[-25px] 2xl:translate-y-8 2xl:group-hover:translate-y-4">
                            <span className="grid grid-cols-6 place-items-center gap-3 text-center font-semibold text-indigo-50">
                                {otherSkills.map((skill) => (
                                    <img
                                        src={skill.src}
                                        alt={skill.alt}
                                        className="h-12 w-12"
                                    />
                                ))}
                            </span>
                        </div>
                    </Link>
                </BounceCard>
                <BounceCard className="col-span-12 shadow-lg md:col-span-4">
                    <CardTitle>Learn More</CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-32 h-fit translate-y-[-15px] rounded-t-2xl bg-gradient-to-br from-slate-900 to-slate-600 p-4 transition-transform duration-[250ms] group-hover:rotate-[2deg] lg:translate-y-2 lg:group-hover:translate-y-[-10px] xl:translate-y-[-10px] xl:group-hover:translate-y-[-35px] 2xl:translate-y-[100px] 2xl:group-hover:translate-y-[80px] 2xl:group-hover:rotate-[1.2deg]">
                        {/* <span className="grid grid-cols-4 place-items-center gap-3 text-center font-semibold text-indigo-50">
                                {backendSkills.map((skill, index) => (
                                    <img
                                        src={skill.src}
                                        alt={skill.alt}
                                        className="h-12 w-12"
                                    />
                                ))}
                            </span> */}
                        <div className="flex"> {/*lg:w-[580px] xl:w-[700px] 2xl:w-[635px]*/}
                            <CtaButton link="skills" txt="Check my skills" />
                        </div>
                    </div>
                </BounceCard>
            </div>
            {/* <div className="mt-8 flex justify-center">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full whitespace-nowrap 2xl:w-1/2"
                >
                    <CtaButton link="skills" txt="Check my skills" />
                </motion.button>
            </div> */}
        </section>
    )
}

const BounceCard: React.FC<BounceCardProps> = ({ className, children }) => {
    return (
        <motion.div
            whileHover={{ scale: 0.95, rotate: '-1deg' }}
            className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 lg:min-h-[200px] xl:min-h-[185px] 2xl:min-h-[300px] ${className}`}
        >
            {children}
        </motion.div>
    )
}

const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <h3 className="mx-auto text-center text-3xl font-semibold">
            {children}
        </h3>
    )
}
