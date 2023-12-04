import { useParams } from 'react-router-dom'
import { features } from '../utils/projects'

const ProjectDetails = () => {
    const { urlTitle } = useParams()
    const project = features.find((p) => p.urlTitle === urlTitle)
    console.log(project)

    if (!project) {
        return <div>Project not found</div>
    }

    const {
        title,
        description,
        techStack,
        projectScreenShot,
        repoLink,
        deployLink,
    } = project
    // Render your project details using 'project'
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                {title}
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
                {description}
            </p>
            <div className="mt-6">
                <img
                    src={projectScreenShot}
                    alt={title}
                    className="mx-auto w-full rounded shadow-lg md:w-1/2 lg:w-1/3"
                />
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                    <li
                        key={index}
                        className="rounded-full bg-blue-500 px-3 py-1 text-sm text-white"
                    >
                        {tech}
                    </li>
                ))}
            </ul>
            <div className="mt-6 flex flex-col justify-center gap-4 md:flex-row">
                <a
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded bg-green-500 px-4 py-2 text-center text-white hover:bg-green-600"
                >
                    View Repo
                </a>
                <a
                    href={deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded bg-blue-500 px-4 py-2 text-center text-white hover:bg-blue-600"
                >
                    Visit Project
                </a>
            </div>
        </div>
    )
}

export default ProjectDetails
