import PropTypes from "prop-types";

export const Card = ({
  title,
  description,
  actions,
  color,
  notHoverEffect,
}) => {
  const bgColor = color ?? "cyan";
  return (
    <div
      className={`flex flex-col gap-4 w-96 bg-${bgColor}-400 p-4 text-3xl text-center rounded-md border-black border-2 ${
        !notHoverEffect ? "hover:shadow-[4px_4px_0px]" : ""
      }`}
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-lg text-start">{description}</p>
      <div className="flex justify-center gap-4">{actions}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.element),
  color: PropTypes.string,
  notHoverEffect: PropTypes.bool,
};
