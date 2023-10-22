import { IPropsXpBar } from "../models/XpBar";

const XpBar = ({ w, ability, level }: IPropsXpBar) => {
  return (
    <div className="text-gray-400 my-2">
      <div className="flex justify-between mx-4 font-extrabold font-chakra">
        <span className="text-orange-400">{ability}</span>
        <span className="font-mono">Lv <span className="text-orange-400">{level}</span></span>
      </div>
      <div className="w-full h-14 border border-gray-400/75 shadow-lg rounded-full p-2">
        <div
          style={{ width: `${w}%` }}
          className={`h-full bg-xp bg-gradient-to-r from-orange-400 via-orange-200 to-orange-400
                    animate-gradient shadow-inner rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default XpBar;
