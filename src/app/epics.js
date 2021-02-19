import { combineEpics } from "redux-observable";
import counterEpic from "../features/counter/counterEpic";

const rootEpic = combineEpics(counterEpic);

export default rootEpic;
