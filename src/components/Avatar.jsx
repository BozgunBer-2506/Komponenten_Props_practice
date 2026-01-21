function Avatar({ name, imageUrl, size = "medium" }) {
  const getInitials = (n = "") => {
    return n.trim().split(/\s+/).map(w => w[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className={`avatar avatar-${size}`}>
      {imageUrl ? <img src={imageUrl} alt={name} /> : getInitials(name)}
    </div>
  );
}

export default Avatar;