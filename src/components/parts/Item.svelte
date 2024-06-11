<script>
  import Training from "./Training.svelte";
  import Row from "./Row.svelte";
  export let item;
</script>

<Row class="border-b border-gray-300 items-center">
  <div class="flex-grow">
    <strong>{item.name}:</strong>
    {item.description}
    <span class="italic text-xs"> ({item.source})</span>
  </div>
  <div class="min-w-6 uppercase text-center">{item.level}</div>
  <div class="min-w-6 uppercase text-center">{item.cost}</div>
</Row>
