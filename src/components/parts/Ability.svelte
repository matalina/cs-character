<script>
  import Training from "./Training.svelte";
  import Row from "./Row.svelte";
  export let ability;
</script>

<Row class="border-b border-gray-300 items-center">
  <div class="flex-grow">
    <strong>{ability.name}:</strong>
    {ability.description}
    <span class="italic text-xs"> ({ability.source})</span>
  </div>
  <div class="w-6 uppercase">{ability.stat}</div>
  <div class="w-6">{ability.cost}</div>
  <Training trained={ability.training}/>
</Row>
