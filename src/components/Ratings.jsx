import { Rating } from "keep-react";
import PropTypes from "prop-types";

const Ratings = ({ inputData, itemKey }) => {
  const renderStar = Array(5)
    .fill(null)
    .map((_, idx) => {
      if (idx + 1 <= inputData) {
        return (
          <Rating.Star
            key={itemKey + "review-star" + idx}
            className="fill-acc-text"
            filledType="fill"
          />
        );
      } else {
        return (
          <Rating.Star
            key={itemKey + "review-star" + idx}
            className="fill-acc-text"
            filledType="regular"
          />
        );
      }
    });
  return (
    <Rating size={30} className="space-x-1">
      {renderStar}
    </Rating>
  );
};

Ratings.propTypes = {
  inputData: PropTypes.number,
  itemKey: PropTypes.string,
};

export default Ratings;
