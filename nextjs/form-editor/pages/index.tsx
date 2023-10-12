import {MouseEvent, FormEvent, JSX, useState, ChangeEvent} from 'react';
import Head from 'next/head';

import {CurrentCharContext} from "@/components/context";
import {budgetFor, Character, defaultBudget, defaultChar, totalAbility, withinAbilityBounds} from "@/common/bg3";
import styles from '@/styles/form.module.css';
import AbilityGrid from "@/components/ability-grid";

export default function Home() {
  const [char, setChar] = useState(defaultChar);
  const [budget, setBudget] = useState(defaultBudget);

  function handleSubmit(e: FormEvent) {
    // Cancel the default event when a form is submitted, which prevents the
    // browser from reloading the page.
    e.preventDefault();
  }

  function handleName(e: ChangeEvent<HTMLInputElement>) {
    setChar({
      ...char,
      name: e.target.value,
    });
  }

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
          <CurrentCharContext.Provider value={{
            budget,
            char,
            setBudget,
            setChar,
          }}>
            <AbilityGrid />
          </CurrentCharContext.Provider>
        </form>
      </div>
    </>
  );
}
