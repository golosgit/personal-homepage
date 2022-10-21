import styled from "styled-components";

export const Icon = styled.span`
  display: inline-block;
  margin-top: 48px;
  width: 160px;
  height: 160px;
  color: ${({ theme }) => theme.color.scienceBlue};

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    margin-top: 32px;
  }
`;