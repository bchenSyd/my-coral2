import React from "react";
import classNames from "classnames/bind";
import styles from "./button.module.scss";

const cx = classNames.bind(styles);
const BaseButton = ({ onClick, children, className, ...rest }) => (
  <button className={className} onClick={onClick} {...rest}>
    {children}
  </button>
);

// https://reactjs.org/docs/composition-vs-inheritance.html#specialization
// Specialization
export const Button = (props) => (
  <BaseButton {...props} className={cx("button")} />
);
export const AsyncButton = (props) => (
  <BaseButton {...props} className={cx("asyncButton")} />
);
