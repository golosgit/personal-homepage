import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../GlobalStyle";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import skillsLearned from "./Skills/skillsLearned";
import skillsToLearn from "./Skills/skillsToLearn";
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
