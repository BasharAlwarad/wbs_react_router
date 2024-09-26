import { Link } from 'react-router-dom';

const UserEl = ({ user }) => {
  return (
    <li className="p-2 m-3 border border-2 border-black">
      <Link to={`/${user.id}`}>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </Link>
    </li>
  );
};

export default UserEl;
