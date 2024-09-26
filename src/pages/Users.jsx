import { useState, useEffect } from 'react';
import UserEl from '../components/UserEl';

const Users = () => {
  const [users, setUsers] = useState([]);

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
    fetchUsers();
  }, []);

  return (
    <div>
      {users?.map((user) => {
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
