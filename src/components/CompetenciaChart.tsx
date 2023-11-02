import {
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js';
import { Bar } from "react-chartjs-2";
import { mainColor, mainSoftSkills } from "../mock/data";
import { categoria, color } from "../models/competencias";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const CompetenciaChart = () => {
  const numberAnalista = mainSoftSkills.filter(
    (comp) => comp.categoria === categoria.ANALISTA
  ).length;
  const numberComunicador = mainSoftSkills.filter(
    (comp) => comp.categoria === categoria.COMUNICADOR
  ).length;
  const numberExecutor = mainSoftSkills.filter(
    (comp) => comp.categoria === categoria.EXECUTOR
  ).length;
  const numberPlanejador = mainSoftSkills.filter(
    (comp) => comp.categoria === categoria.PLANEJADOR
  ).length;

  const data: ChartData<"bar"> = {
    labels: [
      categoria.ANALISTA.toLocaleUpperCase(),
      categoria.COMUNICADOR.toLocaleUpperCase(),
      categoria.EXECUTOR.toLocaleUpperCase(),
      categoria.PLANEJADOR.toLocaleUpperCase(),
    ],
    datasets: [
      {
        data: [
          numberAnalista,
          numberComunicador,
          numberExecutor,
          numberPlanejador,
        ],
        label: 'COMPETÊNCIAS',
        backgroundColor: "rgba(240, 240, 240, 0.2)",
        borderColor: mainColor === color.O ? "#ff9c1a" : "#7943bf",
        borderWidth: 1.5,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {

    scales: {
        y: {
            stack: '1'
        }
    }
  }

  return (
      <Bar data={data} options={options}/>
  );
};

export default CompetenciaChart;
