import { features } from '../utils/projects'

const projArr = features.slice(0, -1)

const Projects = () => {
    return (
        <div className="mb-24 mt-24 flex h-screen w-screen flex-col items-center justify-start border-0 border-red-400 bg-slate-900/0">
            <div className="flex h-fit w-1/2 flex-col justify-center gap-12 bg-slate-200 dark:bg-[#001412]">
                {projArr.map(
                    ({ id, title, description, projectScreenShot }) => (
                        <div
                            key={id}
                            className="flex items-center justify-center gap-6"
                        >
                            <div className="relative h-fit w-fit rounded-xl bg-slate-800 shadow-xl dark:bg-slate-200">
                                <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3 dark:bg-slate-400">
                                    <div className="h-3 w-3 rounded-full bg-red-500" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                    <div className="h-3 w-3 rounded-full bg-green-500" />
                                </div>
                                <div className="flex flex-col gap-4 p-0">
                                    <img
                                        src={projectScreenShot}
                                        alt={title}
                                        className="h-[300px] w-[500px] rounded-b-xl object-cover shadow-xl"
                                    />
                                </div>
                            </div>
                            <div className="flex w-[500px] flex-col items-center justify-center">
                                <h1 className="text-3xl font-bold">{title}</h1>
                                <p className="text-xl">{description}</p>
                            </div>
                        </div>
                    ),
                )}
            </div>
        </div>
    )
}

export default Projects
