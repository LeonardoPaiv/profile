import CompentenciaList from "./components/CompentenciaList";
import CompetenciaChart from "./components/CompetenciaChart";
import PhotoFrame from "./components/PhotoFrame";
import XpBarList from "./components/XpBarList";
import BackgroundContainer from "./components/containers/BackgroundContainer";
import MainContainer from "./components/containers/MainContainer";

function App() {
  return (
    <BackgroundContainer>
      <MainContainer>
        <div>
          <PhotoFrame />
          <XpBarList />
        </div>
        <div className="border-l-2 ml-2 animate-border-gray overflow-auto self-center max-h-full">
          <CompetenciaChart />
          <CompentenciaList />
        </div>
      </MainContainer>
    </BackgroundContainer>
  );
}

export default App;
