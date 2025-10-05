import React, {useState} from 'react'
import styles from "./App.module.css"
import {GameState} from "./types/game-state";
import {AnswerButtonGroup} from "./components/answer-button/AnswerButton";
import {ColorToValueQuestionHeader, ValueToColorQuestionHeader} from "./components/question-header/QuestionHeader";
import {generateNewQuestion, getInitialState, isCorrect} from "./game/game-state-machine";
import {cns} from "./utils/cns";

function App() {
    const [gameState, setGameState] = useState<GameState>(getInitialState())

    const handleClickedOnValue = async (value: string) => {
        setGameState((gameState) => ({
            ...gameState,
            playMode: isCorrect(gameState.question, value) ? 'show-correct' : 'show-wrong',
            points: gameState.points + (isCorrect(gameState.question, value) ? 1 : 0),
            round: gameState.round + 1
        }))

        await new Promise(r => setTimeout(r, 1000))

        setGameState((gameState) => ({
            ...gameState,
            question: generateNewQuestion(),
            playMode: 'question'
        }))
    }

    const correctValue = gameState.question.optionValues[gameState.question.correctOptionIndex]
    const styleOverrides = {
        '--color-game': correctValue
    } as any

    function HeaderComponent() {
        if (gameState.playMode === 'question') {
            if (gameState.question.mode === 'value-to-color') {
                return <ValueToColorQuestionHeader value={correctValue}/>
            }
            return <ColorToValueQuestionHeader value={correctValue}/>
        }

        if (gameState.playMode === 'show-correct') {
            return <h1>yay</h1>
        }

        if (gameState.playMode === 'show-wrong') {
            return <h1>fuck</h1>
        }
        return <div>game state broken. what?!</div>

    }

    return <div className={cns(styles.wrapper, gameState.question.mode === 'value-to-color' ? styles.colorized : undefined)} style={styleOverrides}>
        <div className={styles.appLayout}>
            <div className={styles.score}>score: {gameState.points}/{gameState.round}</div>

            <HeaderComponent/>
            <AnswerButtonGroup showSolution={gameState.playMode !== 'question'} question={gameState.question} onSelect={(v) => handleClickedOnValue(v)}/>
        </div>
    </div>
}

export default App
