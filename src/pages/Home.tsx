import { Hero } from '../components/Hero'

import Projects from '../components/componentCss/Projects'

const Home = () => {
    return (
        <div className="flex w-[70%] flex-col items-center justify-center">
            <div className="flex flex-col">
                <Hero />
                <h3 id="projects" className="">Projects</h3>
                <Projects />
            </div>
        </div>
    )
}

export default Home
