const Button = ({ title = "", className = "", onClick = () => {} }) => {
  return (
    <button
      className={`p-2 rounded text-white bg-blue-500 shadow-lg hover:font-bold my-1 mx-3 ${className} `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
export { Button };
