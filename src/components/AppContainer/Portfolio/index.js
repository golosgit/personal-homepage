import { Container, Icon} from "./styled";
import { Text } from "../../common/Text";
import { Title } from "../../common/Title";
import { ReactComponent as Github } from "../../common/images/github.svg";

export const Portfolio = () => {
  return (
    <Container>
      <Icon><Github /></Icon>
      <Title portfolio>Portfolio</Title>
      <Text>My recent projects</Text>
    </Container>
  );
};