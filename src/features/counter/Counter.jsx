import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames/bind";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  cancel,
  selectCount,
} from "./counterSlice";
import { Button, AsyncButton } from "../button";
import styles from "./Counter.module.scss";

const cx = classNames.bind(styles);
export function Counter() {
  //**** with useSelector/useDispatch your presentational component can also consume redux *******/
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  //**********************************************************************************************/

  const [incrementAmount, setIncrementAmount] = useState("2");
  const [cancelling, setCancelStatus] = useState(false);

  return (
    <div>
      <div className={cx("row")}>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <span className={cx("value")}>{count}</span>
        <Button onClick={() => dispatch(decrement())}>-</Button>
      </div>
      <div className={cx("row")}>
        <input
          className={cx("textbox")}
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </Button>
        <AsyncButton
          noTransition={cancelling}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </AsyncButton>
        <Button
          onClick={() => {
            setCancelStatus(true);
            dispatch(cancel());
          }} /* let epic know don't take emitted value */
        >
          cancel
        </Button>
      </div>
    </div>
  );
}
