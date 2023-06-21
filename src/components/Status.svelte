<script>
  import { getStatus } from "../lib/getStatus";

  export let item = {};

  let label = getStatus(item);

  console.log(label)
</script>

<span class="text-sm font-medium text-gray-900 capitalize">{label}</span>