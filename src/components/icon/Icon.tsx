import {cns} from "../../utils/cns";
import styles from "./Icon.module.css"

interface IconProps {
    icon: string,
    className?: string,
    size?: 'default' | 'huge'
}

export function Icon(props: IconProps) {
    const classNames = [
        styles.icon,
        props.size === 'huge' ? styles.huge : null,
        props.className,
    ]
    return <div className={cns(...classNames)}>{props.icon}</div>
}