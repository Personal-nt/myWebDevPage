import { FaCode } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { FaFolderOpen } from "react-icons/fa";

type ButtonIconProps = {
    txt: string
    icon: ("repo" | "deploy" | "project")
}

const ButtonIcon = ({txt, icon}: ButtonIconProps) => {
    return (
        <button className="btn flex-nowrap">
            {icon === "repo" ? <FaCode /> : icon === "deploy" ? <CiServer /> : <FaFolderOpen />}
            {txt}
        </button>
    )
}

export default ButtonIcon
