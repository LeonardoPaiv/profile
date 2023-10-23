import { competenciasSelecionadas, corSelecinado } from "../mock/data";
import Competencia from "./Competencia";

const CompentenciaList = () => {
  return (
    <ul className="border-l-2 ml-2 animate-border-gray overflow-auto self-center max-h-full">
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
