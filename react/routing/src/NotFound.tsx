import { useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();

  return (
    <div>
      <h2>Resource not found at {location.pathname}</h2>
      <a href="/">Return to home</a>
    </div>
  );
}
