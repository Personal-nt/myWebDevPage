import { Hero } from '../components/Hero'
import Skills from '../pages/Skills'
import { Link } from 'react-router-dom'
import Timeline from '../components/Timeline'

import Projects from '../components/componentCss/Projects'

const Home = () => {
    return (
        <div className="mb-24 flex h-screen w-screen flex-col items-center justify-start border-0 border-red-400 bg-teal-400">

            <div className="z-50 flex w-screen justify-center bg-slate-200 dark:bg-[#001412]">
                <div className="w-1/2 border-0 border-slate-600">
                    <Hero />
                </div>
            </div>

            <div className="flex w-screen flex-col items-center justify-start bg-slate-200 dark:bg-[#001412]">
                <div className="z-50 flex h-[100px] w-screen justify-center bg-slate-200 dark:bg-[#001412]">
                    <h1 id="projects" className="w-1/2 border-0 border-slate-600">
                        <Link to="projects">Projects</Link>
                    </h1>
                </div>
                <div className="w-1/2">
                    <div className="relative -top-[80px] z-0 border-0 border-slate-600">
                        <Projects />
                    </div>
                </div>
            </div>

            <div className="relative top-[-350px] flex w-screen flex-col items-center justify-start bg-slate-200 dark:bg-[#001412]">
                <div className="z-50 flex h-[100px] w-screen justify-center bg-slate-200 dark:bg-[#001412]">
                    <h1 id="projects" className="w-1/2 border-0 border-slate-600">
                        <Link to="journey">Journey</Link>
                    </h1>
                </div>
                <div className="w-1/2 border-0 border-slate-600 mb-12">
                    <Timeline />
                </div>
            </div>

        </div>
    )
}

export default Home
