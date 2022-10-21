import { Icon } from "./styled";
import { Container, ErrorLoadingContainer } from "../../common/ErrorLoadingContainer";
import { Text } from "../../common/Text";
import { ReactComponent as LoadingIcon } from "./loading.svg";

export const Loading = () => {
  return (
    <ErrorLoadingContainer>
      <Text>Please wait, projects are being loaded...</Text>
      <Icon>
        <LoadingIcon />
      </Icon>
    </ErrorLoadingContainer>
  );
};