<script>
  import TableRow from "./TableRow.svelte";
  import TableSkeleton from "./TableSkeleton.svelte";

  export let data;
  export let loading;
  export let error;
  let isShowAll = false;
  let settlements = [];

  const toggleShow = () => {
    isShowAll = !isShowAll;

    if(isShowAll) {
      settlements = data.settlements;
      return;
    }

    settlements = data.settlements.slice(0, 6);
  };


  $: {
    if(data.settlements?.length) {
      settlements = data.settlements.slice(0, 6);
    }
  }
</script>

{#if loading}
  <TableSkeleton count={6} />
{:else if error}
	<p class="te">Something went wrong</p>
{:else}
  <table class="min-w-full text-center text-sm font-light">
      <thead class="border-b font-medium">
      <tr>
        <th scope="col" class="px-6 py-4 text-xl text-gray-600 text-[18px]">Statements</th>
        <th scope="col" class="px-6 py-4"></th>
        <th scope="col" class="px-6 py-4">
          <button 
            on:click={toggleShow}
            class="underline hover:no-underline text- text-gray-600 text-[18px]"
          >
            {isShowAll ? 'View less' : 'View all'}
          </button>
        </th>
      </tr>
      </thead>
      <tbody>
        {#each settlements as item}
          <TableRow item={item} />
        {/each}
      </tbody>
  </table>

  {#if data.pendingCount > 0}
    <TableSkeleton 
      count={3} 
      useText
    />
  {/if}
{/if}


