import { listaXp } from "../mock/data";
import XpBar from "./XpBar";
const XpBarList = () => {
  return (
    <div className="flex flex-col justify-around h-fit overflow-auto sm:h-3/4 md:h-3/5">
        {listaXp.map((xp, i) => <XpBar key={i} w={xp.w} ability={xp.ability} level={xp.level} />)}
    </div>
  );
};

export default XpBarList;
