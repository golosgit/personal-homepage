import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  margin-top: 115px;

  @media (max-width: 767px) {
    grid-template-rows: 1fr;
    margin-top: 32px;
  }
`;

export const MyImage = styled.img`
  width: 384px;
  height: 384px;
  margin: 4px 6px 10px 8px;
  border-radius: 50%;
  background-color: black;
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

export const Entry = styled.p`
  margin-top: 68px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0;
  color: ${({ theme }) => theme.color.slateGray};

  @media (max-width: 767px) {
    margin-top: 12px;
  }
`;

export const Name = styled.h1`
  margin-top: 12px;
  font-weight: 900;
  font-size: 38px;

  @media (max-width: 767px) {
    margin-top: 8px;
  }
`;

export const Description = styled.p`
  margin-top: 35px;
  margin-bottom: 32px;
  max-width: 680px;
  font-weight: 400;
  line-height: 28px;
  font-size: 20px;
  color: ${({ theme }) => theme.color.slateGray};

  @media (max-width: 767px) {
    margin-top: 16px;
    margin-bottom: 24px;
  }
`;

export const HireMeLink = styled.a`
  display: flex;
  width: 154px;
  height: 49px;
  border-radius: 4px;

  &:hover {
    box-shadow: 
      2px -2px 0px ${({ theme }) => theme.color.anakiwa}, 
      -2px 2px 0px ${({ theme }) => theme.color.anakiwa}, 
      2px 2px 0px ${({ theme }) => theme.color.anakiwa}, 
      -2px -2px 0px ${({ theme }) => theme.color.anakiwa};
  }

  &.active {
    box-shadow: inset 0px 2px 0px ${({ theme }) => theme.color.parsley};
  }
`;