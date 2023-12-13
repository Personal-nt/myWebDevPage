import IsometricRoom from './IsometricRoom'
import { Link } from 'react-router-dom'

export const Hero = () => {
    return (
        <div className="flex h-full w-full justify-center bg-pink-400/0">
            <div className="flex h-[100%] w-full flex-col items-center justify-center xl:flex-row">
                <div className="flex w-full flex-col items-center justify-center border-0 border-black bg-pink-500/0 xl:w-1/2">
                    <div className="mt-6 flex w-4/5 flex-col gap-1 bg-teal-400/0 text-center xl:mt-0 xl:w-full xl:gap-2 xl:text-left">
                        <h1 className="mt-4 text-4xl font-medium text-[#081421c5] dark:text-slate-300 md:mt-12 md:text-5xl xl:text-7xl">
                            Néstor Torres
                        </h1>
                        <small className="text-xl text-slate-800/60 dark:text-slate-200">
                            {/* +3 years web developer */}
                        </small>
                        <h3 className="w-full text-slate-800/60 dark:text-slate-200">
                            {' '}
                            Programming is to have the power to create.
                            <br />
                        </h3>
                        <div className="flex w-full h-full justify-center items-center xl:justify-start">
                            <button className="border-1 btn btn-outline mt-4 w-1/2 border-teal-400 bg-teal-400 text-[#081421c5] dark:bg-[#081421c5] dark:text-teal-400 hover:dark:bg-teal-400 hover:dark:text-[#081421c5] md:w-1/3 lg:w-1/4 xl:w-1/3">
                                <Link to="contact" className="md:w-1/2">
                                    Let's build!
                                </Link>
                            </button>
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
                <div className="relative -top-[0px] hidden h-[400px] w-full items-center justify-center border border-slate-300/0 bg-emerald-600/0 md:flex xl:left-[50px] xl:h-[750px] xl:w-1/2">
                    <IsometricRoom />
                </div>
            </div>
        </div>
    )
}
