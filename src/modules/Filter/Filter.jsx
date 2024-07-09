import { useState } from "react";
import { Choices } from "../Choices/Choices";
import "./filter.scss";

export const Filter = () => {
  const [prodTypeArray] = useState([
    "Монобукеты",
    "Авторские букеты",
    "Цветы в коробке",
    "Цветы в корзине",
    "Букеты из сухоцветов",
  ]);
  const [activeTypeIndex, setActiveType] = useState(Math.floor(Math.random() * prodTypeArray.length));

  // todo Choices open
  // "price" | "type" | "none"
  const listNames = [
    'price',
    'type',
    'none',
  ]
  // const [activeChoices, setChoices] = useState("none");


  const [openChoice, setOpenChoice] = useState(null);
  
  const handleChoicesToggle = (index) => {
    console.log('openChoice: ', openChoice);
    setOpenChoice(openChoice === index ? null : index); // инвертируем открытый Choices
  };

  return (
    <>
      <section className="filter">
        <h2 className="visually-hidden"></h2>
        <div className="container">
          <form className="filter__form">
            {/* 3шт radio buttons */}
            <fieldset className="filter__group filter__group_radio">
              {/* Цветы */}
              <input
                className="filter__radio"
                type="radio"
                name="type"
                value="bouquets"
                id="flower"
                defaultChecked
              />
              <label
                className="filter__label filter__label_flower"
                htmlFor="flower"
              >
                Цветы
              </label>

              {/* Игрушки */}
              <input
                className="filter__radio"
                type="radio"
                name="type"
                value="toys"
                id="toys"
              />
              <label
                className="filter__label filter__label_toys"
                htmlFor="toys"
              >
                Игрушки
              </label>

              {/* Открытки */}
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
            </fieldset>

            <fieldset className="filter__group filter__group_choices">
              {/* Цена `price` "0" */}
              <Choices
                buttonLabel="Цены"
                className="choices filter__choices_price"
                isOpen={openChoice === 0}
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
                isOpen={openChoice === 1}
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
