import json, strscans, strutils, sequtils, sugar

type Skill* = object
  id: int
  name: string
  slug: string

var skills: seq[Skill]

for line in lines "./src/skillicons.sass":
  var
    slug: string
    x, y: int
  if scanf(line, "@include skill-icon($+, $i, $i)", slug, x, y):
    echo "matches: ", slug, ", x: ", x, ", y: ", y
    var newSkill: Skill
    newSkill = Skill(
      id: (x+1) + (y*20),
      name: slug.split('-').map(x => x.capitalizeAscii()).join(" "),
      slug: slug,
    )

    skills.add(newSkill)

var jsonString = %* skills
writeFile("skills.json", $jsonString)
