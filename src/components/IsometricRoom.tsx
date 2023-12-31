import React, { Suspense, useState, useEffect } from 'react'
// import Spline from '@splinetool/react-spline';
import { SplineEvent } from '@splinetool/runtime'

const Spline = React.lazy(() => import('@splinetool/react-spline'))

export default function IsometricRoom() {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [isLoading, setIsLoading] = useState(true) // Added state to track loading
    const [splineObject, setSplineObject] = useState(null)

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [isDarkMode])

    useEffect(() => {
        console.log('splineObject', splineObject)
    }, [splineObject])

    const handleSceneLoad = (e: any) => {
        setSplineObject(e)
        if (e.disposed === false) {
            setIsLoading(false)
        }
    }

    const handleMouseDown = (e: SplineEvent) => {
        if (e.target.name === 'lamp') {
            console.log('Lamp clicked!')
            setIsDarkMode((prevMode) => !prevMode)
        }
    }

    return (
        <div className="pointer-events-auto relative h-[100%] w-[100%] scale-[100%]">
            {isLoading && (
                <div className="absolute inset-0 top-[20px] flex items-center justify-center text-4xl">
                    <img
                        src="/images/isometricRoomLoading-mobile.png"
                        alt=""
                        className="md:w-[405px] lg:w-[650px] xl:w-full"
                    />
                </div>
            )}
            <Suspense fallback={null}>
                <Spline
                    scene="https://prod.spline.design/KTiCfnJYZD0fGLhJ/scene.splinecode"
                    onMouseDown={handleMouseDown}
                    onLoad={handleSceneLoad}
                />
            </Suspense>
        </div>
    )
}
