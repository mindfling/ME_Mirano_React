import { useEffect, useRef, useState } from "react";
import { Choices } from "../Choices/Choices";
import "./filter.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../../redux/goodsSlice";
import { debounce, getValidFilters } from "../../util";
import { FilterRadio } from "./FilterRadio";
import { changeTitle } from "../../redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const [openChoice, setOpenChoice] = useState(null);
  const statusGoods = useSelector((state) => state.goods.status); // todo а надо ли это ?

  const [filters, setFilters] = useState({
    type: 'none', // по умолчанию ни один filterType не выбран ищем все товары
    minPrice: "", // минимальная цена в фильтрах
    maxPrice: "", // Максимальная цена в фильтрах
    category: "", // категория букетов
  });

  const prevFiltesRef = useRef(filters);

  const DEBOUNCE_TIMING = 350; // my Default 350 ms

  const debouncedFetchGoods = useRef(
    debounce((filters) => {
      dispatch(fetchGoods(filters));
    }, DEBOUNCE_TIMING)
  ).current;
  // debounce задержка времени вызова
  // useRef для сохранения после перезагрузки


  useEffect(() => {
    const prevFiltes = prevFiltesRef.current;
    const validFilters = getValidFilters(filters); // валидируем строку запросов фильтров

    // поменялся ли тип type radio button
    if (prevFiltes.type !== filters.type || statusGoods === "idle") {
      dispatch(fetchGoods(validFilters)); // вызов сразу
    } else {
      debouncedFetchGoods(validFilters); // вызов с задержкой
    }

    prevFiltesRef.current = filters; // обновляем предыдущее состояние фильтров
  }, [dispatch, debouncedFetchGoods, filters]); // todo исправить здесь statusGoods !!!

  const handleChoicesToggle = (index) => {
    setOpenChoice(openChoice === index ? null : index);
  };

  const choicesType = {
    price: 0,
    type: 1,
    none: null, //? -1
  };

  const handleTypeChange = ({ target }) => {
    const { value } = target;
    const newFilters = { ...filters, type: value, minPrice: "", maxPrice: "" };
    setFilters(() => newFilters);
    setOpenChoice(() => -1); // закрываем остальные Choices

    // todo dispatch(changeTitle());
  };

  const handlePriceChange = ({ target }) => {
    const { name, value } = target;
    const newFilters = {
      ...filters,
      [name]: !isNaN(parseInt(value, 10)) ? value : "", //? что здесь происходит ??
    };
    setFilters(() => newFilters);
  };

  // типы товаров в FilterRadio
  const filterTypes = [
    {
      name: "type",
      value: "bouquets",
      id: "flower",
      title: "Цветы",
    },
    {
      name: "type",
      value: "toys",
      id: "toys",
      title: "Игрушки",
    },
    {
      name: "type",
      value: "postcards",
      id: "postcard",
      title: "Открытки",
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

  return (
    <>
      <section className="filter">
        <h2 className="visually-hidden">Фильтры для выбора товара</h2>
        <div className="container">
          <form className="filter__form">
            <fieldset className="filter__group filter__group_radio">
              {filterTypes.map((item, index) => (
                <FilterRadio
                  key={item.value}
                  handleTypeChange={handleTypeChange}
                  data={item}
                  type={filters.type}
                  index={index}
                  isChecked={item.value === filters.type}
                />
              ))}
            </fieldset>


            <fieldset className="filter__group filter__group_choices">
              <Choices
                buttonLabel="Цены"
                className="choices filter__choices_price"
                isOpen={openChoice === choicesType.price}
                onToggle={() => handleChoicesToggle(choicesType.price)} // будет срабатывать внутри Choices по клику на эту кнопку
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

              <Choices
                buttonLabel="Тип товара"
                className="choices filter__choices_type"
                isOpen={openChoice === choicesType.type}
                onToggle={() => handleChoicesToggle(choicesType.type)} // будет срабатывать внутри Choices по клику на эту кнопку
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
