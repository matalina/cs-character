<script type="ts">
    import Checkbox from "../parts/Checkbox.svelte";
import { character } from "../../main";
    import Row from "../parts/Row.svelte";


</script>

<div class="mt-2 md:w-1/2 border border-gray-300 p-3 rounded">
  <Row class="flex items-center border-b border-gray-300 mb-1">
    <div class="uppercase text-sm">recovery rolls</div>
    <div>1d6+{$character.tier}{$character.recoveryAdd > 0?`+${$character.recoveryAdd}`:''}</div>
  </Row>

  <Row wrap class="">
    {#each Object.keys($character.recoveryRoll) as roll}
      <Checkbox value={$character.recoveryRoll[roll]} label={roll}/>
    {/each}
  </Row>
</div>
