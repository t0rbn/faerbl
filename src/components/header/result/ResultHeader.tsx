import styles from "./ResultHeader.module.css"
import {Icon} from "../../icon/Icon";
import {CenteredContentContainer} from "../../layout/centered-content/CenteredContentContainer";

export function CorrectResultHeader() {
    return <CenteredContentContainer className={styles.correct}>
        <Icon className={styles.icon} size="huge" icon="check"/>
        <strong>correct</strong>
    </CenteredContentContainer>
}

export function IncorrectResultHeader() {
    return <CenteredContentContainer className={styles.incorrect}>
        <Icon className={styles.icon} size="huge" icon="close"/>
        <strong>wrong</strong>
    </CenteredContentContainer>
}