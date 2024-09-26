import { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import Details from '../components/Details';
import ProductImage from '../components/ProductImage';

const Product = ({ product, setProduct }) => {
  const { id } = useParams();

  const fetchSingleProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  return (
    <div>
      <div key={product?.id} className="p-2 m-3 border border-2 border-black">
        <div className="flex justify-between">
          <Link to={'details'}>
            <button className="border border-2 border-black ">Details</button>
          </Link>
          <Link to={'image'}>
            <button className="border border-2 border-black ">Image</button>
          </Link>
        </div>
        <Outlet />
        {/* <Details product={product} /> */}
        {/* <ProductImage product={product} /> */}
      </div>
    </div>
  );
};

export default Product;
