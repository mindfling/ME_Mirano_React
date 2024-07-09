import classNames from "classnames";
import s from "./Order.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/orderSlice";

// Order с условием
export const Order = () => {
  const dispatch = useDispatch(); // диспетчер отправляет действие в Redux
  const isOrdered = false;
  const isOpen = useSelector((state) => state.order.isOpen); // селектор получает состояние из Redux store

  const handlerClose = (e) => {
    // !ЗАДАТЬ ВОПРОС ПО КЛАССУ
    if (e.target.matches(`.${s.order}`)) {
      dispatch(closeModal());
    }

    console.log("handlerClose in Order");
  };

  if (!isOpen) return null;

  const orderAmount = 2100;
  const orderHashNumber = "971f365a-caa1-4cdb-9446-bad2eff047e1";

  return (
    <>
      <div className={s.order} onClick={handlerClose}>
        <div className={s.wrapper}>
          {isOrdered ? (
            <>
              <h2 className={s.title}>Заказ оформлен!</h2>
              <p className={s.id}>Ваш номер заказа: {orderHashNumber}</p>
            </>
          ) : (
            <>
              <h2 className={s.title}>Оформить заказ</h2>
              <form className={s.form} id="s">
                <fieldset className={s.fieldset}>
                  <legend className={s.legend}>Данные заказчика</legend>
                  <div className={s["input-group"]}>
                    <input
                      className={s.input}
                      type="text"
                      name="name-buyer"
                      placeholder="Имя"
                    />
                    <input
                      className={s.input}
                      type="text"
                      name="phone-buyer"
                      placeholder="Телефон"
                    />
                  </div>
                </fieldset>
                <fieldset className={s.fieldset}>
                  <legend className={s.legend}>Данные получателя</legend>
                  <div className={s["input-group"]}>
                    <input
                      className={s.input}
                      type="text"
                      name="name-recipient"
                      placeholder="Имя"
                    />
                    <input
                      className={s.input}
                      type="text"
                      name="phone-recipient"
                      placeholder="Телефон"
                    />
                  </div>
                </fieldset>
                <fieldset className={s.fieldset}>
                  <legend className={s.legend}>Адрес</legend>
                  <div className={s["input-group"]}>
                    <input
                      className={s.input}
                      type="text"
                      name="street"
                      placeholder="Улица"
                    />
                    <input
                      className={classNames(s.input, s.input_min)}
                      type="text"
                      name="house"
                      placeholder="Дом"
                    />
                    <input
                      className={classNames(s.input, s.input_min)}
                      type="text"
                      name="apartment"
                      placeholder="Квартира"
                    />
                  </div>
                </fieldset>
                <fieldset className={s.fieldset}>
                  <div className={s.payment}>
                    <label className={s.labelRadio}>
                      <input
                        className={s.radio}
                        type="radio"
                        name="payment-online"
                        value="true"
                        defaultChecked="true"
                      />
                      Оплата онлайн
                    </label>

                    <label className={s.labelRadio}>
                      <input
                        className={s.radio}
                        type="radio"
                        name="payment-online"
                        value="false"
                      />
                      Оплата наличными
                    </label>
                  </div>
                  <div className={s.delivery}>
                    <label htmlFor="delivery">Доставка 01.07.2024</label>
                    <input type="hidden" name="delivery-date" value="01.07" />
                    <div className={s.selectWrapper}>
                      <select
                        className={s.select}
                        name="delivery-time"
                        id="delivery"
                      >
                        <option value="9-12">с 9:00 до 12:00</option>
                        <option value="12-15">с 12:00 до 15:00</option>
                        <option value="15-18">с 15:00 до 18:00</option>
                        <option value="18-21">с 18:00 до 21:00</option>
                        <option value="21-22">с 21:00 до 22:45</option>
                      </select>
                    </div>
                  </div>
                </fieldset>
              </form>
              <div className={s.footer}>
                <p className={s.total}>{orderAmount}&nbsp;₽</p>
                <button className={s.button} type="submit" form="s">
                  Заказать
                </button>
              </div>
            </>
          )}
        </div>
        {/* top right close button */}
        <button className={s.close} type="button">
          ×
        </button>
      </div>
    </>
  );
};
