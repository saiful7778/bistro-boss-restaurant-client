import PropTypes from "prop-types";

const SectionTitle = ({ tagText, titleText }) => {
  return (
    <div className="mx-auto my-16 w-fit text-center">
      <p className="text-acc-text py-4 italic"> ---{tagText}--- </p>
      <h3 className="border-y-4 border-gray-300 py-3 text-4xl uppercase">
        {titleText}
      </h3>
    </div>
  );
};
SectionTitle.propTypes = {
  tagText: PropTypes.string,
  titleText: PropTypes.string,
};
export default SectionTitle;
