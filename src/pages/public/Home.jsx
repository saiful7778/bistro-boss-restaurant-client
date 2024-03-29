import Feature from "@/sections/Feature";
import backGroundImg from "@/assets/img/chef-service.jpg";

const Home = () => {
  return (
    <>
      <Feature />
      <div
        className="relative my-16 h-[600px] w-full bg-cover bg-center bg-no-repeat p-6 sm:p-8"
        style={{ background: `url('${backGroundImg}')` }}
      >
        <div className="absolute left-1/2 top-1/2 z-20 h-fit w-full -translate-x-1/2 -translate-y-1/2 p-2">
          <div className="mx-auto rounded bg-white p-6 text-center md:w-4/5 md:p-20">
            <h3 className="mb-4 font-cinzel text-4xl font-medium">
              Bistro Boss
            </h3>
            <p className="text-gray-600">
              Embark on a culinary journey where innovation meets flavor at our
              interactive restaurant. With cutting-edge technology and
              tantalizing dishes, we redefine dining. Explore, taste, and
              experience the future of gastronomy like never before. Welcome to
              a new era of dining.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-10 h-full w-full bg-gray-900/40 backdrop-blur-sm" />
      </div>
    </>
  );
};

export default Home;
