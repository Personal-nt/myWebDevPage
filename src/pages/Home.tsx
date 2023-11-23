import { GridHoverHero } from "../components/Hero";
import IsometricRoom from "../components/IsometricRoom";
import ProjectCard from "../components/ProjectCards";
import { projectsData } from "../utils/projects"

const Home = () => {
    const projectsArr = projectsData.projects;
    console.log(projectsArr)
    return (
        <div className="h-[100lvh] bg-slate-900">
            <GridHoverHero />
            <div
                id="isometricRoom"
                className="text-black h-[100lvh] w-[100lvw] bg-teal-400"
            >
                <IsometricRoom />
            </div>
            <div className="flex flex-wrap gap-4 justify-center items-center w-full h-[500px] mt-12">
                {projectsArr.map((project) => (
                    <div key={project.id} className="flex flex-col gap-4">
                    <ProjectCard key={project.id} title={project.title} link={project.link}/>
                    <p key={project.id} className="text-center">{project.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
