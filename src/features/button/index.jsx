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
export const Button = ({ className, ...rest }) => (
  <BaseButton {...rest} className={classNames(classNames, cx("button"))} />
);

export const AsyncButton = ({ noTransition, ...rest }) => (
  <BaseButton
    {...rest}
    className={classNames(
      cx("asyncButton", { [cx("no-transition")]: noTransition })
    )}
  />
);
