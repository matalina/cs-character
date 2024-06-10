<script type="ts">
    import Checkbox from "../parts/Checkbox.svelte";
import { character } from "../../main";
    import Row from "../parts/Row.svelte";


</script>

<div class="md:w-1/2">
  <Row class="my-2">
    <div class="uppercase">recovery rolls</div>
    <div>1d6+{$character.tier}{$character.recoveryAdd > 0?`+${$character.recoveryAdd}`:''}</div>
  </Row>

  <Row wrap class="border border-gray-300 p-3 rounded">
    {#each Object.keys($character.recoveryRoll) as roll}
      <Checkbox value={$character.recoveryRoll[roll]} label={roll}/>
    {/each}
  </Row>
</div>
