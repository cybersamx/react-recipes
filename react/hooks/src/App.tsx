import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import Home from './Home';
import UseState from './use-state/Home';
import UseReducer from './use-reducer/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-reducer" element={<UseReducer />} />
      </Routes>
    </BrowserRouter>
  );
}
