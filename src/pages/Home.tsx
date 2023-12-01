import { Hero } from '../components/Hero'
import Skills from '../pages/Skills'
import { Link } from 'react-router-dom'

import Projects from '../components/componentCss/Projects'

const Home = () => {
    return (
        <div className="mb-24 flex h-screen w-screen flex-col items-center justify-start border-0 border-red-400 bg-teal-400">
            {/* <div className="flex w-full h-full flex-col border-4 border-emerald-500/70 justify-center items-center"> */}

            <div className="z-50 flex w-screen justify-center bg-slate-200 dark:bg-[#001412]">
                <div className="w-1/2">
                    <Hero />
                </div>
            </div>

            <div className="flex w-screen flex-col items-center justify-start bg-slate-200 dark:bg-[#001412]">
                <div className="z-50 flex h-[100px] w-screen justify-center bg-slate-200 dark:bg-[#001412]">
                    <h1 id="projects" className=" w-1/2">
                        <Link to="projects">Projects</Link>
                    </h1>
                </div>
                <div className="w-1/2">
                    <div className="relative -top-[80px] z-0">
                        <Projects />
                    </div>
                </div>
            </div>

            <div className="relative top-[-350px] flex w-screen flex-col items-center justify-start bg-slate-200 dark:bg-[#001412]">
                <div className="z-50 flex h-[100px] w-screen justify-center bg-slate-200 dark:bg-[#001412]">
                    <h1 id="projects" className=" w-1/2">
                        <Link to="skills">Skills</Link>
                    </h1>
                </div>
                <div className="w-1/2">
                    <Skills />
                </div>
            </div>

            {/* </div> */}
        </div>
    )
}

export default Home
