import { Container, GridWrapper, Link, RepoWrapper, ShortTextWrapper, Title } from "./styled";
import { Summarization, ShortText } from "../../common/Summarization";

export const RepoInfo = (result) => {
  const results = result.result;

  // results.forEach(repo => console.log(repo.name));

  return (
    <GridWrapper>
      {results.forEach(repo => {
        <RepoWrapper>
          <Container>
            <Title>{repo.name}</Title>
            <Summarization>
              Project description, e.g. website where you can search for favourite movies and people. Project
              description, e.g. website where you can search.
            </Summarization>
            <ShortTextWrapper>
              <ShortText>Demo:</ShortText>
              <ShortText links>
                <Link>https://link.demo.com</Link>
              </ShortText>
              <ShortText>Code:</ShortText>
              <ShortText links>
                <Link>https://link.code.com</Link>
              </ShortText>
            </ShortTextWrapper>
          </Container>
        </RepoWrapper>
      })}
    </GridWrapper>
  );
};