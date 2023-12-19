import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import GithubCal from '../components/GithubCal'
import { Hero } from '../components/Hero'
import SkillSummary from '../components/SkillSummary'
import TopProjects from '../components/TopProjects'

const Home2 = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 425);
        };

        // Set up the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
        {/* <div className="scroll-container-home custom-text-bg flex h-screen w-screen flex-col items-center"> */}
        <div className={`${isMobile ? "" : "scroll-container-home"} custom-text-bg flex h-screen w-screen flex-col items-center`}>
            <div className="w-full xl:w-4/5 2xl:w-[65%] ">
                <section id="hero" className="h-screen lg:-mt-[75px] xl:-mt-[0px] 2xl:-mt-[70px]">
                    <div className="z-60">
                        <div className="custom-text-bg z-50 flex w-full items-center justify-center">
                            <Hero />
                        </div>
                    </div>
                </section>

                <section className="custom-text-bg h-screen">
                    <div
                        id="topProjects"
                        className="relative z-50 2xl:top-[0px]"
                    >
                        <h2 className="custom-text-bg flex items-end 2xl:h-[200px] lg:pl-6 xl:pl-0">
                            Top Projects
                        </h2>
                    </div>
                    <div className="relative xl:top-[100px] 2xl:top-[-200px]">
                        <TopProjects />
                    </div>
                </section>

                <section
                    id="skillsummary"
                    className="custom-text-bg z-60 relative h-screen"
                >
                    <div className="relative top-[0px]">
                        <h2 className="custom-text-bg relative top-[70px] lg:pl-6 xl:pl-0">
                            Skills Summary
                        </h2>
                    </div>
                    <div className="relative lg:top-[60px] xl:top-[50px] 2xl:top-[0px]">
                        <SkillSummary />
                    </div>
                </section>

                <section
                    id="githubCal"
                    className="custom-text-bg z-60 relative h-screen"
                >
                    <div className="relative top-[0px]">
                        <h2 className="custom-text-bg relative xl:top-[50px] 2xl:top-[150px] py-4 lg:pl-6 xl:pl-0">
                            How committed am I?
                        </h2>
                    </div>
                    <div className="k flex h-full w-full flex-col items-center justify-center">
                        <div className="github-card relative w-full p-6 text-textColorDark lg:top-[-150px] lg:w-[95%] xl:w-[95%] xl:top-[-100px] 2xl:w-[77%]">
                            <GithubCal />
                            <div className="mt-4 flex w-[50%] justify-start xl:w-[80%] 2xl:w-full">
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
        </>

    )
}

export default Home2
