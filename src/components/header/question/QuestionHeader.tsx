import styles from "./QuestionHeder.module.css"
import {HeaderContainer} from "../HeaderContainer";

interface QuestionHeaderProps {
    value: string
}

export function ColorToValueQuestionHeader(props: QuestionHeaderProps) {
    return <HeaderContainer className={styles.questionHeader}>
        <div>find</div>
        <strong>{props.value}</strong>
    </HeaderContainer>
}


export function ValueToColorQuestionHeader(props: QuestionHeaderProps) {
    return <HeaderContainer className={styles.questionHeader}>
        <div className={styles.valueToColor} style={{backgroundColor: props.value}}>
            <div>find this color</div>
        </div>
    </HeaderContainer>
}

