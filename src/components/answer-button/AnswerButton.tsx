import {GameQuestion, GameQuestionMode} from "../../types/game-state";
import styles from "./AnswerButton.module.css"
import {cns} from "../../utils/cns";
import React from "react";

interface AnswerButtonProps {
    value: string,
    mode: GameQuestionMode
    onClick: () => void
    isCorrect: boolean
    disabled: boolean
}

export function AnswerButton(props: AnswerButtonProps) {
    const style = {
        backgroundColor: props.mode === 'color-to-value' ? props.value : undefined,
    }

    const classNames = [
        styles.answerButton,
        props.disabled && !props.isCorrect ? styles.showWrong : null,
    ]

    return <button style={style} disabled={props.disabled } onClick={props.onClick} className={cns(...classNames)}>
        {props.mode === 'value-to-color' ? props.value : <>&nbsp;</>}
    </button>
}

interface AnswerButtonGroupProps {
    showSolution: boolean
    question: GameQuestion
    onSelect: (value: string) => void
}

export function AnswerButtonGroup(props: AnswerButtonGroupProps) {
    const buttonForIndex = (index: number) => {
        const value = props.question.optionValues[index]
        return <AnswerButton
            key={value}
            disabled={props.showSolution}
            isCorrect={index === props.question.correctOptionIndex}
            value={value}
            mode={props.question.mode}
            onClick={() => props.onSelect(value)}
        />
    }

    return <div className={cns(styles.group)}>
        {buttonForIndex(0)}
        <div className={styles.verticalSeparator}/>
        {buttonForIndex(1)}

        <div className={styles.horizontalSeparator}/>

        {buttonForIndex(2)}
        <div className={styles.verticalSeparator}/>
        {buttonForIndex(3)}
    </div>
}