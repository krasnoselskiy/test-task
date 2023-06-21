<script>
  export let useText = false;
  export let count = 6;
</script>

<div class="animate-pulse mt-30">
    {#each {length: count} as _, i}
      <div class="h-20 bg-gray-200 text-sm mt-3 mb-6 rounded justify-center items-center content-center flex">
        {#if useText}
          <span>Fetching from Amazon.com</span>
        {/if}
      </div>  
    {/each}
</div>