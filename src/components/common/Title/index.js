import styled, { css } from "styled-components";

export const Title = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 1.2;
  margin: 0;
  padding-bottom: 16px;
  color: ${({ theme }) => theme.colors.text.main};

  @media (max-width: 767px) {
    font-size: 18px;
  }

  @media (max-width: 392px) {
    max-width: 240px;
  }

  @media (max-width: 348px) {
    max-width: 190px;
  }

  ${({ portfolio }) => portfolio && css`
    padding: 0;
    margin: 0 auto;
  `}
`;