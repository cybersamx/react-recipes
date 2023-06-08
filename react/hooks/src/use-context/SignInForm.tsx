import { FormEvent, useContext } from 'react';

import { CurrentUser, CurrentUserContext } from './context';

export default function SignInForm() {
  const { currentUser, setCurrentUser } = useContext<CurrentUser>(CurrentUserContext);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
    };

    setCurrentUser && setCurrentUser(target.name.value);
  }

  if (currentUser) {
    return <>No logout to keep this app super simple. Just do a hard refresh.</>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Name <input type="text" name="name" /></label>
      </p>
      <p>
        <button>Sign In</button>
      </p>
    </form>
  );
}
