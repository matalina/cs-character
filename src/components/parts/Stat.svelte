<script lang="ts">
  import { character } from "../../main";
  import Row from "./Row.svelte";
    import Ipts from "./IPTS.svelte";
  import SingleStat from "./SingleStat.svelte";
  import Training from "./Training.svelte";

  export let type = '';


</script>

<div class="border border-gray-300 rounded">
  <SingleStat noborder {type} value={$character.stats[type].current} />
  <Row nogap >
    <SingleStat noborder type="pool" value={$character.stats[type].pool} />
    <SingleStat noborder type="edge" value={$character.stats[type].edge} />
  </Row>
  <div class="flex flex-col items-center">
    <div class="uppercase text-xs text-center">defense</div>
    <Ipts />
    <Training trained={$character.stats[type].defense} />
  </div>
</div>
