import XpBar from "./components/XpBar";
import BackgroundContainer from "./components/containers/BackgroundContainer";
import MainContainer from "./components/containers/MainContainer";

function App() {
  return (
    <BackgroundContainer>
      <MainContainer>
        <h1 className="text-blue text-3xl font-bold underline">Hello world!</h1>
        <XpBar w={50} />
      </MainContainer>
    </BackgroundContainer>
  );
}

export default App;
