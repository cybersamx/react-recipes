import { UserProps, Profile } from './components/Profile';

export default function App() {
  return (
    <div>
      <Profile
        name="Lana AI"
        imageUrl="https://i.imgur.com/EoZAC5W.jpeg"
        width="bad-number"
        height={128}
        rounded
      />
      <Profile
        name="Lana AI"
        imageUrl="https://i.imgur.com/EoZAC5W.jpeg"
        width="bad-number"
        height={192}
        rounded
      />
      <Profile
        name="Lana AI"
        imageUrl="https://i.imgur.com/EoZAC5W.jpeg"
        width="64"
        height="64"
      />
    </div>
  );
}
