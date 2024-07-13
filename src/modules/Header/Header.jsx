import { useDispatch, useSelector } from "react-redux";
import header from "./Header.module.scss";
import classNames from "classnames";
import { toggleCart } from "../../redux/cartSlice";


export const Header = () => {
  const dispatch = useDispatch(); // диспетчер передает действие
  // const cartItems = useSelector(state => state.cart.cart.items);
  // const itemLength = cartItems.length;
  const cartItemsLength = useSelector((state) => state.cart.items.length);


  const handlerCartToggle = () => {
    dispatch(toggleCart()); // закрываем Корзину
  };


  const getRandom = (num) => Math.floor(Math.random() * (num + 1));

  const getHint = () => {
    const hintList = [
      "Букет из роз",
      "Букет из алых роз",
      "Букет красивых роз",
      "Самый красивый букет роз",
      "Тюльпаны на заказ",
      "Букет хризантем",
      "1000000 алых роз",
    ];
    return hintList[getRandom(hintList.length - 1)];
  };

  return (
    <>
      <header className={header.header}>
        <div className={classNames("container", header.container)}>
          <form className={header.form} action="#">
            <input
              className={header.input}
              type="search"
              name="search"
              placeholder={getHint()}
            />

            <button className={header.searchButton} aria-label="начать поиск">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 4.16663C13.3333 4.78496 13.9442 5.70829 14.5625 6.48329C15.3575 7.48329 16.3075 8.35579 17.3967 9.02163C18.2133 9.52079 19.2033 9.99996 20 9.99996M20 9.99996C19.2033 9.99996 18.2125 10.4791 17.3967 10.9783C16.3075 11.645 15.3575 12.5175 14.5625 13.5158C13.9442 14.2916 13.3333 15.2166 13.3333 15.8333M20 9.99996H4.76837e-07"
                  stroke="white"
                />
              </svg>
            </button>
          </form>

          <img
            className={header.logo}
            src="/img/logo.svg"
            title="Mirano Flower Boutique"
            alt="Логотип Mirano Flower Boutique"
          />

          <button
            className={header.cartButton}
            onClick={handlerCartToggle}
            title={`У вас в корзине ${cartItemsLength} товаров`}
          >
            {cartItemsLength}
          </button>
        </div>
      </header>
    </>
  );
};
