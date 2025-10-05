export function getRandomIntInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomOf<T>(array: Array<T>):T {
    return array[Math.floor(Math.random() * array.length)]
}
