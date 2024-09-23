<script lang="ts">
    import Github from "$lib/Github.svelte";
    import { words } from "$lib/wordList";
    
    let game = {
        row: 0,
        word: words[Math.floor(Math.random() * words.length)],
        options: {
            word: 5,
            tries: 6,
        },
    }
    
    let svordle: string[][] = $state(
        Array.from({ length: game.options.tries }, 
        () => Array(game.options.word).fill("")));

    const validateInput = () => {
        const a = svordle[game.row];
        for (let i = 0; i < game.word.length; i++) {
            
        }

        /**
        let s = "";
        for (let i = 0; i < a.length; i++) {
            s = `${s}${a[i]}`
            console.log(s)
        }
        */

        game.row++;
    }

    const keyHandler = (e: { key: string}) => {
        const a = svordle[game.row];          
        const k = e.key.toLowerCase();

        if (k.length === 1 && k >= "a" && k <= "z") {
            for (let i = 0; i < a.length; i++) {
                if (a[i] === "") {
                    a[i] = k;
                    return;
                }
            }
        }
        else if (k === "backspace") {
            for (let i = a.length - 1; i >= 0; i--) {
                if (a[i] !== "") {
                    a[i] = "";
                    return;
                }
            }
        }
    }
</script>

{#snippet letterCard(letter: string)}
    <div class="h-20 w-16 flex items-center justify-center border border-white/[2%] shadow-inner bg-white/[2%] rounded-md">
        <p class="uppercase satoshi font-semibold text-white text-3xl">{letter}</p>
    </div>
{/snippet}

<svelte:window on:keydown|preventDefault={keyHandler} />

<div class="flex items-center justify-center h-screen">
    <div class="flex flex-col space-y-8">
        <div class="flex flex-col items-center ">
            <h1 class="clash font-semibold text-svelte text-5xl">svordle</h1>
            <p class="satoshi font-normal text-orange-200">a wordle clone written in svelte</p>
        </div>
        <div class="flex flex-col space-y-5">
            {#each svordle as row}
                <div class="flex flex-row space-x-5">
                    {#each row as letter}
                        {@render letterCard(letter)}
                    {/each}
                </div>
            {/each}
            {#if svordle[game.row].length === 5}
                <button onclick={validateInput} class="hover:scale-[98%] shadow-md ease-in-out duration-200 w-full h-12 text-white clash text-2xl rounded-xl border-2 border-white/20 bg-svelte">submit</button>
            {/if}
        </div>
    </div>
</div>

<div class="absolute bottom-4 left-1/2 transform -translate-x-1/2">
    <div class="hover:opacity-25 ease-in-out duration-200 cursor-pointer">
        <a href="https://github.com/voltration/svordle" target="_blank" rel="noopener noreferrer">
            <Github />
        </a>
    </div>
</div>

<style>
	@keyframes shake {
		0% {
			transform: rotate(0deg);
		}
		20% {
			transform: rotate(-15deg);
		}
		40% {
			transform: rotate(15deg);
		}
		60% {
			transform: rotate(-7deg);
		}
		80% {
			transform: rotate(7deg);
		}
		90% {
			transform: rotate(-3deg);
		}
		95% {
			transform: rotate(2deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	.shake {
		animation: 0.7s shake forwards running;
	}
</style>