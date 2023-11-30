import { Hero } from '../components/Hero'

import Projects from '../components/componentCss/Projects'

const Home = () => {
    return (
        <div className="flex h-full flex-col items-center justify-center">
            <div className="flex w-full flex-col border-0 border-red-500/0">
                <div className="z-30 bg-slate-200 dark:bg-[#001412]">
                    <Hero />
                </div>
                <div className=" h-fit">
                    <h1 id="projects" className="relative z-20 bg-slate-200 dark:bg-[#001412]">
                        Projects
                    </h1>
                    <div className="z-10">
                        <Projects />
                    </div>
                </div>
                <h1
                    id="skills"
                    className="left-[35px] top-[100px] h-[1000px] w-full bg-pink-400"
                >
                    Skills
                </h1>
            </div>
        </div>
    )
}

export default Home
