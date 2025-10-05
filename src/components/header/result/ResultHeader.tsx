import {HeaderContainer} from "../HeaderContainer";
import styles from "./ResultHeader.module.css"

export function CorrectResultHeader() {
    return <HeaderContainer className={styles.correct} >
        <div className={styles.icon}>check</div>
        <strong >correct</strong>
    </HeaderContainer>
}

export function IncorrectResultHeader() {
    return <HeaderContainer className={styles.incorrect}>
        <div className={styles.icon}>close</div>
        <strong>wrong</strong>
    </HeaderContainer>
}