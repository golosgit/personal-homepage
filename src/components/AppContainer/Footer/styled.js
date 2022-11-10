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
  color: ${({ theme }) => theme.colors.text.main};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.link.text};
  }

  @media (max-width: 767px) {
    margin: 12px 0 0 0;
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Socials = styled.a`
  display: inline-block;
  margin: 0 24px 109px 0;
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.colors.text.main};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.link.text};
  }

  @media (max-width: 767px) {
    margin: 0 16px 31px 0;
    width: 32px;
    height: 32px;
  }
`;