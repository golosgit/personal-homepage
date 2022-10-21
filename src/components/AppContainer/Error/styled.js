import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  max-width: 500px;
  margin: 88px auto 0 auto;

  @media (max-width: 767px) {
    margin: 32px auto 0 auto;
  }
`;

export const Icon = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.color.mineShaft};
  width: 48px;
  height: 48px;

  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`;

export const ErrorMessage = styled.p`
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
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  width: 168px;
  height: 49px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin: 32px 0 0 0;
  border: 1px solid rgba(209, 213, 218, 0.1);
  border-radius: 4px;

  &:hover {
    box-shadow: 2px -2px 0px ${({ theme }) => theme.color.anakiwa}, -2px 2px 0px ${({ theme }) => theme.color.anakiwa},
      2px 2px 0px ${({ theme }) => theme.color.anakiwa}, -2px -2px 0px ${({ theme }) => theme.color.anakiwa};
  }

  &.active {
    box-shadow: inset 0px 2px 0px ${({ theme }) => theme.color.parsley};
  }

  @media (max-width: 767px) {
    margin-top: 16px;
  }
`;

export const Github = styled.a`
  text-align: center;
`;