import { Choices } from "../Choices/Choices";
import "./filter.scss";
// import "./choices.scss";
// import s from "./Filter.module.scss";

export const Filter = () => {
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
              {/* открыть фильтр Цены */}
              <Choices buttonLabel="Цены" className="choices">
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


              {/* открыть фильтр выбора типа товара из списка */}
              <Choices
                buttonLabel="Тип товара"
                className="choices filter__choices_type"
              >
                <ul className="filter__type-list">
                  <li className="filter__type-item">
                    <button className="filter__type-button" type="button">
                      Монобукеты
                    </button>
                  </li>
                  <li className="filter__type-item">
                    <button className="filter__type-button" type="button">
                      Авторские букеты
                    </button>
                  </li>
                  <li className="filter__type-item">
                    <button className="filter__type-button" type="button">
                      Цветы в коробке
                    </button>
                  </li>
                  <li className="filter__type-item">
                    <button className="filter__type-button filter__type-button_active" type="button">
                      Цветы в корзине
                    </button>
                  </li>
                  <li className="filter__type-item">
                    <button className="filter__type-button" type="button">
                      Букеты из сухоцветов
                    </button>
                  </li>
                </ul>
              </Choices>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
};
