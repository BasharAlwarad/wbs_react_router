import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import SinglePoke from './pages/SinglePoke';

import Nav from './components/Nav';

function App() {
  return (
    <div className="container mx-auto min-h-[80vh] bg-red-100">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon/:name" element={<SinglePoke />} />
      </Routes>
    </div>
  );
}

export default App;
