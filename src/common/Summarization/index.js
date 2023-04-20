import styled, { css } from "styled-components";

export const Summarization = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0 0 24px 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 1.2;
    margin: 0 0 16px 0;
  }

  ${({ footerText }) => footerText && css` 
    margin: 24px 0 56px 0;
    color: ${({ theme }) => theme.colors.text.main};

    @media (max-width: 767px) {
      margin: 12px 0 40px 0;
    }
  `}
`;

export const ShortText = styled(Summarization)`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  display: inline-block;

  ${({ links }) => links && css`
    margin-left: 8px;
  `}
`;