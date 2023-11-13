import { mainColor } from "../mock/data";
import { IPropsXpBar } from "../models/XpBar";
import { color } from "../models/competencias";

const XpBar = ({ w, ability, level }: IPropsXpBar) => {
  return (
    <div className="text-gray-400 my-2 px-3">
      <div className="flex justify-between mx-4 font-extrabold">
        <span className="text-orange-400">{ability}</span>
        <span className="font-mono">Lv <span className="text-orange-400">{level}</span></span>
      </div>
      <div className="w-full h-14 border border-gray-400/75 shadow-lg p-3 skew-x-[350deg]">
        <div
          style={{ width: `${w}%` }}
          className={`h-full bg-xp bg-gradient-to-r 
          ${mainColor === color.P ? 'from-purple-400 via-orange-200 to-purple-400' : 'from-orange-400 via-purple-100 to-orange-400'}
                    animate-gradient shadow-inner`}
        ></div>
      </div>
    </div>
  );
};

export default XpBar;
