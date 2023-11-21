import PropTypes from "prop-types";

const Title = ({ tagText, titleText }) => {
  return (
    <div className="text-center w-fit mx-auto my-16">
      <p className="text-acc-text italic py-4"> ---{tagText}--- </p>
      <h3 className="uppercase text-4xl py-3 border-y-4 border-gray-300">
        {titleText}
      </h3>
    </div>
  );
};
Title.propTypes = {
  tagText: PropTypes.string,
  titleText: PropTypes.string,
};
export default Title;
