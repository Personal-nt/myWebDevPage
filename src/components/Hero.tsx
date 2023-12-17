import { useState } from 'react'
import IsometricRoom from './IsometricRoom'
import CtaButton from './CtaButton'

export const Hero = () => {

    const [screenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    console.log(screenSize.width, screenSize.height)

    // const handleMouseEnter = () => setIsMouseOver(true);
    // const handleMouseLeave = () => setIsMouseOver(false);
    return (
        <div className="flex h-full w-full justify-center xl:h-screen ">
            <div className="flex h-[100%] w-full flex-col items-center justify-center xl:h-[80%] xl:flex-row 2xl:h-[100%] bg-pink-300/0">
                <div className="flex w-full flex-col items-center justify-center border border-slate-600/0 bg-pink-500/0 xl:w-1/2 h-full">
                    <div className="mt-6 flex w-4/5 flex-col bg-teal-400/0 text-center xl:mt-0 xl:w-full xl:text-left">
                        {
                            screenSize.width <= 425 ? (
                                <h1 className="only-txt mt-4 font-medium md:mt-12 text-[3rem]">
                                Néstor Torres
                            </h1>
                            ) : (
                                <h1 className="only-txt mt-4 font-medium md:mt-12">
                                    Néstor Torres
                                </h1>
                            )
                        }
                        {
                            screenSize.width < 425 ? (
                                <h3 className="only-txt w-full text-[1.14rem]">
                                Programming is to have the power to create.
                            </h3>
                            ) : (
                                <h3 className="only-txt w-full">
                                    Programming is to have the power to create.
                                </h3>
                            )
                        }
                        <div className="flex h-full w-full items-center justify-center xl:justify-start">
                            {/* <button className="border-1 btn btn-outline mt-4 w-1/2 border-teal-400 bg-teal-400 text-[#081421c5] dark:bg-[#081421c5] dark:text-teal-400 hover:dark:bg-teal-400 hover:dark:text-[#081421c5] md:w-1/3 lg:w-1/4 xl:w-1/3 2xl:w-1/2">
                                <Link to="contact" className="md:w-1/2">
                                    Let's build!
                                </Link>
                            </button> */}
                                <CtaButton link="contact" txt="Let's build!" />
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src="/images/isometricRoomLoading-mobile.png"
                        alt="nordians room"
                        className="py-12 md:hidden"
                    />
                </div>
                {/* <div >
                    <img className={`${isMouseOver ? 'hidden' : 'visible'} relative left-[350px] scale-50 z-50`} src="../../public/images/handDrag.gif" alt="" />
                </div> */}
                <div className="relative -top-[0px] hidden h-[400px] w-full items-center justify-center border border-slate-600/0 bg-emerald-600/0 md:flex 2xl:left-[0px] xl:h-full xl:w-1/2 2xl:w-6/12 2xl:h-full">
                    <IsometricRoom />
                </div>
            </div>
        </div>
    )
}
