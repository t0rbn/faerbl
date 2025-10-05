import {GameQuestion, GameState} from '../types/game-state';
import {getRandomIntInRange, getRandomOf} from "../utils/random";
import {HexNotationGenerator, HslNotationGenerator, NamedColorNotationGenerator, NotationGenerator, RgbNotationGenerator} from "./notation-generators/notation-generator";

export function applyAnswer(state: GameState, wasCorrect: boolean) {
    return {
        ...state,
        round: state.round + 1,
        points: state.points + (wasCorrect ? 1 : 0),
        currentQuestion: generateNewQuestion()
    }
}

export function generateNewQuestion(): GameQuestion {
    const answerFn = getRandomNotationFunction()
    const options = new Array(4).fill('').map(() => answerFn())

    if (new Set(options).size !== 4) {
        return generateNewQuestion()
    }

    return {
        mode: getRandomOf(['value-to-color', 'color-to-value']),
        optionValues: options,
        correctOptionIndex: getRandomIntInRange(0, options.length - 1)
    }
}

function getRandomNotationFunction() {
    const notationFunctions: Array<NotationGenerator> = [
        HexNotationGenerator,
        HslNotationGenerator,
        RgbNotationGenerator,
        NamedColorNotationGenerator,
    ]

    return notationFunctions[Math.floor(Math.random() * notationFunctions.length)]
}

export function getInitialState(): GameState {
    return {
        points: 0,
        round: 0,
        question: generateNewQuestion(),
        playMode: 'question',
    }
}

export function isCorrect(question: GameQuestion, guess: string) {
    return question.optionValues.indexOf(guess) === question.correctOptionIndex
}