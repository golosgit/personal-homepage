import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Icon } from "./styled";
import { Text } from "../../common/Text";
import { Title } from "../../common/Title";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { RepoInfo } from "./RepoInfo";
import { fetchGithubRepositories, selectStatus } from "../slice";
import { ReactComponent as Github } from "../../common/images/github.svg";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchGithubRepositories());
  }, [dispatch]);

  return (
    <Container>
      <Icon>
        <Github />
      </Icon>
      <Title portfolio>Portfolio</Title>
      <Text>My recent projects</Text>
      {status === "initial" ? "" :
        status === "loading" ? <Loading /> : 
          status === "error" ? <Error /> : <RepoInfo />}
    </Container>
  );
};