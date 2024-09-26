import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// import {Ab} from '@/pages'
// import { About, Users, User, Product, Products } from '@/pages';
import { About, User, Users, Product, Products } from './pages';

// import Users from './pages/Users';
// import About from './pages/About';
// import User from './pages/User';
// import Products from './pages/Products';
// import Product from './pages/Product';

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
        <Route path="/" element={<Users cart={cart} />}>
          <Route path="/user/:id" element={<User />} />
        </Route>
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
