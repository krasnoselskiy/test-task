<script>
  import { getStatus } from "../lib/getStatus";
  export let item;

  let status = getStatus(item);
</script>

<span class="text-sm font-medium text-gray-600">{status}</span>