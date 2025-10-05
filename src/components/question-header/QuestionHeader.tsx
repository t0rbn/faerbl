import styles from "./QuestionHeder.module.css"

interface QuestionHeaderProps {
    value: string
}

export function ColorToValueQuestionHeader(props: QuestionHeaderProps) {
    return <div className={styles.questionHeader}>
        <div>find</div>
        <strong>{props.value}</strong>
    </div>
}


export function ValueToColorQuestionHeader(props: QuestionHeaderProps) {
    return <div className={styles.questionHeader}>
        <div className={styles.valueToColor} style={{backgroundColor: props.value}}/>
        <div>find this color</div>
    </div>
}

