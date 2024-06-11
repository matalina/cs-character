<script type="ts">
  import { character } from "../../main";
  import Checkbox from "../parts/Checkbox.svelte";
    import Row from "../parts/Row.svelte";


</script>

<div class="mt-2 md:w-1/2 border border-gray-300 p-3 rounded">
  <div class="uppercase border-b border-gray-300 mb-2 text-sm">damage track</div>
  <Row wrap class="">
    <Checkbox value={$character.damageTrack.hale} label="hale"/>
    <Checkbox value={$character.damageTrack.impared} label="impaired"/>
    <Checkbox value={$character.damageTrack.debilitated} label="debilitated"/>
    <Checkbox value={$character.damageTrack.dead} label="dead"/>
  </Row>
</div>
