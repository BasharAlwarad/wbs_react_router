import { useState, useEffect } from 'react';
import User from '../components/User';

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users?.map((user) => {
        return (
          <ul key={user.id}>
            <User x={user} />
          </ul>
        );
      })}
    </div>
  );
};

export default Users;
