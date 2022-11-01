import { useState, useEffect } from "react";
import { getThemeFromLocalStorage, saveThemeInLocalStorage } from "./themeLocalStorage";

export const useTheme = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage);
  const [toggleOn, setToggleOn] = useState(theme === "light" ? false : true);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setToggleOn(true);
      saveThemeInLocalStorage("dark");
    } else {
      setTheme("light");
      setToggleOn(false);
      saveThemeInLocalStorage("light");
    }
  };

  useEffect(() => {
    const localTheme = getThemeFromLocalStorage();
    if (localTheme === "light") {
      setTheme("light");
      setToggleOn(false);
    } else {
      setTheme("dark");
      setToggleOn(true);
    }
  });

  console.log(theme);

  return { theme, toggleOn, toggleTheme };
};