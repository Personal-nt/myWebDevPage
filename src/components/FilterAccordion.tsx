import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import TechFilters from './TechFilters'; // Import your TechFilters component
import { Technology } from '../utils/projects'; // Assuming this is the correct path
import { IoFilter } from "react-icons/io5";
import { MdOutlineFilterListOff } from "react-icons/md";
// Define props types for FilterAccordion
type FilterAccordionProps = {
    selectedTechs: Technology[];
    onCheckboxChange: (tech: Technology) => void;
    clearFilters: () => void;
};

const FilterAccordion = ({ selectedTechs, onCheckboxChange, clearFilters }: FilterAccordionProps) => {
    return (
        <div className="px-4 py-12">
            <div className="mx-auto max-w-3xl">
                <Question title="Filter by Tech Stack">
                    <TechFilters 
                        selectedTechs={selectedTechs} 
                        onCheckboxChange={onCheckboxChange} 
                    />
                    <button onClick={clearFilters} className="w-full flex justify-end text-2xl pr-4"><MdOutlineFilterListOff /></button>
                </Question>
            </div>
        </div>
    );
};

// Define props types for Question
type QuestionProps = {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
};

const Question = ({ title, children, defaultOpen = false }: QuestionProps) => {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <motion.div
            animate={open ? 'open' : 'closed'}
            className="border-b-[1px] border-b-slate-300"
        >
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex flex-wrap w-full items-center justify-between gap-4 py-6"
            >
                <motion.span
                    variants={{
                        open: {
                            color: 'rgba(3, 6, 23, 0)',
                        },
                        closed: {
                            color: 'rgba(3, 6, 23, 1)',
                        },
                    }}
                    className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-left text-lg font-medium"
                >
                    <div className="flex gap-2 justify-center items-center">{`${title}`}{<IoFilter />}</div>
                </motion.span>
                <motion.span
                    variants={{
                        open: {
                            rotate: '180deg',
                            color: 'rgb(124 58 237)',
                        },
                        closed: {
                            rotate: '0deg',
                            color: '#030617',
                        },
                    }}
                >
                    <FiChevronDown className="text-2xl" />
                </motion.span>
            </button>
            <motion.div
                initial={false}
                animate={{
                    height: open ? 'fit-content' : '0px',
                    marginBottom: open ? '24px' : '0px',
                }}
                className="overflow-hidden text-slate-600"
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default FilterAccordion;
