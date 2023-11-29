import { Hero } from '../components/Hero'
import { toggleDarkMode } from '../utils/toggleDarkMode'
import Projects from '../components/componentCss/Projects'

const Home = () => {
    return (
        <div className="flex w-[70%] flex-col items-center justify-center">
            <input
                type="checkbox"
                className="toggle dark:border-[#00D6C1] dark:bg-[#00D6C1]"
                onClick={() => toggleDarkMode()}
            />
            <div className="flex flex-col">
                <Hero />
                <h3 className="">Projects</h3>
            </div>
            <div className="">
            <Projects />
            </div>
        </div>
    )
}

export default Home
