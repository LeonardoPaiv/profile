import PhotoFrame from "../PhotoFrame";
import SocialIcon from "../SocialIcon";
import XpBarList from "../XpBarList";

const ProfileCol = () => {
  return (
    <div className="flex flex-col col-span-2">
      <PhotoFrame />
      <SocialIcon />
      <XpBarList />
    </div>
  );
};

export default ProfileCol;
