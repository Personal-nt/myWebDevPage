import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

type ProjectCardProps = {
    title: string
    link: string
    id: string
}

const ProjectCard = ({ id, title, link }: ProjectCardProps) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ['17.5deg', '-17.5deg'],
    )
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ['-17.5deg', '17.5deg'],
    )

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect()

        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: 'preserve-3d',
            }}
            className="flex h-[500px] w-[350px] flex-col rounded-xl border-4 border-secondary bg-gradient-to-b from-teal-100 to-teal-200"
        >
            <div
                style={{
                    transform: 'translateZ(75px)',
                    transformStyle: 'preserve-3d',
                }}
                className="rounded-xl border-[15px] border-yellow-400 bg-white"
            >
                <img
                    key={id}
                    src={link}
                    title={title}
                    alt={title}
                    className="p-0"
                />
                <ul className="p-6">
                    <li>title1</li>
                    <li>title2</li>
                    <li>title3</li>
                    <li>title4</li>
                </ul>
                <div className="flex gap-4 bg-pink-500 px-6">
                    <div className="">Repository</div>
                    <div className="">Deploy</div>
                </div>
                <p key={id} className="text-center">
                    {title}
                </p>
            </div>
        </motion.div>
    )
}

export default ProjectCard
