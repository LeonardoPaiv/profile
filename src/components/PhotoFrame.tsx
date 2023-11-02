import profile from "../assets/profile.png";
import { mainColor } from "../mock/data";
import SocialIcon from "./SocialIcon";

const PhotoFrame = () => {
  return (
    <div
      className={`bg-gradient-to-t from-gray-100/5 to-gray-400/50 sm:h-1/4 md:h-2/5 xl:w-128 rounded
    rounded-r-full rounded-t-full relative overflow-visible mx-auto border-r border-t ${`animate-border-${mainColor}`
    }`}
    >
      <img
        src={profile}
        alt="Profile"
        className="h-auto w-[25rem] absolute bottom-0 drop-shadow-profile" //xl:left-16 md:left-6
      />
      <SocialIcon />
    </div>
  );
};

export default PhotoFrame;
