<script lang="ts">
    import Letter from "$lib/Letter.svelte";
    import { game } from "$lib/store.svelte";

	let canSubmit = $derived(game.svordle[game.index].input.filter(l => l !== "").length === 5);

    const keyHandler = (e: { key: string}) => {
        const a = game.svordle[game.index].input;      
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
		else if (k === "enter") {
			if (canSubmit) {
				validateInput();
			}
		}
    }

	const validateInput = () => {
		const w = game.word.split("");
		const i = game.svordle[game.index].input; 
		const v = game.svordle[game.index].verdict;
		
		for (let j = 0; j < i.length; j++) {
			for ()
		}
		
		game.index++;
	}
</script>

<svelte:window on:keydown|preventDefault={keyHandler} />

<div class="flex justify-center items-center h-screen">
	<div class="flex flex-col gap-8">
		<div class="flex flex-col items-center">
			<h1 class="clash font-semibold text-svelte text-5xl">svordle</h1>
			<p class="satoshi font-normal text-orange-200">a wordle clone written in svelte</p>
		</div>
		<div class="flex flex-col gap-3">
			{#each game.svordle as svordle, ci}
				<div class="flex flex-row gap-3">
					{#each svordle.input as _, i}
						<Letter i={i} ci={ci} />
					{/each}
				</div>
			{/each}
		</div>
		{#if canSubmit}
			<button onclick={validateInput} class="hover:scale-[98%] shadow-md ease-in-out duration-200 w-full h-12 text-white clash text-2xl rounded-xl border-2 border-white/20 bg-svelte">submit</button>
		{:else}
			<button class="cursor-default opacity-25 shadow-md ease-in-out duration-200 w-full h-12 text-white clash text-2xl rounded-xl border-2 border-white/20 bg-svelte">submit</button>
		{/if}
	</div>
</div>