import IsometricRoom from './IsometricRoom'
import { Link } from 'react-router-dom'

export const Hero = () => {
    return (
        <div className="flex h-full w-full justify-center bg-pink-400/0">
            <div className="flex flex-col xl:flex-row h-[100%] w-full justify-center items-center">
                <div className="flex w-full xl:w-1/2 flex-col items-center justify-center border-0 border-black bg-pink-500/0">
                    <div className="flex w-4/5 xl:w-full flex-col gap-1 xl:gap-2 bg-teal-400/0 mt-6 xl:mt-0 text-center xl:text-left">
                        <h1 className="mt-4 md:mt-12 text-4xl font-medium text-[#081421c5] dark:text-slate-300 sm:text-8xl md:text-8xl ">
                            Néstor Torres
                        </h1>
                        <small className="text-xl text-slate-800/60 dark:text-slate-200">
                            {/* +3 years web developer */}
                        </small>
                        <h5 className="max-w-3xl text-slate-800/60 dark:text-slate-200 text-lg">
                            {' '}
                            Programming is to have the power to create.
                            <br />
                        </h5>
                        <div className="w-full flex justify-center xl:justify-start">
                        <button className="border-1 btn btn-outline mt-4 md:w-1/2 xl:w-1/3 border-teal-400 bg-teal-400 text-[#081421c5] dark:bg-[#081421c5] dark:text-teal-400 hover:dark:bg-teal-400 hover:dark:text-[#081421c5]">
                            <Link to="contact" className="md:w-1/2">Let's build!</Link>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="relative -top-[0px] xl:left-[50px] flex h-[400px] xl:h-[750px] w-full xl:w-1/2 items-center justify-center bg-emerald-600/0 border border-slate-300/0">
                    <IsometricRoom />
                </div>
            </div>
        </div>
    )
}
