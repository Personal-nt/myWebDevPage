import { useRef, useEffect, useState } from 'react'
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

    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

    const toggleExpand = (id: string) => {
        setExpandedItems((prev) => {
            const newSet = new Set(prev)
            if (newSet.has(id)) {
                newSet.delete(id)
            } else {
                newSet.add(id)
            }
            return newSet
        })
    }

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
                        duration: 100,
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
            className="h-hit timeline timeline-vertical timeline-snap-icon my-2 w-[80%] border-0 border-dotted border-lime-400 max-md:timeline-compact mb-20"
        >
            {timelineData.map(
                (
                    { id, date, title, description }: TimelineDataProps,
                    index,
                ) => {
                    const isExpanded = expandedItems.has(id)
                    const displayDescription = isExpanded
                        ? description
                        : `${description.substring(0, 300)}...`
                    return (
                        <li key={id} className="">
                            <div className="timeline-middle z-10 rounded-full bg-slate-700/70">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            {/* <div className="timeline-middle"> ... </div> */}
                            <div
                                className={`${
                                    index % 2 === 0
                                        ? 'timeline-start mb-10 md:text-end'
                                        : 'timeline-end mb-10 '
                                }my-12 w-[70%] md:my-0 md:w-[80%]`}
                            >
                                <time className="font-mono italic">{date}</time>
                                <div className="text-lg font-black">
                                    {title}
                                </div>
                                <p>{displayDescription}</p>
                                {description.length > 300 && (
                                    <button
                                        onClick={() => toggleExpand(id)}
                                        className="text-secondary hover:text-secondary"
                                    >
                                        {isExpanded ? 'Read less' : 'Read more'}
                                    </button>
                                )}
                            </div>
                            <hr className="bg-slate-500/40" />
                        </li>
                    )
                },
            )}
        </ul>
    )
}

export default Timeline
