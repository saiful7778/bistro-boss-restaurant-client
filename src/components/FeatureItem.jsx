import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FeatureItem = ({ imgPath, text, path }) => {
  return (
    <div className="relative">
      <img className="h-full w-full" src={imgPath} alt="feature image" />
      <div className="absolute bottom-0 left-0 h-[30%] w-full bg-gradient-to-b from-[#00000005] to-[#000000dd] text-center">
        <Link
          to={path}
          className="mt-8 inline-block drop-shadow-2xl hover:text-accent hover:underline"
        >
          {text}
        </Link>
      </div>
    </div>
  );
};

FeatureItem.propTypes = {
  imgPath: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
};

export default FeatureItem;
