import profile from "../assets/profile.png";
import { corSelecinado } from "../mock/data";
import { color } from "../models/competencias";

const PhotoFrame = () => {
  return (
    <div className={`bg-gradient-to-t from-gray-100/5 to-gray-400/50 sm:h-1/4 md:h-2/5 xl:w-128 rounded
    rounded-r-full rounded-t-full relative overflow-visible mx-auto border-r border-t ${corSelecinado === color.O ? 'animate-border-orange' : 'animate-border-purple'}`}>
      <img
        src={profile}
        alt="Profile"
        className="h-auto w-[25rem] absolute bottom-0 drop-shadow-profile" //xl:left-16 md:left-6
      />
    </div>
  );
};

export default PhotoFrame;
