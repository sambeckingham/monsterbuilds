<script lang="ts">
  import type Monster from "./Monster";
  import { monsters, monsterSelections } from './store';
  import SkillIcon from './SkillIcon.svelte';
  import type SelectedMonster from "./SelectedMonster";

  export let monsterSelection: SelectedMonster;

  $: selectedMonster = monsters.find(m => m.id === monsterSelection.monsterId)

  function getSelection(tree: number, row: number, skill: number): Boolean {
    return monsterSelection.skillTreeSelections[tree].rows[row][skill]
  }

</script>

<style lang="sass">
  @mixin pixel-border
    border-image-source: url('/img/border.webp')
    border-image-slice: 2
    border-style: solid
    border-width: 2px
    background-clip: padding-box

  .monster-panel
    display: grid
    grid-template-columns: 1fr 4fr
    color: white

  .info
    background-color: #444649
    border-radius: 5px

  .skills
    display: grid
    grid-template-rows: 5fr 1fr
    background-color: darken(#444649, 10%)
    row-gap: 5px
    padding: 1em
    border-radius: 5px

  .skill-trees
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))
    grid-template-rows: 1fr
    column-gap: 5px
  
  .skill-tree
    display: grid
    grid-template-rows: repeat(5, 1fr)
    row-gap: 5px

  .skill-tree-row
    @include pixel-border
    display: flex
    justify-content: center
    background-color: #444649

  .ultimate-skills
    justify-self: center

  .ultimate-skill-icons
    @include pixel-border
    display: flex
    justify-content: center
    background-color: #444649
    border-radius: 5px
</style>

<template lang="pug">
  .monster-panel
    .info
      select(bind:value='{selectedMonster}')
        +each('monsters as monster')
          option(value='{monster}') {monster.name}
    .skills
      .skill-trees
        +each('selectedMonster.skillTrees as skillTree, treeNo')
          .skill-tree
            +each('skillTree.rows as row, rowNo')
              .skill-tree-row
                +each('row.skillIds as skillId, skillNo')
                  SkillIcon(skillId='{skillId}' selected='{getSelection(treeNo, rowNo, skillNo)}')
      .ultimate-skills
        .ultimate-skill-icons
          +each('selectedMonster.ultimateSkillIds as ultimateSkill')
            SkillIcon(skillId='{ultimateSkill}')
</template>