import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

import Nav from './components/Nav';

function App() {
  return (
    <div className="container mx-auto min-h-[80vh] bg-red-100">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
