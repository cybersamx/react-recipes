// Based on https://react.dev/reference/react/useContext

import {
  ChangeEvent,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import { CurrentUser, CurrentUserContext, ThemeContext } from './context';
import SignInForm from './SignInForm';
import Greeting from './Greeting';

export default function Home() {
  const [theme, setTheme] = useState('light');
  const [currentUser, setCurrentUser] = useState('');

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const target = e.target as typeof e.target & {
      value: string;
    }

    setTheme(target.value);
  };

  return (
    <>
      {/* Top topbar to change the theme */}
      <div className="topbar">
        <label>Select a theme: <select name="theme" onChange={handleChange} defaultValue="light">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        </label>
      </div>
      {/* Set up our context providers to pass the context variables down to the nested components */}
      <ThemeContext.Provider value={theme}>
        {/* It's common to pass the reactive state variable and setters to a context provider. */}
        <CurrentUserContext.Provider value={{
          currentUser,
          setCurrentUser,
        }}>
          <div className={theme === 'dark' ? 'main-dark' : 'main-light'}>
            <h1>useContext</h1>
            <div>
              <a href="/">Return to home</a>
              <p>
                <strong>Format: </strong><code>const value = useContext(SomeContext);</code>
              </p>
            </div>
            <SignInForm />
            <Greeting />
          </div>
        </CurrentUserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
