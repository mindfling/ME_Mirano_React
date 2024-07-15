import { useEffect, useState } from "react";
import { Choices } from "../Choices/Choices";
import "./filter.scss";
import { useDispatch } from "react-redux";
import { fetchGoods } from "../../redux/goodsSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const [openChoice, setOpenChoice] = useState(null);

  const [filters, setFilters] = useState({
    type: "bouquets",
    minPrice: "0",
    maxPrice: "2500",
    category: "",
  });

  // * my handler
  // const handleTypeChange = (e) => {
  //   setFilters((filters) => ({ ...filters, type: e.target.value }) );
  // };


  // * Maks handler
  const handleTypeChange = ({ target }) => {
    const { value } = target;
    const newFilters = { ...filters, type: value };
    setFilters(() => newFilters);
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


  const choicesType = {
    price: 0,
    type: 1,
    none: null,
  };

  const handleChoicesToggle = (index) => {
    setOpenChoice(openChoice === index ? null : index);
  };

  useEffect(() => {
    dispatch(fetchGoods(filters));
  });

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
                    onChange={handleTypeChange}
                  />
                  <label
                    className={"filter__label filter__label_" + item.id}
                    htmlFor={item.id}
                  >
                    {item.text}
                  </label>
                </div>
              ))}
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
                    value={filters.minPrice}
                  />
                  <input
                    className="filter__input-price"
                    type="text"
                    name="maxPrice"
                    placeholder="до"
                    value={filters.maxPrice}
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
                          index === 0
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
