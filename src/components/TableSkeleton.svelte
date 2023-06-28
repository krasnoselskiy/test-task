<script>
  export let useText = false;
  export let count = 6;
</script>

<div class="skeleton">
    {#each {length: count} as _}
      <div class="skeleton-box">
        {#if useText}
          <span>Fetching from Amazon.com</span>
        {/if}
      </div>  
    {/each}
</div>
