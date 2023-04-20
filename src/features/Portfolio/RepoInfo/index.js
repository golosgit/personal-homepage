import { useQuery } from "@tanstack/react-query";
import { Summarization, ShortText } from "../../../common/Summarization";
import { fetchRepositories } from "../../../core/fetchRepositories";
import { Container, GridWrapper, Link, RepoWrapper, ShortTextWrapper, Title } from "./styled";

export const RepoInfo = () => {
  const { data } = useQuery(["repositories"], fetchRepositories);

  return (
    <GridWrapper>
      {data?.map((repository) => (
        <RepoWrapper key={repository?.id}>
          <Container>
            <Title>{repository?.name}</Title>
            <Summarization>{repository?.description}</Summarization>
            <ShortTextWrapper>
              <ShortText>Demo:</ShortText>
              <ShortText links>
                <Link href={repository?.homepage}>{repository?.homepage}</Link>
              </ShortText>
              <ShortText>Code:</ShortText>
              <ShortText links>
                <Link href={repository?.html_url}>{repository?.html_url}</Link>
              </ShortText>
            </ShortTextWrapper>
          </Container>
        </RepoWrapper>
      ))}
    </GridWrapper>
  );
};
