import { SquareGrid } from '../components/SquareGrid'
import Timeline from '../components/Timeline'

const Journey = () => {
    return (
        <div className="flex flex-col h-screen w-screen">
                    <SquareGrid />
                    <div id="journey" className="gap-12 mt-12 flex flex-col justify-center items-center">
                        <div className="w-[70%]">Bringing over a decade of experience in a multinational, multicultural environment, I excel in teamwork, innovation, and continuous improvement. My journey shaped my skills in fostering respect, communication, and accountability. I'm passionate about learning, mentoring, and focusing on user-centric solutions. My commercial background enhances my sensitivity towards end-users, ensuring their best experience. With a global business perspective, product management, and technical knowledge, I'm uniquely positioned to contribute meaningfully to diverse roles, driving value and growth in dynamic, collaborative settings. My approach is always geared towards positive impact and collective success.</div>
                    <h2>My journey towards the tech industry:</h2>
                    <Timeline />
                    </div>
        </div>
    )
}

export default Journey
