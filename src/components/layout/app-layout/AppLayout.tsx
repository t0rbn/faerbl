import {CSSProperties, PropsWithChildren} from "react";
import {cns} from "../../../utils/cns";
import styles from "./AppLayout.module.css"

interface AppLayoutProps {
    color?: string;
    className?: string;
}

export function AppLayout(props: PropsWithChildren<AppLayoutProps>) {
    const styleOverrides = props.color ? {'--color-background': props.color} : undefined;

    return <div className={cns(styles.appLayout, props.className)} style={styleOverrides as CSSProperties}>
        <main>{props.children}</main>
    </div>

}