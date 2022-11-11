import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { themeSaga } from "../src/components/AppContainer/themeSaga";
import themeReducer from "../src/components/AppContainer/slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    themeState: themeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(themeSaga);

export default store;