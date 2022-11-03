import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { themeSaga } from "./themeSaga";
import themeReducer from "./slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    themeState: themeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(themeSaga);

export default store;