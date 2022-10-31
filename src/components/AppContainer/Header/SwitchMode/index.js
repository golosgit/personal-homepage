import { useState } from "react";

import { Wrapper, ToggleText, ToggleButton, MovingCircle } from "./styled";
import { ReactComponent as Icon } from "./toggle-icon.svg";

export const SwitchMode = () => {
  const [toggleOn, setToggleOn] = useState(false);

  const SwitchMode = () => 
    toggleOn === false ? setToggleOn(true) : setToggleOn(false);

  return (
    <Wrapper>
      <ToggleText>Dark mode off</ToggleText>
      <ToggleButton onClick={SwitchMode}>
        <MovingCircle toggleOn={toggleOn}>
          <Icon />
        </MovingCircle>
      </ToggleButton>
    </Wrapper>
  );
};
