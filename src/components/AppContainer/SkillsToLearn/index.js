import { SkillsWrapper } from "../../common/SkillsWrapper";
import { Title } from "../../common/Title";
import { ListWrapper, List, ListItem } from "../../common/List";

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