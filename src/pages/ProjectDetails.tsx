import { Link, useParams } from 'react-router-dom'
import { features } from '../utils/projects'
import PhoneMockup from '../components/PhoneMockup'
import BrowserMockup from '../components/BrowserMockup'
import ButtonIcon from '../components/ButtonIcon'
import TemplateProjectDetails from '../components/technicalDescriptions/TemplateProjectDetails'

const ProjectDetails = () => {
    const { urlTitle } = useParams()
    const project = features.find((p) => p.urlTitle === urlTitle)
    console.log(project)

    if (!project) {
        return <div>Project not found</div>
    }

    const {
        type,
        title,
        projectDetailDescription,
        technicalDescription,
        techStack,
        repoLink,
        deployLink,
    } = project
    return (
        <div className="container w-screen px-4 py-8">
            <h1 className="text-2xl font-bold only-txt md:text-4xl">
                {title}
            </h1>
            <p className="mt-4 only-txt">
                {projectDetailDescription}
            </p>
            <div className="flex w-full gap-12">
                <div className="flex flex-col justify-start items-center">
                    <div className="mt-6 lg:hidden">
                        <PhoneMockup url={deployLink} />
                    </div>
                    <div className="mt-6 hidden lg:flex">
                        <div className="">
                            <BrowserMockup url={deployLink} technicalDescription={technicalDescription}/>
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
                    <div className="mt-6 flex flex-col justify-center gap-4 md:flex-row only-txt">
                    {type === 'moreProjects' ? (
                        <Link to="projects">
                            <ButtonIcon icon="repo" txt="More projects" />
                        </Link>
                    ) : type === 'public' ? (
                        <a
                            target="_blank"
                            href={repoLink}
                            className="text-xs"
                        >
                            <ButtonIcon icon="repo" txt="View Repo" />
                        </a>
                    ) : (
                        <ButtonIcon icon="privateRepo" txt="Private Repo" />
                    )}
                    <a
                                target="_blank"
                                href={deployLink}
                                className="text-xs "
                                >
                                <ButtonIcon icon={'deploy'} txt="App" />
                            </a>
                                </div>
                </div>
                <div className="mt-6"><TemplateProjectDetails {...technicalDescription} /></div>
            </div>
        </div>
    )
}

export default ProjectDetails
