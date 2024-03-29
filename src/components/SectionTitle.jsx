import cn from "@/libs/cn";
import PropTypes from "prop-types";

const SectionTitle = ({ className, tagText, titleText }) => {
  return (
    <div className={cn("mx-auto my-16 w-fit text-center", className)}>
      <p className="py-4 italic text-acc-text"> ---{tagText}--- </p>
      <h3 className="border-y-4 border-gray-300 py-3 text-4xl uppercase">
        {titleText}
      </h3>
    </div>
  );
};
SectionTitle.propTypes = {
  className: PropTypes.string,
  tagText: PropTypes.string,
  titleText: PropTypes.string,
};
export default SectionTitle;
