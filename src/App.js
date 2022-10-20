import { AppContainer } from "./components/AppContainer";
import { Footer } from "./components/AppContainer/Footer";
import { Header } from "./components/AppContainer/Header";
import { Portfolio } from "./components/AppContainer/Portfolio";
import { Skillset } from "./components/AppContainer/Skillset";
import { SkillsToLearn } from "./components/AppContainer/SkillsToLearn";

export const App = () => {
  return (
    <>
      <AppContainer>
        <Header />
        <Skillset />
        <SkillsToLearn />
        <Portfolio />
        <Footer />
      </AppContainer>
    </>
  );
};