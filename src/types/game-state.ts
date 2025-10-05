export type GameQuestionMode = 'value-to-color' | 'color-to-value'
export type GameQuestion = {
    mode: GameQuestionMode
    optionValues: Array<string>,
    correctOptionIndex: number
}

export type GameState = {
    points: number
    round: number
    question: GameQuestion
    playMode: 'question' | 'show-correct' | 'show-incorrect'
}