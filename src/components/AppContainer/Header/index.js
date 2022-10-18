import { MyImage, MyInfo, Entry, Name, Description, HireMeLink, Container } from "./styled";
import { ReactComponent as HireMe } from "./images/Hire me Light Motive.svg";
import { SwitchMode } from "./SwitchMode";

export const Header = () => {
  return (
    <>
      <Container>
        <MyImage />
        <SwitchMode />
        <MyInfo>
          <Entry>This is</Entry>
          <Name>Grzegorz Gołos</Name>
          <Description>
            Currently I'm rebranding. Frontend is new to me, but I'm fast learner and looking for a first job in Web
            Development.
          </Description>
          <HireMeLink href="mailto:grzegorz.golos@gmail.com">
            <HireMe />
          </HireMeLink>
        </MyInfo>
      </Container>
    </>
  );
};