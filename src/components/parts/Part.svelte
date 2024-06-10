<script lang="ts">
  import { character } from "../../main";

  export let type = '';
  $: value = $character[type];
</script>

<div class="md:w-2/5 mb-1">
  <div class="border-b">{value}</div>
  <div class="text-xs text-gray-300 uppercase">{type}</div>
</div>
