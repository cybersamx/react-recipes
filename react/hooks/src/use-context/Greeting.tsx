import { CurrentUser, CurrentUserContext } from './context';
import { useContext } from 'react';

export default function Greeting() {
  const { currentUser } = useContext<CurrentUser>(CurrentUserContext);

  return (
    <p>
      {
        (currentUser) ? `Hello ${currentUser}` : 'Please sign in'
      }
    </p>
  );
}
