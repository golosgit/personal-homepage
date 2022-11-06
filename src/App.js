import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { AppContainer } from "./components/AppContainer";
import { Footer } from "./components/AppContainer/Footer";
import { Header } from "./components/AppContainer/Header";
import { Portfolio } from "./components/AppContainer/Portfolio";
import { Skillset } from "./components/AppContainer/Skillset";
import { SkillsToLearn } from "./components/AppContainer/SkillsToLearn";
import { selectTheme } from "./slice";
import { light, dark } from "./theme";

export const App = () => {
  const theme = useSelector(selectTheme);

  const chooseTheme = () => theme === "light" ? light : dark;

  return (
    <ThemeProvider theme={chooseTheme()}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Skillset />
        <SkillsToLearn />
        <Portfolio />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};