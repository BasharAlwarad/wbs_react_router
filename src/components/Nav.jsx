import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className="flex justify-evenly items-center space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
