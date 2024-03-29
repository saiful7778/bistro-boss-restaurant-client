import PropTypes from "prop-types";

const PageBanner = ({ bgImg, title, des }) => {
  return (
    <div
      className="relative h-[600px] w-full bg-cover bg-center bg-no-repeat p-6 font-cinzel uppercase text-white sm:p-8"
      style={{ background: `url('${bgImg}')` }}
    >
      <div className="absolute left-1/2 top-1/2 z-20 h-fit w-full -translate-x-1/2 -translate-y-1/2 p-2">
        <div className="mx-auto rounded bg-[#15151560] p-6 text-center backdrop-blur-sm md:w-4/5 md:p-20">
          <h3 className="mb-4 text-5xl font-bold ">{title}</h3>
          <p className="font-semibold">{des}</p>
        </div>
      </div>
      <div className="absolute inset-0 z-10 h-full w-full bg-gray-900/40 backdrop-blur-sm" />
    </div>
  );
};

PageBanner.propTypes = {
  bgImg: PropTypes.string,
  title: PropTypes.string,
  des: PropTypes.string,
};

export default PageBanner;
