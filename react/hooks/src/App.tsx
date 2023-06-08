import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import UseState from './use-state/Home';
import UseReducer from './use-reducer/Home';
import UseEffect from './use-effect/Home';
import UseContext from './use-context/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-context" element={<UseContext />} />
      </Routes>
    </BrowserRouter>
  );
}
