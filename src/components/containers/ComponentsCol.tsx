import CompentenciaList from "../CompentenciaList";
import CompetenciaChart from "../CompetenciaChart";

const ComponentsCol = () => {
  return (
    <div className="animate-border-gray overflow-auto self-center max-h-full col-span-4">
      <CompetenciaChart />
      <CompentenciaList />
    </div>
  );
};

export default ComponentsCol;
