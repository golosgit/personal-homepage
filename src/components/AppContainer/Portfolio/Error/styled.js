import styled from "styled-components";

export const Icon = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text.main};
  width: 48px;
  height: 48px;

  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.text.main};
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin: 24px 0 32px 0;

  @media (max-width: 767px) {
    font-size: 20px;
    margin: 12px 0 16px 0;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.button.background};
  color: ${({ theme }) => theme.colors.button.text};
  width: 168px;
  height: 49px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin: 32px 0 0 0;
  border: 1px solid ${({ theme }) => theme.colors.button.border};
  border-radius: 4px;

  &:hover {
    box-shadow: 
      2px -2px 0px ${({ theme }) => theme.colors.button.shadowHover}, 
      -2px 2px 0px ${({ theme }) => theme.colors.button.shadowHover},
      2px 2px 0px ${({ theme }) => theme.colors.button.shadowHover}, 
      -2px -2px 0px ${({ theme }) => theme.colors.button.shadowHover};
  }

  &.active {
    box-shadow: inset 0px 2px 0px ${({ theme }) => theme.colors.button.shadowSelected};
  }

  @media (max-width: 767px) {
    margin-top: 16px;
  }
`;

export const Github = styled.a`
  text-align: center;
`;