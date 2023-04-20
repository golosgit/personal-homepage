import { call, select, takeEvery } from "redux-saga/effects";
import { selectTheme, toggleTheme } from "./slice";
import { saveThemeInLocalStorage } from "./themeLocalStorage";

function* saveThemeInLocalStorageHandler() {
  const theme = yield select(selectTheme);
  yield call(saveThemeInLocalStorage, theme);
}

export function* themeSaga() {
  yield takeEvery(toggleTheme.type, saveThemeInLocalStorageHandler);
}
