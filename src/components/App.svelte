<script>
  import fetchStore from "../store"
  import Table from "./Table.svelte";

	const [data, loading, error] = fetchStore();
</script>

<main>
  <div class="container">
    <Table
      bind:loading={$loading}
      bind:data={$data}
      bind:error={$error}
    />
  </div>
</main>
