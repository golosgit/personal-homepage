import { Button, ErrorMessage, Github, Icon } from "./styled";
import { Text } from "../../common/Text";
import { ErrorLoadingContainer } from "../../common/ErrorLoadingContainer";
import { ReactComponent as DangerIcon } from "./danger.svg";

export const Error = () => {
  return (
    <ErrorLoadingContainer>
      <Icon>
        <DangerIcon />
      </Icon>
      <ErrorMessage>Ooops! Something went wrong...</ErrorMessage>
      <Text>Sorry, failed to load Github projects. You can check them directly on Github.</Text>
      <Github href="https://github.com/golosgit/">
        <Button>Go to Github</Button>
      </Github>
    </ErrorLoadingContainer>
  );
};