import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>React Routing</h1>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  );
}
