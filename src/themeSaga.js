import { call, select, takeEvery } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { selectTheme } from "./slice";

function* saveThemeInLocalStorageHandler() {
  const theme = yield select(selectTheme);
  yield call(saveThemeInLocalStorage, theme);
}

export function* themeSaga() {
  yield takeEvery("*", saveThemeInLocalStorageHandler);
}