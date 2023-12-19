import { Categories } from '../utils/projects'

const categories: Categories[] = [
    'social network',
    'e-commerce',
    'blog',
    'portfolio',
    'gallery',
    'productivity',
    'landing page',
    'product/service',
    'web app',
    'other',
]
type CategFiltersProps = {
    selectedCategories: Categories[];
    onCheckboxChange: (categories: Categories) => void;
};

const CategoryFilters: React.FC<CategFiltersProps> = ({ selectedCategories, onCheckboxChange }) => {
    return (
        <div className="flex flex-wrap gap-4">
        {categories.map((categ, index) => (
            <div key={index} className="flex gap-1 text-lg">
                <input
                    type="checkbox"
                    id={categ}
                    name={categ}
                    value={categ}
                    checked={selectedCategories.includes(categ)}
                    onChange={() => onCheckboxChange(categ)}
                />
                <label htmlFor={categ} className="only-txt">{categ}</label>
            </div>
        ))}
    </div>
    )
}

export default CategoryFilters