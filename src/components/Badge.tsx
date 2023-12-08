type BadgeProps = {
    txt: string
    type?: string
}

const Badge = ({ txt, type }: BadgeProps) => {
    return (
        type === "tech" ? (
            <div className="badge-sm rounded-md bg-teal-400/40 text-[#081421c5] dark:bg-[#081421c5] hover:dark:bg-teal-400 hover:dark:text-[#081421c5] dark:text-teal-400 dark:border-teal-400/30">{txt}</div>
        ) : (
            <div className="badge rounded-md custom-text-bg-reverse opacity-70">{txt}</div>
        )
    );
}

export default Badge;
