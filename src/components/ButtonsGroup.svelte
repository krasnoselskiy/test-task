<script>
  import { Icon, ChatBubbleLeftRight } from "svelte-hero-icons";
  import Button from "./Button.svelte";
  import { getButtons } from "../lib/getButtons";

  export let item;
  const buttons = getButtons(item);
</script>

{#each buttons as button}
  <Button 
    type={button.type} 
    text={button.text}
    disabled={button.disabled}
  >
    {#if button.icon}
      <Icon
        src={ChatBubbleLeftRight} 
        size="22" 
        color="white"
      />
    {/if}
  </Button>
{/each}