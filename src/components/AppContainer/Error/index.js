import { Button, Container, ErrorMessage, Github, Icon } from "./styled";
import { ReactComponent as DangerIcon } from "./danger.svg";
import { Text } from "../Portfolio/styled";

export const Error = () => {
  return (
    <Container>
      <Icon>
        <DangerIcon />
      </Icon>
      <ErrorMessage>Ooops! Something went wrong...</ErrorMessage>
      <Text>Sorry, failed to load Github projects. You can check them directly on Github.</Text>
      <Github href="https://github.com/golosgit/">
        <Button>Go to Github</Button>
      </Github>
    </Container>
  );
};