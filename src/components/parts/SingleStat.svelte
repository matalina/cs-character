<script>
  export let type = '';
  export let value = 0;
  export let noborder = false;
  $: border = noborder ? 'border-b' : 'border';
</script>

<div class={`${border} border-gray-300 rounded text-center`}>
  <div class="uppercase border-b border-gray-300 py-1 px-3 text-sm">{type}</div>
  <div class="font-bold text-2xl px-3">{value}</div>
</div>
