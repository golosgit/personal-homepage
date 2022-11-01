import { useTheme } from "../../../../useTheme";
import { Wrapper, ToggleText, ToggleButton, MovingCircle } from "./styled";
import { ReactComponent as Icon } from "./toggle-icon.svg";

export const SwitchMode = () => {
  const { toggleOn, toggleTheme } = useTheme();

  return (
    <Wrapper>
      <ToggleText>Dark mode {toggleOn ? "on" : "off"}</ToggleText>
      <ToggleButton onClick={toggleTheme}>
        <MovingCircle toggleOn={toggleOn}>
          <Icon />
        </MovingCircle>
      </ToggleButton>
    </Wrapper>
  );
};