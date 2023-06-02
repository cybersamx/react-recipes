import { ChangeEvent, useState } from 'react';

export default function FormUseState() {
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [team, setTeam] = useState('');
  const [read, setRead] = useState(false);

  function handleUsername(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleAge(e: ChangeEvent<HTMLInputElement>) {
    setAge(e.target.value);
  }

  function handleTeam(e: ChangeEvent<HTMLSelectElement>) {
    setTeam(e.target.value);
  }

  function handleRead(e: ChangeEvent<HTMLInputElement>) {
    setRead(e.target.checked);
  }

  return (
    <form>
      <div>
        <label>Username <input type="text" name="username" onChange={handleUsername} /></label>
      </div>
      <div>
        <div>Age</div>
        <label>15-24 <input type="radio" name="age" value="15-24" checked={age === '15-24'} onChange={handleAge} /></label>
        <label>25-34 <input type="radio" name="age" value="25-34" checked={age === '25-34'} onChange={handleAge} /></label>
        <label>35-44 <input type="radio" name="age" value="35-44" checked={age === '35-44'} onChange={handleAge} /></label>
      </div>
      <div>
        <select name="team" value={team} onChange={handleTeam}>
          <option value="it">IT</option>
          <option value="hr">HR</option>
          <option value="ops">Operations</option>
        </select>
      </div>
      <div>
        <label>I have read the terms <input type="checkbox" name="read" onChange={handleRead} /></label>
      </div>
      <div>
        {`Form values (state variables): ${email}, ${age}, ${team}, ${read}`}
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
