<script type="ts">
  import Row from "../parts/Row.svelte";
  import { character } from "../../main";
  import Item from "../parts/Item.svelte";


</script>

<div class="mt-2 border border-gray-300 p-3 rounded">
  <Row class="border-b border-gray-300 items-center">
    <div class="flex-grow">
      <strong>Equipment</strong>
    </div>
    <div class="w-6 uppercase text-center">L</div>
    <div class="w-6 uppercase text-center text-xs">Cost</div>
  </Row>
  {#each $character.equipment as item}
    <Item {item}/>
  {/each}
  <div>
    <Row class="mt-3 items-center">
      <div class="flex-grow">
        <strong>Money</strong>
      </div>
      <div class="w-6 uppercase text-center text-xs">I</div>
      <div class="w-6 uppercase text-center text-xs bg-gray-100 rounded">{$character.money.i}</div>
      <div class="w-6 uppercase text-center text-xs">M</div>
      <div class="w-6 uppercase text-center text-xs bg-gray-100 rounded">{$character.money.m}</div>
      <div class="w-6 uppercase text-center text-xs">E</div>
      <div class="w-6 uppercase text-center text-xs bg-gray-100 rounded">{$character.money.e}</div>
      <div class="w-6 uppercase text-center text-xs">V</div>
      <div class="w-6 uppercase text-center text-xs bg-gray-100 rounded">{$character.money.v}</div>
      <div class="w-6 uppercase text-center text-xs">O</div>
      <div class="w-6 uppercase text-center text-xs bg-gray-100 rounded">{$character.money.o}</div>
    </Row>
  </div>
</div>
