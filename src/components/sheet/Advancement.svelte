<script lang="ts">
    import Checkbox from "../parts/Checkbox.svelte";
    import { character } from "../../main";
</script>

<div class="flex gap-3 border rounded p-1 mt-2">
  <Checkbox label="+4 Pool" value={$character.advancement.pool}/>
  <Checkbox label="+1 Edge" value={$character.advancement.edge}/>
  <Checkbox label="+1 Effort" value={$character.advancement.effort}/>
  <Checkbox label="Skill" value={$character.advancement.skill}/>
  <Checkbox label="Other" value={$character.advancement.other}/>
</div>
