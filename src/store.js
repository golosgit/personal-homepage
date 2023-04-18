import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../src/components/AppContainer/slice";
import { themeSaga } from "../src/components/AppContainer/themeSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    themeState: themeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(themeSaga);

export default store;
