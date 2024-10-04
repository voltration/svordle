<script lang="ts">
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

<div class="{generateColor(v)} h-12 w-8 lg:h-16 lg:w-12 flex items-center justify-center border shadow-inner rounded-md">
    <p class="uppercase satoshi font-semibold text-white text-3xl">{s}</p>
</div>