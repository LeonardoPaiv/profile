import profile from "../assets/profile.png";

const PhotoFrame = () => {
  return (
    <div
      className={`bg-gradient-to-t from-gray-100/5 to-gray-400/50 sm:h-1/4 md:h-[50%] rounded mb-5
      relative overflow-visible w-full`}
    >
      <img
        src={profile}
        alt="Profile"
        className="h-auto w-full absolute bottom-0 drop-shadow-profile"
      />
    </div>
  );
};

export default PhotoFrame;
