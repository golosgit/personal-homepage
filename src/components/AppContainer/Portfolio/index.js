import { Container, Icon, Text } from "./styled";
import { ReactComponent as Github } from "../../common/images/github.svg";
import { Title } from "../../common/Title/styled";

export const Portfolio = () => {
  return (
    <Container>
      <Icon><Github /></Icon>
      <Title portfolio>Portfolio</Title>
      <Text>My recent projects</Text>
    </Container>
  );
};