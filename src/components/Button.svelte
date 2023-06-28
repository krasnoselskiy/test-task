<script>
    export let type;
    export let text;
    export let disabled = false;

    const handleClick = () => {
      console.log(`${text} button has been pressed`);
    }
</script>

<button
  type="button"
  disabled={disabled}
  class={`btn btn-${type}`}
  on:click={handleClick}
>
  <slot/>
  {text}
</button>


