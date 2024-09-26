import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cart from '../components/Cart';

const Products = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);

  const fetchProdcuts = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  useEffect(() => {
    fetchProdcuts();
  }, []);

  const addToCart = (e) => setCart((pre) => [...pre, e]);

  const removeFromCart = () => {
    if (cart <= 0) {
      return;
    }
    setCart(cart - 1);
  };

  return (
    <div>
      <Cart cart={cart} />
      {products?.map((p) => (
        <div key={p?.id} className="p-2 m-3 border border-2 border-black">
          <h2>{p?.title}</h2>
          <p>{p?.description}</p>
          <Link to={`/products/${p?.id}`}>
            <img className="size-[10%]" src={p?.image} alt={p?.title} />
          </Link>
          <Link to={`/products/${p?.id}`}>
            <button className="border border-2 border-black">
              Read more....
            </button>
          </Link>
          <div className="flex justify-between align-middle">
            <button className="bg-red-600" onClick={() => addToCart(p)}>
              add to cart
            </button>
            <button className="bg-red-600" onClick={removeFromCart}>
              subtract from cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
