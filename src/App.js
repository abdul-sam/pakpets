import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/dashboard/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
