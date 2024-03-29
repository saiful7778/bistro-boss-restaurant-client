import { Button } from "keep-react";
import PropTypes from "prop-types";

const ProductItem = ({ inputData }) => {
  const { image, title, recipe } = inputData;
  return (
    <div className="text-center">
      <figure className="h-64 w-full overflow-hidden">
        <img
          className="h-full w-full object-cover object-center"
          src={image}
          alt="feature image"
        />
      </figure>
      <div className="space-y-2 bg-amber-100 p-4">
        <h6 className="text-2xl font-semibold">{title}</h6>
        <p className="text-sm text-gray-600">{recipe}</p>
        <Button className="btn mx-auto" size="xs" color="primary">
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  inputData: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  des: PropTypes.string,
};

export default ProductItem;
