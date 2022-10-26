import { Wrapper, ToggleText, ToggleButton, MovingCircle } from "./styled";

export const SwitchMode = () => {
  return (
    <Wrapper>
      <ToggleText>Dark mode off</ToggleText>
      <ToggleButton>
        <MovingCircle></MovingCircle>
      </ToggleButton>
    </Wrapper>
  );
};
