import { call, select, takeEvery, put, delay } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { getGithubRepositories } from "./getGithubRepositories";
import { 
  fetchGithubRepositories, 
  fetchGithubRepositoriesError, 
  fetchGithubRepositoriesSuccess, 
  selectTheme, 
  toggleTheme
} from "./slice";


function* fetchGithubRepositoriesHandler() {
  try {
    yield delay(1000);
    const repositories = yield call(getGithubRepositories);
    yield put(fetchGithubRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchGithubRepositoriesError());
  }
}

function* saveThemeInLocalStorageHandler() {
  const theme = yield select(selectTheme);
  yield call(saveThemeInLocalStorage, theme);
}

export function* themeSaga() {
  yield takeEvery(fetchGithubRepositories.type, fetchGithubRepositoriesHandler);
  yield takeEvery(toggleTheme, saveThemeInLocalStorageHandler);
}