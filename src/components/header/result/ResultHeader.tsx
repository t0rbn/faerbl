import {HeaderContainer} from "../HeaderContainer";
import TickIcon from "../../../assets/icons/tick.svg?react"
import CrossIcon from "../../../assets/icons/cross.svg?react"
import styles from "./ResultHeader.module.css"
import {cns} from "../../../utils/cns";

export function CorrectResultHeader() {
    return <HeaderContainer>
        <div className={cns(styles.iconContainer, styles.correct)}>
            <TickIcon/>
        </div>
        <strong>correct</strong>
    </HeaderContainer>
}

export function IncorrectResultHeader() {
    return <HeaderContainer>
        <div className={cns(styles.iconContainer, styles.incorrect)}>
            <CrossIcon/>
        </div>
        <strong>wrong</strong>
    </HeaderContainer>
}