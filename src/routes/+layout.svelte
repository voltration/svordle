<script>
    import "../app.css";
    let { children } = $props();
</script>

<div class="antialiased">
    {@render children()}
</div>

<style>
    :root {
        background-color: #141411;
    }
</style>