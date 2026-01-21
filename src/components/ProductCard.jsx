function ProductCard({ title, price, description, category }) {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p className="price">{price} EUR</p>
      <p className="description">{description}</p>
      <span className="category">{category}</span>
    </div>
  );
}

export default ProductCard;