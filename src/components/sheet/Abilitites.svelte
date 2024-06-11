<script type="ts">
  import Row from "../parts/Row.svelte";
  import { character } from "../../main";
  import Ability from "../parts/Ability.svelte";
  import Ipts from "../parts/IPTS.svelte";


</script>

<div class="mt-2 border border-gray-300 p-3 rounded">
  <Row class="border-b border-gray-300 items-center">
    <div class="flex-grow">
      <strong>Ability</strong>
    </div>
    <div class="w-6 uppercase text-center">P</div>
    <div class="w-6 text-xs">Cost</div>
    <Ipts />
  </Row>
  {#each $character.abilities as ability}
    <Ability {ability}/>
  {/each}
</div>
