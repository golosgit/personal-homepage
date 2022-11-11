import { SkillsWrapper, ListWrapper, List, ListItem } from "./styled";
import { Title } from "../../common/Title";

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