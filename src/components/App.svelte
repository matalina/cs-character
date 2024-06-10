<script lang="ts">
  import { onMount } from "svelte";
  import { characters } from "../characters";
  import { character } from "../main";
  import Sheet from "./Sheet.svelte";

  let active = Object.keys(characters)[0];

  function loadCharacter(name: string) {
    active = name;
    character.set(characters[name]);
  }

  onMount(() =>  {
    character.set(characters[active]);
  });
</script>

<div class="flex gap-5">
  <nav class="flex flex-col md:w-1/6">
    {#each Object.keys(characters) as char}
    <button class:active={char === active} on:click={() => loadCharacter(char)}>
      {characters[char].name}
    </button>
  {/each}
  </nav>

  <div class="flex-grow">
  {#if $character}
    <Sheet />
  {/if}
  </div>
</div>

<style lang="postcss">
button {
  @apply bg-orange-300 text-orange-800 border-orange-800;
  @apply border mb-3 p-3;
}
</style>
