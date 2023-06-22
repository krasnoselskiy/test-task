<script>
    import { getButtonClass } from '../lib/getButtonClass';

    export let type;
    export let text;
    export let disabled = false;

    const bgClass = getButtonClass(type);

    const handleClick = () => {
      console.log(`${text} button has been pressed`);
    }
</script>

<button
  on:click={handleClick}
  type="button"
  disabled={disabled}
  class={`${bgClass} flex justify-center min-w-[98px] disabled:opacity-50 [&>*:nth-child(1)]:pr-1 transition-all text-white focus:ring-4 font-medium rounded-sm text-sm px-4 py-2 mr-2 focus:outline-none`}
>
  <slot/>

  {text}
</button>
