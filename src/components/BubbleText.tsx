import styles from "./componentCss/bubble.module.css";

type BubbleTextProps = {
    msg: string;
};

const BubbleText = ({msg}: BubbleTextProps) => {
    return (
        <h2 className="text-center text-5xl font-thin text-indigo-300">
            {msg.split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                    {child}
                </span>
            ))}
        </h2>
    );
};

export default BubbleText;
