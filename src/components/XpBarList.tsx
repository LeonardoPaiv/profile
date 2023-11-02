import { xpList } from "../mock/data";
import XpBar from "./XpBar";
const XpBarList = () => {
  return (
    <div className="overflow-auto sm:h-3/4 md:h-[60%]">
        {xpList.map((xp, i) => <XpBar key={i} w={xp.w} ability={xp.ability} level={xp.level} />)}
    </div>
  );
};

export default XpBarList;
