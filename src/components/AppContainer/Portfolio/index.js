import { Container, Icon } from "./styled";
import { Text } from "../../common/Text";
import { Title } from "../../common/Title";
import { Loading } from "../Loading";
import { Error } from "../Error";
import { useGithubRepositories } from "../useGithubRepositories";
import { RepoInfo } from "../RepoInfo";
import { ReactComponent as Github } from "../../common/images/github.svg";

export const Portfolio = () => {
  const { result, status, requestStatus } = useGithubRepositories();

  if (status === requestStatus.loading) {
    return (
      <Container>
        <Icon>
          <Github />
        </Icon>
        <Title portfolio>Portfolio</Title>
        <Text>My recent projects</Text>
        <Loading />
      </Container>
    );
  } else if (status === requestStatus.error) {
    return (
      <Container>
        <Icon>
          <Github />
        </Icon>
        <Title portfolio>Portfolio</Title>
        <Text>My recent projects</Text>
        <Error />
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Icon>
          <Github />
        </Icon>
        <Title portfolio>Portfolio</Title>
        <Text>My recent projects</Text>
      </Container>
      <RepoInfo result={result}/>
    </>
  );
};