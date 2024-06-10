<script lang="ts">
  import circle from '../../assets/images/circle.svg';
  import circleDot from '../../assets/images/circle-dot.svg';
  export let value = false;
</script>

<div class="text-base w-4 p-1 text-center">
  {#if value}
    <img src={circleDot} alt="yes"/>
  {:else}
    <img src={circle} alt="no"/>
  {/if}
</div>
