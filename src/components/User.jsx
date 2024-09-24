const User = ({ x }) => {
  return (
    <li className="p-2 m-3 border border-2 border-black">
      <h2>{x?.name}</h2>
      <p>{x?.email}</p>
    </li>
  );
};

export default User;
