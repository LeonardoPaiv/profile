import PhotoFrame from "../PhotoFrame";
import XpBarList from "../XpBarList";

const ProfileCol = () => {
  return (
    <div className="flex flex-col justify-around">
      <PhotoFrame />
      <XpBarList />
    </div>
  );
};

export default ProfileCol;
