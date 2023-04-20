import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Footer } from "../common/Footer";
import { Header } from "../common/Header";
import { Portfolio } from "../features/Portfolio";
import { Skills } from "../common/Skills";
import skillsLearned from "../common/Skills/skillsLearned";
import skillsToLearn from "../common/Skills/skillsToLearn";
import { GlobalStyle } from "./GlobalStyle";
import { selectTheme } from "./slice";
import { AppContainer } from "./styled";
import { light, dark } from "./theme";

export const App = () => {
  const theme = useSelector(selectTheme);

  const chooseTheme = () => (theme === "light" ? light : dark);

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
