import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 64px;
  padding: 32px;
  border-radius: 4px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  background-color: ${({ theme }) => theme.color.white};
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  margin: 0;
  padding-bottom: 16px;
  color: ${({ theme }) => theme.color.mineShaft};
`;

export const ListWrapper = styled.div`
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.color.iron};
`;

export const List = styled.ul`
  color: ${({ theme }) => theme.color.slateGray};
  font-weight: 400;
  font-size: 18px;
  list-style: none;
  line-height: 25px;
  padding: 0;
  column-count: 3;
  margin: 32px 0 0 0;

  @media (max-width: 1100px) {
    column-count: 2;
  }

  @media (max-width: 767px) {
    column-count: 1;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 8px;

  &:before {
    content: "";
    margin-right: 16px;
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.scienceBlue};
  }
`;
