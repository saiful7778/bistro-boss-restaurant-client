import siteLogo from "@/assets/img/site-logo.png";

const Loading = () => {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <img className="w-10 animate-ping" src={siteLogo} alt="loader spinner" />
    </div>
  );
};

export default Loading;
