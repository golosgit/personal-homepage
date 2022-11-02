import { useDispatch, useSelector } from "react-redux";
import { selectToggleButtonState, toggleTheme } from "../../../../slice";
import { Wrapper, ToggleText, ToggleButton, MovingCircle } from "./styled";
import { ReactComponent as Icon } from "./toggle-icon.svg";

export const SwitchMode = () => {
  const dispatch = useDispatch();
  const toggleButton = useSelector(selectToggleButtonState);

  return (
    <Wrapper>
      <ToggleText>Dark mode {toggleButton ? "on" : "off"}</ToggleText>
      <ToggleButton onClick={() => dispatch(toggleTheme())}>
        <MovingCircle toggleButton={toggleButton}>
          <Icon />
        </MovingCircle>
      </ToggleButton>
    </Wrapper>
  );
};