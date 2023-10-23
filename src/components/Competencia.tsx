import { IPropsCompetencia } from "../models/competencias";

const Competencia = ({color, categoria, competencia, nome}: IPropsCompetencia) => {
  return (
    <li className="flex text-gray-400 p-4 my-2 items-start">
      <img
        src={`/src/assets/competencias/${color}/${categoria}.svg`}
        alt={categoria}
        className="w-16 mx-4 animate-pulse"
        title={categoria}
      />
      <div>
        <h2 className="font-Dancing text-xl text-orange-400">{nome}</h2>
        <p className="text-justify text-xl">
          {competencia}
        </p>
      </div>
    </li>
  );
};

export default Competencia;
