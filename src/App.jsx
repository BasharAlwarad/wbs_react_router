import { Routes, Route } from 'react-router-dom';

import Users from './pages/Users';
import About from './pages/About';
import User from './pages/User';

import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/about/:x/:y/:z" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
