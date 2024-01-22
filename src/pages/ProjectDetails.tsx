import { Link, useParams } from 'react-router-dom'
import { features } from '../utils/projects'
import PhoneMockup from '../components/PhoneMockup'
import BrowserMockup from '../components/BrowserMockup'
import ButtonIcon from '../components/ButtonIcon'
import TemplateProjectDetails from '../components/technicalDescriptions/TemplateProjectDetails'
import Badge from '../components/Badge'

const ProjectDetails = () => {
    const { urlTitle } = useParams()
    const project = features.find((p) => p.urlTitle === urlTitle)
    console.log(project)

    if (!project) {
        return <div>Project not found</div>
    }

    const {
        type,
        category,
        title,
        projectDetailDescription,
        technicalDescription,
        techStack,
        repoLink,
        deployLink,
    } = project
    return (
        <div className="w-screen px-4 py-8 flex flex-col justify-center items-center">
            <div className="w-[60%]">

            <h1 className="only-txt text-2xl font-bold md:text-4xl">{title}</h1>
            {<Badge txt={category} />}
            <p className="only-txt mt-4">{projectDetailDescription}</p>
            <div className="flex flex-col w-full gap-12">
                <div className="flex flex-col items-center justify-start">
                    <div className="mt-6 lg:hidden">
                        <PhoneMockup
                            url={deployLink}
                            technicalDescription={technicalDescription}
                        />
                    </div>
                    <div className="mt-6 hidden lg:flex w-full">
                        <div className="w-full">
                            <BrowserMockup
                                url={deployLink}
                                technicalDescription={technicalDescription}
                            />
                        </div>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-2">
                        {techStack.map((tech, index) => (
                            <li
                                key={index}
                                // className="rounded-full bg-blue-500 px-3 py-1 text-sm text-white"
                            >
                                <Badge txt={tech} />
                            </li>
                        ))}
                    </ul>
                    <div className="only-txt mt-6 flex flex-col justify-center gap-4 md:flex-row">
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
                            <ButtonIcon icon={'deploy'} txt="Demo" />
                        </a>
                    </div>
                </div>
                <div className="mt-6">
                    <TemplateProjectDetails {...technicalDescription} />
                </div>
            </div>
            </div>

        </div>
    )
}

export default ProjectDetails
