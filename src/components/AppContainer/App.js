import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../GlobalStyle";
import { AppContainer } from ".";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { selectTheme } from "./slice";
import { light, dark } from "./theme";
import skillsLearned from "./Skills/skillsLearned";
import skillsToLearn from "./Skills/skillsToLearn";

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