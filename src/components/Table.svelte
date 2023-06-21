<script>
    import TableRow from "./TableRow.svelte";

    export let data;

    $: console.log(data)
</script>

{#if Object.keys(data).length > 0}
    <table class="min-w-full text-center text-sm font-light">
        <thead class="border-b font-medium dark:border-neutral-500">
        <tr>
            <th scope="col" class="px-6 py-4">Statements</th>
            <th scope="col" class="px-6 py-4"></th>
            <th scope="col" class="px-6 py-4">
                <a href="/" class="underline ">View all</a>
            </th>
        </tr>
        </thead>
        <tbody>
            {#each data.settlements as item}
                <TableRow item={item} />
            {/each}
        </tbody>
    </table>
{:else}
    <h2>Loading...</h2>
{/if}

