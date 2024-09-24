import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="min-w-full bg-red-100">
      <ul className="flex justify-between align-middle">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about/john/bashar/lukas_is_a_very_funny_guy'}>About</Link>
        </li>
        <li>
          <Link to={'/user/1'}>User1</Link>
        </li>
        <li>
          <Link to={'/user/2'}>User2</Link>
        </li>
        <li>
          <Link to={'/user/3'}>User3</Link>
        </li>
        <li>
          <Link to={'/user/4'}>User4</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
