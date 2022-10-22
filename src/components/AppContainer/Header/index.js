import { MyImage, MyInfo, Name, Description, HireMeLink, Container } from "./styled";
import { Caption } from "../../common/Caption";
import { SwitchMode } from "./SwitchMode";
import { ReactComponent as HireMe } from "./images/hire-me-light-motive.svg";

export const Header = () => {
  return (
    <>
      <Container>
        <MyImage />
        {/* <SwitchMode /> */}
        <MyInfo>
          <Caption>This is</Caption>
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