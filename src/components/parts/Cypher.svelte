<script>
  import Training from "./Training.svelte";
  import Row from "./Row.svelte";
  export let cypher;
</script>

<Row class="border-b border-gray-300 items-center">
  <div class="flex-grow">
    <strong>{cypher.name}:</strong>
    {cypher.description}
    <span class="italic text-xs"> ({cypher.source})</span>
  </div>
  <div class="min-w-6 uppercase text-center">{cypher.level}</div>
  <div class="min-w-6 uppercase text-center">{cypher.tkype}</div>
</Row>
