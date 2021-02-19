import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import counterReducer from "../features/counter/counterSlice";
import rootEpic from "./epics";

const epicMiddleware = createEpicMiddleware();

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);
