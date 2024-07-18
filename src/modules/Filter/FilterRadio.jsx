import { useState } from "react";

export const FilterRadio = () => {
  const [currentType, setCurrentType] = useState("postcards");

  // filter radio menu buttons
  // типы товаров в FilterRadio
  const filterTypes = [
    {
      name: "type",
      value: "bouquets",
      id: "flower",
      text: "Цветы",
    },
    {
      name: "type",
      value: "toys",
      id: "toys",
      text: "Игрушки",
    },
    {
      name: "type",
      value: "postcards",
      id: "postcard",
      text: "Открытки",
    },
  ];
  
  const onChangeHandler = (e) => {
    setCurrentType(() => e.target.value);
  };

  return filterTypes.map((item, index) => (
    <div className="radioitem" key={index}>
      <input
        className="filter__radio"
        type="radio"
        name="type"
        value={item.value}
        id={item.id}
        checked={item.value === currentType}
        onChange={onChangeHandler}
      />
      <label
        className={"filter__label filter__label_" + item.id}
        htmlFor={item.id}
      >
        {item.text}
      </label>
    </div>
  ));
};
