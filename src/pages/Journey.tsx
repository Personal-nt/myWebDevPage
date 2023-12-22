import { SquareGrid } from '../components/SquareGrid'
import Timeline from '../components/Timeline'

const Journey = () => {
    return (
        <div className="flex flex-col h-screen w-screen">
                    <SquareGrid />
                    <div id="journey" className="mt-12 flex justify-center">
                    <Timeline />
                    </div>
        </div>
    )
}

export default Journey
