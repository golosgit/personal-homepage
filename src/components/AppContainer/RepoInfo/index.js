import { Container, GridWrapper, Link, RepoWrapper, ShortTextWrapper, Title } from "./styled";
import { Summarization, ShortText } from "../../common/Summarization";
import { useGithubRepositories } from "../useGithubRepositories";

export const RepoInfo = () => {
  const allInfo = useGithubRepositories();
  const results = allInfo.result;

  // results.forEach(result => console.log(result.name));

  // for (const result of results) {
  //   console.log(result.name);
  // }

  return (
    <GridWrapper>
      {results.forEach(result => {
        <RepoWrapper>
          <Container>
            <Title>Movies Browser</Title>
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
