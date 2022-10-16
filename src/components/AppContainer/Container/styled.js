import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
  margin-top: 115px;
`;

export const MyImage = styled.img`
  width: 384px;
  height: 384px;
  margin: 4px 6px 10px 8px;
  border-radius: 50%;
  background-color: black;
`;

export const MyInfo = styled.div``;

export const Entry = styled.p`
  margin-top: 68px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Name = styled.h1`
  margin-top: 12px;
  font-weight: 900;
  font-size: 38px;
`;

export const Description = styled.p`
  margin-top: 35px;
  margin-bottom: 32px;
  max-width: 640px;
  font-weight: 400;
  line-height: 28px;
  font-size: 20px;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const HireMeLink = styled.a`
  display: flex;
  width: 154px;
  height: 49px;
  border-radius: 4px;

  &:hover {
    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff, -2px -2px 0px #8cc2ff;
  }

  &.active {
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }
`;