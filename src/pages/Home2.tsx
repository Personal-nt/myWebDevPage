import Footer from '../components/Footer'
import GithubCal from '../components/GithubCal'
import { Hero } from '../components/Hero'
import SkillSummary from '../components/SkillSummary'
import TopProjects from '../components/TopProjects'

const Home2 = () => {
    return (
        <div className="scroll-container-home custom-text-bg flex h-screen w-screen flex-col items-center">
            <div className="w-full xl:w-4/5 2xl:w-[65%] ">
                <section id="hero" className="-mt-[0px] h-screen ">
                    <div className="z-60 flex justify-center ">
                        <div className="custom-text-bg z-50 w-full">
                            <Hero />
                        </div>
                    </div>
                </section>

                <section className="custom-text-bg h-screen">
                    <div id="topProjects" className="relative top-[0px] z-50">
                        <h2 className="custom-text-bg relative top-[100px] py-4">
                            Top Projects
                        </h2>
                    </div>
                    <TopProjects />
                </section>

                <section
                    id="skillsummary"
                    className="custom-text-bg z-60 relative h-screen"
                >
                    <div className="relative top-[0px]">
                        <h2 className="custom-text-bg relative top-[70px]">
                            Skills Summary
                        </h2>
                    </div>
                    <SkillSummary />
                </section>

                <section
                    id="githubCal"
                    className="custom-text-bg z-60 relative h-screen"
                >
                    <div className="relative top-[0px]">
                        <h2 className="custom-text-bg relative top-[150px] py-4">
                            How committed am I?
                        </h2>
                    </div>
                    <div className="k flex h-full w-full flex-col items-center justify-center">
                        <div className="github-card w-[50%] p-6 text-textColorDark xl:w-[80%] 2xl:w-[77%]">
                            <GithubCal />
                        <div className="flex w-[50%] justify-start xl:w-[80%] 2xl:w-full mt-4">
                            <small>
                                Place the mouse over the tiles to see the
                                commits count per day
                            </small>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
            <section id="footer" className="">
                <Footer />
            </section>
        </div>
    )
}

export default Home2
