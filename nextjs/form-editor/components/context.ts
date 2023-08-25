import {createContext, Dispatch, SetStateAction} from 'react';

import {Character, defaultBudget, defaultChar} from '@/common/bg3';

export type CurrentChar = {
  budget: number;
  char: Character;
  setBudget?: Dispatch<SetStateAction<number>> | null;
  setChar?: Dispatch<SetStateAction<Character>> | null;
}

export const CurrentCharContext = createContext<CurrentChar>({
  budget: defaultBudget,
  char: defaultChar,
  setBudget: null,
  setChar: null,
});
