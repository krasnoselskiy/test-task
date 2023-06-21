<script>
  import TableRow from "./TableRow.svelte";
  import TableSkeleton from "./TableSkeleton.svelte";

  export let data;
  const MAX_ROW_SIZE = 6;
</script>

{#if Object.keys(data).length > 0}
    <table class="min-w-full text-center text-sm font-light">
        <thead class="border-b font-medium">
        <tr>
          <th scope="col" class="px-6 py-4 text-xl">Statements</th>
          <th scope="col" class="px-6 py-4"></th>
          <th scope="col" class="px-6 py-4">
            <a href="/" class="underline hover:no-underline text-xl">View all</a>
          </th>
        </tr>
        </thead>
        <tbody>
          {#each data.settlements as item, i}
            {#if i+1 <= MAX_ROW_SIZE}
              <TableRow item={item} />
            {/if}
          {/each}
        </tbody>
    </table>

    {#if data.pendingCount > 0}
      <TableSkeleton 
        count={3} 
        useText
      />
    {/if}
{:else}
  <TableSkeleton count={6} />
{/if}


