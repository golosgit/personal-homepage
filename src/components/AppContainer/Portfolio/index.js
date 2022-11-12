import { useDispatch, useSelector } from "react-redux";
import { Container, Icon } from "./styled";
import { Text } from "../../common/Text";
import { Title } from "../../common/Title";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { RepoInfo } from "./RepoInfo";
import { fetchGithubRepositories, selectErrorState, selectLoadingState } from "../slice";
import { ReactComponent as Github } from "../../common/images/github.svg";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingState);
  const error = useSelector(selectErrorState);

  if (loading) {
    dispatch(fetchGithubRepositories());
  }

  return (
    <Container>
      <Icon>
        <Github />
      </Icon>
      <Title portfolio>Portfolio</Title>
      <Text>My recent projects</Text>
      {loading ? <Loading /> : 
        error ? <Error /> : <RepoInfo />}
    </Container>
  );
};