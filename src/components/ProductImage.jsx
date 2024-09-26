const ProductImage = ({ product }) => {
  return (
    <div>
      <img className="size-[10%]" src={product?.image} alt={product?.title} />
      <button className="border border-2 border-black">Read more....</button>
    </div>
  );
};

export default ProductImage;
