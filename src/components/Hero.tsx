import IsometricRoom from './IsometricRoom'

export const Hero = () => {
    return (
        <div className="flex h-full w-full justify-center bg-pink-400/0">
            <div className="flex h-[100%] w-full">
                <div className="flex w-1/2 flex-col items-center justify-center border-0 border-black bg-pink-500/0">
                    <div className="flex w-full flex-col gap-2 bg-teal-400/0">
                        <h1 className="mt-4 text-4xl font-medium text-[#081421c5] dark:text-slate-300 sm:text-8xl md:text-8xl ">
                            Néstor Torres
                        </h1>
                        <small className="text-xl text-slate-800/60 dark:text-slate-200">
                            {/* +3 years web developer */}
                        </small>
                        <h5 className="max-w-3xl text-slate-800/60 dark:text-slate-200">
                            {' '}
                            Programming is to have the power to create.
                            <br />
                        </h5>
                        <button className="border-1 btn btn-outline mt-4 w-1/3 border-teal-400 bg-teal-400 text-[#081421c5] dark:bg-[#081421c5] dark:text-teal-400 hover:dark:bg-teal-400 hover:dark:text-[#081421c5]">
                            Let's build!
                        </button>
                    </div>
                </div>
                <div className="relative -top-[0px] left-[50px] flex h-[750px] w-1/2 items-center justify-center border-0 border-black bg-emerald-600/0">
                    <IsometricRoom />
                </div>
            </div>
        </div>
    )
}
