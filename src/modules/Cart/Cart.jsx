/** Ваш заказ - Боковая корзина с заказами */
import "./cart.scss";

import { goodsArray } from "../../goodsArray";
import { CartItem } from "../CartItem/CartItem";

export const Cart = () => {

  // todo Hack
  const btnClose = () => {
    const cart = document.querySelector(".cart_open");
    cart.classList.remove("cart_open");
  };

  return (
    <>
      <section className="cart cart_nopen">
        <div className="cart__container">
          <div className="cart__header">
            <h3 className="cart__title">Ваш заказ</h3>

            <button className="cart__close" onClick={btnClose}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5"
                  y="5.70715"
                  width="1"
                  height="25"
                  transform="rotate(-45 5 5.70715)"
                  fill="#D17D2F"
                />
                <rect
                  x="22.6777"
                  y="5"
                  width="1"
                  height="25"
                  transform="rotate(45 22.6777 5)"
                  fill="#D17D2F"
                />
              </svg>
            </button>
          </div>

          <p className="cart__date-delivery">сегодня в 14:00</p>

          <ul className="cart__list">

            {goodsArray.map((item) => {
              return (
                <li className="cart__item" key={item.id}>
                  <CartItem data={item} />
                </li>
              );
            })}
            
          </ul>

          <div className="cart__footer">
            <button className="cart__order-btn">Оформить</button>
            <p className="cart__price cart__price_total">0&nbsp;₽</p>
          </div>
        </div>
      </section>
    </>
  );
};
