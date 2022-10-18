import styled from "styled-components";

export const Wrapper = styled.div`
  height: 26px;
  grid-column: 2;
  grid-row: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ToggleText = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  display: inline-block;
  margin: 0 12px 0 0;

  @media (max-width: 767px) {
    visibility: hidden;
  }
`;

export const ToggleButton = styled.button`
  width: 48px;
  height: 26px;
  cursor: pointer;
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.color.slateGray};
`;