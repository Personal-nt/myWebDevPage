import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { timelineData } from '../utils/timelineData'

type TimelineDataProps = {
    id: string
    date: string
    title: string
    description: string
}

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
                            // markers: true,
                        },
                    },
                )
            })
        }
    }, [])

    return (
        <ul
            ref={timelineRef}
            className="timeline timeline-vertical timeline-snap-icon mt-2 max-md:timeline-compact"
        >
            {timelineData.map(
                (
                    { id, date, title, description }: TimelineDataProps,
                    index,
                ) => (
                    <li key={id}>
    <div className="timeline-middle z-10 bg-slate-700/70 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
                        {/* <div className="timeline-middle"> ... </div> */}
                        <div
                            className={`${
                                index % 2 === 0
                                    ? 'timeline-start mb-10 md:text-end'
                                    : 'timeline-end mb-10'
                            }`}
                        >
                            <time className="font-mono italic">{date}</time>
                            <div className="text-lg font-black">{title}</div>
                            {description}
                        </div>
                        <hr className="bg-slate-500/40"/>
                    </li>
                ),
            )}
        </ul>
    )
}

export default Timeline
