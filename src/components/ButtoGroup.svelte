<script>
  import { Icon, ChatBubbleLeftRight } from "svelte-hero-icons";
  import Button from "./Button.svelte";
</script>

<Button type="primary" text="11" />
<Button useText={false}>
  <Icon
    src={ChatBubbleLeftRight} 
    size="22" 
    color="white"
  />
</Button>