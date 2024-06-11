<script type="ts">
  import Row from "../parts/Row.svelte";
  import { character } from "../../main";
  import Ipts from "../parts/IPTS.svelte";
  import Attack from "../parts/Attack.svelte";


</script>

<div class="border border-gray-300 p-3 rounded">
  <Row class="border-b border-gray-300 items-center">
    <div class="flex-grow">
      <strong>Attacks</strong>
    </div>
    <div class="min-w-6 uppercase text-center">E</div>
    <div class="min-w-6 uppercase text-center">P</div>
    <div class="min-w-8 uppercase text-center text-xs">DMG</div>
    <Ipts />
  </Row>
  {#each $character.attacks as attack}
    <Attack {attack}/>
  {/each}
</div>
