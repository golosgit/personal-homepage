import { ErrorAndLoadingContainer } from "../../../common/ErrorAndLoadingContainer";
import { Text } from "../../../common/Text";
import { ReactComponent as DangerIcon } from "./danger.svg";
import { Button, ErrorMessage, Github, Icon } from "./styled";

export const Error = () => {
  return (
    <ErrorAndLoadingContainer>
      <Icon>
        <DangerIcon />
      </Icon>
      <ErrorMessage>Ooops! Something went wrong...</ErrorMessage>
      <Text>Sorry, failed to load Github projects. You can check them directly on Github.</Text>
      <Github href="https://github.com/golosgit/">
        <Button>Go to Github</Button>
      </Github>
    </ErrorAndLoadingContainer>
  );
};
