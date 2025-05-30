function Button({ content, className, type, onClick }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
