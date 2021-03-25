<script lang="ts">
  import { monsterSelections } from "./store";
  import MonsterPanel from "./MonsterPanel.svelte";
</script>

<template lang="pug">
  main
    img.logo(src='/img/logo.png' alt='Monster Sanctuary Builds')
    .monsters
      MonsterPanel(bind:monsterSelection='{$monsterSelections[0]}')
      MonsterPanel(bind:monsterSelection='{$monsterSelections[1]}')
      MonsterPanel(bind:monsterSelection='{$monsterSelections[2]}')
</template>

<style lang="sass">
  :global(body)
    background-color: #0b121a

  main
    text-align: center
    color: white
    margin: 0 auto

  .logo
    height: 250px

  .monsters
    display: grid
    grid-template-columns: 1fr
    grid-template-rows: 1fr 1fr 1fr
    row-gap: 20px
    width: 80%
    margin: 0 10%
</style>
