import PropTypes from "prop-types";

const MenuItem = ({ inputData }) => {
  const { image, price, recipe, title } = inputData;

  return (
    <div className="flex flex-col items-center gap-2 min-[380px]:flex-row min-[380px]:items-start">
      <div className="h-28 w-28 overflow-hidden rounded-b-full rounded-tr-full drop-shadow-md">
        <img
          className="h-full w-full object-cover object-center"
          src={image}
          alt="menu item image"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between gap-1">
          <h4 className="font-cinzel text-xl font-medium">{title}</h4>
          <div className="flex-1 border border-dashed border-gray-500"></div>
          <h6 className="font-medium text-acc-text">${price}</h6>
        </div>
        <p className="text-sm leading-4 text-gray-500">{recipe}</p>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  inputData: PropTypes.object,
};

export default MenuItem;
