import { ofType } from "redux-observable";
import { of } from "rxjs";
import { map, delay, filter, mergeMap, takeUntil } from "rxjs/operators";
import { incrementAsync, cancel, incrementByAmount } from "./counterSlice";

const counterEpic = (action$) =>
  action$.pipe(
    ofType(incrementAsync.type),
    mergeMap((action) =>
      of(action).pipe(
        delay(1000),
        map(({ payload }) => incrementByAmount(payload)),
        takeUntil(action$.pipe(filter(cancel.match)))
      )
    )
  );

export default counterEpic;
