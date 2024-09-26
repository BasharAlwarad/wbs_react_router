const Details = ({ product }) => {
  return (
    <div>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
      <p>{product?.category}</p>
    </div>
  );
};

export default Details;
