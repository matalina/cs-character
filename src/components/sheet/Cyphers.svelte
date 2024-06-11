<script type="ts">
  import Row from "../parts/Row.svelte";
  import { character } from "../../main";
  import Ipts from "../parts/IPTS.svelte";
    import Cypher from "../parts/Cypher.svelte";


</script>

<div class="mt-2 border border-gray-300 p-3 rounded">
  <Row class="border-b border-gray-300 items-center">
    <div class="flex-grow flex gap-1 items-center pb-1">
      <strong>Cyphers</strong>
      <div class="bg-gray-100 p-1 px-2">
        {$character.cypherLimit?.base}{$character.cypherLimit?.add > 0 ? ` + ${$character.cypherLimit.add}`:''}
      </div>
    </div>
    <div class="w-6 uppercase text-center">L</div>
    <div class="w-6 uppercase text-center">T</div>
  </Row>
  {#each $character.cyphers as cypher}
    <Cypher cypher={cypher}/>
  {/each}
</div>
