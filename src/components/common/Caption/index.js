import styled from "styled-components";

export const Caption = styled.p`
  margin: 68px 0 0 0;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 1.3;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: 767px) {
    margin-top: 12px;
  }
`;