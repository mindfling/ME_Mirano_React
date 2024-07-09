import classNames from "classnames";
import { useState } from "react";
import "./choices.scss";
// import s from "./Choices.module.scss";

// Choices in Filter
export const Choices = ({ children, buttonLabel, className, isOpen, onToggle }) => {
  return (
    <>
      <div className={classNames(className)}>
        <button
          className={`choices__btn choices__btn_${isOpen ? "open" : "close"}`}
          type="button"
          onClick={onToggle}
        >
          {buttonLabel}
        </button>

        {isOpen && <div className="choices__box">{children}</div>}
      </div>
    </>
  );
};
