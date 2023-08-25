import {ChangeEvent, JSX, MouseEvent, useContext, useState} from 'react';

import styles from '@/styles/form.module.css';

import {CurrentChar, CurrentCharContext} from '@/components/context';
import {capitalize} from '@/common/strings';
import {budgetFor, Character, totalAbility, withinAbilityBounds} from '@/common/bg3';

enum Direction {
  Up = 1,
  Down,
}

export default function AbilityGrid() {
  const abilityRows: JSX.Element[] = [];
  const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

  const {
    budget,
    char,
    setBudget,
    setChar,
  } = useContext<CurrentChar>(CurrentCharContext);

  function changeAbility(dir: Direction, ability: string) {
    const from = char[ability as keyof Character] as number;
    const to = from + ((dir === Direction.Up) ? 1 : -1);
    const n = budgetFor(from, to)

    if (!withinAbilityBounds(to)) {
      return;
    }

    // Factor in the modifiers.
    let mod = 0

    setChar && setChar({
      ...char,
      [`${ability}`]: to,
    });
    setBudget && setBudget(budget + n);
  }

  function handleAdd(e: MouseEvent<HTMLButtonElement>) {
    abilities.map(value => {
      if (e.currentTarget.id === `${value}-plus`) {
        changeAbility(Direction.Up, value);
      }
    });
  }

  function handleMinus(e: MouseEvent<HTMLButtonElement>) {
    abilities.map(value => {
      if (e.currentTarget.id === `${value}-minus`) {
        changeAbility(Direction.Down, value);
      }
    });
  }

  function handleCheck(e: ChangeEvent<HTMLInputElement>) {
    for (let i=0; i<abilities.length; i++) {
      let ability = abilities[i];

      if (e.currentTarget.id === `${ability}-plus1`) {
        // Can't have 2 modifiers on the same ability.
        if (ability === char.modifiers[1]) {
          // Set the state to revert to the previous state, otherwise the checkbox
          // is checked to whatever the user set.
          setChar && setChar({
            ...char,
            modifiers: [...char.modifiers],
          });

          return;
        }

        setChar && setChar({
          ...char,
          modifiers: [ability, char.modifiers[1]],
        });

        return;;
      }

      if (e.currentTarget.id === `${ability}-plus2`) {
        // Can't have 2 modifiers on the same ability.
        if (ability === char.modifiers[0]) {
          // Set the state to revert to the previous state, otherwise the checkbox
          // is checked to whatever the user set.
          setChar && setChar({
            ...char,
            modifiers: [...char.modifiers],
          });
          return;
        }

        setChar && setChar({
          ...char,
          modifiers: [char.modifiers[0], ability],
        });

        return;
      }
    }
  }

  abilities.forEach((ability) => {
    abilityRows.push(
      <div key={ability} className={styles.gridRow}>
        <label htmlFor={ability} className="block mb-2">{capitalize(ability)}</label>
        <input type="text" id={ability} value={totalAbility(char, ability)} readOnly className={styles.abilityScore} />
        <button id={`${ability}-plus`} onClick={handleAdd}>+</button>
        <button id={`${ability}-minus`} onClick={handleMinus}>-</button>
        <input type="checkbox" id={`${ability}-plus2`} onChange={handleCheck} checked={char.modifiers[1] === ability} />
        <input type="checkbox" id={`${ability}-plus1`} onChange={handleCheck} checked={char.modifiers[0] === ability} />
      </div>
    )
  });

  return (
    <>
      <div className={styles.gridRow}>
        <div>Abilities</div>
        <div>Scores</div>
        <div>Add</div>
        <div>Subtract</div>
        <div>+2 Modifier</div>
        <div>+1 Modifier</div>
      </div>
      {abilityRows}
    </>
  )
}
