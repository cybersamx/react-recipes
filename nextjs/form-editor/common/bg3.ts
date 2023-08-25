// Baldur's Gate (BG3) rules

export type Character = {
  name: string;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  modifiers: string[];
};

export const defaultBudget = 27;

const lowerAbility = 8;
const upperAbility = 15;

export const defaultChar: Character = {
  name: '',
  str: lowerAbility,
  dex: lowerAbility,
  con: lowerAbility,
  int: lowerAbility,
  wis: lowerAbility,
  cha: lowerAbility,
  modifiers: ['wis', 'str'],
};

export function withinAbilityBounds(abilityScore: number): boolean {
  return (abilityScore >= lowerAbility && abilityScore <= upperAbility)
}

export function budgetFor(from: number, to: number): number {
  type Rule = {
    lower: number;
    upper: number;
    cost:  number;
  }

  // Bg3 character creation starts from 8 and caps at 15.
  const rules: Rule[] = [
    {lower: lowerAbility, upper: 13, cost: 1},
    {lower: 14, upper: upperAbility, cost: 2},
  ];

  // Increment
  if (from < to) {
    for (let rule of rules) {
      if (to >= rule.lower && to <= rule.upper) {
        return -1 * rule.cost;
      }
    }
  }

  // Decrement
  if (from > to) {
    for (let rule of rules) {
      if (from >= rule.lower && from <= rule.upper) {
        return rule.cost;
      }
    }
  }

  return 0
}

export function totalAbility(char: Character, ability: string): number {
  return char[ability as keyof Character] as number +
    ((char.modifiers[0] === ability) ? 1 : 0) +
    ((char.modifiers[1] === ability) ? 2 : 0);
}
