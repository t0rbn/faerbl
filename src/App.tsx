import React, {useState} from 'react'
import styles from "./App.module.css"
import {GameState} from "./types/game-state";
import {AnswerButtonGroup} from "./components/answer-button/AnswerButton";
import {ColorToValueQuestionHeader, ValueToColorQuestionHeader} from "./components/header/question/QuestionHeader";
import {applyAnswer, getInitialState} from "./game/game-state-machine";
import {cns} from "./utils/cns";
import {CorrectResultHeader, IncorrectResultHeader} from "./components/header/result/ResultHeader";

function App() {
    const [gameState, setGameState] = useState<GameState>(getInitialState())
    const [playState, setPlayState] = useState<'question' | 'correct' | 'incorrect'>('question')

    const handleClickedOnValue = async (value: string) => {
        const result = applyAnswer(gameState, value)

        setPlayState((playState) => result.wasCorrect ? 'correct' : 'incorrect')
        await new Promise(r => setTimeout(r, 1000))
        setGameState((gameState) => result.newState)
        setPlayState('question')
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

    const styleOverrides = {
        '--color-game': correctValue
    } as any

    const wrapperClassNames = [
        styles.wrapper,
        gameState.question.mode === 'value-to-color' ? styles.colorized : undefined,
        playState === 'correct' ? styles.correct : undefined,
        playState === 'incorrect' ? styles.incorrect : undefined,
    ]

    return <div className={cns(...wrapperClassNames)} style={styleOverrides}>
        <div className={styles.appLayout}>
            <div className={styles.score}>score: {gameState.points}/{gameState.round}</div>

            <HeaderComponent/>
            <AnswerButtonGroup showSolution={playState !== 'question'} question={gameState.question} onSelect={(v) => handleClickedOnValue(v)}/>
        </div>
    </div>
}

export default App
