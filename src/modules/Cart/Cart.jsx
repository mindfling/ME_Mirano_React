/* Ваш заказ - Боковая корзина с заказами */
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../CartItem/CartItem";
import "./cart.scss";
import { toggleCart } from "../../redux/cartSlice";
import { openModal } from "../../redux/orderSlice";
import { useEffect, useRef } from "react";
import { formatNumber } from "../../util";


export const Cart = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.cart.isOpen);
  const goodsInCart = useSelector((state) => state.cart.items);
  const count = useSelector((state) => state.cart.items.length);

  const cartRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      cartRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, count]);


  const handlerCartClose = () => {
    dispatch(toggleCart());
  };  

  const handlerOrderOpen = () => {
    dispatch(openModal()); // открыть модальн окно
  };  


  if (!isOpen) return null;

  // const getTotalPrice = (list) =>
  //   list.reduce((acc, item, i, arr) => +acc + +item.price, 0);

  const getTotalPrice = (items) =>
    items.reduce((acc, item) => acc + item.count * item.price, 0);

  return (
    <>
      <section
        className={`cart cart_${isOpen ? "open" : "close"}`} ref={cartRef}
      >
        <div className="cart__container">
          <div className="cart__header">
            <h3 className="cart__title">
              Ваш заказ <b>{count}&nbsp;шт</b>
            </h3>

            <button
              className="cart__closeBtn"
              onClick={handlerCartClose}
              title="Открыть корзину заказов"
            >
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

          <p className="cart__date-delivery">{`сегодня в 14:00`}</p>

          <ul className="cart__list">
            {goodsInCart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </ul>

          <div className="cart__footer">
            <button
              className="cart__order-btn"
              onClick={handlerOrderOpen}
              disabled={!goodsInCart.length}
            >
              Оформить
            </button>

            <p className="cart__price cart__price_total">
              {formatNumber(getTotalPrice(goodsInCart))}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
