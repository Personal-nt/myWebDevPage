import { FaCode } from "react-icons/fa";
import { CiServer } from "react-icons/ci";

type ButtonIconProps = {
    txt: string
    icon: ("repo" | "deploy")
}

const ButtonIcon = ({txt, icon}: ButtonIconProps) => {
    return (
        <button className="btn">
            {icon === "repo" ? <FaCode /> : <CiServer />}
            {txt}
        </button>
    )
}

export default ButtonIcon
