<script lang="ts">
    import "../app.css";

        let myarray = [
        ["a", "b", "c"],
        ["a", "b", "d"],
        ["a", "b", "e"],
        ["a", "b", "f"],
    ]
    const regex = new RegExp("^[a-zA-Z]$");
    let svordle: string[][] = $state([[], [], [], [], [], []]);

    const validateInput = () => {
        alert("valdatited input on 6")
    }

    const keyHandler = (e: { key: string; }) => {
        if (regex.test(e.key)) {
            for (let i = 0; i < svordle.length; i++) {
                if (svordle[i].length < 6) {
                    svordle[i] = [...svordle[i], e.key];
                    break;
                } else {
                    validateInput()
                }
            }
        }
    }
    $inspect(svordle)
</script>

{#snippet letterCard(letter: string)}
    <div class="flex items-center justify-center h-20 w-16 bg-neutral-300">
        <p class="uppercase text-neutral-600 font-bold text-3xl">{letter}</p>
    </div>
{/snippet}

<svelte:window on:keydown|preventDefault={keyHandler} />

<div class="flex items-center justify-center h-screen">
    <div class="flex flex-col space-y-5">
        {#each svordle as row}
            <div class="flex flex-row space-x-5">
                {#each row as letter}
                    {@render letterCard(letter)}
                {/each}
            </div>
        {/each}
    </div>
</div>