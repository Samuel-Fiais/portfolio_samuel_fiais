import PropTypes from "prop-types";

export const Button = ({ children, onClick, color, expanded }) => {
  const bgColor = color ?? "yellow";

  return (
    <button
      onClick={onClick}
      className={`bg-${bgColor}-400 p-2 border-black border-2 rounded-md text-black lg:hover:shadow-[4px_4px_0px] lg:hover:cursor-pointer ${
        expanded ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  expanded: PropTypes.bool,
};
