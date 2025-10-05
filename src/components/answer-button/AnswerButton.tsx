import {GameQuestion, GameQuestionMode} from "../../types/game-state";
import styles from "./AnswerButton.module.css"
import {cns} from "../../utils/cns";
import React from "react";
import {isCorrect} from "../../game/game-state-machine";

interface AnswerButtonProps {
    displayMode: 'question' | 'correct' | 'incorrect'
    value: string,
    mode: GameQuestionMode
    onClick: () => void
}

export function AnswerButton(props: AnswerButtonProps) {
    const style = {
        backgroundColor: props.mode === 'color-to-value' ? props.value : undefined,
    }

    const classNames = [
        styles.answerButton,
        props.displayMode === 'incorrect' ? styles.showWrong : null,
    ]

    return <button style={style} disabled={props.displayMode !== 'question'} onClick={props.onClick} className={cns(...classNames)}>
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
            displayMode={props.showSolution && !isCorrect(props.question, value) ? 'incorrect' : 'question'}
            value={value}
            mode={props.question.mode}
            onClick={() => props.onSelect(value)}
        />
    }

    return <div className={cns(styles.group)}>
        {buttonForIndex(0)}
        <div className={styles.verticalSeparator} />
        {buttonForIndex(1)}

        <div className={styles.horizontalSeparator} />

        {buttonForIndex(2)}
        <div className={styles.verticalSeparator} />
        {buttonForIndex(3)}


    </div>
}