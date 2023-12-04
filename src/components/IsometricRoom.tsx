import React, { Suspense, useState, useEffect } from "react";
// import Spline from '@splinetool/react-spline';
import { SplineEvent } from '@splinetool/runtime';

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function IsometricRoom() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    const handleMouseDown = (e: SplineEvent) => {
        console.log('e', e);
        if (e.target.name === 'lamp') {
            console.log('Lamp clicked!');
            setIsDarkMode(prevMode => !prevMode);;
        }
    };

    return (
        <div className="w-[100%] h-[100%] scale-[100%] pointer-events-auto">
            <Suspense fallback={<div>Loading...</div>}>

                <Spline
                scene="https://prod.spline.design/KTiCfnJYZD0fGLhJ/scene.splinecode"
                onMouseDown={handleMouseDown}
                />
                </Suspense>
        </div>
    );
}