import styled, { css } from "styled-components";

export const Title = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  margin: 0;
  padding-bottom: 16px;
  color: ${({ theme }) => theme.colors.text.main};

  @media (max-width: 767px) {
    font-size: 18px;
  }

  @media (max-width: 390px) {
    max-width: 240px;
  }

  ${({ portfolio }) => portfolio && css`
    padding: 0;
    margin: 0 auto;
  `}
`;