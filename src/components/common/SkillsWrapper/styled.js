import styled from "styled-components";

export const SkillsWrapper = styled.div`
  margin-top: 64px;
  padding: 32px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 
    0px -2px 50px ${({ theme }) => theme.color.violet}, 
    0px 16px 58px ${({ theme }) => theme.color.violetDarker};
`;