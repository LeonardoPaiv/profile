import CompentenciaList from "./components/CompentenciaList";
import PhotoFrame from "./components/PhotoFrame";
import XpBarList from "./components/XpBarList";
import BackgroundContainer from "./components/containers/BackgroundContainer";
import MainContainer from "./components/containers/MainContainer";

function App() {
  return (
    <BackgroundContainer>
      <MainContainer>
        <div>
        <PhotoFrame/>
        <XpBarList />
        </div>
        <CompentenciaList/>
      </MainContainer>
    </BackgroundContainer>
  );
}

export default App;
