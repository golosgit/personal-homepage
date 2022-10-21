import styled, { css } from "styled-components";

export const SkillsWrapper = styled.div`
  padding: 32px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 
    0px -2px 50px ${({ theme }) => theme.color.violet},
    0px 16px 58px ${({ theme }) => theme.color.violetDarker};

  ${({ nextList }) =>
    nextList &&
    css`
      margin-top: 72px;

      @media (max-width: 767px) {
        margin-top: 50px;
      }
    `}
`;