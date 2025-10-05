import {PropsWithChildren} from "react";
import styles from "./HeaderContainer.module.css"
import {cns} from "../../utils/cns";

interface HeaderContainerProps {
    className?: string
}

export function HeaderContainer(props: PropsWithChildren<HeaderContainerProps>) {
    return <div className={cns(styles.headerContainer, props.className)}>
        {props.children}
    </div>
}