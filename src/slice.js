import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: getThemeFromLocalStorage(),
    toggleButton: false,
    loading: false,
  },
  reducers: {
    toggleTheme: state => {
      state.theme === "light" ? state.theme = "dark" : state.theme = "light";
      state.toggleButton = !state.toggleButton;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = state => state.theme;
export const selectToggleButtonState = state => state.toggleButton;

export default themeSlice.reducer;