// filter radio menu buttons
// типы товаров в FilterRadio

import { useDispatch } from "react-redux";
import { changeTitle } from "../../redux/filterSlice";

export const FilterRadio = ({
  handleTypeChange, data, type, isChecked
}) => {
  const dispatch = useDispatch();
  
  return (
    <>
      <input
        className="filter__radio"
        type="radio"
        name="type"
        value={data.value}
        id={data.id}
        checked={isChecked}
        onChange={(e) => {
          handleTypeChange(e);
          dispatch(changeTitle({...data}))
        }}
      />
      <label
        className={`filter__label filter__label_${data.id}`}
        htmlFor={data.id}
      >
        {data.title}
      </label>
    </>
  )
};
