import { ofType } from "redux-observable";
import { map, delay, filter } from "rxjs/operators";
import { incrementAsync, incrementByAmount } from "./counterSlice";

const counterEpic = (action$) =>
  action$.pipe(
    //  ofType(incrementAsync.type), // this works, verified;
    filter(incrementAsync.match),
    delay(1000),
    map(({ payload }) => incrementByAmount(payload))
  );

export default counterEpic;
