/* Ваш заказ - Боковая корзина с заказами */
import { goodsArray } from "../../goodsArray";
import { CartItem } from "../CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../redux/cartSlice";
import { openModal } from "../../redux/orderSlice";
import "./cart.scss";

// todo Cart content scroll on mobile screen to .cart elem

export const Cart = () => {
  // получаем state из cartSlice
  const isOpen = useSelector((state) => state.cart.isOpen); // селектор получает состояние из Redux
  const dispatch = useDispatch(); // диспетчер передает действие обратно в Redux
  const totalPrice = 123;

  // обработчик закрытия корзины
  const handlerCartClose = () => {
    // dispatch принимает actionCreator() toggleCart
    dispatch(toggleCart());
  };

  // закрываем корзину и переходим к оформлению заказа Order
  const handlerOrderOpen = () => {
    dispatch(openModal());
    // dispatch(toggleCart());
  };

  // если окно isOpen false то просто выходим
  // if (!isOpen) return null;

  // todo for querySelector this .cart success
  return (
    <>
      <section className={`cart cart_${isOpen ? "open" : "close"}`}>
        {isOpen && (
          <>
            <div className="cart__container">
              <div className="cart__header">
                <h3 className="cart__title">Ваш заказ</h3>

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

              <p className="cart__date-delivery">сегодня в 14:00</p>

              <ul className="cart__list">
                {goodsArray.map((item) => {
                  return <CartItem key={item.id} {...item} />;
                })}
              </ul>

              <div className="cart__footer">
                <button className="cart__order-btn" onClick={handlerOrderOpen}>
                  Оформить
                </button>

                <p className="cart__price cart__price_total">
                  {totalPrice}&nbsp;₽
                </p>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};
