import { useSelector } from "react-redux";
import { Container, GridWrapper, Link, RepoWrapper, ShortTextWrapper, Title } from "./styled";
import { Summarization, ShortText } from "../../../common/Summarization";
import { selectRepositories } from "../../slice";

export const RepoInfo = () => {
  const repositories = useSelector(selectRepositories);

  return (
    <GridWrapper>
      {repositories.map(repository => (
        <RepoWrapper key={repository.id}>
          <Container>
            <Title>{repository.name}</Title>
            <Summarization>{repository.description}</Summarization>
            <ShortTextWrapper>
              <ShortText>Demo:</ShortText>
              <ShortText links>
                <Link href={repository.homepage}>{repository.homepage}</Link>
              </ShortText>
              <ShortText>Code:</ShortText>
              <ShortText links>
                <Link href={repository.html_url}>{repository.html_url}</Link>
              </ShortText>
            </ShortTextWrapper>
          </Container>
        </RepoWrapper>
      ))}
    </GridWrapper>
  );
};