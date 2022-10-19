import { AppContainer } from "./components/AppContainer";
import { Header } from "./components/AppContainer/Header";
import { Skillset } from "./components/AppContainer/Skillset";

export const App = () => {
  return (
    <>
      <AppContainer>
        <Header />
        <Skillset />
      </AppContainer>
    </>
  );
};