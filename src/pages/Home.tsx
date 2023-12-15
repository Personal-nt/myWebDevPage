import Footer from '../components/Footer'
import { Hero } from '../components/Hero'
import SkillSummary from '../components/SkillSummary'

import TopProjects from '../components/TopProjects'
// import GithubCal from '../components/GithubCal'

const Home = () => {
    return (
        <div className="scroll-container-home mb-24 flex h-screen w-screen flex-col items-center justify-start border-0 border-red-400 bg-slate-900/0">
            {/* <GithubCal /> */}
            <div id="hero" className="z-50 flex w-screen justify-center bg-slate-200 dark:bg-[#001412]">
                <div className="custom-text-bg w-full xl:w-4/5 2xl:w-[65%]">
                    <Hero />
                </div>
            </div>

            <div id="topProjects" className="flex w-screen h-screen flex-col items-center justify-start bg-slate-200 dark:bg-[#001412]">
                <div className="z-50 flex h-[100px] w-screen justify-center border-0 border-slate-600 bg-slate-200 dark:bg-[#001412]">
                    <h2
                        id="topProjects"
                        className="flex w-full justify-center text-center md:text-left lg:justify-start xl:w-1/2"
                    >
                        Top Projects
                    </h2>
                </div>
                <div className="bg-pink-300(0) h-fit lg:w-full xl:w-4/5 2xl:w-1/2">
                    <div className="relative z-0 border-0 border-slate-600 md:-top-[80px] lg:-top-[140px] xl:-top-[-100px] 2xl:-top-[80px]">
                        <TopProjects />
                    </div>
                </div>
            </div>

            <div className="relative top-[0px] hidden w-screen flex-col items-center justify-start bg-slate-200 dark:bg-[#001412] md:top-[-400px] lg:top-[-200px] lg:flex xl:top-[-50px] 2xl:top-[-400px]">
                <div className="z-50 flex h-[100px] w-screen justify-center bg-slate-200 dark:bg-[#001412] pt-24">
                    <h2
                        id="skillsummary"
                        className="w-1/2 border-0 border-slate-600"
                    >
                        Skills Summary
                    </h2>
                </div>
                <div id="timeline" className="mb-12 w-1/2 border-0 border-slate-600 pt-24">
                    {/* <Timeline /> */}
                    <SkillSummary />
                </div>
            </div>
                <Footer />
        </div>
    )
}

export default Home
