import { useEffect, useRef, useState } from "react";
import { Choices } from "../Choices/Choices";
import "./filter.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../../redux/goodsSlice";
import { debounce, getValidFilters } from "../../util";

export const Filter = () => {
  const dispatch = useDispatch();
  const [openChoice, setOpenChoice] = useState(null);
  const statusGoods = useSelector((state) => state.goods.status); // todo а надо ли это ?

  const [filters, setFilters] = useState({
    "type": "bouquets",
    "minPrice": "",
    "maxPrice": "",
    "category": "",
  });

  const prevFiltesRef = useRef(filters);

  const debouncedFetchGoods = useRef(
    debounce((filters) => {
      dispatch(fetchGoods(filters));
    }, 350)
  ).current;
  // todo задержка времени вызова
  // useRef для сохранения после перезагрузки

  useEffect(() => {
    const prevFiltes = prevFiltesRef.current;
    const validFilters = getValidFilters(filters); // валидируем строку запросов фильтров

    // поменялся ли тип type radio button
    if (prevFiltes.type !== filters.type || statusGoods === 'idle') {
      dispatch(fetchGoods(validFilters)); // вызов сразу
    } else {
      debouncedFetchGoods(validFilters); // вызов с задержкой
    }

    prevFiltesRef.current = filters; // обновляем предыдущее состояние фильтров
  }, [dispatch, debouncedFetchGoods, filters]); // todo исправить здесь statusGoods !!!


  // const handleMyTypeChange = (e) => {
  //   setFilters((filters) => ({ ...filters, type: e.target.value }) );
  // };

  // const handleTypeChange = ({ target }) => {
  //   const { value } = target;
  //   const newFilters = { ...filters, type: value };
  //   setFilters(() => newFilters);
  // };

  const handlePriceChange = ({ target }) => {
    const { name, value } = target;
    const newFilters = { ...filters, [name]: value ? parseInt(value) : "" };
    setFilters(() => newFilters);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const newFilters = { ...filters, [name]: value, minPrice: '', maxPrice: '' }; // обновляем значения фильтров
    setFilters(() => newFilters);
    setOpenChoice(() => -1); // закрываем остальные Choices
  };

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

  // категории букетов в Filter Choices
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

  return (
    <>
      <section className="filter">
        <h2 className="visually-hidden"></h2>
        <div className="container">
          <form className="filter__form">
            <fieldset className="filter__group filter__group_radio">

              {/* 3шт radio buttons */}
              {filterTypes.map((item, index) => (
                <div className="radioitem" key={index}>
                  <input
                    className="filter__radio"
                    type="radio"
                    name="type"
                    value={item.value}
                    id={item.id}
                    checked={item.value === filters.type}
                    onChange={handleChange}
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
                    onChange={handlePriceChange}
                  />
                  <input
                    className="filter__input-price"
                    type="text"
                    name="maxPrice"
                    placeholder="до"
                    value={filters.maxPrice}
                    onChange={handlePriceChange}
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
                          index === 0 ? "filter__type-button_active" : ""
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
