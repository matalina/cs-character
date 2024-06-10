<script>
  import Training from "./Training.svelte";
  import Row from "./Row.svelte";
  export let skill;
</script>

<Row class="border-b border-gray-300 items-center">
  <div class="flex-grow">
    <strong>{skill.name}:</strong>
    {skill.description}
    <span class="italic text-xs"> ({skill.source})</span>
  </div>
  <div class="w-6 uppercase">{skill.stat}</div>
  <Training trained={skill.training}/>
</Row>
