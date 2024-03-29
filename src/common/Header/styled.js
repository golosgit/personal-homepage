import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  margin: 115px 0 64px 0;

  @media (max-width: 767px) {
    grid-template-rows: 1fr;
    margin: 32px 0 48px 0;
  }
`;

export const MyImage = styled.img`
  width: 384px;
  height: 384px;
  margin: 4px 6px 10px 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.container.border};
  grid-column: 1;
  grid-row: 1 / 3;

  @media (max-width: 767px) {
    width: 132px;
    height: 132px;
    grid-row: 1;
  }
`;

export const MyInfo = styled.div`
  grid-column: 2;
  grid-row: 1 / 3;
  margin-left: 66px;

  @media (max-width: 767px) {
    grid-column: 1 / 3;
    grid-row: 2;
    margin-left: 0;
  }
`;

export const Name = styled.h1`
  margin-top: 12px;
  font-weight: 900;
  font-size: 38px;
  color: ${({ theme }) => theme.colors.text.main};

  @media (max-width: 767px) {
    margin-top: 8px;
    font-size: 22px;
  }
`;

export const Description = styled.p`
  margin-top: 35px;
  margin-bottom: 32px;
  max-width: 680px;
  font-weight: 400;
  line-height: 1.4;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: 767px) {
    margin-top: 16px;
    margin-bottom: 24px;
    font-size: 17px;
  }
`;

export const HireMeLink = styled.a`
  background-color: ${({ theme }) => theme.colors.button.background};
  display: flex;
  width: 154px;
  height: 49px;
  border-radius: 4px;
  transition: 0.3s;

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
    width: 138px;
    height: 46px;
  }
`;