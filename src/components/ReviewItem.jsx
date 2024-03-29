import PropTypes from "prop-types";
import { FaQuoteLeft } from "react-icons/fa";
import Ratings from "./Ratings";

const ReviewItem = ({ inputData }) => {
  const { fullName, review, rating } = inputData || {};
  return (
    <div className="mx-auto flex w-4/5 flex-col items-center gap-4 text-center md:gap-8">
      <Ratings inputData={rating} itemKey={fullName} />
      <div className="text-gray-800">
        <FaQuoteLeft size={60} />
      </div>
      <p className="text-gray-600">{review}</p>
      <h6 className="text-xl font-medium uppercase text-acc-text">
        {fullName}
      </h6>
    </div>
  );
};
ReviewItem.propTypes = {
  inputData: PropTypes.object,
};
export default ReviewItem;
