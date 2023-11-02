import { mainColor, mainSoftSkills } from "../mock/data";
import Competencia from "./Competencia";

const CompentenciaList = () => {
  return (
    <ul>
      {mainSoftSkills.map((c, i) => (
        <Competencia
          key={i}
          color={mainColor}
          categoria={c.categoria}
          competencia={c.competencia}
          nome={c.nome}
        />
      ))}
    </ul>
  );
};

export default CompentenciaList;
