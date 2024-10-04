import { words } from "./wordList";

export function resetGame() {
    game.current.word = words[Math.floor(Math.random() * words.length)];
    game.current.index = 0;
    game.current.win = false;
    game.current.finished = false;
    game.svordle = generateGameArray();
}

function generateGameArray() {
    return Array(6).fill(null).map(() => ({
        input: Array(5).fill(""),
        verdict: Array(5).fill(0),
    }));
}

export const gameState = {
    normal: 0,
    green: 1,
    yellow: 2,
    red: 3
} as const;

export const game = $state({
    current: {
        index: 0,
        word: words[Math.floor(Math.random() * words.length)],
        finished: false,
        win: false,
    },
    options: {
        tries: 6,
        wordLength: 5,
    },
    svordle: generateGameArray(),
})
