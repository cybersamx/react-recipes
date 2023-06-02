import { FormEvent } from 'react';

export default function FormSubmit() {
  function handleSubmit(e: FormEvent) {
    // Cancel the default event when a form is submitted, which prevents the
    // browser from reloading the page.
    e.preventDefault();

    // e.target returns the form element. Override with an object with attributes
    // that map to the form elements.
    const target = e.target as typeof e.target & {
      username: { value: string };
      age: { value: string };
      team: { value: string};
      read: { checked: boolean }; // Use checked, not value for checkbox input.
    };

    console.log(`Form values (submit): ${target.username.value}, ${target.age.value}, ${target.team.value}, ${target.read.checked}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username <input type="text" name="username" /></label>
      </div>
      <div>
        <div>Age</div>
        <label>15-24 <input type="radio" name="age" value="15-24" /></label>
        <label>25-34 <input type="radio" name="age" value="25-34" /></label>
        <label>35-44 <input type="radio" name="age" value="35-44" /></label>
      </div>
      <div>
        <select name="team">
          <option value="it">IT</option>
          <option value="hr">HR</option>
          <option value="ops">Operations</option>
        </select>
      </div>
      <div>
        <label>I have read the terms <input type="checkbox" name="read" /></label>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
