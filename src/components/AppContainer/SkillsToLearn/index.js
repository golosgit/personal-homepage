import { SkillsWrapper } from "../../common/SkillsWrapper/styled";
import { Title } from "../../common/Title/styled";
import { ListWrapper, List, ListItem } from "../../common/List/styled";

export const SkillsToLearn = () => {
  return (
    <SkillsWrapper nextList>
      <Title>What I want to learn next 🚀</Title>
      <ListWrapper>
        <List>
          <ListItem>Master all skills above</ListItem>
          <ListItem>Typescript</ListItem>
        </List>
      </ListWrapper>
    </SkillsWrapper>
  );
};