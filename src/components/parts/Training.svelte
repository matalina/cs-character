<script lang="ts">
    import Radio from "./Radio.svelte";

  export let trained = 'p';
</script>

<div class="flex">
  <Radio value={trained === 'i'} />
  <Radio value={trained === 'p'} />
  <Radio value={trained === 't'} />
  <Radio value={trained === 's'} />
</div>
