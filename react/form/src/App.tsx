import FormSubmit from './FormSubmit';
import FormUseState from './FormUseState';

export default function App() {
  return (
    <div>
      <h1>React Form</h1>
      <h2>Form Submit</h2>
      <div>
        <FormSubmit />
      </div>
      <h2>Form Using State Variables</h2>
      <div>
        <FormUseState />
      </div>
    </div>
  );
}
