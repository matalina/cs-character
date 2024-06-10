<script type="ts">
  import { character } from "../../main";
  import Checkbox from "../parts/Checkbox.svelte";
    import Row from "../parts/Row.svelte";


</script>

<div class="md:w-1/2">
  <div class="uppercase my-2">damage track</div>
  <Row wrap class="border border-gray-300 p-3 rounded">
    <Checkbox value={$character.damageTrack.hale} label="hale"/>
    <Checkbox value={$character.damageTrack.impared} label="impaired"/>
    <Checkbox value={$character.damageTrack.debilitated} label="debilitated"/>
    <Checkbox value={$character.damageTrack.dead} label="dead"/>
  </Row>
</div>
