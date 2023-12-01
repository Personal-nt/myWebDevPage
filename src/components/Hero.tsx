import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'
import IsometricRoom from './IsometricRoom'

gsap.registerPlugin(Flip)

export const Hero = () => {
    const [isNordian, setIsNordian] = useState(false)
    const imageRef = useRef(null)

    useEffect(() => {
        if (imageRef.current) {
            const flipAnimation = gsap.timeline()
            flipAnimation.to(imageRef.current, {
                duration: 0.5,
                rotationY: 90,
                ease: 'power1.inOut',
            })
            flipAnimation.to(imageRef.current, {
                duration: 0.5,
                rotationY: 0,
                ease: 'power1.inOut',
            })

            if (isNordian) {
                flipAnimation.play()
            } else {
                flipAnimation.reverse()
            }
        }
    }, [isNordian])

    const handleIfToggled = (mouseEvent: string) => {
        if (mouseEvent === 'enter') {
            setIsNordian(false)
        } else if (mouseEvent === 'out') {
            setIsNordian(false)
        }
    }
    return (
        <div className="flex h-full w-full justify-center bg-pink-400/0">
            <div className="flex h-[100%] w-full">
                <div className="flex w-1/2 flex-col items-center justify-center border-0 border-black bg-pink-500/0">
                    {/* <div className="mt-12 h-[180px] w-[180px] overflow-hidden rounded-[50%] border-2 border-slate-700 bg-slate-300/30 shadow-xl backdrop-blur-lg dark:border-[#00D6C1] ">
                        <img
                            onMouseEnter={() => handleIfToggled('enter')}
                            onMouseLeave={() => handleIfToggled('out')}
                            src={
                                isNordian
                                    ? '/Nordian.jpg'
                                    : '/nestor-torres.jpg'
                            }
                            alt="Nordian avatar"
                            className="pointer-events-auto h-full w-full object-cover"
                        />
                    </div> */}
                    <div className="flex w-full flex-col gap-2 bg-teal-400/0">
                        <h1 className="mt-4 text-4xl font-medium text-[#081421c5] dark:text-slate-300 sm:text-8xl md:text-8xl ">
                            Néstor Torres
                        </h1>
                        <small className="text-xl text-slate-800/60 dark:text-slate-200">
                            {/* +3 years web developer */}
                        </small>
                        <h5 className="max-w-3xl text-slate-800/60 dark:text-slate-200">
                            {' '}
                            {/*border-1 mb-0 mt-4 max-w-3xl rounded-2xl border-slate-700 bg-slate-300/30 p-6 text-center font-light text-slate-800/60 shadow-xl backdrop-blur-lg dark:text-[#00D6C1] */}
                            Programming is to have the power to create.
                            <br />
                        </h5>
                        <button className="border-1 btn btn-outline w-1/3 border-teal-400 bg-teal-400 text-[#081421c5] dark:bg-[#081421c5] hover:dark:bg-teal-400 hover:dark:text-[#081421c5] dark:text-teal-400 mt-4">
                            Let's build!
                        </button>
                    </div>
                </div>
                <div className="relative -top-[0px] left-[0px] flex h-[750px] w-1/2 items-center justify-center border-0 border-black bg-emerald-600/0">
                    <IsometricRoom />
                </div>
            </div>
        </div>
    )
}
