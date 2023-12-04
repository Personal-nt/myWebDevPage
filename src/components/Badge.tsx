type BadgeProps = {
    txt: string
}

const Badge = ({txt}: BadgeProps) => {
    return <div className="badge-sm rounded-md bg-primary bg-teal-400 text-[#081421c5] dark:bg-[#081421c5] hover:dark:bg-teal-400 hover:dark:text-[#081421c5] dark:text-teal-400 dark:border-teal-400/30">{txt}</div>
}

export default Badge