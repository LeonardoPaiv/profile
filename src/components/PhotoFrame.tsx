import profile from "../assets/profile.png";

const PhotoFrame = () => {
  return (
    <div className="bg-gradient-to-t from-gray-100/5 to-gray-400/50 sm:h-1/4 md:h-2/5 xl:w-128 rounded-full relative overflow-visible mx-auto border-r border-t animate-border-orange">
      <img
        src={profile}
        alt="Profile"
        className="h-auto w-[26rem] absolute bottom-0 xl:left-16 md:left-6"
      />
    </div>
  );
};

export default PhotoFrame;
