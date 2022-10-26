import styled from "styled-components";

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
  line-height: 25px;
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
    margin-right: 16px;
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.link.text};

    @media (max-width: 767px) {
      /* width: 6px;
      height: 6px; */
    }
  }

  @media (max-width: 1100px) {
    flex-basis: 50%;
  }

  @media (max-width: 767px) {
    flex-basis: 100%;
  }
`;