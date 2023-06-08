import { createContext, Dispatch, SetStateAction } from 'react';

export type CurrentUser = {
  currentUser?: string;
  setCurrentUser?: Dispatch<SetStateAction<string>> | null;
}

export const ThemeContext = createContext<string>('');
export const CurrentUserContext = createContext<CurrentUser>({
  currentUser: '',
  setCurrentUser: null,
});
