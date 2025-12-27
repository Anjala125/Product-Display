const ProductCard = ({ product }) => (
  <div>
    <h3>{product.name}</h3>
    <img src={product.image} alt={product.name} />
    <p>₹{product.price}</p>
    <button onClick={() => console.log(product.name)}>Add to Cart</button>
  </div>
);

export default ProductCard;