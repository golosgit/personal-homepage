import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "themeState",
  initialState: {
    theme: getThemeFromLocalStorage(),
    toggleButton: getThemeFromLocalStorage() === "light" ? false : true,
    status: "initial",
    repositories: [],
  },
  reducers: {
    toggleTheme: state => {
      state.theme === "light" ? (state.theme = "dark") : (state.theme = "light");
      state.toggleButton = !state.toggleButton;
    },
    fetchGithubRepositories: state => {
      state.status = "loading";
    },
    fetchGithubRepositoriesError: state => {
      state.status = "error";
    },
    fetchGithubRepositoriesSuccess: (state, { payload: repositories }) => {
      state.status = "success";
      state.repositories = repositories;
    },
  },
});

export const { 
  toggleTheme, 
  fetchGithubRepositories, 
  fetchGithubRepositoriesError,
  fetchGithubRepositoriesSuccess
} = themeSlice.actions;

export const selectThemeState = state => state.themeState;

export const selectTheme = state => selectThemeState(state).theme;
export const selectStateOfToggleButton = state => selectThemeState(state).toggleButton;
export const selectStatus = state => selectThemeState(state).status;
export const selectRepositories = state => selectThemeState(state).repositories;

export default themeSlice.reducer;
