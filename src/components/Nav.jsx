import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="min-w-full bg-red-100">
      <ul className="flex justify-between align-middle">
        <li>
          <Link to={'/'}>Users</Link>
        </li>
        <li>
          <Link to={'/products'}>Products</Link>
        </li>
        <li>
          <Link to={'/about/john/bashar/lukas_is_a_very_funny_guy'}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
