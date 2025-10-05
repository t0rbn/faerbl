import {GameQuestion, GameState} from '../types/game-state';
import {getRandomIntInRange, getRandomOf} from "../utils/random";
import {HexNotationGenerator, HslNotationGenerator, NamedColorsGenerator, NotationGenerator, RgbNotationGenerator} from "./notation-generators/notation-generator";

export function applyAnswer(state: GameState, answerValue: string): { newState: GameState, wasCorrect: boolean } {
    validateState(state);
    const wasCorrect = isCorrectAnswer(state, answerValue)

    const newState = {
        ...state,
        round: state.round + 1,
        points: state.points + (wasCorrect ? 1 : 0),
        question: generateNewQuestion()
    }

    return {newState, wasCorrect}
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

function getRandomNotationFunction(): NotationGenerator {
    return getRandomOf([
        HexNotationGenerator,
        HslNotationGenerator,
        RgbNotationGenerator,
        NamedColorsGenerator,
    ])
}

export function getInitialState(): GameState {
    return {
        points: 0,
        round: 0,
        question: generateNewQuestion(),
    }
}

function validateState(state: GameState): void {
    if (state.question.optionValues.length !== 4) {
        throw new Error('state contains != 4 answer values')
    }

    if (state.question.optionValues.find(x => !x)) {
        throw new Error('state contains nullish answer value')
    }

    if (new Set(state.question.optionValues).size != state.question.optionValues.length) {
        throw new Error('state contains duplicate answer values')
    }

    if (state.question.correctOptionIndex < 0 || state.question.correctOptionIndex >= state.question.optionValues.length) {
        throw new Error('state contains invalid correct option index')
    }

    if (state.points < 0) {
        throw new Error('state contains points less than zero')
    }

    if (state.points > state.round) {
        throw new Error('state contains points value greater than played rounds')
    }
}

export function isCorrectAnswer(state: GameState, answerValue: string) {
    if (!state.question.optionValues.includes(answerValue)) {
        throw new Error('received unexpected answer value')
    }
    return state.question.optionValues.indexOf(answerValue) === state.question.correctOptionIndex
}