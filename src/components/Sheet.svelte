<script type="ts">
	import SingleStat from './parts/SingleStat.svelte';
  import Columns from "./parts/Columns.svelte";
  import Abilitites from "./sheet/Abilitites.svelte";
  import Advancement from "./sheet/Advancement.svelte";
  import Attacks from "./sheet/Attacks.svelte";
  import Column from "./parts/Column.svelte";
  import Cyphers from "./sheet/Cyphers.svelte";
  import DamageTrack from "./sheet/DamageTrack.svelte";
  import Equipment from "./sheet/Equipment.svelte";
  import Page from "./parts/Page.svelte";
  import Recovery from "./sheet/Recovery.svelte";
  import Row from "./parts/Row.svelte";
  import Sentence from "./sheet/Sentence.svelte";
  import Skills from "./sheet/Skills.svelte";
  import Stats from "./sheet/Stats.svelte";
  import { character } from '../main';
</script>

<Page>
  <Sentence/>
    <Columns>
      <Column>
        <Row>
          <SingleStat type="tier" value={$character.tier}/>
          <SingleStat type="effort" value={$character.effort}/>
          <SingleStat type="armor" value={$character.armor}/>
          <SingleStat type="xp" value={$character.xp.game}/>
          {#if Object.keys($character.xp).length > 1}
            {#each Object.keys($character.xp) as key}
              {#if (key !== 'game')}
              <SingleStat type={key} value={$character.xp[key]}/>
              {/if}
            {/each}
          {/if}
        </Row>
        <Advancement/>
        <Stats />
        <Row>
          <Recovery/>
          <DamageTrack/>
        </Row>
        <Abilitites/>
        <Equipment />
      </Column>
    <Column>
      <Attacks />
      <Skills/>
      <Cyphers/>
    </Column>
  </Columns>
</Page>
