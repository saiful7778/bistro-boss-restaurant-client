import PropTypes from "prop-types";

const MenuItem = ({ itemData }) => {
  const { image, price, recipe, name } = itemData || {};
  return (
    <div className="flex gap-2">
      <figure className="rounded-tr-full rounded-b-full overflow-hidden">
        <img src={image} alt="menu item image" />
      </figure>
      <div>
        <h4>{name}</h4>
        <p>{recipe}</p>
      </div>
      <h6>${price}</h6>
    </div>
  );
};
MenuItem.propTypes = {
  itemData: PropTypes.object,
};
export default MenuItem;
