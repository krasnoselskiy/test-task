<script>
  import ButtoGroup from "./ButtonsGroup.svelte";
  import Status from "./Status.svelte";

  export let item;
</script>

<tr
  class="border-b border-primary-200 bg-primary-100 text-neutral-800">
  <td class="whitespace-nowrap px-6 py-4 font-medium">
    {#if item.financialEventGroupId}
      <a
        target="_blank"
        href={`https://sellercentral.amazon.com/gp/payments-account/view-transactions.html?subview=groups&groupId=${item.financialEventGroupId}`} 
        class="hover:underline text-gray-600"
      >
        {item.startDate} - {item.endDate}
      </a>
    {:else}
      <span class="text-gray-600">{item.startDate} - {item.endDate}</span>
    {/if}
  </td>
  <td class="whitespace-nowrap px-6 py-4">
   <Status item={item} />
  </td>
  <td class="whitespace-nowrap px-6 py-4 flex content-center align-middle justify-center">
    <ButtoGroup item={item} />
  </td>
</tr>