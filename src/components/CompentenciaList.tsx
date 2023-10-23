import { competenciasSelecionadas, corSelecinado } from "../mock/data";
import Competencia from "./Competencia";

const CompentenciaList = () => {
  return (
    <ul>
      {competenciasSelecionadas.map((c) => (
        <Competencia
          color={corSelecinado}
          categoria={c.categoria}
          competencia={c.competencia}
          nome={c.nome}
        />
      ))}
    </ul>
  );
};

export default CompentenciaList;
