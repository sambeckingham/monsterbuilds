<script lang="ts">
  import type Skill from "./Skill";

  import { skills } from "./store";
  export let skillId: number;
  export let selected: boolean = false;

  $: skill = skills.find((s) => s.id === skillId) as Skill;
</script>

<style lang="sass">
  .skill-icon
    width: 32px
    height: 32px
    margin: 8px
    display: inline-block

    &--selected
      @extend .skill-icon
      outline: solid 3px orange
</style>

<template lang="pug">
  div(class="skill-icon{selected ? '--selected' : ''} skill-icon-{skill.slug}")
</template>
