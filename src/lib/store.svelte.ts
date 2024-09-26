import { words } from "./wordList";

export let gameState = {
    normal: 0,
    green: 1,
    yellow: 2,
    red: 3
} as const;

export let game = $state({
    index: 0,
    word: words[Math.floor(Math.random() * words.length)],
    options: {
        tries: 6,
        wordLength: 5,
    },
    svordle: [
        {
            input: ["", "", "", "", ""],
            verdict: [0, 0, 0, 0,0],
        },
        {
            input: ["", "", "", "", ""],
            verdict: [0, 0, 0, 0,0],
        },
        {
            input: ["", "", "", "", ""],
            verdict: [0, 0, 0, 0,0],
        },
        {
            input: ["", "", "", "", ""],
            verdict: [0, 0, 0, 0,0],
        },
        {
            input: ["", "", "", "", ""],
            verdict: [0, 0, 0, 0,0],
        },
        {
            input: ["", "", "", "", ""],
            verdict: [0, 0, 0, 0,0],
        },
    ]
})
