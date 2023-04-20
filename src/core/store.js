import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice";
import { themeSaga } from "./themeSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    themeState: themeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(themeSaga);

export default store;
