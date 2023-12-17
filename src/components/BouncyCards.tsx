import React from 'react';
import { motion } from 'framer-motion'
import { frontendSkills, backendSkills, otherSkills } from '../pages/Skills'
import { Link } from 'react-router-dom'
import CtaButton from './CtaButton'

type BounceCardProps = {
    className?: string;
    children: React.ReactNode;
}

export const BouncyCards = () => {
    return (
        // <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
        <section className="w-10/12 px-4 py-12 text-slate-800">
            <div className="mb-4 grid grid-cols-12 gap-4">
                <BounceCard className="col-span-12 cursor-default md:col-span-4 shadow-lg">
                    <Link to="skills" className="cursor-pointer">
                        <CardTitle>Backend</CardTitle>
                        <div className=" absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-slate-900 to-slate-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
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
                <BounceCard className="col-span-12 cursor-default md:col-span-8 shadow-lg">
                    <Link to="skills" className="cursor-pointer">
                        <CardTitle>Frontend</CardTitle>
                        <div className=" absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-secondary to-indigo-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[3deg]">
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
            <div className="grid grid-cols-12 gap-4">
                <BounceCard className="col-span-12 cursor-default md:col-span-8 shadow-lg">
                    <Link to="skills" className="cursor-pointer">
                        <CardTitle>Dev Ops</CardTitle>
                        <div className=" absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-secondary to-indigo-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[-2deg]">
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
                <BounceCard className="col-span-12 md:col-span-4 shadow-lg">
                    <CardTitle>Others</CardTitle>
                    <div className=" absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-slate-900 to-slate-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        {/* <span className="grid grid-cols-4 place-items-center gap-3 text-center font-semibold text-indigo-50">
                                {backendSkills.map((skill, index) => (
                                    <img
                                        src={skill.src}
                                        alt={skill.alt}
                                        className="h-12 w-12"
                                    />
                                ))}
                            </span> */}
                    </div>
                </BounceCard>
            </div>
            <div className="mt-8 flex justify-center">
                {/* <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
                    Grow faster with our
                    <span className="text-slate-400"> all in one solution</span>
                </h2> */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full whitespace-nowrap"
                >
                    {/* <Link to="skills" className="cursor-pointer">
                        Check my skills in detail
                    </Link> */}
                    <CtaButton link="skills" txt="Check my skills" />
                </motion.button>
            </div>
        </section>
    )
}

const BounceCard: React.FC<BounceCardProps> = ({ className, children }) => {
    return (
        <motion.div
            whileHover={{ scale: 0.95, rotate: '-1deg' }}
            className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
        >
            {children}
        </motion.div>
    )
}

const CardTitle: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <h3 className="mx-auto text-center text-3xl font-semibold">
            {children}
        </h3>
    )
}
