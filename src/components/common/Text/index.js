import styled from "styled-components";

export const Text = styled.p`
  color: ${({ theme }) => theme.color.mineShaft};
  margin: 8px 0 0 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  @media (max-width:767px) {
    margin: 16px 0 0 0;
  }
`;