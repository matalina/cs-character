<script type="ts">
  import Row from "../parts/Row.svelte";
  import { character } from "../../main";
  import Skill from "../parts/Skill.svelte";
  import Ipts from "../parts/IPTS.svelte";


</script>

<div class="mt-2  border border-gray-300 p-3 rounded">
  <Row class="border-b border-gray-300 items-center">
    <div class="flex-grow">
      <strong>Skills</strong>
    </div>
    <div class="w-6 uppercase text-center">P</div>
    <Ipts />
  </Row>
  {#each $character.skills as skill}
    <Skill {skill}/>
  {/each}
</div>
