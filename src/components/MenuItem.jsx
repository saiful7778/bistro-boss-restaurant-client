import PropTypes from "prop-types";

const MenuItem = ({ itemData }) => {
  const { image, price, recipe, name } = itemData || {};
  return (
    <div className="flex min-[380px]:flex-row flex-col gap-2 items-center min-[380px]:items-start">
      <div className="w-28 h-28 drop-shadow-md rounded-tr-full rounded-b-full overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={image}
          alt="menu item image"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center gap-1">
          <h4 className="font-cinzel text-xl font-medium">{name}</h4>
          <div className="flex-1 border border-dashed border-gray-500"></div>
          <h6 className="text-acc-text font-medium">${price}</h6>
        </div>
        <p className="text-sm leading-4 text-gray-500">{recipe}</p>
      </div>
    </div>
  );
};
MenuItem.propTypes = {
  itemData: PropTypes.object,
};
export default MenuItem;
