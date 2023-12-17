import Footer from '../components/Footer'
import { Hero } from '../components/Hero'
import SkillSummary from '../components/SkillSummary'

import TopProjects from '../components/TopProjects'
import GithubCal from '../components/GithubCal'
// import GithubCal from '../components/GithubCal'

const Home = () => {
    return (
        <div className="scroll-container-home custom-text-bg h-screen w-screen">
            {/* <GithubCal /> */}
            <div
                id="hero"
                className="z-50 flex w-screen justify-center bg-slate-200 dark:bg-[#001412]"
            >
                <div className="custom-text-bg w-full xl:w-4/5 2xl:w-[65%]">
                    <Hero />
                </div>
            </div>

            <div
                id="topProjects"
                className="flex h-screen w-screen flex-col items-center justify-start bg-slate-200 dark:bg-[#001412]"
            >
                <div className="z-50 flex h-[100px] w-screen justify-center border-0 border-slate-600 bg-slate-200 dark:bg-[#001412]">
                    <h2
                        id="topProjects"
                        className="flex w-full justify-center text-center md:text-left lg:justify-start xl:w-[75%] 2xl:w-1/2"
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

            <div className="relative top-[0px]  w-screen flex-col items-center justify-start bg-slate-200 dark:bg-[#001412] md:top-[-400px] lg:top-[-200px] lg:flex xl:top-[-50px] 2xl:top-[-400px]">
                <div className="z-50 flex h-[100px] w-screen justify-center bg-slate-200 pt-24 dark:bg-[#001412]">
                    <h2
                        id="skillsummary"
                        className="flex w-full justify-center text-center md:text-left lg:justify-start xl:w-[75%] 2xl:w-1/2"
                    >
                        Skills Summary
                    </h2>
                </div>
                <div
                    id="timeline"
                    className="mb-12 border-0 border-slate-600 pt-24 lg:w-full xl:w-4/5 2xl:w-1/2"
                >
                    <SkillSummary />
                </div>
                <div className="flex w-full flex-col items-center">
                    <div className="z-50 flex h-[100px] w-screen justify-center pt-24 dark:bg-[#001412]">
                        <h2
                            id="githubCal"
                            className="flex w-full justify-center text-center md:text-left lg:justify-start xl:w-[75%] 2xl:w-1/2"
                        >
                            How committed am I?
                        </h2>
                    </div>
                    <div
                        id="timeline"
                        className="mb-12 flex w-full flex-col items-center justify-center border-0 border-slate-600 bg-pink-300/0 pt-24"
                    >
                        <a
                            href="https://github.com/0xNordian"
                            target="_blank"
                            className="github-card w-[50%] p-6 text-textColorDark xl:w-[80%] 2xl:w-1/2"
                        >
                            <GithubCal />
                        </a>
                        <div className="flex w-[50%] justify-start xl:w-[80%] 2xl:w-1/2">
                            <small>
                                Place the mouse over the tiles to see the
                                commits count per day
                            </small>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home
