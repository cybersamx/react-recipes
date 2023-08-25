import {MouseEvent, FormEvent, JSX, useState, ChangeEvent} from 'react';
import Head from 'next/head';

import styles from '@/styles/form.module.css';

enum Direction {
  Up = 1,
  Down,
}

type Character = {
  name: string;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  modifiers: string[];
};

function totalAbility(char: Character, ability: string): number {
  return char[ability as keyof Character] as number +
    ((char.modifiers[0] === ability) ? 1 : 0) +
    ((char.modifiers[1] === ability) ? 2 : 0);
}

function budgetFor(from: number, to: number): number {
  // Increment
  if (from < to) {
    if (to >= 8 && to <=13) {
      return -1;
    }
    if (to >= 14 && to <=15) {
      return -2;
    }
  }

  // Decrement
  if (from > to) {
    if (from >= 8 && from <= 13) {
      return 1;
    }
    if (from >= 14 && from <= 15) {
      return 2;
    }
  }

  return 0
}

export default function Home() {
  const [char, setChar] = useState<Character>({
    name: '',
    str: 8,
    dex: 8,
    con: 8,
    int: 8,
    wis: 8,
    cha: 8,
    modifiers: ['str', 'wis'],
  });

  const [budget, setBudget] = useState(27);

  const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
  const abilityRows: JSX.Element[] = [];

  function changeAbility(dir: Direction, ability: string) {
    const from = char[ability as keyof Character] as number;
    const to = from + ((dir === Direction.Up) ? 1 : -1);
    const n = budgetFor(from, to)

    // Cap at 8 and 15.
    if (to < 8 || to > 15) {
      return;
    }

    // Factor in the modifiers.
    let mod = 0

    setChar({
      ...char,
      [`${ability}`]: to,
    });
    setBudget(budget + n);
  }

  function abilitiesToDisplay() {
    abilities.forEach((ability) => {
      abilityRows.push(
        <div key={ability} className={styles.gridRow}>
          <label htmlFor={ability} className="block mb-2">{ability}</label>
          <input type="text" id={ability} value={totalAbility(char, ability)} readOnly className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg text-center w-1/3" />
          <button id={`${ability}-plus`} onClick={handleAdd}>+</button>
          <button id={`${ability}-minus`} onClick={handleMinus}>-</button>
          <input type="checkbox" id={`${ability}-plus2`} onChange={handleCheck} checked={char.modifiers[1] === ability} />
          <input type="checkbox" id={`${ability}-plus1`} onChange={handleCheck} checked={char.modifiers[0] === ability} />
        </div>
      )
    });
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

  function handleSubmit(e: FormEvent) {
    // Cancel the default event when a form is submitted, which prevents the
    // browser from reloading the page.
    e.preventDefault();
  }

  function handleCheck(e: ChangeEvent<HTMLInputElement>) {
    for (let i=0; i<abilities.length; i++) {
      let ability = abilities[i];

      if (e.currentTarget.id === `${ability}-plus1`) {
        // Can't have 2 modifiers on the same ability.
        if (ability === char.modifiers[1]) {
          // Set the state to revert to the previous state, otherwise the checkbox
          // is checked to whatever the user set.
          setChar({
            ...char,
            modifiers: [...char.modifiers],
          });

          return;
        }

        setChar({
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
          setChar({
            ...char,
            modifiers: [...char.modifiers],
          });
          return;
        }

        setChar({
          ...char,
          modifiers: [char.modifiers[0], ability],
        });

        return;
      }
    }
  }

  function handleName(e: ChangeEvent<HTMLInputElement>) {
    setChar({
      ...char,
      name: e.target.value,
    });
  }

  // Initialize UI
  abilitiesToDisplay();

  return (
    <>
      <Head>
        <title>React Recipes - Next.js Form Editor</title>
      </Head>
      <div className="block p-4">
        <h1 className="mb-6 text-xl">Character Creation</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <label htmlFor="name" className={styles.longLabel}>Name</label>
            <input
              type="text"
              id="name"
              onChange={handleName}
              value={char.name}
              className={styles.longInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className={styles.medLabel}>Budget</label>
            <input type="text" id="str" value={budget} readOnly className={styles.medInput} />
          </div>
          <div className={styles.gridRow}>
            <div>Abilities</div>
            <div>Scores</div>
            <div>Add</div>
            <div>Subtract</div>
            <div>+2 Modifier</div>
            <div>+1 Modifier</div>
          </div>
          {abilityRows}
        </form>
      </div>
    </>
  );
}
