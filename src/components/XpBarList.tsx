import { listaXp } from "../mock/data";
import XpBar from "./XpBar";
const XpBarList = () => {
  return (
    <div className="flex flex-col justify-around h-fit overflow-auto sm:h-3/4 md:h-3/5">
        {listaXp.map((xp, i) => <XpBar key={i} w={Math.random() * 100} ability={xp.ability} level={Math.random() * 100} />)}
    </div>
  );
};

export default XpBarList;
