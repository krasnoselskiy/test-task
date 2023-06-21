<script>
  import { getStatus } from "../lib/getStatus";
  import Button from "./Button.svelte";

  export let item;

  let status = getStatus(item);
</script>

<tr
  class="border-b border-primary-200 bg-primary-100 text-neutral-800">
  <td class="whitespace-nowrap px-6 py-4 font-medium">
      {item.startDate} - {item.endDate}
  </td>
  <td class="whitespace-nowrap px-6 py-4">
    <span class="text-sm font-bold text-gray-900">{status}</span>
  </td>
  <td class="whitespace-nowrap px-6 py-4">
      <Button type="primary" text="11" />
      <Button type="danger" text="12" />
      <!-- <Button>
          <Icon src="{ChatBubbleLeftRight}" size="32" color="green" />
      </Button> -->
  </td>
</tr>