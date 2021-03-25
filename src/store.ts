import { Writable, writable } from 'svelte/store';
import type Monster from "./Monster";
import * as monsterData from "./data/monsters.json";
import type Skill from "./Skill";
import * as skillData from "./data/skills.json";
import SelectedMonster from './SelectedMonster';

export const monsters:  Monster[] = monsterData.monsters as Monster[]
export const skills: Skill[] = skillData.skills as Skill[]

export const selectedMonsters: Writable<Monster[]> = writable([monsters[0], monsters[0], monsters[0]])

export const monsterSelections: Writable<SelectedMonster[]> = writable([
  new SelectedMonster(monsters[0].id),
  new SelectedMonster(monsters[1].id),
  new SelectedMonster(monsters[2].id),
])