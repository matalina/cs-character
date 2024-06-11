<script>
  import Training from "./Training.svelte";
  import Row from "./Row.svelte";
    import Checkbox from "./Checkbox.svelte";
  export let attack;
</script>

<Row class="border-b border-gray-300 items-center">
  <div class="flex-grow">
    <span>{attack.name}</span>
  </div>
  <Checkbox value={attack.eased} label=""/>
  <div class="min-w-6 uppercase text-center">{attack.stat}</div>
  <div class="min-w-8 uppercase text-center">{attack.damage.value} {attack.damage.type}</div>
  <Training trained={attack.training}/>
</Row>
