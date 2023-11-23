import { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";
import FollowSpheres from "../components/FollowSpeheres";
import HandScroll from "./HandScroll";

export const GridHoverHero = () => {
    const [scope, animate] = useAnimate();

    const [size, setSize] = useState({ columns: 0, rows: 0 });

    useEffect(() => {
        generateGridCount();
        window.addEventListener("resize", generateGridCount);

        return () => window.removeEventListener("resize", generateGridCount);
    }, []);

    const generateGridCount = () => {
        const columns = Math.floor(document.body.clientWidth / 75);
        const rows = Math.floor(document.body.clientHeight / 75);

        setSize({
            columns,
            rows,
        });
    };

    const handleMouseLeave = (e) => {
        // @ts-ignore
        const id = `#${e.target.id}`;
        animate(
            id,
            { background: "rgba(129, 140, 248, 0)" },
            { duration: 1.5 }
        );
    };

    const handleMouseEnter = (e) => {
        // @ts-ignore
        const id = `#${e.target.id}`;
        animate(
            id,
            { background: "rgba(129, 140, 248, 1)" },
            { duration: 0.15 }
        );
    };

    return (
        <div className="flex bg-neutral-950">
            <div className="w-[50vw] bg-yellow-500">
                <FollowSpheres />
            </div>
            <div className="w-[50vw] h-full bg-pink-400">
                <div
                    ref={scope}
                    className="grid h-screen w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]"
                >
                    {[...Array(size.rows * size.columns)].map((_, i) => (
                        <div
                            key={i}
                            id={`square-${i}`}
                            onMouseLeave={handleMouseLeave}
                            onMouseEnter={handleMouseEnter}
                            className="h-full w-full border-[0.5px] border-neutral-900"
                        />
                    ))}
                </div>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8 w-full">
                    <h1 className="text-center text-7xl font-black uppercase text-white sm:text-8xl md:text-9xl">
                        Néstor Torres
                    </h1>
                    <h2 className="mb-6 mt-4 max-w-3xl text-center text-lg font-light text-slate-800/50 md:text-xl rounded-2xl border-1 border-slate-700 bg-slate-300/30 p-6 shadow-xl backdrop-blur-lg">
                        I'm a web developer and I love to build things.
                    </h2>
                    <div className="w-[90px] h-[90px] pointer-events-auto">
                        <a href="/#isometricRoom"><HandScroll /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};
