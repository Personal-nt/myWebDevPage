import { Hero } from '../components/Hero'
import Timeline from '../components/Timeline'

import TopProjects from '../components/TopProjects'
// import GithubCal from '../components/GithubCal'

const Home = () => {
    return (
        <div className="mb-24 flex h-screen w-screen flex-col items-center justify-start border-0 border-red-400 bg-slate-900/0">
            {/* <GithubCal /> */}
            <div className="z-50 flex w-screen justify-center bg-slate-200 dark:bg-[#001412]">
                <div className="w-1/2 border-0 border-slate-600">
                    <Hero />
                </div>
            </div>

            <div className="flex w-screen flex-col items-center justify-start bg-slate-200 dark:bg-[#001412]">
                <div className="z-50 flex h-[100px] w-screen justify-center bg-slate-200 dark:bg-[#001412]">
                    <h1
                        id="topProjects"
                        className="w-1/2 border-0 border-slate-600"
                    >
                        Top Projects
                    </h1>
                </div>
                <div className="w-1/2">
                    <div className="relative -top-[80px] z-0 border-0 border-slate-600">
                        <TopProjects />
                    </div>
                </div>
            </div>

            <div className="relative top-[-350px] flex w-screen flex-col items-center justify-start bg-slate-200 dark:bg-[#001412]">
                <div className="z-50 flex h-[100px] w-screen justify-center bg-slate-200 dark:bg-[#001412]">
                    <h1
                        id="journey"
                        className="w-1/2 border-0 border-slate-600"
                    >
                        Journey
                    </h1>
                </div>
                <div className="mb-12 w-1/2 border-0 border-slate-600">
                    <Timeline />
                </div>
            </div>
        </div>
    )
}

export default Home
