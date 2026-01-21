function Button({
  text,
  variant = "primary",
  size = "medium", 
  disabled = false 
}) {
  const className = `btn btn-${variant} btn-${size}`;

  return (
    <button className={className} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;