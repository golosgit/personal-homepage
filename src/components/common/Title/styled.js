import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  margin: 0;
  padding-bottom: 16px;
  color: ${({ theme }) => theme.color.mineShaft};

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;