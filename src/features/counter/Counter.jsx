import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames/bind";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.scss";

const cx = classNames.bind(styles);
export function Counter() {
  //**** with useSelector/useDispatch your presentational component can also consume redux *******/
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  //**********************************************************************************************/

  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <div className={cx("row")}>
        <button
          className={cx("button")}
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={cx("value")}>{count}</span>
        <button
          className={cx("button")}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={cx("row")}>
        <input
          className={cx("textbox")}
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={cx("button")}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={cx("asyncButton")}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
