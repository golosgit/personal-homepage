import styled, { css } from "styled-components";

export const Summarization = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  margin: 0 0 24px 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 17px;
    margin: 0 0 16px 0;
  }

  ${({ footerText }) => footerText && css` 
    margin: 24px 0 56px 0;
    color: ${({ theme }) => theme.color.mineShaft};

    @media (max-width: 767px) {
      margin: 12px 0 40px 0;
    }
  `}
`;

export const ShortText = styled(Summarization)`
  margin: 0;
  display: inline-block;

  ${({ links }) => links && css`
    margin-left: 8px;
  `}
`;