import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  height: 26px;
  grid-column: 2;
  grid-row: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ToggleText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  display: inline-block;
  margin: 0 12px 0 0;

  @media (max-width: 767px) {
    visibility: hidden;
    font-size: 0px;
  }
`;

export const ToggleButton = styled.div`
  width: 48px;
  height: 26px;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.text.secondary};
`;

export const MovingCircle = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s linear;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.toggleIcon};
  background-color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: 50%;
  top: 2px;
  left: 2px;

  ${({ toggleButton }) => toggleButton && css`
    left: 24px;
  `}
`;