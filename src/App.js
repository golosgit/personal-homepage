import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { AppContainer } from "./components/AppContainer";
import { Footer } from "./components/AppContainer/Footer";
import { Header } from "./components/AppContainer/Header";
import { Portfolio } from "./components/AppContainer/Portfolio";
import { Skillset } from "./components/AppContainer/Skillset";
import { SkillsToLearn } from "./components/AppContainer/SkillsToLearn";
import { light, dark } from "./theme";
import { useTheme } from "./useTheme";

export const App = () => {
  const { theme } = useTheme();

  const setTheme = () => (theme === "light" ? light : dark);

  return (
    <ThemeProvider theme={setTheme()}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Skillset />
        <SkillsToLearn />
        {/* <Portfolio /> */}
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};