// import { FaCode, FaFolderOpen } from "react-icons/fa";
// import { CiServer } from "react-icons/ci";
// import { RiGitRepositoryPrivateFill } from "react-icons/ri"

// type ButtonIconProps = {
//     txt: string
//     icon: ("repo" | "deploy" | "project" | "privateRepo")
// }

// const ButtonIcon = ({txt, icon}: ButtonIconProps) => {
//     return (
//         <button className="btn flex-nowrap">
//             {icon === "repo" ? 
//             <FaCode /> : 
//             icon === "deploy" ? 
//             <CiServer /> : 
//             icon === "privateRepo" ?
//             <RiGitRepositoryPrivateFill /> :
//             <FaFolderOpen />}
//             {txt}
//         </button>
//     )
// }

// export default ButtonIcon


import { FaCode, FaFolderOpen } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { RiGitRepositoryPrivateFill } from "react-icons/ri"

const ICON_MAP = {
    repo: FaCode,
    deploy: CiServer,
    privateRepo: RiGitRepositoryPrivateFill,
    project: FaFolderOpen
};

type ButtonIconProps = {
    txt: string
    icon: "repo" | "deploy" | "project" | "privateRepo"
}

const ButtonIcon = ({ icon, txt }: ButtonIconProps) => {
    const IconComponent = ICON_MAP[icon];

    return (
        <button className="w-fit bg-slate-400/50 justify-center items-center gap-2 p-2 rounded-lg flex flex-nowrap text-[12px]">
            <IconComponent />
            {txt}
        </button>
    );
};

export default ButtonIcon
