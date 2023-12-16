import { Link } from 'react-router-dom'

type CtaButtonProps = {
    link: string;
    txt: string;
}

const CtaButton = ({link, txt}: CtaButtonProps) => {
    return (
            <button className="border-1 btn btn-outline mt-4 w-full border-teal-400 bg-teal-400 text-[#081421c5] dark:bg-[#081421c5] dark:text-teal-400 hover:dark:bg-teal-400 hover:dark:text-[#081421c5] md:w-1/3 lg:w-1/4 xl:w-1/3 2xl:w-1/2">
                <Link to={link} className="md:w-1/2">
                    {txt}
                </Link>
            </button>
    )
}

export default CtaButton