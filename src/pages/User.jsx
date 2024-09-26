import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();
  console.log(id);
  const fetchOneUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  };

  useEffect(() => {
    fetchOneUser();
  }, [id]);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default User;
