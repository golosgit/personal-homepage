import { ErrorAndLoadingContainer } from "../../../common/ErrorAndLoadingContainer";
import { Text } from "../../../common/Text";
import { ReactComponent as LoadingIcon } from "./loading.svg";
import { Icon } from "./styled";

export const Loading = () => {
  return (
    <ErrorAndLoadingContainer>
      <Text>Please wait, projects are being loaded...</Text>
      <Icon>
        <LoadingIcon />
      </Icon>
    </ErrorAndLoadingContainer>
  );
};
