import { useState } from "react";
import { Choices } from "../Choices/Choices";
import "./filter.scss";
import { FilterRadio } from "../FilterRadio/FilterRadio";

// todo filter radio menu buttons

export const Filter = () => {
  const [openChoice, setOpenChoice] = useState(null);

  const [filters, setFilters] = useState({
    type: "bouquets",
    minPrice: '',
    maxPrice: "",
    category: "",
  });

  const onChangeHandler = (e) => {
    console.log(`e.target.value`, e.target.value);
    setFilters((filters) => ({ ...filters, type: e.target.value}) );
    console.log('filters: ', filters);
  };

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
  const [prodTypeArray] = useState([
    "Монобукеты",
    "Авторские букеты",
    "Цветы в коробке",
    "Цветы в корзине",
    "Букеты из сухоцветов",
  ]);
  const [activeTypeIndex, setActiveType] = useState(
    Math.floor(Math.random() * prodTypeArray.length)
  );

  const choicesType = {
    price: 0,
    type: 1,
    none: null,
  };

  // const [openChoice, setOpenChoice] = useState(choicesType.none);

  const handleChoicesToggle = (index) => {
    setOpenChoice(openChoice === index ? choicesType.none : index);
  };

  console.log(`filters.type`, filters.type);

  return (
    <>
      <section className="filter">
        <h2 className="visually-hidden"></h2>
        <div className="container">
          <form className="filter__form">
          
            {/* 3шт radio buttons */}
            <fieldset className="filter__group filter__group_radio">
              {/* <FilterRadio /> */}

              {/* Radio Цветы */}
              {/* Radio Игрушки */}
              {/* Radio Открытки */}

              {filterTypes.map((item, index) => (
                <div className="radioitem" key={index}>
                  <input
                    className="filter__radio"
                    type="radio"
                    name="type"
                    value={item.value}
                    id={item.id}
                    checked={item.value === filters.type}
                    onChange={onChangeHandler}
                  />
                  <label
                    className={"filter__label filter__label_" + item.id}
                    htmlFor={item.id}
                  >
                    {item.text}
                  </label>
                </div>
              ))}

              {/* 
              <input
                className="filter__radio"
                type="radio"
                name="type"
                value="postcards"
                id="postcard"
              />
              <label
                className="filter__label filter__label_postcard"
                htmlFor="postcard"
              >
                Открытки
              </label>
              */}
            </fieldset>

            <fieldset className="filter__group filter__group_choices">
              {/* Цена `price` "0" */}
              <Choices
                buttonLabel="Цены"
                className="choices filter__choices_price"
                isOpen={openChoice === choicesType.price}
                onToggle={() => handleChoicesToggle(0)} // будет срабатывать внутри Choices по клику на эту кнопку
              >
                <fieldset className="filter__price">
                  <input
                    className="filter__input-price"
                    type="text"
                    name="minPrice"
                    placeholder="от"
                  />
                  <input
                    className="filter__input-price"
                    type="text"
                    name="maxPrice"
                    placeholder="до"
                  />
                </fieldset>
              </Choices>

              {/* тип товара `type` "1" */}
              <Choices
                buttonLabel="Тип товара"
                className="choices filter__choices_type"
                isOpen={openChoice === choicesType.type}
                onToggle={() => handleChoicesToggle(1)} // будет срабатывать внутри Choices по клику на эту кнопку
              >
                <ul className="filter__type-list">
                  {prodTypeArray.map((item, index) => (
                    <li className="filter__type-item" key={index}>
                      <button
                        className={`filter__type-button ${
                          index === activeTypeIndex
                            ? "filter__type-button_active"
                            : ""
                        }`}
                        type="button"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </Choices>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
};
