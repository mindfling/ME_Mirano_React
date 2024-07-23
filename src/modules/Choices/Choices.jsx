import cn from "classnames";
// import "./choices.scss";
import choices from "./Choices.module.scss";

// Choices in Filter
export const Choices = ({
  children,
  buttonLabel,
  className,
  isOpen,
  onToggle,
}) => {
  return (
    <>
      <div className={cn(className, choices.choices)}>
        <button
          className={cn(choices.btn, choices[`btn_${isOpen ? "open" : "close"}`])}
          type="button"
          onClick={onToggle}
        >
          {buttonLabel}
        </button>

        {isOpen && <div className={choices.box}>{children}</div>}
      </div>
    </>
  );
};
