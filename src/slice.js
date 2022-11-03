import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "themeState",
  initialState: {
    theme: getThemeFromLocalStorage(),
    toggleButton: getThemeFromLocalStorage() === "light" ? false : true,
    loading: true,
    error: false,
  },
  reducers: {
    toggleTheme: state => {
      state.theme === "light" ? state.theme = "dark" : state.theme = "light";
      state.toggleButton = !state.toggleButton;
    },
    fetchGithubRepositories: () => {},
    fetchGithubRepositoriesSuccess: state => {
      state.loading = false;
    },
    fetchGithubRepositoriesError: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { 
  toggleTheme, 
  fetchGithubRepositories, 
  fetchGithubRepositoriesSuccess, 
  fetchGithubRepositoriesError
} = themeSlice.actions;

export const selectThemeState = state => state.themeState;

export const selectTheme = state => selectThemeState(state).theme;
export const selectStateOfToggleButton = state => selectThemeState(state).toggleButton;

export default themeSlice.reducer;