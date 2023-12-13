import Footer from '../components/Footer'
import { Hero } from '../components/Hero'
import Timeline from '../components/Timeline'

import TopProjects from '../components/TopProjects'
// import GithubCal from '../components/GithubCal'

const Home = () => {
    return (
        <div className="mb-24 flex h-screen w-screen flex-col items-center justify-start border-0 border-red-400 bg-slate-900/0">
            {/* <GithubCal /> */}
            <div className="z-50 flex w-screen justify-center bg-slate-200 dark:bg-[#001412]">
                <div className="w-full xl:w-1/2 ">
                    <Hero />
                </div>
            </div>

            <div className="flex w-screen flex-col items-center justify-start bg-slate-200 dark:bg-[#001412]">
                <div className="z-50 flex h-[100px] w-screen justify-center border-0 border-slate-600 bg-slate-200 dark:bg-[#001412]">
                    <h2
                        id="topProjects"
                        className="flex w-full justify-center text-center md:text-left lg:justify-start xl:w-1/2"
                    >
                        Top Projects
                    </h2>
                </div>
                <div className="h-full bg-pink-300(0) lg:w-full xl:w-1/2">
                    <div className="relative z-0 border-0 border-slate-600 md:-top-[80px] lg:-top-[140px] xl:-top-[80px]">
                        <TopProjects />
                    </div>
                </div>
            </div>

            <div className="relative top-[0px] hidden w-screen flex-col items-center justify-start bg-slate-200 dark:bg-[#001412] md:top-[-400px] lg:flex">
                <div className="z-50 flex h-[100px] w-screen justify-center bg-slate-200 dark:bg-[#001412]">
                    <h2
                        id="journey"
                        className="w-1/2 border-0 border-slate-600"
                    >
                        Journey
                    </h2>
                </div>
                <div className="mb-12 w-1/2 border-0 border-slate-600">
                    <Timeline />
                </div>
            <Footer />
            </div>
        </div>
    )
}

export default Home
