import {Link, useLocation} from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();

  return (
    <div>
      <h2>Resource not found at {location.pathname}</h2>
      <Link to="/">Return to home</Link>
    </div>
  );
}
