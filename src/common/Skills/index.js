import { Title } from "../../common/Title";
import { SkillsWrapper, ListWrapper, List, ListItem } from "./styled";

export const Skills = ({ nextList, title, skills }) => {
  return (
    <SkillsWrapper nextList={nextList}>
      <Title>{title}</Title>
      <ListWrapper>
        <List>
          {skills.map((skill) => (
            <ListItem key={skill}>{skill}</ListItem>
          ))}
        </List>
      </ListWrapper>
    </SkillsWrapper>
  );
};
