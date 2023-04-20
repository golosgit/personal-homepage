import { Caption } from "../../common/Caption";
import { SwitchMode } from "./SwitchMode";
import { ReactComponent as HireMe } from "./hire_me.svg";
import image from "./my_image.png";
import { MyImage, MyInfo, Name, Description, HireMeLink, Container } from "./styled";

export const Header = () => {
  return (
    <Container>
      <MyImage src={image} alt="My image" />
      <SwitchMode />
      <MyInfo>
        <Caption>This is</Caption>
        <Name>Grzegorz Gołos</Name>
        <Description>
          Currently I'm rebranding. Frontend is new to me, but I'm fast learner and looking for a first job in Web Development.
        </Description>
        <HireMeLink href="mailto:grzegorz.golos@gmail.com">
          <HireMe />
        </HireMeLink>
      </MyInfo>
    </Container>
  );
};
