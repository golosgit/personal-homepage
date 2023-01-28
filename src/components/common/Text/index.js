import styled from "styled-components";

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text.main};
  margin: 8px 0 0 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;

  @media (max-width:767px) {
    margin: 16px 0 24px 0;
    font-size: 17px;
  }
`;