function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card-header">
        <strong>{title}</strong>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;