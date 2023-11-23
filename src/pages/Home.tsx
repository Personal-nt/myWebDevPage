import { GridHoverHero } from "../components/Hero";
import IsometricRoom from "../components/IsometricRoom";

const Home = () => {
    return (
        <div className="h-[100lvh] bg-slate-900">
            <GridHoverHero />
            <div id="isometricRoom" className="text-black h-full w-[100lvw] bg-teal-400">
                <IsometricRoom />
            </div>
        </div>
    );
};

export default Home;
