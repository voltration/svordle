<script lang="ts">
    import { fade } from "svelte/transition";
    import { game, resetGame } from "./store.svelte";
    import EndScreenLetter from "./EndScreenLetter.svelte";
</script>

<div class="bg-white/5 backdrop-blur fixed inset-0 flex items-center justify-center z-50">
    <div transition:fade class="flex flex-col gap-16 text-center w-1/3 p-12 bg-bg rounded-3xl border shadow border-white/20">
        <div>
            {#if game.current.win}
                <h1 class="text-white clash font-semibold text-3xl">Congratulations</h1>
                <p class="text-white satoshi">You guessed the word, <span class="text-svelte">{game.current.word}</span>!</p> 
            {:else}
                <h1 class="text-white clash font-semibold text-3xl">Better luck next time!</h1>
                <p class="text-white satoshi">The correct word was, <span class="text-svelte">{game.current.word}</span>!</p> 
            {/if}
        </div>
        <div class="flex flex-col items-center gap-2">
            <h1 class="text-white clash font-semibold text-2xl">Heres how you did</h1>
            <div class="flex flex-col gap-3">
                {#each game.svordle as svordle, ci}
                    <div class="flex flex-row gap-3">
                        {#each svordle.input as _, i}
                            <EndScreenLetter i={i} ci={ci} />
                        {/each}
                    </div>
                {/each}
            </div>
        </div>
        <div class="flex flex-col items-center">
            <button onclick={resetGame} class="hover:scale-[98%] shadow-md ease-in-out duration-200 w-full h-12 text-white clash text-2xl rounded-xl border-2 border-white/20 bg-svelte">try again?</button>
        </div>
    </div>
</div>