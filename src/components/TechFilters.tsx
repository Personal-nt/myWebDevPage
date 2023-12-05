import { Technology } from '../utils/projects'

type TechFiltersProps = {
    selectedTechs: Technology[];
    onCheckboxChange: (tech: Technology) => void;
};

const technologies: Technology[] = [
    'React',
    'Vue',
    'Angular',
    'Next.js',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'PostgreSQL',
    'Supabase',
    'Framer Motion',
    'Axios',
    'Vite',
    'Jest',
    'React Router',
    'Zustand',
    'Pinia',
]

const TechFilters: React.FC<TechFiltersProps> = ({ selectedTechs, onCheckboxChange }) => {
    return (
        <div className="flex flex-wrap gap-4">
        {technologies.map((tech, index) => (
            <div key={index} className="flex gap-1 text-lg">
                <input
                    type="checkbox"
                    id={tech}
                    name={tech}
                    value={tech}
                    checked={selectedTechs.includes(tech)}
                    onChange={() => onCheckboxChange(tech)}
                />
                <label htmlFor={tech} className="only-txt">{tech}</label>
            </div>
        ))}
    </div>
    )
}

export default TechFilters

// type TechFiltersProps = {
//     tech: string
// }

// const TechFilters = ({ tech }: TechFiltersProps) => {
//     return (
//         <div className="form-control">
//             <label className="label cursor-pointer">
//                 <span className="label-text">{tech}</span>
//                 <input type="checkbox" className="checkbox" />
//             </label>
//         </div>
//     )
// }

// export default TechFilters
