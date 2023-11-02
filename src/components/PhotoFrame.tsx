import profile from "../assets/profile.png";
import { mainColor } from "../mock/data";
import { color } from "../models/competencias";
import SocialIcon from "./SocialIcon";

const PhotoFrame = () => {
  return (
    <div
      className={`bg-gradient-to-t from-gray-100/5 to-gray-400/50 sm:h-1/4 md:h-[35%] rounded sm:w-[90%] xl:w-[80%]
      rounded-r-full rounded-t-full relative overflow-visible mx-auto border-r border-t ${mainColor === color.P ? 'animate-border-purple' : 'animate-border-orange'}`}
    >
      <img
        src={profile}
        alt="Profile"
        className="h-[110%] w-auto absolute bottom-1 drop-shadow-profile"
      />
      <SocialIcon />
    </div>
  );
};

export default PhotoFrame;
