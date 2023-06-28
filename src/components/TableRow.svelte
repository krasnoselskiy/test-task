<script>
  import ButtoGroup from "./ButtonsGroup.svelte";
  import Status from "./Status.svelte";

  export let item;
</script>

<tr
  class="tr">
  <td class="td">
    {#if item.financialEventGroupId}
      <a
        target="_blank"
        href={`https://sellercentral.amazon.com/gp/payments-account/view-transactions.html?subview=groups&groupId=${item.financialEventGroupId}`} 
        class="link"
      >
        {item.startDate} - {item.endDate}
      </a>
    {:else}
      <span>{item.startDate} - {item.endDate}</span>
    {/if}
  </td>
  <td class="td">
   <Status item={item} />
  </td>
  <td class="td">
    <ButtoGroup item={item} />
  </td>
</tr>