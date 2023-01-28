import styled, { css } from "styled-components";

export const SkillsWrapper = styled.div`
  padding: 32px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: 
    0px -2px 50px ${({ theme }) => theme.colors.container.shadow1},
    0px 16px 58px ${({ theme }) => theme.colors.container.shadow2};

  ${({ nextList }) =>
    nextList &&
    css`
      margin-top: 72px;

      @media (max-width: 767px) {
        margin-top: 50px;
      }
    `}
`;

export const ListWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.container.listBorder};
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 400;
  font-size: 18px;
  list-style: none;
  line-height: 1.4;
  padding: 0;
  margin: 32px 0 0 0;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
  flex-basis: 33.3%;

  &:before {
    content: "";
    margin: 0 16px 2px 0;
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.link.text};

    @media (max-width: 767px) {
      width: 6px;
      height: 6px;
    }
  }

  @media (max-width: 1100px) {
    flex-basis: 50%;
  }

  @media (max-width: 767px) {
    flex-basis: 100%;
  }
`;