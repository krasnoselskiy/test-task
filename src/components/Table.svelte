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
  <div class="table-wrap">
    <TableSkeleton count={6} />
  </div>
{:else if error}
	<p class="error">Something went wrong</p>
{:else}
  <div class="table-wrap">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="th">Statements</th>
          <th scope="col" class="th"></th>
          <th scope="col" class="th">
            <button
              on:click={toggleShow}
              class="btn btn-plain thead-btn"
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
  </div>
{/if}


