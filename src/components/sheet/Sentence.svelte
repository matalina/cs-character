<script lang="ts">
  import Part from "../parts/Part.svelte";
</script>

<div id="sentence" class="w-full border rounded border-gray-300 p-3">
  <div class="flex gap-3 w-full">
    <Part type="name" />
    <div class="md:w-1/5 text-center">is a</div>
    <Part type="descriptor" />
  </div>
  <div class="flex gap-3 w-full">
    <Part type="type" />
    <div class="md:w-1/5 text-center">who</div>
    <Part type="focus" />
  </div>
</div>
