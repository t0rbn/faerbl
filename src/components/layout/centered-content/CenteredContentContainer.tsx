import {PropsWithChildren} from "react";
import styles from "./CenteredContentContainer.module.css"
import {cns} from "../../../utils/cns";

interface CenteredContentContainerProps {
    className?: string,
}

export function CenteredContentContainer(props: PropsWithChildren<CenteredContentContainerProps>) {
    return <div className={cns(styles.centeredContentContainer, props.className)}>{props.children}</div>
}