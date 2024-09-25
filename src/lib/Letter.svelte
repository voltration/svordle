<script lang="ts">
    import { game, gameState } from "./store.svelte";

    let { ci, i }: {
        ci: number,
        i: number
    } = $props();

    let s = $derived(game.svordle[ci].input[i]);
    let v = $derived(game.svordle[ci].verdict[i]);
</script>


{#if v === gameState.red}
    <div class:shake={s} class="h-16 w-12 lg:h-20 lg:w-16 flex items-center justify-center border border-red-500/25 shadow-inner bg-red-500/25 rounded-md">
        <p class="uppercase satoshi font-semibold text-white text-3xl">{s}</p>
    </div>
{:else if v === gameState.yellow}
    <div class:shake={s} class="h-16 w-12 lg:h-20 lg:w-16 flex items-center justify-center border border-yellow-500/25 shadow-inner bg-yellow-500/25 rounded-md">
        <p class="uppercase satoshi font-semibold text-white text-3xl">{s}</p>
    </div>
{:else if v === gameState.green}
    <div class:shake={s} class="h-16 w-12 lg:h-20 lg:w-16 flex items-center justify-center border border-green-500/25 shadow-inner bg-green-500/25 rounded-md">
        <p class="uppercase satoshi font-semibold text-white text-3xl">{s}</p>
    </div>
{:else}
    <div class:shake={s} class="h-16 w-12 lg:h-20 lg:w-16 flex items-center justify-center border border-white/[2%] shadow-inner bg-white/[2%] rounded-md">
        <p class="uppercase satoshi font-semibold text-white text-3xl">{s}</p>
    </div>
{/if}


<!--
<div class="card w-40">
    <div class="card__content text-center relative p-20 transition-transform duration-1000 text-white font-bold">
      
      <div class="card__front absolute top-0 bottom-0 right-0 left-0 p-8 bg-pink-600 flex items-center justify-center">
        <h2>Front</h2>
      </div>
      <div class="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-teal-500 flex items-center justify-center">
        <h2>Back</h2>
      </div>
      
    </div>
  </div>
-->
<style>
    .card { perspective: 800px;}
.card__content {transform-style: preserve-3d;}
.card:hover .card__content {transform: rotateY(.5turn);}

.card__front,
.card__back { backface-visibility: hidden;}
.card__back{ transform: rotateY(.5turn);}
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