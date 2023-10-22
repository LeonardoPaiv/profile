
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
        <div className="border-l-2 ml-2 animate-border-gray">
        </div>
      </MainContainer>
    </BackgroundContainer>
  );
}

export default App;
