<script lang="ts">
    	import EndScreen from "$lib/EndScreen.svelte";
	import Letter from "$lib/Letter.svelte";
	import { game, gameState } from "$lib/store.svelte";

	const canSubmit = $derived(() => {
  		return game?.svordle?.[game.current?.index]?.input.filter(l => l !== "").length  === 5;
	});

    const keyHandler = (e: { key: string }) => {
        const a = game.svordle[game.current.index].input;     
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
			if (canSubmit()) {
				validateInput();
			}
		}
    }

	const validateInput = (): void => {
		const w = game.current.word.split("");
		const i = game.svordle[game.current.index].input;
		const v = game.svordle[game.current.index].verdict;
		const l: Record<string, number> = {};

		for (const letter of w) {
			l[letter] = (l[letter] || 0) + 1;
		}

		for (let j = 0; j < i.length; j++) {
			if (i[j] === w[j]) {
				v[j] = gameState.green;
				l[i[j]]--;
			}
		}

		for (let j = 0; j < i.length; j++) {
			if (v[j] !== gameState.green && w.includes(i[j]) && l[i[j]] > 0) {
				v[j] = gameState.yellow;
				l[i[j]]--;
			}
		}

		for (let j = 0; j < i.length; j++) {
			if (v[j] !== gameState.green && v[j] !== gameState.yellow) {
				v[j] = gameState.red;
			}
		}

		let c = 0;
		for (let j = 0; j < v.length; j++) {
			if (v[j] === gameState.green) {
				c++;
			}
		}

		let count = 0;
		for (let j = 0; j < v.length; j++) {
			if (v[j] === gameState.green) {
				count++;
			}
		}

		if (count === 5) {
			game.current.finished = true;
			game.current.win = true;
		}

		if (game.current.index === 5) {
			game.current.finished = true;
			game.current.win = false;
		}

		game.current.index++;
	};
</script>

<svelte:window on:keydown|preventDefault={keyHandler} />

{#if game.current.finished}
	<EndScreen />
{/if}


<div class="flex justify-center items-center h-screen">
	<div class="flex flex-col gap-8">
		<div class="flex flex-col items-center">
			<a data-sveltekit-reload href="/" class="clash font-semibold text-svelte text-5xl">svordle</a>
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
		{#if canSubmit() && !game.current.finished}
			<button onclick={validateInput} class="hover:scale-[98%] shadow-md ease-in-out duration-200 w-full h-12 text-white clash text-2xl rounded-xl border-2 border-white/20 bg-svelte">submit</button>
		{:else}
			<button class="cursor-default opacity-25 shadow-md ease-in-out duration-200 w-full h-12 text-white clash text-2xl rounded-xl border-2 border-white/20 bg-svelte">submit</button>
		{/if}
	</div>
</div>
