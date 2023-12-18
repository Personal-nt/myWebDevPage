import { features, Technology } from '../utils/projects'
import Badge from '../components/Badge'
import ButtonIcon from '../components/ButtonIcon'
import { Link } from 'react-router-dom'
import FilterAccordion from '../components/FilterAccordion'
import { useState } from 'react'
import Footer from '../components/Footer'

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
            <div className="mb-12 flex w-screen flex-col items-center justify-start bg-slate-900/0">
                <div className="grid w-11/12 grid-cols-1 gap-12 border-0 border-blue-600 custom-text-bg md:w-3/4 2xl:grid-cols-2 place-items-center">
                    {filteredProjects.map(
                        ({
                            id,
                            type,
                            category,
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
                                className="custom-text-bg flex flex-col items-center justify-center gap-0 rounded-xl border-2 border-slate-400/20 bg-[#D2D6DD] shadow-lg md:h-fit md:w-[600px] lg:h-[300px] lg:w-[800px] lg:flex-row lg:gap-6"
                            >
                                <div className="relative h-full w-full rounded-xl bg-slate-800 dark:bg-slate-200 lg:w-1/2">
                                    <div className="flex gap-1.5 rounded-t-xl bg-slate-900 p-3 dark:bg-slate-300">
                                        <div className="h-3 w-3 rounded-full bg-red-500" />
                                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                        <div className="h-3 w-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="flex flex-col gap-0 p-0">
                                        <img
                                            src={projectScreenShot}
                                            alt={title}
                                            className="h-[260px] w-full rounded-b-none lg:rounded-b-xl object-cover object-center shadow-xl"
                                        />
                                    </div>
                                </div>
                                <div className="flex w-full flex-col justify-between gap-4 p-4 lg:w-1/2">
                                    {' '}
                                    {/* Adjusted classes here */}
                                    <div className="flex flex-col justify-center gap-1">
                                        <h1 className="text-xl font-bold">
                                            {title}
                                        </h1>
                                        <span className="w-fit">
                                            <Badge txt={category} />
                                        </span>
                                    </div>
                                    <p className="max-h-fit text-sm md:max-h-[100px] ">
                                        {description}
                                    </p>{' '}
                                    {/* Added overflow handling */}
                                    <ul className="flex flex-wrap gap-2">
                                        {techStack.map((tech, index) => (
                                            <li key={`${id}-${index}`}>
                                                {
                                                    <Badge
                                                        txt={tech}
                                                        type="tech"
                                                    />
                                                }
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="only-txt pointer-events-auto flex flex-wrap gap-4">
                                        {type === 'public' ? (
                                            <a
                                                target="_blank"
                                                href={repoLink}
                                                className="text-xs"
                                            >
                                                <ButtonIcon
                                                    icon="repo"
                                                    txt="View Repo"
                                                />
                                            </a>
                                        ) : (
                                            <ButtonIcon
                                                icon="privateRepo"
                                                txt="Private Repo"
                                            />
                                        )}

                                        <a
                                            target="_blank"
                                            href={deployLink}
                                            className="text-xs"
                                        >
                                            <ButtonIcon
                                                icon={'deploy'}
                                                txt="App"
                                            />
                                        </a>
                                        <Link
                                            to={`/projects/${urlTitle}`}
                                            key={id}
                                        >
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
                <Footer />
        </div>
    )
}

export default Projects
