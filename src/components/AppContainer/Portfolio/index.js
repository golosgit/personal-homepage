import { useQuery } from "@tanstack/react-query";
import { Text } from "../../common/Text";
import { Title } from "../../common/Title";
import { ReactComponent as Github } from "../../common/images/github.svg";
import { fetchRepositories } from "../fetchRepositories";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { RepoInfo } from "./RepoInfo";
import { Container, Icon } from "./styled";

export const Portfolio = () => {
  const { isLoading, error } = useQuery(["repositories"], fetchRepositories);

  return (
    <Container>
      <Icon>
        <Github />
      </Icon>
      <Title portfolio>Portfolio</Title>
      <Text>My recent projects</Text>
      {isLoading ? <Loading /> : 
        error ? <Error /> : <RepoInfo />
      }
    </Container>
  );
};
