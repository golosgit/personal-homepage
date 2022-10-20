import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin-top: 72px;

  @media (max-width: 767px) {
    margin-top: 78px;
  }
`;

export const Icon = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.color.scienceBlue};
  width: 40px;
  height: 40px;
  margin-bottom: 13px;

  @media (max-width: 767px) {
    width: 32px;
    height: 32px;
  }
`;

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