import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Timeline = () => {
    const timelineRef = useRef(null)

    useEffect(() => {
        if (timelineRef.current) {
            const listItems = gsap.utils.toArray(
                'li',
                timelineRef.current,
            ) as HTMLLIElement[]
            listItems.forEach((item) => {
                gsap.fromTo(
                    item,
                    { opacity: 0, scale: 0.9 },
                    {
                        scale: 1.1,
                        opacity: 1,
                        duration: 1,
                        scrollTrigger: {
                            trigger: item,
                            start: 'clamp(bottom bottom)',
                            end: 'clamp(bottom top)',
                            scrub: true,
                            markers: true,
                        },
                    },
                )
            })
        }
    }, [])

    return (
        <ul
            ref={timelineRef}
            className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact"
        >
            <li>
                <div className="timeline-middle"> ... </div>
                <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">Nov 2022</time>
                    <div className="text-lg font-black">
                        Beginning of Development Journey
                    </div>
                    Started learning frontend development skills including HTML,
                    CSS, JavaScript, and frameworks like Vue and React.
                </div>
                <hr />
            </li>
            <li>
                <div className="timeline-middle"> ... </div>
                <div className="timeline-end mb-10">
                    <time className="font-mono italic">
                        Jan 2023 - Feb 2023
                    </time>
                    <div className="text-lg font-black">
                        Backend Development Course
                    </div>
                    Completed a course in Backend Development at IronHack,
                    acquiring skills in Java and Spring Boot.
                </div>
                <hr />
            </li>
            <li>
                <div className="timeline-middle"> ... </div>
                <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">
                        May 2023 - Nov 2023
                    </time>
                    <div className="text-lg font-black">
                        React Course at IT Academy
                    </div>
                    Advanced knowledge in React, building on existing frontend
                    development skills.
                </div>
                <hr />
            </li>
            <li>
                <div className="timeline-middle"> ... </div>
                <div className="timeline-end mb-10">
                    <time className="font-mono italic">2023</time>
                    <div className="text-lg font-black">
                        Founder of Deverso Labs
                    </div>
                    Founded Deverso Labs, focusing on developing web3
                    applications and solutions.
                </div>
            </li>
        </ul>
    )
}

export default Timeline
