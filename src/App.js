import { AppContainer } from "./components/AppContainer";
import { Header } from "./components/AppContainer/Header";
import { Skillset } from "./components/AppContainer/Skillset";
import { SkillsToLearn } from "./components/AppContainer/SkillsToLearn";

export const App = () => {
  return (
    <>
      <AppContainer>
        <Header />
        <Skillset />
        <SkillsToLearn />
      </AppContainer>
    </>
  );
};