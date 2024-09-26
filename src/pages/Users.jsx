import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserEl from '../components/UserEl';
import Cart from '../components/Cart';

const Users = ({ cart }) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // for (let index = 0; index < 1000000000000; index++) {}
    fetchUsers();
    // const navigateTOProducts = setTimeout(() => {
    //   navigate('/products');
    // }, 2000);
    // return () => {
    //   clearTimeout(navigateTOProducts);
    // };
  }, []);
  const handleClick = () => {
    navigate('/products');
  };

  return !users ? (
    <div className="flex flex-col gap-4 w-52">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full skeleton shrink-0"></div>
        <div className="flex flex-col gap-4">
          <div className="w-20 h-4 skeleton"></div>
          <div className="h-4 skeleton w-28"></div>
        </div>
      </div>
      <div className="w-full h-32 skeleton"></div>
    </div>
  ) : (
    <div>
      {/* <Link to={"/products"}> */}
      <button onClick={handleClick}>Go to products</button>
      {/* </Link> */}
      <Cart cart={cart} />
      {users.map((user) => {
        return (
          <ul key={user.id}>
            <UserEl user={user} />
          </ul>
        );
      })}
    </div>
  );
};

export default Users;
