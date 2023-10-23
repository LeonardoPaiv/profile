import BackgroundContainer from "./components/containers/BackgroundContainer";
import ComponentsCol from "./components/containers/ComponentsCol";
import MainContainer from "./components/containers/MainContainer";
import ProfileCol from "./components/containers/ProfileCol";

function App() {
  return (
    <BackgroundContainer>
      <MainContainer>
        <ProfileCol/>
        <ComponentsCol />
      </MainContainer>
    </BackgroundContainer>
  );
}

export default App;
