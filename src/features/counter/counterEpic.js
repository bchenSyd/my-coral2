import { ofType } from "redux-observable";
import { map, delay } from "rxjs/operators";
import { incrementAsync, incrementByAmount } from "./counterSlice";

const counterEpic = (action$) =>
  action$.pipe(
    ofType(incrementAsync.type),
    delay(1000),
    map(({ payload }) => incrementByAmount(payload))
  );

export default counterEpic;
