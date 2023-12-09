import { Link } from "react-router-dom"
import Badge from "./Badge"
import ButtonIcon from "./ButtonIcon"
import { Project } from '../utils/projects'

type FeatureProps = {
    featureInView: Project
}

const SingleFeature = ({ featureInView }: FeatureProps) => {
    return (
        <div className="md:hidden relative h-full w-full rounded-xl bg-slate-800 shadow-xl dark:bg-slate-200">
            <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3 dark:bg-slate-300">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="flex flex-col gap-6 p-6 text-slate-300 dark:text-slate-500">
                <h3 className="text-3xl">{featureInView.title}</h3>
                <div className="flex flex-col gap-4 p-0">
                                <a
                                    target="_blank"
                                    href={featureInView.deployLink}
                                >
                                    <img
                                        src={featureInView.projectScreenShot}
                                        alt={featureInView.title}
                                        className="h-full w-full rounded-b-xl object-cover shadow-xl"
                                    />
                                </a>
                            </div>
                <div className="flex flex-col gap-2 font-mono text-sm text-slate-200">
                    <div className="only-txt-reverse">
                        <span className="text-green-300 dark:text-slate-500">
                            ~{' '}
                        </span>
                        Project description:
                    </div>
                    <span className="only-txt-reverse inline-block rounded px-1 font-semibold">
                        {featureInView.description}{' '}
                    </span>{' '}
                </div>
                <div className="flex flex-wrap gap-2">
                    {featureInView.techStack.map((tech) => (
                        <Badge key={tech} txt={tech} />
                    ))}
                </div>
                <div className="only-txt-reverse pointer-events-auto flex gap-4">
                    {featureInView.type === 'moreProjects' ? (
                        <Link to="projects">
                            <ButtonIcon icon="repo" txt="More projects" />
                        </Link>
                    ) : featureInView.type === 'public' ? (
                        <a
                            target="_blank"
                            href={featureInView.repoLink}
                            className="text-xs"
                        >
                            <ButtonIcon icon="repo" txt="View Repo" />
                        </a>
                    ) : (
                        <ButtonIcon icon="privateRepo" txt="Private Repo" />
                    )}
                    
                    {featureInView.type === 'public' ||
                    featureInView.type === 'private' ? (
                        <>
                            <a
                                target="_blank"
                                href={featureInView.deployLink}
                                className="text-xs "
                            >
                                <ButtonIcon icon={'deploy'} txt="App" />
                            </a>
                            <Link
                                to={`/projects/${featureInView.urlTitle}`}
                                key={featureInView.id}
                            >
                                <ButtonIcon
                                    icon={'project'}
                                    txt="Project page"
                                />
                            </Link>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default SingleFeature;