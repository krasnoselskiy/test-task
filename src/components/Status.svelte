<script>
  import { getStatus } from "../lib/getStatus";
  export let item;

  let status = getStatus(item);
</script>

<span class="status">{status}</span>