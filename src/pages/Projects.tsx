import { features, Technology } from '../utils/projects'
import Badge from '../components/Badge'
import ButtonIcon from '../components/ButtonIcon'
import { Link } from 'react-router-dom'
import FilterAccordion from '../components/FilterAccordion'
import { useState } from 'react'

const Projects = () => {
    const [selectedTechs, setSelectedTechs] = useState<Technology[]>([])
    const projArr = features.slice(0, -1)

    const filteredProjects =
        selectedTechs.length === 0
            ? projArr
            : projArr.filter((proj) =>
                selectedTechs.some((tech) => proj.techStack.includes(tech)),
            )

    const handleCheckboxChange = (tech: Technology) => {
        setSelectedTechs((prev) => {
            if (prev.includes(tech)) {
                return prev.filter((t) => t !== tech)
            } else {
                return [...prev, tech]
            }
        })
    }

    const clearFilters = () => {
        setSelectedTechs([])
    }

    return (
        // <div className="mb-24 mt-24 flex h-screen w-screen flex-col items-center justify-start border-0 border-red-400 bg-slate-900/0">
        //     <div className="flex h-fit w-1/2 flex-col justify-center gap-12 bg-slate-200 dark:bg-[#001412]">
<div className="flex flex-col">
        <FilterAccordion
                selectedTechs={selectedTechs}
                onCheckboxChange={handleCheckboxChange}
                clearFilters={clearFilters}
            />
        <div className="flex h-screen w-screen flex-col items-center justify-start bg-slate-900/0">
            <div className="grid h-fit w-3/4 grid-cols-2 gap-12 border-0 border-blue-600 bg-slate-200 dark:bg-[#001412]">
                {filteredProjects.map(
                    ({
                        id,
                        title,
                        description,
                        projectScreenShot,
                        techStack,
                        repoLink,
                        deployLink,
                        urlTitle,
                    }) => (
                        <div
                            key={id}
                            className="flex h-[300px] w-[800px] items-center justify-center gap-6 rounded-xl border-2 border-slate-400/20"
                        >
                            <div className="relative h-full w-1/2 rounded-xl bg-slate-800 shadow-xl dark:bg-slate-200">
                                <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3 dark:bg-slate-400">
                                    <div className="h-3 w-3 rounded-full bg-red-500" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                    <div className="h-3 w-3 rounded-full bg-green-500" />
                                </div>
                                <div className="flex flex-col gap-4 p-0">
                                    <img
                                        src={projectScreenShot}
                                        alt={title}
                                        className="rounded-b-xl object-cover shadow-xl "
                                    />
                                </div>
                            </div>
                            <div className="flex w-1/2 flex-col justify-between gap-4 p-4 ">
                                {' '}
                                {/* Adjusted classes here */}
                                <h1 className="text-2xl font-bold">{title}</h1>
                                <p className="text-md max-h-[100px] overflow-y-auto">
                                    {description}
                                </p>{' '}
                                {/* Added overflow handling */}
                                <ul className="flex flex-wrap gap-2">
                                    {techStack.map((tech, index) => (
                                        <li key={`${id}-${index}`}>
                                            {<Badge txt={tech} />}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex gap-4">
                                    <a
                                        target="_blank"
                                        href={repoLink}
                                        className="text-xs text-slate-200 hover:text-slate-300"
                                    >
                                        <ButtonIcon
                                            icon={'repo'}
                                            txt="View Repo"
                                        />
                                    </a>
                                    <a
                                        target="_blank"
                                        href={deployLink}
                                        className="text-xs text-slate-200 hover:text-slate-300"
                                    >
                                        <ButtonIcon icon={'deploy'} txt="App" />
                                    </a>
                                    <Link to={`/projects/${urlTitle}`} key={id}>
                                        <ButtonIcon
                                            icon={'project'}
                                            txt="Project page"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ),
                )}
            </div>
        </div>
</div>

    )
}

export default Projects
