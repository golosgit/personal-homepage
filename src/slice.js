import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "themeState",
  initialState: {
    theme: getThemeFromLocalStorage(),
    toggleButton: getThemeFromLocalStorage() === "light" ? false : true,
    loading: true,
    error: false,
    repositories: [],
  },
  reducers: {
    toggleTheme: state => {
      state.theme === "light" ? (state.theme = "dark") : (state.theme = "light");
      state.toggleButton = !state.toggleButton;
    },
    fetchGithubRepositories: () => {},
    fetchGithubRepositoriesError: state => {
      state.loading = false;
      state.error = true;
    },
    fetchGithubRepositoriesSuccess: (state, { payload: repositories }) => {
      state.loading = false;
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
export const selectLoadingState = state => selectThemeState(state).loading;
export const selectErrorState = state => selectThemeState(state).error;
export const selectRepositories = state => selectThemeState(state).repositories;

export default themeSlice.reducer;
