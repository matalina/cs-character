<script type="ts">
  export let nogap = false;
  export let wrap = false;

  $: gap = nogap ? '' : 'gap-3';
  $: className = $$props.class || '';
  $: wrapped = wrap ? 'flex-wrap': '';
</script>

<div class={`${className} flex justify-between w-full ${wrapped} ${gap}`}>
  <slot />
</div>
