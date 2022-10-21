import { Container } from "../Error/styled";
import { Text } from "../Portfolio/styled";
import { ReactComponent as LoadingIcon } from "./loading.svg";
import { Icon } from "./styled";

export const Loading = () => {
  return (
    <Container>
      <Text>Please wait, projects are being loaded...</Text>
      <Icon>
        <LoadingIcon />
      </Icon>
    </Container>
  );
};