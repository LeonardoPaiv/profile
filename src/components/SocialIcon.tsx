import { icons } from "../mock/data";
import Icon from "./Icon";

const SocialIcon = () => {
  return (
    <span className="flex ml-3 h-14">
      {icons.map((icon, i) => (
        <Icon link={icon.link} src={icon.src} title={icon.title} key={i} />
      ))}
    </span>
  );
};

export default SocialIcon;
