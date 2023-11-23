
import FollowSpheres from "../components/FollowSpeheres";
import HandScroll from "./HandScroll";
import SquareGrid from "./SquareGrid";

export const GridHoverHero = () => {


    return (
        <div className="flex bg-neutral-950">
            <div className="w-[50vw] bg-yellow-500">
                <FollowSpheres />
            </div>
            <div className="w-[50vw] h-full bg-pink-400">
                <SquareGrid />
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8 w-full">
                    <h1 className="text-center text-7xl font-black uppercase text-white sm:text-8xl md:text-9xl">
                        Néstor Torres
                    </h1>
                    <h2 className="mb-6 mt-4 max-w-3xl text-center text-lg font-light text-slate-800/50 md:text-xl rounded-2xl border-1 border-slate-700 bg-slate-300/30 p-6 shadow-xl backdrop-blur-lg">
                        I'm a web developer and I love to build things.
                    </h2>
                    <div className="w-[110px] h-[110px] pointer-events-auto translate-x-2">
                        <a href="/#isometricRoom"><HandScroll /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};
