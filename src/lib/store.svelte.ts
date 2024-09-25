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
    svordle: [
        {
            input: ["", "", "", "", ""],
            verdict: [2, 1, 3, 0,0],
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
