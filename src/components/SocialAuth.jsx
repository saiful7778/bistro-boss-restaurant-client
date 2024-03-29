import { FaGoogle } from "react-icons/fa";
import PropTypes from "prop-types";

const SocialAuth = ({ handleGoogle }) => {
  return (
    <div className="my-4 flex items-center justify-evenly gap-4">
      <button
        className="rounded-full border border-gray-800 p-2"
        onClick={handleGoogle}
        type="button"
      >
        <FaGoogle size={20} />
      </button>
    </div>
  );
};

SocialAuth.propTypes = {
  handleGoogle: PropTypes.func,
};

export default SocialAuth;
