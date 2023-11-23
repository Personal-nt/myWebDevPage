import { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";

const SquareGrid = () => {
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
            { background: "rgba(104, 209, 191, 0)" },
            { duration: 1.5 }
        );
    };

    const handleMouseEnter = (e) => {
        // @ts-ignore
        const id = `#${e.target.id}`;
        animate(
            id,
            { background: "rgba(104, 209, 191, 1)" },
            { duration: 0.15 }
        );
    };

    return (
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
    );
};

export default SquareGrid;
