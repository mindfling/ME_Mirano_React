import { useState } from "react";

export const FilterRadio = () => {
  const [currentType, setCurrentType] = useState("postcards");

  // filter radio menu buttons
  const filterTypes = [
    {
      id: "flower",
      name: "type",
      value: "bouquets",
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

  
  // const handleTypeChange = (e) => {
  //   console.log(e.target, e.target.value);
  // };

  // todo with Redux
  const onChangeHandler = (e) => {
    setCurrentType(() => e.target.value);
    console.log("Radio changed", `e.target.value`, e.target.value);
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
        // onClick={handleTypeChange}
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
