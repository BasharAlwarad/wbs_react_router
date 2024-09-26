const Cart = ({ cart }) => {
  return (
    <div>
      <h1> {cart[0]?.title}</h1>
      <h2> {cart?.length}</h2>
    </div>
  );
};

export default Cart;
