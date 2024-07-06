import classNames from "classnames";
import s from "./Choices.module.scss";


// Choices in Filter
export const Choices = ({ children, buttonLabel, className }) => {
  
  
  return (
    <>
      <div className={classNames("choices", className)}>
        <button className="choices__btn" type="button">
          {buttonLabel}
        </button>

        <div className="choices__box">{children}</div>
      </div>
    </>
  );
};
