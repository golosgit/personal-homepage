import { SkillsWrapper } from "../../common/SkillsWrapper/styled";
import { Title } from "../../common/Title/styled";
import { ListWrapper, List, ListItem } from "../../common/List/styled";

export const Skillset = () => {
  return (
    <SkillsWrapper>
      <Title>My skillset includes</Title>
      <ListWrapper>
        <List>
          <ListItem>HTML</ListItem>
          <ListItem>CSS BEM convention</ListItem>
          <ListItem>CSS Flexbox</ListItem>
          <ListItem>CSS Grid</ListItem>
          <ListItem>Responsive Web Design</ListItem>
          <ListItem>React</ListItem>
          <ListItem>React Hooks</ListItem>
          <ListItem>React Router</ListItem>
          <ListItem>Redux Saga</ListItem>
          <ListItem>Redux (Toolkit)</ListItem>
          <ListItem>Working with API (fetch, axios)</ListItem>
          <ListItem>Error Handling</ListItem>
          <ListItem>Markdown</ListItem>
          <ListItem>Teamwork</ListItem>
        </List>
      </ListWrapper>
    </SkillsWrapper>
  );
};