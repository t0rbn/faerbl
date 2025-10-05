import {getRandomIntInRange, getRandomOf} from "../../utils/random";
import webColors from "./named-colors.json"

export type NotationGenerator = () => string

export const HexNotationGenerator: NotationGenerator = () => {
    const getHexDigit = () => getRandomOf('1234567890ABCDEF'.split(''))
    return `#${new Array(6).fill('').map(getHexDigit).join('')}`
}

export const HslNotationGenerator: NotationGenerator = () => {
    return `hsl(${getRandomIntInRange(0, 360)} ${getRandomIntInRange(0, 100)}% ${getRandomIntInRange(0, 100)}%)`
}


export const RgbNotationGenerator: NotationGenerator = () => {
    const r = () => getRandomIntInRange(0, 255)
    return `rgb(${r()} ${r()} ${r()})`
}

export const NamedColorNotationGenerator: NotationGenerator = () => {
    return getRandomOf(webColors)
}