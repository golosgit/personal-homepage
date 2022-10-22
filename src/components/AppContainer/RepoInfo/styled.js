import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export const RepoWrapper = styled.div`
  min-width: 300px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px -2px 50px ${({ theme }) => theme.color.violet},
    0px 16px 58px ${({ theme }) => theme.color.violetDarker};
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
  color: ${({ theme }) => theme.color.scienceBlue};
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
  overflow-wrap: anywhere;
  color: ${({ theme }) => theme.color.scienceBlue};
  border: 1px solid ${({ theme }) => theme.color.scienceBlue02};

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.scienceBlue08};
  }
`;