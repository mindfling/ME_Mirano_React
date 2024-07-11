import React from "react";

export const FilterRadio = () => {
  // filter radio menu buttons

  const filterTypes = [
    {
      id: 'flower',
      name: 'type',
      value: 'bouquets',
      text: 'Цветы',
    },
    {
      name: 'type',
      value: 'toys',
      id: 'toys',
      text: 'Игрушки',
    },
    {
      className: 'filter__radio',
      type: 'radio',
      name: 'type',
      value: 'postcards',
      id: 'postcard',
      text: 'Открытки',
    },
  ]

  const handleTypeChange = (e) => {
    console.log(e.target);
  }
  

  return (<>
    {filterTypes.map((item) => (<>
      <input
        className="filter__radio"
        type="radio"
        name="type"
        value={item.value}
        id={item.id}
        checked={item.value === 'bouquets'}
        onClick={handleTypeChange}
      />
      <label className={"filter__label filter__label_" + item.id} htmlFor={item.id}>
        {item.text}
      </label>
    </>))}
    </>);
};
