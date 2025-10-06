import styles from "./QuestionHeder.module.css"
import {CenteredContentContainer} from "../../layout/centered-content/CenteredContentContainer";

interface QuestionHeaderProps {
    value: string
}

export function ColorToValueQuestionHeader(props: QuestionHeaderProps) {
    return <CenteredContentContainer>
        <div>find</div>
        <strong>{props.value}</strong>
    </CenteredContentContainer>
}


export function ValueToColorQuestionHeader(props: QuestionHeaderProps) {
    return <CenteredContentContainer>
        <div className={styles.valueToColor} style={{backgroundColor: props.value}}>
            <div>find this color</div>
        </div>
    </CenteredContentContainer>
}

