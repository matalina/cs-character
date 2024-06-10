<script lang="ts">
  export let value = false;
  export let label = '';

  import checkmark from '../../assets/images/checkmark.svg';
</script>


<div class="flex gap-1 p-1">
  <div class="text-base w-4 p-1 border-b rounded text-center bg-gray-100">
    <img class="text-xs" class:invisible={!value} src={checkmark} alt={label}/>
  </div>
  <div class="text-xs uppercase">{label}</div>
</div>
