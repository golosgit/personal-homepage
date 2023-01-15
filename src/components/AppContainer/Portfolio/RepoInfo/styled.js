import styled from "styled-components";

export const GridWrapper = styled.div`
  margin-top: 24px;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export const RepoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 4px;
  transition: 0.3s;
  border: 6px solid ${({ theme }) => theme.colors.container.border};
  box-shadow: 0px -2px 50px ${({ theme }) => theme.colors.container.shadow1},
    0px 16px 58px ${({ theme }) => theme.colors.container.shadow2};

  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.container.borderHover};
  }
`;

export const Container = styled.div`
  margin: 56px;

  @media (max-width: 767px) {
    margin: 24px;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.text.repoName};
  margin: 0 0 24px 0;

  @media (max-width: 767px) {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const ShortTextWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.link.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.link.border};
  transition: 0.3s;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.link.borderHover};
  }
`;