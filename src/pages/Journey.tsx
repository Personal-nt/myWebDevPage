import { SquareGrid } from '../components/SquareGrid'
import Timeline from '../components/Timeline'

const Journey = () => {
    return (
        <div className="flex flex-col h-screen w-full">
                    <SquareGrid />
                    <div id="journey" className="mt-12 px-[500px]">
                    <Timeline />
                    </div>
        </div>
    )
}

export default Journey
