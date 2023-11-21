import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

const Rating = ({ inputData }) => {
  const renderStar = Array(5)
    .fill(null)
    .map((_, idx) => (
      <div
        key={"star" + idx}
        className={idx + 1 <= inputData ? "text-acc-text" : "text-gray-400"}
      >
        <FaStar size={25} />
      </div>
    ));
  return <div className="flex items-center gap-1">{renderStar}</div>;
};
Rating.propTypes = {
  inputData: PropTypes.number,
};
export default Rating;
