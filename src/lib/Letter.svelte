<script lang="ts">
    import { fade } from "svelte/transition";
    import { game, gameState } from "./store.svelte";

    const { ci, i }: {
        ci: number,
        i: number
    } = $props();

    const s = $derived(game.svordle[ci].input[i]);
    const v = $derived(game.svordle[ci].verdict[i]);

    const generateColor = (v: number) => {
        switch (v) {
            case gameState.green:
                return "border-green-500/25 bg-green-500/25"
            case gameState.red:
                return "border-red-500/25 bg-red-500/25"
            case gameState.yellow:
                return "border-yellow-500/25 bg-yellow-500/25"
            default:
                return "border-white/[2%] bg-white/[2%]"
        }
    }
</script>

<div class:shake={s} class:fadeIn={v} class="{generateColor(v)} h-16 w-12 lg:h-20 lg:w-16 flex items-center justify-center border shadow-inner rounded-md">
    <p class="uppercase satoshi font-semibold text-white text-3xl">{s}</p>
</div>

<style>
	.shake {
		animation: 0.7s shake forwards running;
	}

	.fadeIn {
		opacity: 0.5;
		animation: fadeIn 0.3s forwards;
	}

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

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>