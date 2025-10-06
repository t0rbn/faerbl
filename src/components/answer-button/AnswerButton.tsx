import {GameQuestion, GameQuestionMode} from "../../types/game-state";
import styles from "./AnswerButton.module.css"
import {cns} from "../../utils/cns";
import React from "react";
import {isCorrectAnswer} from "../../game/game-state-machine";

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
    return <div className={cns(styles.group)}>
        {props.question.optionValues.map((a,i) =>
            <div key={a}>
                <AnswerButton
                    disabled={props.showSolution}
                    isCorrect={i === props.question.correctOptionIndex}
                    value={a}
                    mode={props.question.mode}
                    onClick={() => props.onSelect(a)}
                />
            </div>
            )}
    </div>
}