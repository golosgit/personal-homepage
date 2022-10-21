import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 691px;
  margin-top: 120px;
  overflow-wrap: anywhere;

  @media (max-width: 767px) {
    width: 90vw;
    margin: 48px 0 32px 0;
  }
`;

export const Mail = styled.a`
  text-decoration: none;
  margin: 24px 0 0 0;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  color: ${({ theme }) => theme.color.mineShaft};

  &:hover {
    color: ${({ theme }) => theme.color.scienceBlue};
  }

  @media (max-width: 767px) {
    margin: 12px 0 0 0;
    font-size: 18px;
    line-height: 22px;
  }
`;

export const FooterText = styled.p`
  margin: 24px 0 56px 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: ${({ theme }) => theme.color.mineShaft};

  @media (max-width: 767px) {
    margin: 12px 0 40px 0;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Socials = styled.a`
  display: inline-block;
  margin: 0 24px 109px 0;
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.color.mineShaft};

  &:hover {
    color: ${({ theme }) => theme.color.scienceBlue};
  }

  @media (max-width: 767px) {
    margin: 0 16px 31px 0;
    width: 32px;
    height: 32px;
  }
`;