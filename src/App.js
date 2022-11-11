import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { AppContainer } from "./components/AppContainer";
import { Footer } from "./components/AppContainer/Footer";
import { Header } from "./components/AppContainer/Header";
import { Portfolio } from "./components/AppContainer/Portfolio";
import { Skills } from "./components/AppContainer/Skills";
import { selectTheme } from "./slice";
import { light, dark } from "./theme";
import skillsLearned from "./skillsLearned";
import skillsToLearn from "./skillsToLearn";

export const App = () => {
  const theme = useSelector(selectTheme);

  const chooseTheme = () => theme === "light" ? light : dark;

  return (
    <ThemeProvider theme={chooseTheme()}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Skills 
          title="My skillset includes 🖥️"
          skills={skillsLearned}
        />
        <Skills
          nextList
          title="What I want to learn next 🚀"
          skills={skillsToLearn}
        />
        <Portfolio />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};