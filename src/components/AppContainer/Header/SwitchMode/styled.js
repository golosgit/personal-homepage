import styled, { keyframes } from "styled-components";

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
  position: relative;
  width: 48px;
  height: 26px;
  border-radius: 25px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.text.secondary};
  animation: move 1s linear forwards;

  &:before,
   :after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    animation: move 1s linear forwards;
  }

  &:before {
    top: 2px;
    left: 2px;
  }

  &:after {
    top: 2px;
    right: 2px;
    /* background: ${({ theme }) => theme.colors.link.text}; */
  }
/* 
  &:hover {
    animation: move 1s linear forwards;
  }
*/
  &keyframes move {
    from{
      top: 2px;
    left: 2px;
    }
    to{
      top: 2px;
    right: 2px;
    }
  } 
`;

const move = keyframes`
    from{
    top: 2px;
  left: 2px;
  }
  to{
    top: 2px;
  right: 2px;
  }
`;

export const MovingCircle = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.text.secondary};
  border-radius: 50%;
  top: 2px;
  left: 2px;
  z-index: 100;
  animation: ${move} 1s linear forwards;
  &:hover {
    transition-duration: 1s;
    transform: translateX(22px);
  }
`;