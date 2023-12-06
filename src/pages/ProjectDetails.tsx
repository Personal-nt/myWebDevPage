import { useParams } from 'react-router-dom'
import { features } from '../utils/projects'
import PhoneMockup from '../components/PhoneMockup'
import BrowserMockup from '../components/BrowserMockup'

const ProjectDetails = () => {
    const { urlTitle } = useParams()
    const project = features.find((p) => p.urlTitle === urlTitle)
    console.log(project)

    if (!project) {
        return <div>Project not found</div>
    }

    const {
        title,
        projectDetailDescription,
        description,
        techStack,
        repoLink,
        deployLink,
    } = project
    return (
        <div className="container px-4 py-8 w-screen">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                {title}
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
                {projectDetailDescription}
            </p>
            <div className="flex justify-center">
                <div className="mt-6 lg:hidden">
                    <PhoneMockup url={deployLink} />
                </div>
                <div className="mt-6 hidden lg:flex">
                    <div className="">
                    <BrowserMockup url={deployLink} />
                    </div>
                </div>
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
