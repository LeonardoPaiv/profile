import { ISocialIconLi } from "../models/SocialIconLi";
import SocialIconLi from "./SocialIconLi";

const AppsBar = ({ icons }: { icons: ISocialIconLi[] }) => {
  return (<ul>
    {icons.map(i => <SocialIconLi icon={i}/>)}
  </ul>);
};

export default AppsBar;
