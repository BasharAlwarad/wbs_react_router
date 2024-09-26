import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { About, User, Users, Product, Products } from './pages';

import Details from './components/Details';
import ProductImage from './components/ProductImage';

import Nav from './components/Nav';

function App() {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState({});

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/users" element={<Users cart={cart} />} />
        <Route path=":id" element={<User />} />
        <Route path="/about/:x/:y/:z" element={<About />} />
        <Route
          path="/products"
          element={<Products cart={cart} setCart={setCart} />}
        />
        <Route
          path="/products/:id"
          element={<Product product={product} setProduct={setProduct} />}
        >
          <Route index element={<Details product={product} />} />
          {/* <Route path="details"  {<Details product={product} />} /> */}
          <Route path="image" element={<ProductImage product={product} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
