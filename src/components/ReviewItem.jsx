import PropTypes from "prop-types";
import { FaQuoteLeft } from "react-icons/fa";
import Rating from "./utility/Rating";

const ReviewItem = ({ inputData }) => {
  const { name, details, rating } = inputData || {};
  return (
    <div className="text-center flex flex-col gap-4 md:gap-8 items-center w-4/5 mx-auto">
      <Rating inputData={rating} />
      <div className="text-gray-800">
        <FaQuoteLeft size={60} />
      </div>
      <p className="text-gray-600">{details}</p>
      <h6 className="text-acc-text uppercase text-xl font-medium">{name}</h6>
    </div>
  );
};
ReviewItem.propTypes = {
  inputData: PropTypes.object,
};
export default ReviewItem;
