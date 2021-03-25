import type Monster from "./Monster";
import Skill from "./Skill";

export default class SelectedMonster {
  monsterId: number;
  skillTreeSelections: SkillTreeSelection[] = [];
  ultimateSelections: UltimateSelection[] = [];

  constructor(monsterId: number) {
    this.monsterId = monsterId;
  }
}

class SkillTreeSelection {
  rows: boolean[][] = [];
}

function New(monster: Monster): SelectedMonster {
  var newSelectedMonster = new SelectedMonster(monster.id)
  monster.skillTrees.forEach(skillTree => {
    let newSkillTree: SkillTreeSelection
    skillTree.forEach(row => {
      let newRow: boolean[]
      row.forEach(() => {
        newRow.push(false)
      });
      newSkillTree.push(newRow)
    });
    newSelectedMonster.skillTreeSelections.push(new SkillTreeSelection())
  });
  return ;
}