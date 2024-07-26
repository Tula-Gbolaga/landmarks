const Button = ({ title = "", className = "", onClick = () => {} }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 mx-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
 ${className} `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
export { Button };
