import {Link} from "react-router";
import styles from "./Button.module.css"

interface ButtonProps {
    label: string
}

export function Button(props: ButtonProps & {onClick?: () => void}) {
    return <button className={styles.button} onClick={props.onClick}>{props.label}</button>
}

export function LinkButton(props: ButtonProps & {href: string}) {
return <Link to={props.href} className={styles.button}>{props.label}</Link>
}