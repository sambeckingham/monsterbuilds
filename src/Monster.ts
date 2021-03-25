export default class Monster {
  id: number;
  name: string;
  skillTrees: SkillTree[];
  ultimateSkillIds: number[]

  constructor(id: number, name: string, skillTrees: SkillTree[], ultimateSkillIds: number[]) {
    this.id = id;
    this.name = name;
    this.skillTrees = skillTrees;
    this.ultimateSkillIds = ultimateSkillIds;
  }
}

class SkillTree {
  rows: SkillTreeRow[]

  constructor(rows: SkillTreeRow[]) {
    this.rows = rows;
  }
}

class SkillTreeRow {
  tier: Tier;
  skillIds: number[]
  
  constructor(tier: Tier, skillIds: number[]) {
    this.tier = tier;
    this.skillIds = skillIds;
  }
}

enum Shift {
  None,
  Light,
  Dark,
}

enum Tier {
  Starter,
  Level1,
  Level10,
  Level20,
  Level30,
  Ultimate
}