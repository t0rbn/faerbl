import React, {useState} from 'react'
import styles from "./Game.module.css"
import {GameState} from "../../../types/game-state";
import {AnswerButtonGroup} from "../../answer-button/AnswerButton";
import {ColorToValueQuestionHeader, ValueToColorQuestionHeader} from "../../header/question/QuestionHeader";
import {applyAnswer, getInitialState} from "../../../game/game-state-machine";
import {cns} from "../../../utils/cns";
import {CorrectResultHeader, IncorrectResultHeader} from "../../header/result/ResultHeader";
import {ScoreBar} from "../../score-bar/ScoreBar";
import {AppLayout} from "../../layout/app-layout/AppLayout";
import {useNavigate} from "react-router";
import {useModalContext} from "../../../contexts/ModalContext";

function Game() {
    const [gameState, setGameState] = useState<GameState>(getInitialState())
    const [playState, setPlayState] = useState<'question' | 'correct' | 'incorrect'>('question')
    const navigate = useNavigate();

    const handleClickedOnValue = async (value: string) => {
        const result = applyAnswer(gameState, value)

        setPlayState((playState) => result.wasCorrect ? 'correct' : 'incorrect')
        await new Promise(r => setTimeout(r, 1000))
        setGameState((gameState) => result.newState)

        if (result.newState.health <= 0) {
            navigate('/game-over', {state: gameState})
        } else {
            setPlayState('question')
        }
    }

    const correctValue = gameState.question.optionValues[gameState.question.correctOptionIndex]

    function HeaderComponent() {
        if (playState === 'question') {
            if (gameState.question.mode === 'value-to-color') {
                return <ValueToColorQuestionHeader value={correctValue}/>
            }
            return <ColorToValueQuestionHeader value={correctValue}/>
        }

        if (playState === 'correct') {
            return <CorrectResultHeader/>
        }

        if (playState === 'incorrect') {
            return <IncorrectResultHeader/>
        }
        return <div>game state broken. what?!</div>

    }

    const wrapperClassNames = [
        styles.wrapper,
        playState === 'correct' ? styles.correct : undefined,
        playState === 'incorrect' ? styles.incorrect : undefined,
    ]

    return <AppLayout className={cns(...wrapperClassNames)} color={playState === 'question' && gameState.question.mode === 'value-to-color' ? correctValue : undefined}>
        <div className={styles.gameLayout}>
            <ScoreBar state={gameState}/>
            <HeaderComponent/>
            <AnswerButtonGroup showSolution={playState !== 'question'} question={gameState.question} onSelect={(v) => handleClickedOnValue(v)}/>
        </div>
    </AppLayout>
}

export default Game
