import CompentenciaList from "../CompentenciaList";
import CompetenciaChart from "../CompetenciaChart";

const ComponentsCol = () => {
  return (
    <div className="border-l-2 ml-2 animate-border-gray overflow-auto self-center max-h-full">
      <CompetenciaChart />
      <CompentenciaList />
    </div>
  );
};

export default ComponentsCol;
